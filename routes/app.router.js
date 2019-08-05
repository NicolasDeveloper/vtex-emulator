const routes = [
    {
        path: "/",
        template: "v1-home.html",
        controller: "home",
        bodyClass: "home"
    },
    {
        path: "/busca-vazia",
        template: "v1-empty-search.html",
        controller: "empty-search",
        bodyClass: "empty-search"
    },
    {
        path: "/sistema/404",
        template: "v1-404.html",
        controller: "sistema/404",
        bodyClass: "home"
    },
    {
        path: "/:department",
        template: "v1-department.html",
        controller: "department",
        bodyClass: "department"
    },
    {
        path: "/:productName/p",
        template: "v1-product.html",
        controller: "product",
        bodyClass: "product"
    },
    {
        path: "/:department/*",
        template: "v1-department.html",
        controller: "category",
        bodyClass: "department category"
    },
    {
        path: "/*",
        template: "v1-search.html",
        controller: "search",
        bodyClass: "search"
    },
];

module.exports = routes; 