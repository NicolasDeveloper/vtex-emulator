const fs = require("fs");
const template = require("../../template-parse");
const placeholder = require("../../placeholder-parse");
const customelements = require("../../customelement-parse");

module.exports.parse = async (controller, templateName, bodyClass) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`./templates/${templateName}`, "utf8", async (err, data) => {
            if(err) {
                reject({
                    error: "template não encontrado!",
                    status: true,
                });
            }

            let stringTemplate = data;
            stringTemplate = await template.parse(stringTemplate);
            stringTemplate = await template.vtexId(stringTemplate);
            stringTemplate = await placeholder.parse(controller, stringTemplate);
            stringTemplate = await customelements.parse(stringTemplate);
            stringTemplate = await stringTemplate.replace("<body>", `<body class="${bodyClass}">`);
            resolve(stringTemplate);
        });
    })
}