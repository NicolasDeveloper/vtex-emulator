
const express = require("express");
const cookieParser = require('cookie-parser');
const dataService = require("./core/services/data.service");
const bodyParser = require('body-parser');
const routes = require("./routes/app.router");
const fileUpload = require('express-fileupload');
const routeParse = require('./core/route-parse');

const PORT = process.env.PORT || 3000;

const createCookieVtexAuth = async (req, res, next) => {
    const cookie = req.cookies["checkout.vtex.com"];

    if (!cookie) {
        const orderForm = await dataService.getOrderForm();
        res.cookie('checkout.vtex.com', unescape(`__ofid=${orderForm.orderFormId}`), { maxAge: 900000 });
    }

    next();
}

const app = express();
app.use(cookieParser());
app.use('/arquivos', express.static('arquivos'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(fileUpload());
app.use(createCookieVtexAuth);


const proxyRoutes = [
    {
        path: "/no-cache/**",
        controller: "proxy",
    },
    {
        path: "/api/vtexid/**",
        controller: "proxy",
    },
    {
        path: "/buscaautocomplete/**",
        controller: "proxy",
    },
    {
        path: "/produto/**",
        controller: "proxy",
    },
    {
        path: "/api/**",
        controller: "proxy",
    }
];

[
    ...proxyRoutes,
    ...routes
].forEach((route) => {

    const process = async (req, res, next) => {

        try {
            let stringTemplate = null;

            switch (route.controller) {
                case "category":
                    stringTemplate = await routeParse.categoryRoute(req, res, next, route);
                    break;
                case "department":
                    stringTemplate = await routeParse.departmentRoute(req, res, next, route);
                    break;
                case "search":
                    stringTemplate = await routeParse.departmentRoute(req, res, next, route);
                    break;
                case "product":
                    stringTemplate = await routeParse.productRoute(req, res, next, route);
                    break;
                case "proxy":
                    stringTemplate = await routeParse.productRoute(req, res, next, route);
                    break;
                default:
                    stringTemplate = await routeParse.defaultRoute(req, res, next, route);
                    break;
            }

            res.send(stringTemplate);
            return;
        } catch (error) {
            if (typeof error === "undefined")
                return;

            if (error.statusCode == 401) {
                res.send("não autorizado");
                return;
            }

            if (error.next)
                next();

            if (error.redirect)
                res.redirect("/sistema/404");
        }
    }

    app.get(route.path, process);

    if (route.controller === "proxy") {
        app.post(route.path, process);
        app.patch(route.path, process);
        app.put(route.path, process);
        app.delete(route.path, process);
    }
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
});