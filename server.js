var fs = require("fs");
var express = require("express");
var app = express();
var routes = require("./routes/app.router");
var template = require("./core/template-parse");
var placeholder = require("./core/placeholder-parse");
var customelements = require("./core/customelement-parse");

app.use('/arquivos', express.static('arquivos'));

routes.forEach(route => {
    app.get(route.path, (req, res) => {
        fs.readFile(`./templates/${route.template}`, "utf8", async (err, data) => {
            let stringTemplate = data;
            stringTemplate = await template.parse(stringTemplate);
            stringTemplate = await placeholder.parse(route.controller, stringTemplate);
            stringTemplate = await customelements.parse(stringTemplate);
            stringTemplate = await stringTemplate.replace("<body>", `<body class="${route.bodyClass}">`);
            res.send(stringTemplate); 
        });
    });
});

app.listen(3000, () => {
    console.log(`app rodando na porta ${3000}`)
});