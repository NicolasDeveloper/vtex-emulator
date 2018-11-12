
var fs = require("fs");
var template = require("../core/template-parse");
var placeholder = require("../core/placeholder-parse");
var customelements = require("../core/customelement-parse");
var vtexApi = require("../core/vtex-api");
var categoryService = require("../core/category-service");
var scriptParse = require("../core/scripts-parse");



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

const routes = [
    {
        path: "/no-cache/profileSystem/getProfile",
        get: async (req, res, next, route) => {
            
            return JSON.stringify({"UserId":"0493fb49-c11a-4080-afff-a796505a9d9c","IsReturningUser":true,"IsUserDefined":true,"IsPJ":false,"FirstName":"Nicolas","LastName":"Silva dos Santos","Gender":null,"Email":"dev@vitrio.com.br"})
            
        }
    },
    {
        path: "/",
        template: "v1-home.html",
        controller: "home",
        bodyClass: "home",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/sistema/404",
        template: "v1-404.html",
        controller: "sistema/404",
        bodyClass: "home",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
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

            // let content = await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
            let content = await parseTemplate(route);
            const product = await vtexApi.getProductByUri(req.params.productName);
            content = await scriptParse.productPage(product[0], content);

            return content;
        }
    },
    {
        path: "/:department/*",
        template: "v1-category.html",
        controller: "category",
        bodyClass: "home",
        get: async (req, res, next, route) => {

            // throw ({
            //     message: "Busca",
            //     next: true,
            // });

            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/*",
        template: "v1-search.html",
        controller: "search",
        bodyClass: "home",
        get: async (req, res, next, route) => {

            // throw ({
            //     message: "Busca",
            //     redirect: "sistema/404",
            // });

            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
];

module.exports = routes; 