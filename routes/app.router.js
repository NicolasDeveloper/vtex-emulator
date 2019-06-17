
var fs = require("fs");
var template = require("../core/template-parse");
var placeholder = require("../core/placeholder-parse");
var customelements = require("../core/customelement-parse");
var vtexApi = require("../core/vtex-api");
var categoryService = require("../core/category-service");
var scriptParse = require("../core/scripts-parse");
var categoryParse = require("../core/category-parser");

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

const customRouter =  async (req, res, next, route) => {
    return await parseTemplateWithMeta(route, "Vtex Emulador", "Development mode");
}

const proxyRouter = async (req, res, next, route) => {
    let resposnse = await vtexApi.proxy(req.originalUrl, req, res);
    return resposnse;
}

const routes = [
    {
        path: "/no-cache/**",
        get: proxyRouter,
    },
    {
        path: "/api/vtexid/**",
        get: async (req, res, next, route) => {
            return "";
        },
    },
    {
        path: "/buscaautocomplete/**",
        get: proxyRouter,
    },
    {
        path: "/produto/**",
        get: proxyRouter,
    },
    {
        path: "/api/**",
        get: proxyRouter,
    },
    {
        path: "/",
        template: "v1-home.html",
        controller: "home",
        bodyClass: "home",
        get: customRouter,
    },
    {
        path: "/busca-vazia",
        template: "v1-empty-search.html",
        controller: "empty-search",
        bodyClass: "empty-search",
        get: customRouter,
    },
    {
        path: "/sistema/404",
        template: "v1-404.html",
        controller: "sistema/404",
        bodyClass: "home",
        get: customRouter,
    },
    {
        path: "/:department",
        template: "v1-department.html",
        controller: "department",
        bodyClass: "department",
        get: async (req, res, next, route) => {

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
    },
    {
        path: "/:productName/p",
        template: "v1-product.html",
        controller: "product",
        bodyClass: "product",
        get: async (req, res, next, route) => {

            let content = await parseTemplate(route);
            const product = await vtexApi.getProductByUri(req.params.productName);
            content = await scriptParse.productPage(product[0], content);

            return content;
        }
    },
    {
        path: "/:department/*",
        template: "v1-department.html",
        controller: "category",
        bodyClass: "department category",
        get: async (req, res, next, route) => {

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
    },
    {
        path: "/*",
        template: "v1-search.html",
        controller: "search",
        bodyClass: "search",
        get: customRouter,
    },
];

module.exports = routes; 