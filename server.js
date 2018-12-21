
var express = require("express");
var cookieParser = require('cookie-parser');
var vtexApi = require("./core/vtex-api");
var bodyParser = require('body-parser');
var routes = require("./routes/app.router");
var fileUpload = require('express-fileupload');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(cookieParser());
app.use('/arquivos', express.static('arquivos'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(fileUpload());
app.use(async (req, res, next) => {

    var cookie = req.cookies["checkout.vtex.com"];

    if (!cookie) {
        const orderForm = await vtexApi.getOrderForm();
        res.cookie('checkout.vtex.com', unescape(`__ofid=${orderForm.orderFormId}`), { maxAge: 900000 });
    }

    next();
});

routes.forEach(route => {
    const process = async (req, res, next) => {
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
    }
    app.get(route.path, process);
    app.post(route.path, process);
    app.put(route.path, process);
    app.delete(route.path, process);
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
});