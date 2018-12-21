const request = require("request");
const http = require("http");
const config = require("./config");
const queryString = require('query-string');
const fs = require('fs');

const searchApi = "http://lojaprojetoverao.vtexcommercestable.com.br/api/catalog_system/pub/products/search";


module.exports.getByCollection = (collectionId) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}?fq=productClusterIds:${collectionId}`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			}
		});
	});
}

module.exports.getProductByUri = (path) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}/${path}/p`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			}
		});
	});
}

exports.listCategorys = async () => {
	return new Promise((resolve, reject) => {
		request(`http://${config.hostApi}/api/catalog_system/pub/category/tree/3`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			}
		});
	});
}

exports.getOrderForm = async () => {
	return new Promise((resolve, reject) => {
		request(`http://${config.hostApi}/api/checkout/pub/orderForm`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			} else {
				reject();
			}
		});
	});
}

exports.proxy = (path, req, res) => {
	return new Promise(async (resolve, reject) => {

		var options = {
			url: `${req.protocol}://lojaprojetoverao.vtexcommercestable.com.br${path}`,
			headers: {
				'VtexIdclientAutCookie': req.cookies["VtexIdclientAutCookie_lojaprojetoverao"],
				...req.headers
			},
			method: req.method,
			
		};

		if (options.url.indexOf("/orderForm") > -1 || options.url.indexOf("/authentication") > -1) {
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
			if (!error && response.statusCode == 200 || response.statusCode == 206 || response.statusCode == 204) {
				try {
					resolve(JSON.parse(body));
				} catch (error) {
					resolve(body);
				}
			} else {
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

