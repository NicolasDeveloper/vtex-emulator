const path = require("path");
const fs = require("fs");
const vtexApi = require("../core/vtex-api");
const shelfEngine = require("./shelf-engine");

const html = (content, _path, index) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${_path}/placeholders/${content.template}`, "utf8", (err, data) => {
            content.html = data;
            resolve(content);
        });
    })
}

const banner = (content, index) => {
    return new Promise((resolve, reject) => {

        fs.readFile(`${path.resolve(__dirname, "../templates-config/banner.html")}`, "utf8", (err, data) => {
            let contentHtml = data;

            const keys = Object.keys(content);

            keys.forEach((key) => {
                var re = new RegExp(`{{${key}}}`, "g");
                contentHtml = contentHtml.replace(re, content[key]);
            });

            content.html = contentHtml;
            resolve(content);
        });
    });
}

const collection = (content) => {
    return new Promise(async(resolve, reject) => {
        const products = await vtexApi.getByCollection(content.collection);
        const contentHtml = await shelfEngine.parseTemplate(products);
        content.html = contentHtml;
        resolve(content);
    });
}

module.exports.parse = async (controller, templateString) => {

    const tags = templateString && templateString.match(/\<vtex\:contentPlaceHolder id\=\"[0-9|\-|\s|a-z|A-Z|\_]+\".\/\>/g);

    const _path = path.resolve(__dirname, `../routes/${controller}`);
    const placeholders = require(`${_path}/placeholders.json`);

    const searcheds = tags.map(tag => {
        let file = tag.match(/id\=\"[0-9|\-|\s|a-z|A-Z|\_]+\"/g);
        file = file && file.length > 0 ? file[0].replace(/id\=/, "").replace(/\"+/g, "") : "";
        const _tag = placeholders.find((placeholder) => placeholder.id === file);
        return Object.assign({ tag: tag }, _tag);
    });

    const parses = [];

    for (let index = 0; index < searcheds.length; index++) {

        const placeholder = searcheds[index];

        if (!placeholder) {
            return;
        };

        const contents = [];

        for (let index = 0; index < placeholder.contents.length; index++) {

            const content = placeholder.contents[index];

            switch (content.type) {
                case "html":
                    contents.push(html(content, _path));
                    break;
                case "banner":
                    contents.push(banner(content));
                    break;
                case "collection":
                    contents.push(collection(content));
                    break;
                default:
                    break;
            }
        }

        const contentsParsed = await Promise.all(contents);

        placeholder.contents = contentsParsed;

        parses.push(placeholder);
    }


    for (let index = 0; index < parses.length; index++) {
        const parsePlaceholder = parses[index];
        templateString = templateString.replace(parsePlaceholder.tag, parsePlaceholder.contents.map((content) => content.html).join(" "));
    }

    return templateString;

}



