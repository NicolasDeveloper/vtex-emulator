const request = require("request");
const searchApi = "http://lojaprojetoverao.vtexcommercestable.com.br/api/catalog_system/pub/products/search";

module.exports.getByCollection = (collectionId) => {
    return new Promise((resolve, reject) => {
        request(`${searchApi}?fq=productClusterIds:${collectionId}`, (error, response, body) => {
            if(!error && response.statusCode == 200 || response.statusCode == 206) {
                resolve(JSON.parse(body));
            }
        });
    });
}