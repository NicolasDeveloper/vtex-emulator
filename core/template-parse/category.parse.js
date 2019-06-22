const template = require("../template-engine/template/template.service");
const metadata = require("../template-engine/metadata/metadata.service");
const category = require("../services/category.service");
const catalog = require("../template-engine/catalog/catalog.service");

const getSearchEndpoint = (categories) => {
    const term = categories.map((category) => category.id).join("/")
    return `fq=C:${term}`;
}

module.exports.parse = async (departmentName, categoryName, controller, templateName, bodyClass) => {

    // parse global template with header, footer and etc.
    let templateHtml = await template.parse(controller, templateName, bodyClass);

    // find curent category
    const categories = await category.getCurrentCategory(departmentName, categoryName);

    // if can not find the current category, then call the search route
    if (!categories)
        throw ({
            message: "Busca",
            next: true,
        });

    // parse meta data
    const searchEndpoint = getSearchEndpoint(categories);
    const metadataConfig = {
        abstract: categories[categories.length - 1].id,
        title: categories[categories.length - 1].Title,
        description: [categories.length - 1].MetaTagDescription,
        categoryId: categories[categories.length - 1].id,
        categoryName: categories[categories.length - 1].name,
        departmentyId: categories[0].id,
        departmentName: categories[0].name,
        categoryPath: searchEndpoint,
    }
    templateHtml = await metadata.parse(metadataConfig, templateHtml);

    // parse shelf and controls of search 
    templateHtml = await catalog.parse(searchEndpoint, templateHtml);

    return templateHtml;
}