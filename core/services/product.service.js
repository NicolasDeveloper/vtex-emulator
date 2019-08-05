var product = null;
var config = require("../config"); 

const getSeller = () => {
    return product.items[0].sellers[0];
}

module.exports.setProduct = (_product) => {
    product = _product;
}

module.exports["$product.Id"] = () => {
    return product.items[0].itemId;
}

module.exports["$product.productVariantId"] = () => {
    return product.items[0].itemId;
}

module.exports["$product.Name"] = () => {
    return product.productName;
}

module.exports["$product.Uri"] = () => {
    return product.link;
}

module.exports["$product.HtmlEscapedName"] = () => {
    return product.linkText;
}

module.exports["$product.IsInStock"] = () => {
    return getSeller().commertialOffer.AvailableQuantity > 0 ? "True": "False";
}

module.exports["$product.HasBestPrice"] = () => {
    const { Price, ListPrice} = getSeller().commertialOffer;
    return Price < ListPrice ? "True": "False";
}

module.exports["$product.NumbersOfInstallment"] = () => {
    return 8;
}

module.exports["${product.NumbersOfInstallment}"] = () => {
    return 8;
}

module.exports["$product.DescriptionShort"] = () => {
    return product.description;
}

module.exports["$product.BrandName"] = () => {
    return product.brand;
}

module.exports["$product.CategoryName"] = () => {
    return product.categories[1];
}

module.exports["$product.DepartmentName"] = () => {
    return product.categories[1];
}

module.exports["$product.DepartmentName"] = () => {
    return product.categories[1];
}

module.exports["$product.BestPrice"] = () => {
    const { Price } = getSeller().commertialOffer;
    return Price.toFixed(2).replace(/\.+/g, ",");
}

module.exports["$product.NumbersOfInstallment"] = () => {
    return 8;
}

module.exports["$product.InstallmentValue"] = () => {
    const { Price } = getSeller().commertialOffer;
    return (Price / 8).toFixed(2).replace(/\.+/g, ",");
}

module.exports["$product.ListPrice"] = () => {
    const { ListPrice} = getSeller().commertialOffer;
    return ListPrice;
}

module.exports["$product.DiscountHightLight"] = () => {
    return "";
}

module.exports["$product.HightLight"] = () => {
    return "";
}

module.exports["$product.DepartmentName"] = () => {
    return product.description;
}

module.exports["$product.GetImageTag(30)"] = () => {
    return product.items[0].images[0].imageTag.replace("#width#-#height#", "350-350").replace("~", `https://${config.cdn}`);
}

module.exports["$product.BottomBuyAsynchronous"] = () => {
    return "";
}