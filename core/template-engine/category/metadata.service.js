const path = require("path");
const fs = require("fs");
const config = require("../../config");

module.exports.parse = async (categories, templateHtml) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../../../templates-config/vtex-scripts-department.html")}`, "utf8", (err, data) => {
            let template = data;

            template = template.replace(/\{\{abstract\}\}/g, categories[categories.length - 1].id);
            template = template.replace(/\{\{title\}\}/g, categories[categories.length - 1].Title);
            template = template.replace(/\{\{searchTerm\}\}/g, "");
            template = template.replace(/\{\{description\}\}/g, categories[categories.length - 1].MetaTagDescription);
            template = template.replace(/\{\{categoryId\}\}/g, categories[categories.length - 1].id);
            template = template.replace(/\{\{categoryName\}\}/g, categories[categories.length - 1].name);
            template = template.replace(/\{\{departmentyId\}\}/g, categories[0].id);
            template = template.replace(/\{\{departmentName\}\}/g, categories[0].name);
            template = template.replace(/\{\{store\}\}/g, config.store);
            templateHtml = templateHtml.replace("<vtex:metaTags />", template);

            resolve(templateHtml);
        });
    });
}