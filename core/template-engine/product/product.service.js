
const fs = require("fs");
const path = require("path");
const config = require("../../config");
const metadataService = require("../metadata/metadata.service");

var product = null;
var sku = null;
var seller = null;
var installment = null;

const setProductConfig = (_product) => {
    product = _product;
    sku = product.items[0];
    seller = sku.sellers[0];
    installment = seller.commertialOffer.Installments[0] || {};
}

const productMetadata = (templateHtml) => {
    return new Promise((resolve, reject) => {

        fs.readFile(`${path.resolve(__dirname, "../../../templates-config/vtex-product-script.html")}`, "utf8", async (err, data) => {
            const _product = {
                "productId": parseInt(product.productId),
                "name": product.productName,
                "salesChannel": "1",
                "available": seller.commertialOffer.AvailableQuantity > 0,
                "displayMode": "especificacao",
                "dimensions": [],
                "dimensionsInputType": {},
                "dimensionsMap": {},
                "skus": [{
                    "sku": sku.itemId,
                    "skuname": product.productName,
                    "dimensions": {},
                    "available": seller.commertialOffer.AvailableQuantity > 0,
                    "availablequantity": seller.commertialOffer.AvailableQuantity,
                    "cacheVersionUsedToCallCheckout": seller.commertialOffer.CacheVersionUsedToCallCheckout,
                    "listPriceFormated": `R$ ${seller.commertialOffer.ListPrice && seller.commertialOffer.ListPrice.toString().replace(/\./g, ",")}`,
                    "listPrice": seller.commertialOffer.ListPrice && seller.commertialOffer.ListPrice,
                    "taxFormated": `R$ ${seller.commertialOffer.Tax.toString().replace(/\./g, ",")}`,
                    "taxAsInt": seller.commertialOffer.Tax,
                    "bestPriceFormated": `R$ ${seller.commertialOffer.Price.toString().replace(/\./g, ",")}`,
                    "bestPrice": seller.commertialOffer.Price && seller.commertialOffer.Price,
                    "installments": installment.NumberOfInstallments,
                    "installmentsValue": installment.Value,
                    "installmentsInsterestRate": installment.InterestRate,
                    "image": sku.images[0].imageUrl,
                    "sellerId": seller.sellerId,
                    "seller": seller.sellerName,
                    "measures": {},
                    "unitMultiplier": seller.commertialOffer.unitMultiplier,
                    "rewardValue": seller.commertialOffer.RewardValue
                }]
            };

            const prod = JSON.stringify(_product);
            let script = data.replace(/\{\{skuJson\}\}/g, prod);
            script = script.replace(/\{\{store\}\}/g, config.store);

            const categories = product.categories[0].split(/\//g);
            const categoriesIds = product.categoriesIds[0].split(/\//g);

            templateHtml = await metadataService.parse({
                title: product.productTitle,
                abstract: product.productTitle,
                description: product.metaTagDescription,
                searchTerm: product.productName,
                categoryId: product.categoryId,
                categoryName: categories[categories.length - 2],
                departmentId: categoriesIds[1],
                departmentName: categories[1],
            }, templateHtml, script);

            templateHtml = templateHtml.replace(/\<vtex\.cmc\:productReference(.*)\/\>/g, "");
            templateHtml = templateHtml.replace("<vtex.cmc:productImage />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:skuSelection />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:skuPrice />", "");
            templateHtml = templateHtml.replace('<vtex.cmc:skuRichSelection changeImage="1" />', "");
            templateHtml = templateHtml.replace("<vtex.cmc:BuyButton />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:ProductDescription />", "");

            resolve(templateHtml);
        });
    });
}

const productNameController = (templateHtml) => {
    return templateHtml.replace(/\<vtex\.cmc\:productName(.*)\/\>/, `
        <div class="fn productName  ${product.productName.replace(/\s+/g, "-")} ">${product.productName}</div>
        <input id="___rc-p-id" type="hidden" value="${product.productId}" />
        <input id="___rc-p-dv-id" type="hidden" value="${seller.commertialOffer.Price.toString().replace(/\./g, ",")}">
        <input id="___rc-p-sku-ids" type="hidden" value="${sku.itemId}"/>
        <input id="___rc-p-kit-ids" type="hidden" value=""/>
    `);
}

module.exports.parse = async (_product, templateHtml) => {
    setProductConfig(_product);

    templateHtml = await productMetadata(templateHtml);
    templateHtml = productNameController(templateHtml);

    return templateHtml;
}