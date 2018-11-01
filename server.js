
var express = require("express");
var cookieParser = require('cookie-parser');
var vtexApi = require("./core/vtex-api");

var PORT = 3000;

var app = express();
app.use(cookieParser());
app.use('/arquivos', express.static('arquivos'));

var routes = require("./routes/app.router");


app.use(async (req, res, next) => {

    var cookie = req.cookies["checkout.vtex.com"];

    if (!cookie) {
        const orderForm = await vtexApi.getOrderForm();
        res.cookie('checkout.vtex.com', unescape(`__ofid=${orderForm.orderFormId}`), { maxAge: 900000 });
    }

    next();
});

routes.forEach(route => {
    app.get(route.path, async (req, res, next) => {
        try {
            const stringTemplate = await route.get(req, res, next, route);
            res.send(stringTemplate);
        } catch (error) {

            if (error.next) {
                next();
            }

            if (error.redirect) {
                res.redirect("/sistema/404");
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
});