const dataService = require("../services/data.service");
const templateService = require("../template-engine/template/template.service");
const productService = require("../template-engine/product/product.service");

module.exports.parse = async (controller, templateName, bodyClass, productName) => {
    let templateHTML = await templateService.parse(controller, templateName, bodyClass);

    let product = await dataService.getProductByUri(productName);

    if (!product || product.length === 0)
        throw ({
            error: true,
            message: "product not find"
        });

    product = product[0];

    let skuDetailed = await dataService.getSku(product.items[0].itemId);
    skuDetailed = skuDetailed[0];

    const productVariation = await dataService.getProductWithVariations(product.productId);

    templateHTML = await productService.parse(product, skuDetailed, productVariation, templateHTML);
    return templateHTML;
}