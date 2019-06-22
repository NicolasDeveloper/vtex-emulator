const path = require("path");
const templateEngine = require("./template-engine.service")
const shelfsConfig = require("../../../shelves-template/shelfs-config.json");
const dataService = require("../../services/data.service");

const getAttribute = (tag, attribute) => {
    var regex = new RegExp(`${attribute}\=\"(.*?)\"`)
    return regex.exec(tag)[1];
}

const searchShelfTemplate = (layout) => {
    return shelfsConfig.find((shelf) => shelf.layout === layout);
}

const getTemplatePath = (templatePath) => {
    return `${path.resolve(__dirname, templatePath)}`
}

const getShelfTag = (templateHTML) => {
    return /<vtex.cmc:searchResult.*\/>/g.exec(templateHTML)[0];
}

module.exports.parse = async (categoryPath, templateHTML) => {
    return new Promise(async (resolve, reject) => {
        const shelftag = getShelfTag(templateHTML);

        if (shelftag) {
            const layoutId = getAttribute(shelftag, "layout");
            const shelfConfig = searchShelfTemplate(layoutId);

            if (!shelfConfig)
                throw ({
                    error: true,
                    message: `template não encontrado ${layoutId}!`,
                });

            const templatePath = getTemplatePath(`../../../shelves-template/${shelfConfig.template}`);

            // get products
            const products = await dataService.getProductsByTerm(categoryPath);

            const catalogParsed = await templateEngine.parse(templatePath, products, shelfConfig);
            templateHTML = templateHTML.replace(shelftag, catalogParsed);

            resolve(templateHTML);
        } else {
            resolve(content);
        }
    });
}
