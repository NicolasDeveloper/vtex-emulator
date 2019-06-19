
const dataService = require("./services/data.service");
const departmentService = require("./template-parse/department.parse");
const categoryService = require("./template-parse/category.parse");
const defaultService = require("./template-parse/default.parse");

module.exports.defaultRoute = async (req, res, next, route) => {
    return await defaultService.parse(route, "Vtex Emulador", "Development mode");
}

module.exports.departmentRoute = async (req, res, next, route) => {
    // get category params
    const department = req.params.department;
    
    // call template engine to parse category intormations
    const templateHtml = await departmentService.parse(department, route.controller, route.template, route.bodyClass)
    
    return templateHtml;
}

module.exports.categoryRoute = async (req, res, next, route) => {
    // get category params
    const departmentName = req.params.department;
    const categoryName = req.params['0'];

    // call template engine to parse category intormations
    const templateHTML = await categoryService.parse(departmentName, categoryName, route.controller, route.template, route.bodyClass);

    return templateHTML;
}

module.exports.productRoute = async (req, res, next, route) => {
    let templateHTML = await parseTemplate(route);
    const product = await dataService.getProductByUri(req.params.productName);
    templateHTML = await scriptParse.productPage(product[0], content);

    return templateHTML;
}

module.exports.proxyRoute = async (req, res, next, route) => {
    let resposnse = await dataService.proxy(req.originalUrl, req, res);
    return resposnse;
}

