const path = require("path");
const fs = require("fs");

const _buildTemplate = (product, _path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(_path, "utf8", (err, data) => {
            let template = data;

            let sku = product.items.find((sku) => sku.sellers.find((seller) => seller.commertialOffer.AvailableQuantity > 0) !== undefined);
            const seller = sku ? sku.sellers.find((seller) => seller.commertialOffer.AvailableQuantity > 0) : undefined;
            sku = product.items[0];


            const categories = product.categories[0].split(/\//g);
            const categorie = categories[categories.length - 2];
            const department = categories[1];

            template = template.replace(/\$id/g, product.productId);
            template = template.replace(/\$product\.Name/g, product.productName);
            template = template.replace(/\$idSku/g, sku.itemId);
            template = template.replace(/\$product\.BrandName/g, product.brand);
            template = template.replace(/\$product\.CategoryName/g, categorie);
            template = template.replace(/\$product\.DepartmentName/g, department);
            template = template.replace(/\$uri/g, product.link);
            template = template.replace(/\$product\.BestPrice/g, seller ? seller.commertialOffer.Price.toString().replace(/\./g, ",") : "R$ 00,00");
            template = template.replace(/\$product\.ListPrice/g, seller ? seller.commertialOffer.ListPrice.toString().replace(/\./g, ",") : "R$ 00,00");
            template = template.replace(/\$product\.IsInStock/g, seller ? "True" : "False");
            template = template.replace(/\$product\.HasBestPrice/g, seller.commertialOffer.ListPrice > seller.commertialOffer.Price ? "True" : "False");
            template = template.replace(/\$product\.NumbersOfInstallment/g, "3");
            template = template.replace(/\$product\.InstallmentValue/g, "R$ 100");
            template = template.replace(/\$product\.DiscountHightLight/g, "");
            template = template.replace(/\$product\.HightLight/g, "");
            template = template.replace(/\$escapedName/g, "");
            template = template.replace(/\$product\.GetImageTag\(30\)/g, sku.images[0].imageTag);
            template = template.replace(/\$product\.BottomBuyAsynchronous/g, `
            <div class="wrapper-buy-button-asynchronous bba${product.productId}">
                <input type="hidden" value="Produto incluído no carrinho" class="buy-button-asynchronous-product-message-success">
                <input type="hidden" value="Produto não incluído no carrinho" class="buy-button-asynchronous-product-message-fail">
                <input type="hidden" value="${product.productId}" class="buy-button-asynchronous-product-id">
                <input type="hidden" value="${sku.itemId}" class="buy-button-asynchronous-defaultsku-id">
                <input type="hidden" value="${product.link}" class="buy-button-asynchronous-product-url-${product.productId}">
                <span class="add">
                    <a 
                        href="${seller.addToCartLink}" 
                        class="btn-add-buy-button-asynchronous btn-not-clicked asynchronousBuyButton actionActivated vtexsm_activated .btover-active" 
                        style="cursor:pointer" id="idprod${sku.itemId}">Comprar</a>
                </span>
                <input type="hidden" value="product" class="buy-button-asynchronous-go-to-cart-${sku.itemId}" />
                <div class="buy-button-asynchronous message-user${product.productId}"></div>
            </div>
            `);

            resolve(template);
        });
    });
}

module.exports.parseTemplate = async (products, content, coluns = 5, items = 0) => {

    const _path = path.resolve(__dirname, `../shelves-template`);

    // build pagination of list and build template
    let list = [];
    let listitems = [];

    for (let index = 0; index < (items || products.length); index++) {

        if (((index) % coluns) === 0 && index !== 0) {
            list.push(Object.assign(listitems, {}));
            listitems = [];
        }

        const html = await _buildTemplate(products[index], `${_path}/${content.layout}.html`);
        products[index].html = html;

        listitems.push(products[index]);
    }

    if (listitems.length !== 0) {
        list.push(listitems);
    }
    // end pagination

    // import config file
    const config = require(`${_path}/${content.layout}.json`);

    const listsHtml = [];
    for (let index = 0; index < list.length; index++) {

        const products = list[index];

        const listHtml = `
            <ul>
                ${products.map((product) => {
                return `
                            <li class="${config.layout}">${product.html}</li>
                            <li id="helperComplement_${product.productId}" style="display:none" class="helperComplement"></li>
                        `;
            }).join(" ")}
            </ul>
        `;

        listsHtml.push(listHtml);
    }

    return `
        <div class="${config.class} n${coluns}colunas">
            <h2>${content.id}</h2>
            ${listsHtml.join("")}
        </div>
    `;
} 