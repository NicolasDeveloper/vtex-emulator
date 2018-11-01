
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
            stringTemplate = await placeholder.parse(route.controller, stringTemplate);
            stringTemplate = await customelements.parse(stringTemplate);
            stringTemplate = await stringTemplate.replace("<body>", `<body class="${route.bodyClass}">`);
            resolve(stringTemplate);
        });
    })
}

const routes = [
    {
        path: "/",
        template: "v1-home.html",
        controller: "home",
        bodyClass: "home",
        get: async (req, res, next, route) => {
            return await parseTemplate(route);
        }
    },
    {
        path: "/sistema/404",
        template: "v1-404.html",
        controller: "sistema/404",
        bodyClass: "home",
        get: async (req, res, next, route) => {
            return await parseTemplate(route);
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
                content = await scriptParse.department(category, content);

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
        path: "/:department/*",
        template: "v1-category.html",
        controller: "category",
        bodyClass: "home",
        get: async (req, res, next, route) => {

            // throw ({
            //     message: "Busca",
            //     next: true,
            // });

            return await parseTemplate(route);
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

            return await parseTemplate(route);
        }
    },
];

module.exports = routes; 