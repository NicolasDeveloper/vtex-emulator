const path = require("path");
const templateEngine = require("./template-engine.service")
const shelfsConfig = require("../../../shelves-template/shelfs-config.json");
const dataService = require("../../services/data.service");
const searchService = require("../search-control/search-control.service");

const getAttribute = (tag, attribute) => {
    var regex = new RegExp(`${attribute}\=\"(.*?)\"`)
    return regex.exec(tag)[1];
}

const searchShelfTemplate = (layout) => {
    return shelfsConfig.find((shelf) => shelf.layout === layout);
}

const getTemplatePath = (templatePath) => {
    return `${path.resolve(__dirname, templatePath)}`
}

const getShelfTag = (templateHTML) => {
    const tag = /<vtex.cmc:searchResult.*\/>/g.exec(templateHTML);
    return tag && tag[0];
}

const fromTemplateParseContent = (templateHTML, catalogParsed) => {
    const shelftag = getShelfTag(templateHTML);
    return templateHTML.replace(shelftag, catalogParsed);
}

const clearDomain = (domain) => {
    return domain.replace(/http(.*)\:\/\/(.*)\.com\.br\//, "");
}

const getMap = (pathName) => {
    const pathSplited = pathName.split(/\//);
    return pathSplited && `map=${pathSplited.map((x) => "c").join(",")}`;
}

const fromPathGetCategories = (categoriesTrees, categoryPathName, currentCategory = 0, categoriesFinded = []) => {
    const categories = categoryPathName.split(/\//g);
    categoryName = categories[currentCategory];

    const categoryFinded = categoriesTrees.find((category) => {
        return category.Value.toLowerCase() === categoryName
    });

    if ((currentCategory + 1) < categories.length) {
        categoriesFinded.push(categoryFinded);
        return fromPathGetCategories(categoryFinded.Children, categoryPathName, currentCategory + 1, categoriesFinded);
    } else {
        categoriesFinded.push(categoryFinded);
        return categoriesFinded;
    }
}

const getSearchEndpoint = (categoriesFinded) => {
    return `fq=C:${categoriesFinded.map(category => category.Id).join("/")}`;
}

module.exports.parse = async (category, templateHTML) => {
    return new Promise(async (resolve, reject) => {
        const shelftag = getShelfTag(templateHTML);

        if (shelftag) {
            const layoutId = getAttribute(shelftag, "layout");
            const shelfConfig = searchShelfTemplate(layoutId);
            const categoryPathName = clearDomain(category.url);

            let parsedTemplateHTML = "";

            if (!shelfConfig)
                throw ({
                    error: true,
                    message: `template não encontrado ${layoutId}!`,
                });

            const templatePath = getTemplatePath(`../../../shelves-template/${shelfConfig.template}`);

            const filters = await dataService.getFacetsFilter(`${categoryPathName}`, getMap(categoryPathName));
            const categoriesFinded = fromPathGetCategories(filters.CategoriesTrees, categoryPathName);

            const categoryPath = getSearchEndpoint(categoriesFinded);
            const products = await dataService.getProductsByTerm(categoryPath);

            const catalogParsed = await templateEngine.parse(templatePath, products, shelfConfig);
            parsedTemplateHTML = fromTemplateParseContent(templateHTML, catalogParsed);

            parsedTemplateHTML = await searchService.parseSingleDepartmentNavigator(categoriesFinded[categoriesFinded.length - 1], filters, parsedTemplateHTML);
            parsedTemplateHTML = await searchService.parseSearchNavigator(categoriesFinded[categoriesFinded.length - 1], filters, parsedTemplateHTML);

            resolve(parsedTemplateHTML);
        } else {
            resolve(templateHTML);
        }
    });
}
