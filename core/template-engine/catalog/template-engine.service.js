const path = require("path");
const fs = require("fs");
const productService = require("../../services/product.service");


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
    const variables = shelfTemplateHTML.match(/(?:\$product\.GetImageTag\(.*\)|\$product\.[a-z|A-Z]+|\$\{product\.[a-z|A-Z].*\})/g);
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
        newVariable.brand = product.brand;
        return newVariable;
    });
}

const fromVariablesParseProductData = (products, variable, shelfTemplateHTML) => {
    return products.map((product) => parseRealValues(product, variable, shelfTemplateHTML));
}

const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const parseEachProductToHtml = (products, shelfTemplateHTML, shelfConfig) => {
    const listOfProducts = products.map((productProperties) => {
        let newShelfTemplate = shelfTemplateHTML;

        for (let index = 0; index < productProperties.length; index++) {
            const productProperty = productProperties[index];
            newShelfTemplate = newShelfTemplate.replace(new RegExp(escapeRegExp(productProperty.key), 'g'), productProperty.value);
        }

        const templatesPardes = `<li layout="${shelfConfig.layout}" class="${productProperties[0].brand}">
                ${newShelfTemplate}
            </li>
            <li id="helperComplement_16515" style="display:none" class="helperComplement"></li>`;

        return templatesPardes;
    });

    return listOfProducts;
}

const clearConditional = (conditionalHtml) => {
    return conditionalHtml && conditionalHtml.replace(/(\#if.*\(.*\)|\#else|#end)/g, "");
}

const matchConditional = (productHtml) => {
    return productHtml.match(/(?:\#if)(.*?)(?:[a-zA-Z\s\<\>\-\/\#\$\.\"\/\:\=\d\,\${}\W]+\#else)(.*?)(?:[a-zA-Z\s\<\>\-\/\#\$\.\"\/\:\=\d\,\${}\W]+#end)/);
}

const matchIf = (conditionalHtml) => {
    const stringMatched = /(?:\#if)(.*?)(?:[a-zA-Z\s\<\>\-\/\#\$\.\"\/\:\=\d\,\${}\W]+\#else)/.exec(conditionalHtml)[0];
    return clearConditional(stringMatched);
}

const matchElse = (conditionalHtml) => {
    const stringMatched = /(?:\#else)(.*?)(?:[a-zA-Z\s\<\>\-\/\#\$\.\"\/\:\=\d\,\${}\W]+\#end)/.exec(conditionalHtml)[0];
    return clearConditional(stringMatched);
}

const hasConditionalInTemplate = (conditionalMached) => {
    return conditionalMached && conditionalMached.length > 0;
}

const makeConditional = (conditionalHtml) => {
    // extract conditional
    const conditional = /\#if.*\(.*\)/g.exec(conditionalHtml)[0];
    const stringIfExpression = /\(.*\)/.exec(conditional)[0].replace(/[\(\)]/g, "").toLowerCase();

    //expression statement
    const ifExpression = eval(stringIfExpression);

    // get the content of the exprsssion
    const ifContent = matchIf(conditionalHtml);
    const elseContent = matchElse(conditionalHtml);

    return ifExpression ? ifContent : elseContent;
}

const parseConditional = (productHtml) => {

    let conditionalMached = matchConditional(productHtml);

    while (hasConditionalInTemplate(conditionalMached)) {
        conditionalMached = conditionalMached[0];

        const resultConditionalHTML = makeConditional(conditionalMached);
        productHtml = productHtml.replace(conditionalMached, resultConditionalHTML);
        conditionalMached = matchConditional(productHtml);
    }


    return productHtml;
}

const parseConditionals = (productsParsedToHtml) => {
    const productsReturn = [];
    for (let index = 0; index < productsParsedToHtml.length; index++) {
        const productHtml = productsParsedToHtml[index];
        productsReturn.push(parseConditional(productHtml));
    }
    return productsReturn.join("");
}

const fromProductsGetShelfTemplateParsed = (products, shelfTemplateHTML, shelfConfig, title) => {
    const variables = fromShelfTempleteGetVariables(shelfTemplateHTML);
    shelfTemplateHTML = removeVariableEngineFromTemplate(shelfTemplateHTML);
    const productsParsed = fromVariablesParseProductData(products, variables, shelfTemplateHTML);
    let listProductsParsedToHtml = parseEachProductToHtml(productsParsed, shelfTemplateHTML, shelfConfig);
    listProductsParsedToHtml = parseConditionals(listProductsParsedToHtml);
    return `
        <div class="${shelfConfig.class}">
            ${title ? `<h2>${title}</h2>` : ""}
            <ul>
                ${listProductsParsedToHtml}
            </ul>
        </div>`;
}

module.exports.parse = async (templatePath, products, shelfConfig, title = null) => {
    return new Promise((resolve, reject) => {
        fs.readFile(templatePath, "utf8", (err, data) => {
            let shelfTemplateHTML = data;

            const shelfTemplateHTMLParsed = fromProductsGetShelfTemplateParsed(products, shelfTemplateHTML, shelfConfig, title);
            resolve(shelfTemplateHTMLParsed);
        });
    });
}