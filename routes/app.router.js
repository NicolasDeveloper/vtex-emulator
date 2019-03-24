
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

const routes = [
    {
        path: "/no-cache/**",
        get: async (req, res, next, route) => {
            let resposnse = await vtexApi.proxy(req.originalUrl, req, res);
            return resposnse;
        }
    },
    {
        path: "/api/vtexid/**",
        get: async (req, res, next, route) => {
            return "";
        },
    },
    {
        path: "/buscaautocomplete/**",
        get: async (req, res, next, route) => {
            let resposnse = await vtexApi.proxy(req.originalUrl, req, res);
            return resposnse;
        },
    },
    {
        path: "/produto/**",
        get: async (req, res, next, route) => {
            let resposnse = await vtexApi.proxy(req.originalUrl, req, res);
            return resposnse;
        },
    },
    {
        path: "/api/**",
        get: async (req, res, next, route) => {
            let resposnse = await vtexApi.proxy(req.originalUrl, req, res);
            return resposnse;
        },
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
        path: "/promocao-relampago",
        template: "v1-department.html",
        controller: "promocao-relampago",
        bodyClass: "department",
        get: async (req, res, next, route) => {
            
            let content = await parseTemplate(route);
            content = await scriptParse.metaCollection(164, content);
            content = await categoryParse.itemsCollection(164, content);

            return content;
        }
    },
    {
        path: "/account",
        template: "v1-account.html",
        controller: "account",
        bodyClass: "account",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/personal",
        template: "v1-personal.html",
        controller: "personal",
        bodyClass: "personal",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/promocoes",
        template: "v1-promotions.html",
        controller: "promotions",
        bodyClass: "promotions",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/central-de-ajuda",
        template: "v1-central-de-ajuda.html",
        controller: "/central-de-ajuda",
        bodyClass: "central-de-ajuda",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/central-de-ajuda/pedidos",
        template: "v1-institucionais.html",
        controller: "/central-de-ajuda/pedidos",
        bodyClass: "institucional-pedidos",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/central-de-ajuda/entrega",
        template: "v1-institucionais.html",
        controller: "/central-de-ajuda/entrega",
        bodyClass: "institucional-entrega",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/central-de-ajuda/trocas-e-devolucoes",
        template: "v1-institucionais.html",
        controller: "/central-de-ajuda/trocas-e-devolucoes",
        bodyClass: "institucional-trocas",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/central-de-ajuda/pagamento",
        template: "v1-institucionais.html",
        controller: "/central-de-ajuda/pagamento",
        bodyClass: "institucional-pagamento",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/marcas",
        template: "v1-brands.html",
        controller: "brands",
        bodyClass: "brands",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/objetivos",
        template: "v1-objetivos.html",
        controller: "objectives",
        bodyClass: "objectives",
        get: async (req, res, next, route) => {
            return await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
        }
    },
    {
        path: "/busca-vazia",
        template: "v1-empty-search.html",
        controller: "empty-search",
        bodyClass: "empty-search",
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

            // let content = await parseTemplateWithMeta(route, "projeto verão", "description loja desenvolvimento");
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