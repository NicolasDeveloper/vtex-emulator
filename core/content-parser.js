const path = require("path");
const fs = require("fs");
const dataService = require("./services/data.service");
const templateEngineService = require("./template-engine/catalog/template-engine.service");
const shelfConfigs = require("../shelves-template/shelfs-config.json");


const getTemplatePath = (templatePath) => {
    return `${path.resolve(__dirname, templatePath)}`
}

module.exports.html = (content, _path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${_path}/placeholders/${content.template}`, "utf8", (err, data) => {
            content.html = data;
            resolve(content);
        });
    })
}

module.exports.htmlCustomElement = (content) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, `../custom-elements/${content.tagName}.html`), "utf8", (err, data) => {
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
        const products = await dataService.getByCollection(content.collection);
        const shelfConfig = shelfConfigs.find(shelf => shelf.template === `${content.layout}.html`);
        const templateParsed = await templateEngineService.parse(getTemplatePath(`../shelves-template/${shelfConfig.template}`), products, shelfConfig, content.id || content.name);
        content.html = templateParsed;
        resolve(content);
    });
}