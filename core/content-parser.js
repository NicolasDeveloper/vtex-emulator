const path = require("path");
const fs = require("fs");
const vtexApi = require("../core/vtex-api");
const shelfEngine = require("./shelf-engine");

module.exports.html = (content, _path, index) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${_path}/placeholders/${content.template}`, "utf8", (err, data) => {
            content.html = data;
            resolve(content);
        });
    })
}

module.exports.banner = (content, index) => {
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

module.exports.collection = (content) => {
    return new Promise(async (resolve, reject) => {
        const products = await vtexApi.getByCollection(content.collection);
        const contentHtml = await shelfEngine.parseTemplate(products, content);
        content.html = contentHtml;
        resolve(content);
    });
}