
const fs = require("fs");
const path = require("path");
const config = require("../../config");

module.exports.parse = async (metadata = {}, templateHtml, templateConfigPath = "vtex-scripts-department.html", metaAppend = "") => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, `../../../templates-config/${templateConfigPath}`)}`, "utf8", (err, data) => {
            let template = data;

            const {
                abstract,
                title,
                searchTerm,
                description,
                categoryId,
                categoryName,
                departmentId,
                departmentName,
                categoryPath
            } = metadata;

            template = template.replace(/\{\{abstract\}\}/g, abstract || "");
            template = template.replace(/\{\{title\}\}/g, title || "");
            template = template.replace(/\{\{searchTerm\}\}/g, searchTerm || "");
            template = template.replace(/\{\{description\}\}/g, description || "");
            template = template.replace(/\{\{categoryId\}\}/g, categoryId || "");
            template = template.replace(/\{\{categoryName\}\}/g, categoryName || "");
            template = template.replace(/\{\{departmentyId\}\}/g, departmentId || "");
            template = template.replace(/\{\{departmentName\}\}/g, departmentName || "");
            template = template.replace(/\{\{store\}\}/g, config.store || "");
            template = template.replace(/\{\{categoryPath\}\}/g, categoryPath || "");
            template = template.replace(/\{\{sl\}\}/g, `1`);
            template = template.replace(/\{\{products\}\}/g, `1`);
            templateHtml = templateHtml.replace(/(?:\<vtex:metaTags.*\/>)/g, `${template}${metaAppend}`);

            resolve(templateHtml);
        });
    });
}