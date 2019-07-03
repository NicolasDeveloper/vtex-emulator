const templateService = require("../template-engine/template/template.service");
const metadataSevice = require("../template-engine/metadata/metadata.service");
const categoryService = require("../services/category.service");
const catalogService = require("../template-engine/catalog/catalog.service");

const getSearchEndpoint = (categories) => {
    const term = categories.map((category) => category.id).join("/")
    return `fq=C:${term}`;
}

module.exports.parse = async (departmentName, categoryName, controller, templateName, bodyClass) => {
    let templateHtml = await templateService.parse(controller, templateName, bodyClass);

    const categories = await categoryService.getCurrentCategory(departmentName, categoryName);

    // if can not find the current category, then call the search route
    if (!categories)
        throw ({
            message: "Busca",
            next: true,
        });

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

    templateHtml = await metadataSevice.parse(metadataConfig, templateHtml);
    templateHtml = await catalogService.parse(categories[categories.length - 1], templateHtml);

    return templateHtml;
}