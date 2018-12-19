const path = require("path");
const fs = require("fs");


const replaceMetaTags = (meta = {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-scripts-product.html")}`, "utf8", (err, data) => {
            let template = data;

            template = template.replace(/\{\{abstract\}\}/g, meta.abstract || "");
            template = template.replace(/\{\{title\}\}/g, meta.title || "");
            template = template.replace(/\{\{searchTerm\}\}/g, meta.searchTerm || "");
            template = template.replace(/\{\{description\}\}/g, meta.description || "");
            template = template.replace(/\{\{categoryId\}\}/g, meta.categoryId || "");
            template = template.replace(/\{\{categoryName\}\}/g, meta.categoryName || "");
            template = template.replace(/\{\{departmentyId\}\}/g, meta.departmentyId || "");
            template = template.replace(/\{\{departmentName\}\}/g, meta.departmentName || "");

            resolve(template);
        });
    })
}

module.exports.metaDepartment = (category, templateHtml) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-scripts-department.html")}`, "utf8", (err, data) => {
            let template = data;

            template = template.replace(/\{\{abstract\}\}/g, category.id);
            template = template.replace(/\{\{title\}\}/g, category.Title);
            template = template.replace(/\{\{searchTerm\}\}/g, "");
            template = template.replace(/\{\{description\}\}/g, category.MetaTagDescription);
            template = template.replace(/\{\{categoryId\}\}/g, category.id);
            template = template.replace(/\{\{categoryName\}\}/g, category.name);
            template = template.replace(/\{\{departmentyId\}\}/g, category.id);
            template = template.replace(/\{\{departmentName\}\}/g, category.name);

            templateHtml = templateHtml.replace("<vtex:metaTags />", template);

            resolve(templateHtml);
        });
    });
}

module.exports.metaCategory = (categories, templateHtml) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-scripts-department.html")}`, "utf8", (err, data) => {
            let template = data;

            template = template.replace(/\{\{abstract\}\}/g, categories[categories.length - 1].id);
            template = template.replace(/\{\{title\}\}/g, categories[categories.length - 1].Title);
            template = template.replace(/\{\{searchTerm\}\}/g, "");
            template = template.replace(/\{\{description\}\}/g, categories[categories.length - 1].MetaTagDescription);
            template = template.replace(/\{\{categoryId\}\}/g, categories[categories.length - 1].id);
            template = template.replace(/\{\{categoryName\}\}/g, categories[categories.length - 1].name);
            template = template.replace(/\{\{departmentyId\}\}/g, categories[0].id);
            template = template.replace(/\{\{departmentName\}\}/g, categories[0].name);

            templateHtml = templateHtml.replace("<vtex:metaTags />", template);

            resolve(templateHtml);
        });
    });
}

module.exports.metaAllStore = (title, description, templateHtml) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-scripts-department.html")}`, "utf8", (err, data) => {
            let template = data;

            template = template.replace(/\{\{abstract\}\}/g, "");
            template = template.replace(/\{\{title\}\}/g, title);
            template = template.replace(/\{\{searchTerm\}\}/g, "");
            template = template.replace(/\{\{description\}\}/g, description);
            template = template.replace(/\{\{categoryId\}\}/g, "");
            template = template.replace(/\{\{categoryName\}\}/g, "");
            template = template.replace(/\{\{departmentyId\}\}/g, "");
            template = template.replace(/\{\{departmentName\}\}/g, "");

            templateHtml = templateHtml.replace("<vtex:metaTags />", template);

            resolve(templateHtml);
        });
    });
}

module.exports.productPage = (product, templateHtml) => {

    return new Promise((resolve, reject) => {
        
        fs.readFile(`${path.resolve(__dirname, "../templates-config/vtex-product-script.html")}`, "utf8", async (err, data) => {

            var sku = product.items[0];
            var seller = sku.sellers[0];
            var installment = seller.commertialOffer.Installments[0] || {};
            
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
            const script = data.replace(/\{\{skuJson\}\}/, prod);

            const categories = product.categories[0].split(/\//g);
            const categoriesIds = product.categoriesIds[0].split(/\//g);

            const metasAndScripts = await replaceMetaTags({
                title: product.productTitle,
                abstract: product.productTitle,
                description: product.metaTagDescription,
                searchTerm: product.productName,
                categoryId: product.categoryId,
                categoryName: categories[categories.length - 2],
                departmentyId: categoriesIds[1],
                departmentName: categories[1],
            });

            templateHtml = templateHtml.replace("<vtex:metaTags />", `${metasAndScripts}${script}`);
           
            templateHtml = templateHtml.replace("<vtex.cmc:productReference />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:productImage />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:productName />", `
                <div class="fn productName  ${product.productName.replace(/\s+/g, "-")} ">${product.productName}</div>
                <input id="___rc-p-id" type="hidden" value="${product.productId}" />
                <input id="___rc-p-dv-id" type="hidden" value="${seller.commertialOffer.Price.toString().replace(/\./g, ",")}">
                <input id="___rc-p-sku-ids" type="hidden" value="${sku.itemId}"/>
                <input id="___rc-p-kit-ids" type="hidden" value=""/>
            `);
            templateHtml = templateHtml.replace("<vtex.cmc:skuSelection />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:skuPrice />", "");
            templateHtml = templateHtml.replace('<vtex.cmc:skuRichSelection changeImage="1" />', "");
            templateHtml = templateHtml.replace("<vtex.cmc:BuyButton />", "");
            templateHtml = templateHtml.replace("<vtex.cmc:ProductDescription />", "");
            templateHtml = templateHtml.replace("<vtex:metaTags />", "");
            
            resolve(templateHtml);
        });
    });
}

