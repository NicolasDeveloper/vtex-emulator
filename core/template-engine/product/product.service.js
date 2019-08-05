
const fs = require("fs");
const path = require("path");
const config = require("../../config");
const metadataService = require("../metadata/metadata.service");

var product = null;
var sku = null;
var seller = null;
var installment = null;
var templateHtml = null;
var skuDetailed = null;
var productVariation = null;

const setProductConfig = (_product, _skuDetailed, _productVariation) => {
    product = _product;
    sku = product.items[0];
    seller = sku.sellers[0];
    installment = seller.commertialOffer.Installments[0] || {};
    skuDetailed = _skuDetailed;
    productVariation = _productVariation;
}

const resize = (imagePath, width, heigth) => {
    let imageId = imagePath.match(/ids\/\d+/g)[0];
    imageId = imageId && imageId.replace("ids/", "");

    return imagePath.replace(/ids\/(.*)\//g, `ids/${imageId}-${width}-${heigth}/`);
}

const formatPrice = (price) => {
    return price.toFixed(2).replace(".", ",");
}

const setProductMetadata = () => {
    return new Promise((resolve, reject) => {

        fs.readFile(`${path.resolve(__dirname, "../../../templates-config/vtex-product-script.html")}`, "utf8", async (err, data) => {
            const prod = JSON.stringify(productVariation);
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
            }, templateHtml, "vtex-scripts-product.html", script);

            resolve();
        });
    });
}

const setProductNameController = () => {
    templateHtml = templateHtml.replace(/\<vtex\.cmc\:productName(.*)\/\>/, `
        <div class="fn productName  ${product.productName.replace(/\s+/g, "-")} ">${product.productName}</div>
        <input id="___rc-p-id" type="hidden" value="${product.productId}" />
        <input id="___rc-p-dv-id" type="hidden" value="${seller.commertialOffer.Price.toString().replace(/\./g, ",")}">
        <input id="___rc-p-sku-ids" type="hidden" value="${sku.itemId}"/>
        <input id="___rc-p-kit-ids" type="hidden" value=""/>
    `);
}

const setProductReferenceController = () => {
    templateHtml = templateHtml.replace(/\<vtex\.cmc\:productReference(.*)\/\>/g, `<div class="productReference ${product.productReference}">${product.productReference}</div>`);
}

