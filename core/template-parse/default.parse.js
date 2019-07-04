// const scriptParse = require("../scripts-parse");
const templateService = require("../template-engine/template/template.service");
const metadataService = require("../template-engine/metadata/metadata.service");

/**
 * Default metadata of website, this 
 * include all vtex's scripts and schemas  
 * */
module.exports.parse = async (route, title, description) => {
    let templateHTML = await templateService.parse(route.controller, route.template, route.bodyClass);
    templateHTML = await metadataService.parse({
        title,
        description,
    }, templateHTML);

    return templateHTML;
}