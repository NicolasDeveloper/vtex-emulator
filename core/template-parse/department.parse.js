const templateService = require("../template-engine/template/template.service");
const metadataService = require("../template-engine/metadata/metadata.service");
const categoryService = require("../services/category.service");
const catalogService = require("../template-engine/catalog/catalog.service");

const getSearchEndpoint = (department) => {
    return `fq=C:${department.id}`;
}

module.exports.parse = async (departmentName, controller, templateName, bodyClass) => {
    let templateHtml = await templateService.parse(controller, templateName, bodyClass);

    const department = await categoryService.getCurrentDepartement(departmentName);

    if (!department)
        throw ({
            message: "Busca",
            next: true,
        });

    const searchEndpoint = getSearchEndpoint(department);
    const metadataConfig = {
        abstract: department.id,
        title: department.Title,
        description: department.MetaTagDescription,
        categoryId: department.id,
        categoryName: department.name,
        departmentyId: department.id,
        departmentName: department.name,
        categoryPath: searchEndpoint,
    }

    templateHtml = await metadataService.parse(metadataConfig, templateHtml);
    templateHtml = await catalogService.parse(department, templateHtml);

    return templateHtml;
}   