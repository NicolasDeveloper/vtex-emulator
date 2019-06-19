const path = require("path");
const fs = require("fs");
const productService = require("../../services/product.service");
const products = require("./products.mock.json");

const removeVariableEngineFromTemplate = (templateHTML) => {
    templateHTML = templateHTML.replace(/\#set\(.*\)/g, "");
    return templateHTML;
}

const fromVariablesEngineGetCustomVariables = (templateHTML) => {
    const variables = templateHTML.match(/\#set\(.*\)/g);
    return variables.map((variable) => {
        return {
            key: variable.match(/\$+[a-z|A-Z|\.]+/g)[0],
            value: variable.match(/\$+[a-z|A-Z|\.]+/g)[1],
        }
    });
}

const fromShelfTemplateHtmlGetDefaultsVariables = (shelfTemplateHTML) => {
    const variables = shelfTemplateHTML.match(/(\$product\.GetImageTag\(.*\))|(\$product\.[a-z|A-Z]+)/g);
    return variables.map((variableValue) => {
        return {
            key: variableValue,
            value: variableValue,
        }
    });
}

const fromShelfTempleteGetVariables = (shelfTemplateHTML) => {
    const customVariables = fromVariablesEngineGetCustomVariables(shelfTemplateHTML);
    const defaultVariables = fromShelfTemplateHtmlGetDefaultsVariables(shelfTemplateHTML);

    return customVariables.concat(defaultVariables);
}

const parseRealValues = (product, variables) => {
    return variables.map((variable) => {
        const newVariable = { ...variable };

        productService.setProduct(product);
        newVariable.value = productService[variable.value] ? productService[variable.value].call() : newVariable.value;

        return newVariable;
    });
}

const fromVariablesParseProductData = (products, variable, shelfTemplateHTML) => {
    return products.map((product) => parseRealValues(product, variable, shelfTemplateHTML));
}
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const parseToHTML = (products, shelfTemplateHTML) => {
    const listOfProducts = products.map((productProperties) => {
        let newShelfTemplate = shelfTemplateHTML;

        for (let index = 0; index < productProperties.length; index++) {
            const productProperty = productProperties[index];
            newShelfTemplate = newShelfTemplate.replace(new RegExp(escapeRegExp(productProperty.key), 'g'), productProperty.value);
        }

        const templatesPardes = `<li layout="" class="">
                ${newShelfTemplate}
            </li>
            <li id="helperComplement_16515" style="display:none" class="helperComplement"></li>`;

        return templatesPardes;
    });

    return `<div class=""><ul>${listOfProducts}</ul></div>`;
}

const fromProductsGetShelfTemplateParsed = (products, shelfTemplateHTML) => {

    const variables = fromShelfTempleteGetVariables(shelfTemplateHTML);
    shelfTemplateHTML = removeVariableEngineFromTemplate(shelfTemplateHTML);
    const productsParsed = fromVariablesParseProductData(products, variables, shelfTemplateHTML);
    const shelfTemplateHTMLParsed = parseToHTML(productsParsed, shelfTemplateHTML);

    return shelfTemplateHTMLParsed;
}

module.exports.parse = async (templateName) => {
    return new Promise((resolve, reject) => {
        const templatePath = path.resolve(__dirname, `../../../shelves-template/${templateName}`);

        fs.readFile(templatePath, "utf8", (err, data) => {
            let shelfTemplateHTML = data;

            const shelfTemplateHTMLParsed = fromProductsGetShelfTemplateParsed(products, shelfTemplateHTML);
            resolve(shelfTemplateHTMLParsed);
        });
    });
}