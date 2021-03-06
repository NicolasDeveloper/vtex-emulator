const request = require("request");
const http = require("http");
const config = require("../config");
const queryString = require('query-string');
const fs = require('fs');

const searchApi = `http://${config.store}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`;
const facetsApi = `http://${config.store}.vtexcommercestable.com.br/api/catalog_system/pub/facets/search/`;
const productApi = `http://${config.store}.vtexcommercestable.com.br/produto/sku/`;
const variationApi = `http://${config.store}.vtexcommercestable.com.br/api/catalog_system/pub/products/variations/`;

module.exports.getByCollection = (collectionId) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}?fq=productClusterIds:${collectionId}`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject(error);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

module.exports.getSku = (sku) => {
	return new Promise((resolve, reject) => {
		request(`${productApi}${sku}`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject(error);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

module.exports.getProductWithVariations = (productId) => {
	return new Promise((resolve, reject) => {
		request(`${variationApi}${productId}`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject(error);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

module.exports.getProductsByTerm = (term) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}?${term}`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject(error);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

module.exports.getFacetsFilter = (categories, params) => {
	return new Promise((resolve, reject) => {
		request(`${facetsApi}${categories}?${params}`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject(error);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

module.exports.getProductByUri = (path) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}/${path}/p`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject("Error: " + error && error.message);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

exports.listCategories = async () => {
	return new Promise((resolve, reject) => {
		request(`http://${config.hostApi}/api/catalog_system/pub/category/tree/3`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject("Error: " + error && error.message);
			}
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});
	});
}

exports.getOrderForm = async () => {
	return new Promise((resolve, reject) => {
		request(`http://${config.hostApi}/api/checkout/pub/orderForm`, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206)) {
				resolve(JSON.parse(body));
			} else {
				reject("Error: " + error && error.message);
			}
		});
	});
}

exports.proxy = (path, req, res) => {
	return new Promise(async (resolve, reject) => {

		var options = {
			url: `${req.protocol}://${config.store}.vtexcommercestable.com.br${path}`,
			headers: {
				// "X-VTEX-API-AppKey": config.appKey,
				// "X-VTEX-API-AppToken": config.appToken,
				'VtexIdclientAutCookie': req.cookies[config.appKey],
				...req.headers
			},
			method: req.method,

		};

		if (
			options.url.indexOf("/masterdata") > -1 || 
			options.url.indexOf("/orderForm") > -1 || 
			options.url.indexOf("/authentication") > -1 || 
			options.url.indexOf("/brand") > -1 ||
			options.url.indexOf("/pvt") > -1) {
			
			options.headers = {
				"X-VTEX-API-AppKey": config.appKey,
				"X-VTEX-API-AppToken": config.appToken,
				...options.headers
			};
		}

		if (req.headers["content-type"] && req.headers["content-type"].indexOf("application/x-www-form-urlencoded") > -1) {
			const object = JSON.stringify(req.body);
			if (object !== "{}") {
				options.body = queryString.stringify(req.body);
			}
		}

		if (req.headers["content-type"] && req.headers["content-type"].indexOf("multipart/form-data") > -1) {
			if (req.files) {

				const formData = {};

				Object.keys(req.files).forEach((file) => {


					formData[file] = {
						value: req.files[file].data,
						options: {
							filename: req.files[file].name,
							contentType: req.files[file].mimetype
						}
					}
				});

				options.formData = formData;
			}

		}

		if (req.headers["content-type"] && req.headers["content-type"].indexOf("application/json") > -1) {
			if (req.body) {
				options.body = JSON.stringify(req.body);
			}
		}

		if (req.headers["accept"] && req.headers["accept"].indexOf("image/") > -1) {
			if (req.body) {
				options.encoding = null;
			}
		}

		delete options.headers["accept"];
		delete options.headers["accept-encoding"];
		delete options.headers["content-length"];
		delete options.headers["accept-language"];
		delete options.headers["referer"];
		delete options.headers["host"];


		request(options, (error, response, body) => {
			if (!error && response && (response.statusCode == 200 || response.statusCode == 206) || response.statusCode == 204 || response.statusCode == 201) {
				try {
					resolve(JSON.parse(body));
				} catch (error) {
					resolve(body);
				}
			} else {
				reject(error);
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

