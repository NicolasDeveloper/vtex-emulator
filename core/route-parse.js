var fs = require("fs");
var template = require("./template-parse");
var placeholder = require("./placeholder-parse");
var customelements = require("./customelement-parse");
var vtexApi = require("./vtex-api");
var categoryService = require("./category-service");
var scriptParse = require("./scripts-parse");
var categoryParse = require("./category-parser");

const parseTemplate = (route) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`./templates/${route.template}`, "utf8", async (err, data) => {
            let stringTemplate = data;
            stringTemplate = await template.parse(stringTemplate);
            stringTemplate = await template.vtexId(stringTemplate);
            stringTemplate = await placeholder.parse(route.controller, stringTemplate);
            stringTemplate = await customelements.parse(stringTemplate);
            stringTemplate = await stringTemplate.replace("<body>", `<body class="${route.bodyClass}">`);
            resolve(stringTemplate);
        });
    })
}

const parseTemplateWithMeta = async (route, title, description) => {
    let content = await parseTemplate(route);
    return await scriptParse.metaAllStore(title, description, content);
}

module.exports.defaultRoute =  async (req, res, next, route) => {
    return await parseTemplateWithMeta(route, "Vtex Emulador", "Development mode");
}

module.exports.departmentRoute = async (req, res, next, route) => {
    try {
        const department = req.params.department;
        const categories = await vtexApi.listCategorys();
        const category = await categoryService.getDepartment(categories, department);

        let content = await parseTemplate(route);
        content = await scriptParse.metaDepartment(category, content);
        content = await categoryParse.items(`${category.id}/`, content);

        return content;
    } catch (error) {
        throw ({
            message: "Busca",
            next: true,
        });
    }
}

module.exports.categoryRoute = async (req, res, next, route) => {
    try {

        const department = req.params.department;
        const categoriespath = req.params['0'];
        const categories = await vtexApi.listCategorys();

        const _categories = await categoryService.getCategory(categories, department, categoriespath);

        let content = await parseTemplate(route);

        content = await scriptParse.metaCategory(_categories, content);
        content = await categoryParse.items(_categories.map((category) => category.id).join("/"), content);

        return content;

    } catch (error) {
        throw ({
            message: "Busca",
            next: true,
        });
    }
}

module.exports.productRoute = async (req, res, next, route) => {
    let content = await parseTemplate(route);
    const product = await vtexApi.getProductByUri(req.params.productName);
    content = await scriptParse.productPage(product[0], content);

    return content;
}

module.exports.proxyRoute = async (req, res, next, route) => {
    let resposnse = await vtexApi.proxy(req.originalUrl, req, res);
    return resposnse;
}

