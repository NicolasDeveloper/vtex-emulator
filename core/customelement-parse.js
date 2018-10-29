const elements = require("../custom-elements/custom-elements.json");
const contentParser = require("../core/content-parser");
const path = require("path");

module.exports.parse = async (templateHtml) => {
    let tags = templateHtml.match(/\<vtex\.cmc\:[a-z]+ \/\>|\<vtex\:[a-z]+ \/\>/g);

    if (tags) {
        tags = tags.map((tag) => {
            return {
                element: tag,
                tagName: tag.match(/:[a-z]+/g)[0].replace(":", "")
            };
        });

        const contents = [];

        for (let index = 0; index < tags.length; index++) {
            const tag = tags[index];

            const content = elements.find((element) => element.tagName === tag.tagName);


            if (content) {

                content.tag = tag.element;

                switch (content.type) {
                    case "html":
                        contents.push(contentParser.htmlCustomElement(content));
                        break;
                    case "banner":
                        contents.push(contentParser.banner(content));
                        break;
                    case "collection":
                        contents.push(contentParser.collection(content));
                        break;
                    default:
                        break;
                }
            } else {
                templateHtml = templateHtml.replace(tag.element, `tag: ${tag.tagName} não encontrada`);
            }
        }

        const parses = await Promise.all(contents);

        for (let index = 0; index < parses.length; index++) {
            const parsedElement = parses[index];
            templateHtml = templateHtml.replace(parsedElement.tag, parsedElement.html);
        }
    }

    return templateHtml;
}