
const fs = require("fs");

module.exports.parse = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-scripts-department.html")}`, "utf8", (err, data) => {
            let template = data;

            template = template.replace(/\{\{abstract\}\}/g, "");
            template = template.replace(/\{\{title\}\}/g, title);
            template = template.replace(/\{\{searchTerm\}\}/g, "");
            template = template.replace(/\{\{description\}\}/g, description);
            template = template.replace(/\{\{categoryId\}\}/g, "");
            template = template.replace(/\{\{categoryName\}\}/g, "");
            template = template.replace(/\{\{departmentyId\}\}/g, "");
            template = template.replace(/\{\{departmentName\}\}/g, "");
            template = template.replace(/\{\{store\}\}/g, config.store);
            templateHtml = templateHtml.replace("<vtex:metaTags />", template);

            resolve(templateHtml);
        });
    });
}