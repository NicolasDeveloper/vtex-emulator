const template = require("../template-engine/template/template.service");
const metadata = require("../template-engine/category/metadata.service");
const category = require("../services/category.service");
const catalog = require("../template-engine/catalog/catalog.service");
const shelfEngine = require("../template-engine/shelf/shelf-engine.service");


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
    templateHtml = await metadata.parse(categories, templateHtml);

    // parse shelf and controls of search 
    templateHtml = await catalog.categories(categories.map((category) => category.id).join("/"), templateHtml);
    const shelfHTML = await shelfEngine.parse("2018-default-shelf.html");
    
    return shelfHTML;
    // return templateHtml;
}