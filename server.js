
var express = require("express");

var PORT = 3000;

var app = express();
app.use('/arquivos', express.static('arquivos'));

var routes = require("./routes/app.router");

routes.forEach(route => {
    app.get(route.path, async (req, res, next) => {
        try {
            const stringTemplate = await route.get(req, res, next, route);
            res.send(stringTemplate);
        } catch (error) {
            
            if(error.next) {
                next();
            }

            if(error.redirect) {
                res.redirect("/sistema/404");
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
});