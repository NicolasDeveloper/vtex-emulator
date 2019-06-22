const template = require("../template-engine/template/template.service");
const metadata = require("../template-engine/department/metadata.service");
const categories = require("../services/category.service");
const catalog = require("../template-engine/catalog/catalog.service");


module.exports.parse = async (departmentName, controllerName, templateName, bodyClass) => {
    
    // parse global template with header, footer and etc.
    let templateHtml = await template.parse(controllerName, templateName, bodyClass);

    // find curent department
    const department = await categories.getCurrentDepartement(departmentName);

    // if can not find the current category, then call the search route
    if (!department)
        throw ({
            message: "Busca",
            next: true,
        });

    // parse meta data
    templateHtml = await metadata.parse(department, templateHtml);

    // parse shelf and controls of search 
    templateHtml = await catalog.parse(`fq=C:${category.id}/`, templateHtml);

    return templateHtml;
}