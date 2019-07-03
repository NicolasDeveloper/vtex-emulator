const regexSingleDepartmentNavigator = /\<vtex\.cmc\:singleDepartmentNavigator(.*)\/\>/g;
const regexSearchNavigator = /\<vtex\.cmc\:searchNavigator(.*)\/\>/g;

const parseComponent = (templateHTML, templateSearch, regex) => {
    return templateHTML.replace(regex, templateSearch);
}

const findController = (regex, templateHTML) => {
    return regex.test(templateHTML);
}

module.exports.parseSingleDepartmentNavigator = async (department, filters, templateHtml) => {
    const test = findController(regexSingleDepartmentNavigator, templateHtml);
    if (!test) {
        return templateHtml;
    }

    const categoriesTreesTemplate = `
        <h3 class="${department.Value}">
            <span></span>
            ${department.Name}
        </h3>
        <ul class="">
            ${department.Children.map((category) =>
                `<li>
                    <a href="${category.Link}" title="${category.Name}">${category.Name} (${category.Quantity})</a>
                </li>`
            ).join("")}
        </ul>
    `;

    const childrenCategoriesTemplate = `
        ${department.Children.map((category) =>
        `<h4 class="${category.Value}">${category.Name}</h4>`
    ).join("")}`;

    const specificationFiltersTemplate = `
        ${Object.keys(filters.SpecificationFilters).map((value) => {
        const specifications = filters.SpecificationFilters[value];

        return `
            <h5 class="">${value}</h5>
            <ul class="">
                ${specifications.map((specification) => {
                    if (!specification.Name || specification.Name === "null") {
                        return "";
                    }

                    return `
                        <li>
                            <a href="${specification.Link}" title="${specification.Name}">${specification.Name} (${specification.Quantity})</a>
                        </li>`;
                }).join("")}
            </ul>
            `;
    }).join("")}`;

    const templateSearch = `
    <div id="ctl00_Conteudo_ctl02_divSideBar" class="navigation">
    <div id="ctl00_Conteudo_ctl02_divSideBarUnica1" class="menu-departamento">
        <span class="rt"></span>
        <span class="rb"></span>
        ${categoriesTreesTemplate}
        ${childrenCategoriesTemplate}
        ${specificationFiltersTemplate}
        </div>
    </div>
    <div class="urlLastSearch" style="display:none">
        http://loja.tena.com.br/${department.Name}</div>`;

    return parseComponent(templateHtml, templateSearch, regexSingleDepartmentNavigator);
}

module.exports.parseSearchNavigator = async (department, filters, templateHtml) => {
    const test = findController(regexSearchNavigator, templateHtml);
    if (!test) {
        return templateHtml;
    }
    
    const categoriesTreesTemplate = `
        <h3 class="${department.Value}">
            <span></span>
            ${department.Name}
        </h3>
        <ul class="">
            ${department.Children.map((category) =>
                `<li>
                    <a href="${category.Link}" title="${category.Name}">${category.Name} (${category.Quantity})</a>
                </li>`
            ).join("")}
        </ul>
    `;

    const childrenCategoriesTemplate = `
        ${department.Children.map((category) =>
        `<h4 class="${category.Value}">${category.Name}</h4>`
    ).join("")}
    `;

    const specificationFiltersTemplate = `
        ${Object.keys(filters.SpecificationFilters).map((value) => {
        const specifications = filters.SpecificationFilters[value];

        return `
                <h5 class="">${value}</h5>
                <ul class="">
                    ${specifications.map((specification) => {
                        if (!specification.Name || specification.Name === "null") {
                            return "";
                        }

                        return `<li>
                            <a href="${specification.Link}" 
                                title="${specification.Name}">${specification.Name} (${specification.Quantity})</a>
                        </li>`
                    }).join("")}
                </ul>
            `;
    }).join("")}
    `;

    const specificationMultipleFiltersTemplate = `
        ${Object.keys(filters.SpecificationFilters).map((value, index) => {
        const specifications = filters.SpecificationFilters[value];

        return `
            <h5 class="refino ${(index % 2) !== 0 ? "even" : ""} Características">${value}</h5>
            <div class="">
                ${specifications.map((specification) => {
                    if (!specification.Name || specification.Name === "null") {
                        return "";
                    }

                    return `
                        <label>
                            <input rel="fq=${specification.Map}:${specification.Value}" class="multi-search-checkbox"
                                type="checkbox" name="${specification.Value}" value="${specification.Value}" />${specification.Name} (${specification.Quantity})
                        </label>
                    `;
                }).join("")}
            </div>
        `;
    }).join("")}`;

    const templateSearch = `
        <script type="text/javascript" language="javascript">
            $(document).ready(function () {
                partialSearchUrl = '/busca';
            });
        </script>
        <div class="navigation-tabs">
            <div class="menu-departamento">
                <span class="rt"></span>
                <span class="rb"></span>
                <div>
                    <div class="menu-navegue">
                        <a title="Navegue" class="search-navigator-tab tab-navegue-ativo" href="#">Navegar</a>
                        <a title="Refinar Resultado" class="search-navigator-tab tab-refinar" href="#">Refinar
                            Resultado</a>
                    </div>
                    <div class="search-multiple-navigator" style="display: none;">
                        <h3 class="${department.Name}">
                            <span></span>
                            <a href="https://loja.tena.com.br/${department.Name}" title="${department.Name}">${department.Name}</a>
                        </h3>
                        <h4 class="${department.Name}">
                            <span></span>
                            <a href="https://loja.tena.com.br/${department.Name}" title="${department.Name}">${department.Name}</a>
                        </h4>
                        <a title="Refinar Resultado" class="bt-refinar search-filter-button even" href="#">Refinar Resultado</a>
                        ${specificationMultipleFiltersTemplate}
                    </div>
                    <div class="search-single-navigator" style="display: block">
                        ${categoriesTreesTemplate}
                        ${childrenCategoriesTemplate}
                        ${specificationFiltersTemplate}
                    </div>
                </div>
            </div>
        </div>
        <div class="urlLastSearch" style="display:none">
            http://loja.tena.com.br/${department.Name}</div>
    `;

    return parseComponent(templateHtml, templateSearch, regexSearchNavigator);;
}