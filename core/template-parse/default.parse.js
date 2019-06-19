const scriptParse = require("../scripts-parse");
const template = require("../template-engine/template/template.service");

/**
 * Default metadata of website, this 
 * include all vtex's scripts and schemas  
 * */
module.exports.parse = async (route, title, description) => {
    let templateHTML = await template.parse(route.controller, route.template, route.bodyClass);
    return await scriptParse.metaAllStore(title, description, templateHTML);
}