const path = require("path");
const fs = require("fs");

module.exports.department = (category, templateHtml) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-scripts-department.html")}`, "utf8", (err, data) => {
            let template = data;
            
            template = template.replace(/\{\{abstract\}\}/g, category.id);
            template = template.replace(/\{\{title\}\}/g, category.Title);
            template = template.replace(/\{\{searchTerm\}\}/g, "");
            template = template.replace(/\{\{description\}\}/g, category.MetaTagDescription);
            template = template.replace(/\{\{categoryId\}\}/g, category.id);
            template = template.replace(/\{\{categoryName\}\}/g, category.name);
            template = template.replace(/\{\{departmentyId\}\}/g, category.id);
            template = template.replace(/\{\{departmentName\}\}/g, category.name);
            
            templateHtml = templateHtml.replace("<vtex:metaTags/>", template);
            
            resolve(templateHtml);
        });
    });
}