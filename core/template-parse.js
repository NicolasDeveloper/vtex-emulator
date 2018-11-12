const path = require("path");
const fs = require("fs");

const searchSubtemplate = (tag) => {
    return new Promise((resolve, reject) => {
        let file = tag.match(/id\=\"[0-9|\-|a-z|A-Z|\_]+\"/g);
        file = file && file.length > 0 ? file[0].replace(/id\=/, "").replace(/\"+/g, "") : "";

        const _path = path.resolve(__dirname, `../templates/subtemplates/${file}.html`);

        fs.readFile(_path, "utf8", (err, data) => {
            resolve({
                tag: tag,
                content: data,
            });
        });
    })
}


module.exports.parse = async (templateString) => {
    return new Promise((resolve, reject) => {
        const tags = templateString && templateString.match(/\<vtex\:template id\=\"[0-9|\-|a-z|A-Z|\_]+\".\/\>/g);
        const parsers = [];
        tags && tags.forEach(tag => {
            parsers.push(searchSubtemplate(tag));
        });
        Promise.all(parsers).then(data => {
            if (data && data.length > 0) {
                data.forEach((parse) => {
                    templateString = templateString.replace(parse.tag, parse.content ? parse.content : `<!-- tag ${parse.tag} não foi encontrada -->`);
                });
                resolve(templateString);
            } else {
                reject();
            }
        })
    })
}

module.exports.vtexId = async (templateString) => {
    return new Promise((resolve, reject) => {
        const tags = templateString && templateString.match(/\<vtex\.cmc\:welcomeMessage \/\>/g);

        if (tags) {
            
            const _path = path.resolve(__dirname, `../templates-config/vtexid.html`);

            fs.readFile(_path, "utf8", (err, data) => {
                templateString = templateString.replace(/\<vtex\.cmc\:welcomeMessage \/\>/g, data);

                resolve(templateString);
            });
        }

    })
}

