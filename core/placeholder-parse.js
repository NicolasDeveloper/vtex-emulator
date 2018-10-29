const path = require("path");
const contentParser = require("./content-parser");

module.exports.parse = async (controller, templateString) => {

    const tags = templateString && templateString.match(/\<vtex\:contentPlaceHolder id\=\"[0-9|\-|\s|a-z|A-Z|\_]+\".\/\>/g);

    const _path = path.resolve(__dirname, `../routes/${controller}`);
    const placeholders = require(`${_path}/placeholders.json`);

    const searcheds = tags.map(tag => {
        let file = tag.match(/id\=\"[0-9|\-|\s|a-z|A-Z|\_]+\"/g);
        file = file && file.length > 0 ? file[0].replace(/id\=/, "").replace(/\"+/g, "") : "";
        const _tag = placeholders.find((placeholder) => placeholder.id === file);
        return Object.assign({ tag: tag }, _tag);
    });

    const parses = [];

    for (let index = 0; index < searcheds.length; index++) {

        const placeholder = searcheds[index];        

        if (placeholder && placeholder.contents && placeholder.contents.length > 0) {
            const contents = [];

            for (let index = 0; index < placeholder.contents.length; index++) {

                const content = placeholder.contents[index];

                switch (content.type) {
                    case "html":
                        contents.push(contentParser.html(content, _path));
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
            }

            const contentsParsed = await Promise.all(contents);

            placeholder.contents = contentsParsed;

            parses.push(placeholder);
        } else {
            templateString = templateString.replace(placeholder.tag, `placeholder não encontrado: ${placeholder.tag.match(/id\=\"[0-9|\-|\s|a-z|A-Z|\_]+\"/g)[0]} `)
        }
    }

    for (let index = 0; index < parses.length; index++) {
        const parsePlaceholder = parses[index];
        templateString = templateString.replace(parsePlaceholder.tag, parsePlaceholder.contents.map((content) => content.html).join(" "));
    }

    return templateString;

}