const setProductImageController = () => {
    const images = skuDetailed.Images;

    skuDetailed.Images = skuDetailed.Images.sort((a, b) => {
        if (a[0].IsMain === true) {
            return -1;
        } else {
            return 0;
        }
    });

    // default image
    const imageDefault = images.find(image => image[0].IsMain === true);

    templateHtml = templateHtml.replace(/\<vtex\.cmc\:productImage(.*)\/\>/g, `
        <div class="apresentacao">
            <div id="setaThumbs"></div>
            <div id="show">
                <div id="include">
                    <div id="image" productIndex="0">
                        <a href="${resize(imageDefault[0].Path, 1000, 1000)}" class="image-zoom">
                            <img productIndex="0" id="image-main" class="sku-rich-image-main" src="${imageDefault[0].Path}" alt="${product.linkText}" title="${product.linkText}"/>
                        </a>
                    </div>
                </div>
                <ul class="thumbs">
                    ${skuDetailed.Images.map((image) => `
                        <li>
                            <a id='botaoZoom' href='javascript:void(0);' title='Zoom' rel='${image[0].Path}' zoom='${resize(image[0].Path, 1000, 1000)}'>
                                <img src='${resize(image[0].Path, 55, 55)}' title='${product.linkText}' alt='${product.linkText}'/>
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </div>
        </div>
    `);
}

const setSkuSelectionController = () => {
    templateHtml = templateHtml.replace(/\<vtex\.cmc\:skuSelection(.*)\/\>/g, `
        <div class="sku-selector-container sku-selector-container-0"/></div>
        <script>
            $('.sku-selector-container-0').skuSelector(skuJson_0, {
                selectSingleDimensionsOnOpening: 'true'
            });
        </script>    
    `);
}

const setSkuPriceController = () => {
    templateHtml = templateHtml.replace(/\<vtex\.cmc\:skuPrice(.*)\/\>/g, `
        <div class="plugin-preco">
            <p productIndex="0" class="descricao-preco">
               ${skuDetailed.Price < skuDetailed.ListPrice ? `
                    <em productIndex="0" class="valor-de" style="display:none">
                        De: <strong productIndex="0" class="skuListPrice">R$ ${formatPrice(skuDetailed.ListPrice)}</strong>
                    </em>
                ` : ""}
                <em productIndex="0" class="valor-por">
                    Por: <strong productIndex="0" class="skuBestPrice">R$ 259,00</strong>
                </em>
                <em productIndex="0" class="valor-dividido" style="display:block">
                    <span>
                        <span>
                            ou <label productIndex="0" class="skuBestInstallmentNumber">${skuDetailed.BestInstallmentNumber}</label>
                            X de
                        </span>
                        <strong>
                            <label productIndex="0" class="skuBestInstallmentValue">R$ ${formatPrice(skuDetailed.Price / skuDetailed.BestInstallmentNumber)}</label>
                        </strong>
                    </span>
                </em>
                <p productIndex="0" class="preco-a-vista" style="display:none">
                    Preço a vista: <strong productIndex="0" class="skuPrice">R$ ${skuDetailed.Price}</strong>
                </p>
            </p>
        </div>
        <script>
            $('.plugin-preco').price(${product.productId});
        </script>`);

}

const parseScripts = () => {
    const scripts = `
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/Track.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/thickbox.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/json2.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.viewPart.CallCenterDisclaimer.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.viewPart.ajaxLoader_V2.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.jsevents.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.skuEvents.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.skuEvents.skuDataFetcher.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.viewPart.ImageControl3.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/vtex.viewPart.otherPaymentMethod.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/intersect.js?v=1.4.1273.1994" type="text/javascript"></script>
        <script language="javascript" src="https://${config.store}.vteximg.com.br/Scripts/social/vtex-view-part.js?v=1.4.1273.1994" type="text/javascript"></script>
    `;

    templateHtml = templateHtml.replace("</body>", `${scripts}</body>`);
}

const setRichSelectionController = () => {
    const richSelection = `
        <div class="sku-selector-container sku-selector-container-0"/></div>
        <script>
            $('.sku-selector-container-0').skuSelector(skuJson_0, {
                forceInputType: 'radio',
                selectSingleDimensionsOnOpening: 'true'
            });
        </script>
    `;

    templateHtml = templateHtml.replace(/\<vtex\.cmc\:skuRichSelection(.*)\/\>/g, richSelection);
}

const setButtonBuy = () => {
    var buttonBuyWarnMe = `
        <a target="_top" class="buy-button buy-button-ref" href="${seller.addToCartLink}" style="display:block">Comprar</a>
        <script>
            $('.buy-button-ref').buyButton(${product.productId}, {
                salesChannel: 1
            }, {})
        </script>
        <p class="unavailable-button" style="display:none">Produto Esgotado</p>
        <input type="hidden" class="buy-button-amount" value="1">
        <div class="portal-notify-me-ref"></div>
        <script>
            var notifyMeOptions = {
                'strings': {
                    "title": "Avise-Me",
                    "explanation": "\r\n    Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.\r\n  ",
                    "loading": "Carregando...",
                    "namePlaceholder": "Digite seu nome...",
                    "emailPlaceholder": "Digite seu e-mail...",
                    "success": "Cadastrado com sucesso, assim que o produto for disponibilizado você receberá um email avisando.",
                    "error": "Não foi possível cadastrar. Tente mais tarde.",
                    "emailErrorMessage": "O endereço de e-mail informado é inválido."
                }
            };
            $('.portal-notify-me-ref').notifyMe(${product.productId}, notifyMeOptions);
        </script>
    `;

    templateHtml = templateHtml.replace(/\<vtex\.cmc\:BuyButton(.*)\/\>/g, buttonBuyWarnMe);
}

const setProductDescription = () => {
    var controlleContent = `<div class="productDescription">${product.description}</div>`;

    templateHtml = templateHtml.replace(/\<vtex\.cmc\:ProductDescription(.*)\/\>/, controlleContent);
}

const seProductScecification = () => {
    const specificationControllerContent = `
    <div id="caracteristicas">
        ${product.allSpecificationsGroups.map(prop => `<h4 class="group Especificacao">${prop}</h4>
        <table cellspacing="0" class="group Especificacao">
            ${product[prop].map((specificationName) => {
        const specification = product[specificationName];
        return `
                    <tr class="even">
                        <th class="name-field ${specificationName.replace(/\s/g, "-")}">${specificationName}</th>
                        <td class="value-field ${specificationName.replace(/\s/g, "-")}">${specification.join("")}</td>
                    </tr>
                `;
    }).join("")}
        </table>`).join("")}
    </div>
    `;

    templateHtml = templateHtml.replace(/\<vtex\.cmc\:productSpecification(.*)\/\>/g, specificationControllerContent);
}

const setProductDescriptionShort = () => {
    templateHtml = templateHtml.replace(/\<vtex\.cmc\:productDescriptionShort(.*)\/\>/, product.description);
}

const setBreadcrumb = () => {
    const categorieMain = product.categories[0].split(/\//)[1];
    const categoriesFilter = product.categories.filter((categoryPath) => categoryPath.indexOf(categorieMain) > -1).reverse();
    const controlleContent = `
    <div class="bread-crumb" xmlns:v="http://rdf.data-vocabulary.org/#">
        <ul>
            <li typeof="v:Breadcrumb">
                <a href="/" rel="v:url" property="v:title">${config.breadcrumb}</a>
            </li>
            ${categoriesFilter.map((category, _index) => {
                const pathSliped = category.split(/\//g);
                return `
                    <li ${(_index + 1) < categoriesFilter.length ? 'typeof="v:Breadcrumb"' : 'class="last"'}>
                        ${(_index + 1) < categoriesFilter.length ? (
                            `<a href="${category}" rel="v:url" property="v:title">${pathSliped[pathSliped.length - 2]}</a>`
                        ) : (
                            pathSliped[pathSliped.length - 2]
                        )}
                    </li>
                `;
            }).join("")}
        </ul>
    </div>`;


    templateHtml = templateHtml.replace(/\<vtex\.cmc\:breadCrumb(.*)\/\>/g, controlleContent);
}

module.exports.parse = async (_product, _skuDetailed, _productVariation, _templateHtml) => {
    templateHtml = _templateHtml;

    setProductConfig(_product, _skuDetailed, _productVariation);
    await setProductMetadata();
    setProductNameController();
    setProductReferenceController();
    setProductImageController();
    setSkuSelectionController();
    setSkuPriceController();
    parseScripts();
    setRichSelectionController();
    setButtonBuy();
    setProductDescription();
    setProductDescriptionShort();
    seProductScecification();
    setBreadcrumb();

    return templateHtml;
}