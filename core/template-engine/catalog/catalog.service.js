const path = require("path");
const fs = require("fs");

module.exports.categories = (categoryPath, content) => {
    return new Promise((resolve, reject) => {
        
        const shelftag = content.match(/\<vtex\.cmc:searchResult\s*.layout\=\"[a-z|\-|0-9]+\"\s*.itemCount\="[0-9]+"+ columnCount\="[0-9]+"\s*.showUnavailable\="[a-z]+"\s*.\/\>/g);
        
        if (shelftag) {
            fs.readFile(`${path.resolve(__dirname, "../../../templates-config/shelf.html")}`, "utf8", (err, data) => {
                
                data = data.replace(/\{\{categoryPath\}\}/g, `fq=C:/${categoryPath}`);
                data = data.replace(/\{\{sl\}\}/g, `1`);
                data = data.replace(/\{\{products\}\}/g, `1`);
                content = content.replace(shelftag[0], data);

                resolve(content);
            });
        } else {
            resolve(content);
        }
    });
}

module.exports.collection = (categoryPath, content) => {
    return new Promise((resolve, reject) => {
        
        const shelftag = content.match(/\<vtex\.cmc:searchResult\s*.layout\=\"[a-z|\-|0-9]+\"\s*.itemCount\="[0-9]+"+ columnCount\="[0-9]+"\s*.showUnavailable\="[a-z]+"\s*.\/\>/g);
        
        if (shelftag) {
            fs.readFile(`${path.resolve(__dirname, "../../../templates-config/shelf.html")}`, "utf8", (err, data) => {
                
                data = data.replace(/\{\{categoryPath\}\}/g, `fq=H:${categoryPath}&ft=${categoryPath}`);
                data = data.replace(/\{\{sl\}\}/g, `1`);
                data = data.replace(/\{\{products\}\}/g, `1`);
                content = content.replace(shelftag[0], data);

                resolve(content);
            });
        } else {
            resolve(content);
        }
    });
}
