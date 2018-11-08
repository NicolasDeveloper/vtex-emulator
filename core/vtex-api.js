const request = require("request");
const http = require("http");
const config = require("./config");

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

module.exports.getProductByUri = (path) => {
    return new Promise((resolve, reject) => {
        request(`${searchApi}/${path}/p`, (error, response, body) => {
            if(!error && response.statusCode == 200 || response.statusCode == 206) {
                resolve(JSON.parse(body));
            }
        });
    });
}

exports.listCategorys = async () => {
	return new Promise((resolve, reject) => {
        request(`http://${config.hostApi}/api/catalog_system/pub/category/tree/3`, (error, response, body) => {
            if(!error && response.statusCode == 200 || response.statusCode == 206) {
                resolve(JSON.parse(body));
            }
        });
    });
}

exports.getOrderForm = async () => {
	return new Promise((resolve, reject) => {
        request(`http://${config.hostApi}/api/checkout/pub/orderForm`, (error, response, body) => {
            if(!error && response.statusCode == 200 || response.statusCode == 206) {
                resolve(JSON.parse(body));
            }else {
				reject();
			}
        });
    });
}

exports.listBrand = async () => {
	return new Promise((resolve, reject) => {

		const options = {
			host: config.hostApi,
			path: config.innerPath + "/api/catalog_system/pvt/brand/list",
			method: "GET",
			headers: {
				"origin": "x-requested-with",
				"X-VTEX-API-AppKey": config.appKey,
				"X-VTEX-API-AppToken": config.appToken
			}
		};

		const req = http.request(options, function (res) {
			let _data = '';

			res.on('data', function (data) {
				_data += data;
			});

			res.on('end', () => {
				resolve(JSON.parse(_data));
			});
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});

		req.end();

	});
}


exports.getFilter = async (params) => {
	return new Promise((resolve, reject) => {

		const options = {
			host: config.hostApi,
			path: config.innerPath + "/api/catalog_system/pub/facets/search/" + params,
			method: "GET",
			headers: {
				"origin": "x-requested-with",
				"X-VTEX-API-AppKey": config.appKey,
				"X-VTEX-API-AppToken": config.appToken
			}
		};

		const req = http.request(options, function (res) {
			let _data = '';

			res.on('data', function (data) {
				_data += data;
			});

			res.on('end', () => {
				resolve(JSON.parse(_data));
			});
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});

		req.end();

	});
}

