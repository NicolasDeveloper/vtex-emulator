
const dataService = require("./services/data.service");
const departmentService = require("./template-parse/department.parse");
const categoryService = require("./template-parse/category.parse");
const productService = require("./template-parse/product.parse");
const defaultService = require("./template-parse/default.parse");

module.exports.defaultRoute = async (req, res, next, route) => {
    return await defaultService.parse(route, "Vtex Emulador", "Development mode");
}

module.exports.departmentRoute = async (req, res, next, route) => {
    const department = req.params.department;

    const templateHtml = await departmentService.parse(department, route.controller, route.template, route.bodyClass)

    return templateHtml;
}

module.exports.categoryRoute = async (req, res, next, route) => {
    const departmentName = req.params.department;
    const categoryName = req.params['0'];

    const templateHTML = await categoryService.parse(departmentName, categoryName, route.controller, route.template, route.bodyClass);
    return templateHTML;
}

module.exports.productRoute = async (req, res, next, route) => {
    const templateHTML = await productService.parse(route.controller, route.template, route.bodyClass, req.params.productName);
    return templateHTML;
}

module.exports.proxyRoute = async (req, res, next, route) => {
    let resposnse = await dataService.proxy(req.originalUrl, req, res);
    return resposnse;
}

