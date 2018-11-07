(function () {
    var AjaxQueue;

    AjaxQueue = function (ajax) {
        var theQueue;
        theQueue = $({});
        return function (ajaxOpts) {
            var abortFunction, dfd, jqXHR, promise, requestFunction;
            jqXHR = void 0;
            dfd = $.Deferred();
            promise = dfd.promise();
            requestFunction = function (next) {
                jqXHR = ajax(ajaxOpts);
                if (jqXHR.retry) {
                    jqXHR.retry({
                        times: 2,
                        statusCodes: [500, 503]
                    });
                }
                return jqXHR.done(dfd.resolve).fail(dfd.reject).then(next, next);
            };
            abortFunction = function (statusText) {
                var index, queue;
                if (jqXHR) {
                    return jqXHR.abort(statusText);
                } else {
                    queue = theQueue.queue();
                    index = [].indexOf.call(queue, requestFunction);
                    if (index > -1) {
                        queue.splice(index, 1);
                    }
                    dfd.rejectWith(ajaxOpts.context || ajaxOpts, [promise, statusText, ""]);
                    return promise;
                }
            };
            theQueue.queue(requestFunction);
            promise.abort = abortFunction;
            return promise;
        };
    };

    window.AjaxQueue = AjaxQueue;

}).call(this);

(function () {
    var Catalog, _base,
        __bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

    (_base = window.location).origin || (_base.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));

    Catalog = (function () {
        var HOST_URL;

        HOST_URL = "https://proxy-vitrio.azurewebsites.net/lojaprojetoverao.vtexcommercestable.com.br";

        function Catalog(options) {
            if (options == null) {
                options = {};
            }
            this.getCurrentProductWithVariations = __bind(this.getCurrentProductWithVariations, this);
            this.setProductWithVariationsCache = __bind(this.setProductWithVariationsCache, this);
            this.getProductWithVariations = __bind(this.getProductWithVariations, this);
            if (options.hostURL) {
                HOST_URL = options.hostURL;;
            }
            if (options.ajax) {
                this.ajax = options.ajax;
            } else if (window.AjaxQueue) {
                this.ajax = window.AjaxQueue($.ajax);
            } else {
                this.ajax = $.ajax;
            }
            this.promise = options.promise || $.when;
            this.cache = {
                productWithVariations: {}
            };
        }

        Catalog.prototype.getProductWithVariations = function (productId) {
            var _this = this;
            return this.promise(this.cache.productWithVariations[productId] || $.ajax("" + (this._getBaseCatalogSystemURL()) + "/products/variations/" + productId)).done(function (response) {
                return _this.setProductWithVariationsCache(productId, response);
            });
        };

        Catalog.prototype.setProductWithVariationsCache = function (productId, apiResponse) {
            return this.cache.productWithVariations[productId] = apiResponse;
        };

        Catalog.prototype.getCurrentProductWithVariations = function () {
            var k, v, _ref;
            if (window.skuJson) {
                return this.promise(window.skuJson);
            } else {
                _ref = this.cache.productWithVariations;
                for (k in _ref) {
                    v = _ref[k];
                    return this.promise(v);
                }
            }
        };

        Catalog.prototype._getBaseCatalogSystemURL = function () {
            return HOST_URL + '/api/catalog_system/pub';
        };

        return Catalog;

    })();

    window.vtexjs || (window.vtexjs = {});

    window.vtexjs.Catalog = Catalog;

    window.vtexjs.catalog = new window.vtexjs.Catalog();

}).call(this);

(function () {
    var Checkout, mapize, readCookie, readCookies, readSubcookie, trim, urlParam, urlParams, _base,
        __slice = [].slice,
        __bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

    trim = function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    };

    mapize = function (str, pairSeparator, keyValueSeparator, fnKey, fnValue) {
        var key, map, pair, value, _i, _len, _ref, _ref1;
        map = {};
        _ref = str.split(pairSeparator);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            pair = _ref[_i];
            _ref1 = pair.split(keyValueSeparator), key = _ref1[0], value = 2 <= _ref1.length ? __slice.call(_ref1, 1) : [];
            map[fnKey(key)] = fnValue(value.join('='));
        }
        return map;
    };

    urlParams = function () {
        return mapize(window.location.search.substring(1), '&', '=', decodeURIComponent, decodeURIComponent);
    };

    urlParam = function (name) {
        return urlParams()[name];
    };

    readCookies = function () {
        return mapize(document.cookie, ';', '=', trim, unescape);
    };

    readCookie = function (name) {
        return readCookies()[name];
    };

    readSubcookie = function (name, cookie) {
        return mapize(cookie, '&', '=', (function (s) {
            return s;
        }), unescape)[name];
    };

    (_base = window.location).origin || (_base.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));

    Checkout = (function () {
        var HOST_URL, events;

        HOST_URL = "https://proxy-vitrio.azurewebsites.net/lojaprojetoverao.vtexcommercestable.com.br";

        events = {
            ORDER_FORM_UPDATED: 'orderFormUpdated.vtex',
            REQUEST_BEGIN: 'checkoutRequestBegin.vtex',
            REQUEST_END: 'checkoutRequestEnd.vtex'
        };

        function Checkout(options) {
            if (options == null) {
                options = {};
            }
            this._getGatewayCallbackURL = __bind(this._getGatewayCallbackURL, this);
            this._getProfileURL = __bind(this._getProfileURL, this);
            this._getPostalCodeURL = __bind(this._getPostalCodeURL, this);
            this._getSimulationURL = __bind(this._getSimulationURL, this);
            this._getOrdersURL = __bind(this._getOrdersURL, this);
            this._manualPriceURL = __bind(this._manualPriceURL, this);
            this._getAddToCartURL = __bind(this._getAddToCartURL, this);
            this._getRemoveGiftRegistryURL = __bind(this._getRemoveGiftRegistryURL, this);
            this._getUpdateSelectableGifts = __bind(this._getUpdateSelectableGifts, this);
            this._getCloneItemURL = __bind(this._getCloneItemURL, this);
            this._getUpdateItemURL = __bind(this._getUpdateItemURL, this);
            this._startTransactionURL = __bind(this._startTransactionURL, this);
            this._getAddCouponURL = __bind(this._getAddCouponURL, this);
            this._getChangeOrdinationURL = __bind(this._getChangeOrdinationURL, this);
            this._getItemAttachmentURL = __bind(this._getItemAttachmentURL, this);
            this._getBundleItemAttachmentURL = __bind(this._getBundleItemAttachmentURL, this);
            this._getRemoveOfferingsURL = __bind(this._getRemoveOfferingsURL, this);
            this._getAddOfferingsURL = __bind(this._getAddOfferingsURL, this);
            this._getSaveAttachmentURL = __bind(this._getSaveAttachmentURL, this);
            this._getOrderFormURLWithId = __bind(this._getOrderFormURLWithId, this);
            this._getOrderFormURL = __bind(this._getOrderFormURL, this);
            this._getOrderFormIdFromURL = __bind(this._getOrderFormIdFromURL, this);
            this._getOrderFormIdFromCookie = __bind(this._getOrderFormIdFromCookie, this);
            this._getOrderFormId = __bind(this._getOrderFormId, this);
            this.replaceSKU = __bind(this.replaceSKU, this);
            this.getChangeToAnonymousUserURL = __bind(this.getChangeToAnonymousUserURL, this);
            this.removeAccountId = __bind(this.removeAccountId, this);
            this.clearMessages = __bind(this.clearMessages, this);
            this.getOrders = __bind(this.getOrders, this);
            this.startTransaction = __bind(this.startTransaction, this);
            this.getProfileByEmail = __bind(this.getProfileByEmail, this);
            this.getAddressInformation = __bind(this.getAddressInformation, this);
            this.simulateShipping = __bind(this.simulateShipping, this);
            this.calculateShipping = __bind(this.calculateShipping, this);
            this.removeGiftRegistry = __bind(this.removeGiftRegistry, this);
            this.removeDiscountCoupon = __bind(this.removeDiscountCoupon, this);
            this.addDiscountCoupon = __bind(this.addDiscountCoupon, this);
            this.removeBundleItemAttachment = __bind(this.removeBundleItemAttachment, this);
            this.addBundleItemAttachment = __bind(this.addBundleItemAttachment, this);
            this.removeItemAttachment = __bind(this.removeItemAttachment, this);
            this.addItemAttachment = __bind(this.addItemAttachment, this);
            this.removeManualPrice = __bind(this.removeManualPrice, this);
            this.setManualPrice = __bind(this.setManualPrice, this);
            this.changeItemsOrdination = __bind(this.changeItemsOrdination, this);
            this.cloneItem = __bind(this.cloneItem, this);
            this.removeAllItems = __bind(this.removeAllItems, this);
            this.removeItems = __bind(this.removeItems, this);
            this.updateItems = __bind(this.updateItems, this);
            this.addToCart = __bind(this.addToCart, this);
            this.removeOffering = __bind(this.removeOffering, this);
            this.addOffering = __bind(this.addOffering, this);
            this.addOfferingWithInfo = __bind(this.addOfferingWithInfo, this);
            this.updateSelectableGifts = __bind(this.updateSelectableGifts, this);
            this.sendLocale = __bind(this.sendLocale, this);
            this.sendAttachment = __bind(this.sendAttachment, this);
            this.getOrderForm = __bind(this.getOrderForm, this);
            this._updateOrderForm = __bind(this._updateOrderForm, this);
            this._broadcastOrderFormUnlessPendingRequests = __bind(this._broadcastOrderFormUnlessPendingRequests, this);
            this._decreasePendingRequests = __bind(this._decreasePendingRequests, this);
            this._increasePendingRequests = __bind(this._increasePendingRequests, this);
            this._cacheOrderForm = __bind(this._cacheOrderForm, this);
            if (options.hostURL) {
                HOST_URL = options.hostURL;
            }
            if (options.ajax) {
                this.ajax = options.ajax;
            } else if (window.AjaxQueue) {
                this.ajax = window.AjaxQueue($.ajax);
            } else {
                this.ajax = $.ajax;
            }
            this.promise = options.promise || $.when;
            this.CHECKOUT_ID = 'checkout';
            this.orderForm = void 0;
            this.orderFormId = void 0;
            this._pendingRequestCounter = 0;
            this._urlToRequestMap = {};
            this._allOrderFormSections = ['items', 'totalizers', 'clientProfileData', 'shippingData', 'paymentData', 'sellers', 'messages', 'marketingData', 'clientPreferencesData', 'storePreferencesData', 'giftRegistryData', 'ratesAndBenefitsData', 'openTextField', 'commercialConditionData', 'customData'];
        }

        /*
        PRIVATE METHODS
        */


        Checkout.prototype._cacheOrderForm = function (data) {
            this.orderFormId = data.orderFormId;
            return this.orderForm = data;
        };

        Checkout.prototype._increasePendingRequests = function (options) {
            this._pendingRequestCounter++;
            return $(window).trigger(events.REQUEST_BEGIN, [options]);
        };

        Checkout.prototype._decreasePendingRequests = function () {
            this._pendingRequestCounter--;
            return $(window).trigger(events.REQUEST_END, arguments);
        };

        Checkout.prototype._broadcastOrderFormUnlessPendingRequests = function (orderForm) {
            if (this._pendingRequestCounter !== 0) {
                return;
            }
            return $(window).trigger(events.ORDER_FORM_UPDATED, [orderForm]);
        };

        Checkout.prototype._orderFormHasExpectedSections = function (orderForm, sections) {
            var section, _i, _len;
            if (!orderForm || !orderForm instanceof Object) {
                return false;
            }
            for (_i = 0, _len = sections.length; _i < _len; _i++) {
                section = sections[_i];
                if (!orderForm[section]) {
                    return false;
                }
            }
            return true;
        };

        Checkout.prototype._updateOrderForm = function (options) {
            var xhr, _ref,
                _this = this;
            if (!(options != null ? options.url : void 0)) {
                throw new Error("options.url is required when sending request");
            }
            options.type || (options.type = 'POST');
            options.headers = {
                "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                "x-origin": "x-requested-with",
            }
            options.contentType || (options.contentType = 'application/json; charset=utf-8');
            options.dataType || (options.dataType = 'json');
            this._increasePendingRequests(options);
            xhr = this.ajax(options);
            if ((_ref = this._urlToRequestMap[options.url]) != null) {
                _ref.abort();
            }
            this._urlToRequestMap[options.url] = xhr;
            xhr.always(function () {
                return delete _this._urlToRequestMap[options.url];
            });
            xhr.always(this._decreasePendingRequests);
            xhr.done(this._cacheOrderForm);
            xhr.done(this._broadcastOrderFormUnlessPendingRequests);
            return xhr;
        };

        /*
        PUBLIC METHODS
        */


        Checkout.prototype.getOrderForm = function (expectedFormSections) {
            var checkoutRequest, xhr;
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            if (this._orderFormHasExpectedSections(this.orderForm, expectedFormSections)) {
                return this.promise(this.orderForm);
            } else {
                checkoutRequest = {
                    expectedOrderFormSections: expectedFormSections
                };
                xhr = this.ajax({
                    url: this._getOrderFormURLWithId(),
                    type: 'POST',
                    headers: {
                        "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                        "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                        "x-origin": "x-requested-with",
                    },
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify(checkoutRequest)
                });
                xhr.done(this._cacheOrderForm);
                return xhr.done(this._broadcastOrderFormUnlessPendingRequests);
            }
        };

        Checkout.prototype.sendAttachment = function (attachmentId, attachment, expectedOrderFormSections) {
            var d;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            if (attachmentId === void 0 || attachment === void 0) {
                d = $.Deferred();
                d.reject("Invalid arguments");
                return d.promise();
            }
            attachment['expectedOrderFormSections'] = expectedOrderFormSections;
            return this._updateOrderForm({
                url: this._getSaveAttachmentURL(attachmentId),
                data: JSON.stringify(attachment)
            });
        };

        Checkout.prototype.sendLocale = function (locale) {
            if (locale == null) {
                locale = 'pt-BR';
            }
            return this.sendAttachment('clientPreferencesData', {
                locale: locale
            }, []);
        };

        Checkout.prototype.updateSelectableGifts = function (list, selectedGifts, expectedOrderFormSections) {
            var updateSelectableGiftsRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            updateSelectableGiftsRequest = {
                id: list,
                selectedGifts: selectedGifts,
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._getUpdateSelectableGifts(list),
                data: JSON.stringify(updateSelectableGiftsRequest)
            });
        };

        Checkout.prototype.addOfferingWithInfo = function (offeringId, offeringInfo, itemIndex, expectedOrderFormSections) {
            var updateItemsRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            updateItemsRequest = {
                id: offeringId,
                info: offeringInfo,
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._getAddOfferingsURL(itemIndex),
                data: JSON.stringify(updateItemsRequest)
            });
        };

        Checkout.prototype.addOffering = function (offeringId, itemIndex, expectedOrderFormSections) {
            return this.addOfferingWithInfo(offeringId, null, itemIndex, expectedOrderFormSections);
        };

        Checkout.prototype.removeOffering = function (offeringId, itemIndex, expectedOrderFormSections) {
            var updateItemsRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            updateItemsRequest = {
                Id: offeringId,
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._getRemoveOfferingsURL(itemIndex, offeringId),
                data: JSON.stringify(updateItemsRequest)
            });
        };

        Checkout.prototype.addToCart = function (items, expectedOrderFormSections, salesChannel) {
            var addToCartRequest, salesChannelQueryString;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            addToCartRequest = {
                orderItems: items,
                expectedOrderFormSections: expectedOrderFormSections
            };
            salesChannelQueryString = '';
            if (salesChannel) {
                salesChannelQueryString = '?sc=' + salesChannel;
            }
            return this._updateOrderForm({
                url: this._getAddToCartURL() + salesChannelQueryString,
                data: JSON.stringify(addToCartRequest)
            });
        };

        Checkout.prototype.updateItems = function (items, expectedOrderFormSections, splitItem) {
            var updateItemsRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            if (splitItem == null) {
                splitItem = true;
            }
            updateItemsRequest = {
                orderItems: items,
                expectedOrderFormSections: expectedOrderFormSections,
                noSplitItem: !splitItem
            };
            return this._updateOrderForm({
                url: this._getUpdateItemURL(),
                data: JSON.stringify(updateItemsRequest)
            });
        };

        Checkout.prototype.removeItems = function (items, expectedOrderFormSections) {
            var i, item, itemsToRemove, _i, _len;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            if (items && items.length === 0) {
                return this.getOrderForm(expectedOrderFormSections);
            }
            itemsToRemove = [];
            for (i = _i = 0, _len = items.length; _i < _len; i = ++_i) {
                item = items[i];
                itemsToRemove.push({
                    index: item.index,
                    quantity: 0
                });
            }
            return this.updateItems(itemsToRemove, expectedOrderFormSections);
        };

        Checkout.prototype.removeAllItems = function (expectedOrderFormSections) {
            var _this = this;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            return this.getOrderForm(['items']).then(function (orderForm) {
                var i, item, items, itemsToRemove, _i, _len;
                items = orderForm.items;
                if (items && items.length === 0) {
                    return orderForm;
                }
                itemsToRemove = [];
                for (i = _i = 0, _len = items.length; _i < _len; i = ++_i) {
                    item = items[i];
                    itemsToRemove.push({
                        index: i,
                        quantity: 0
                    });
                }
                return _this.updateItems(itemsToRemove, expectedOrderFormSections);
            });
        };

        Checkout.prototype.cloneItem = function (itemIndex, newItemsOptions, expectedFormSections) {
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            return this._updateOrderForm({
                url: this._getCloneItemURL(itemIndex),
                data: JSON.stringify(newItemsOptions)
            });
        };

        Checkout.prototype.changeItemsOrdination = function (criteria, ascending, expectedOrderFormSections) {
            var changeItemsOrdinationRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            changeItemsOrdinationRequest = {
                criteria: criteria,
                ascending: ascending,
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._getChangeOrdinationURL(),
                data: JSON.stringify(changeItemsOrdinationRequest)
            });
        };

        Checkout.prototype.setManualPrice = function (itemIndex, manualPrice) {
            var setManualPriceRequest;
            setManualPriceRequest = {
                price: manualPrice
            };
            return this._updateOrderForm({
                url: this._manualPriceURL(itemIndex),
                type: 'PUT',
                headers: {
                    "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                    "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                    "x-origin": "x-requested-with",
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(setManualPriceRequest)
            });
        };

        Checkout.prototype.removeManualPrice = function (itemIndex) {
            return this._updateOrderForm({
                url: this._manualPriceURL(itemIndex),
                type: 'DELETE',
                headers: {
                    "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                    "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                    "x-origin": "x-requested-with",
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            });
        };

        Checkout.prototype.addItemAttachment = function (itemIndex, attachmentName, content, expectedFormSections, splitItem) {
            var dataRequest;
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            if (splitItem == null) {
                splitItem = true;
            }
            dataRequest = {
                content: content,
                expectedOrderFormSections: expectedFormSections,
                noSplitItem: !splitItem
            };
            return this._updateOrderForm({
                url: this._getItemAttachmentURL(itemIndex, attachmentName),
                data: JSON.stringify(dataRequest)
            });
        };

        Checkout.prototype.removeItemAttachment = function (itemIndex, attachmentName, content, expectedFormSections) {
            var dataRequest;
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            dataRequest = {
                content: content,
                expectedOrderFormSections: expectedFormSections
            };
            return this._updateOrderForm({
                url: this._getItemAttachmentURL(itemIndex, attachmentName),
                type: 'DELETE',
                data: JSON.stringify(dataRequest)
            });
        };

        Checkout.prototype.addBundleItemAttachment = function (itemIndex, bundleItemId, attachmentName, content, expectedFormSections) {
            var dataRequest;
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            dataRequest = {
                content: content,
                expectedOrderFormSections: expectedFormSections
            };
            return this._updateOrderForm({
                url: this._getBundleItemAttachmentURL(itemIndex, bundleItemId, attachmentName),
                data: JSON.stringify(dataRequest)
            });
        };

        Checkout.prototype.removeBundleItemAttachment = function (itemIndex, bundleItemId, attachmentName, content, expectedFormSections) {
            var dataRequest;
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            dataRequest = {
                content: content,
                expectedOrderFormSections: expectedFormSections
            };
            return this._updateOrderForm({
                url: this._getBundleItemAttachmentURL(itemIndex, bundleItemId, attachmentName),
                type: 'DELETE',
                data: JSON.stringify(dataRequest)
            });
        };

        Checkout.prototype.addDiscountCoupon = function (couponCode, expectedOrderFormSections) {
            var couponCodeRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            couponCodeRequest = {
                text: couponCode,
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._getAddCouponURL(),
                data: JSON.stringify(couponCodeRequest)
            });
        };

        Checkout.prototype.removeDiscountCoupon = function (expectedOrderFormSections) {
            return this.addDiscountCoupon('', expectedOrderFormSections);
        };

        Checkout.prototype.removeGiftRegistry = function (expectedFormSections) {
            var checkoutRequest;
            if (expectedFormSections == null) {
                expectedFormSections = this._allOrderFormSections;
            }
            checkoutRequest = {
                expectedOrderFormSections: expectedFormSections
            };
            return this._updateOrderForm({
                url: this._getRemoveGiftRegistryURL(),
                data: JSON.stringify(checkoutRequest)
            });
        };

        Checkout.prototype.calculateShipping = function (address) {
            return this.sendAttachment('shippingData', {
                address: address
            });
        };

        Checkout.prototype.simulateShipping = function () {
            var country, dataRequest, items, orderFormId, postalCode, salesChannel, salesChannelQueryString, shippingData, _ref, _ref1, _ref2;
            dataRequest = null;
            _ref = [arguments[2], arguments[3]], country = _ref[0], salesChannel = _ref[1];
            if (Array.isArray(arguments[0])) {
                console.warn("Calling simulateShipping with a list of items and postal code is deprecated.\n" + "Call it with shippingData and orderFormId instead.");
                _ref1 = [arguments[0], arguments[1]], items = _ref1[0], postalCode = _ref1[1];
                dataRequest = {
                    items: items,
                    postalCode: postalCode,
                    country: country
                };
            } else {
                _ref2 = [arguments[0], arguments[1]], shippingData = _ref2[0], orderFormId = _ref2[1];
                dataRequest = {
                    shippingData: shippingData,
                    orderFormId: orderFormId,
                    country: country
                };
            }
            salesChannelQueryString = '';
            if (salesChannel) {
                salesChannelQueryString = '?sc=' + salesChannel;
            }
            return this.ajax({
                url: this._getSimulationURL() + salesChannelQueryString,
                type: 'POST',
                headers: {
                    "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                    "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                    "x-origin": "x-requested-with",
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(dataRequest)
            });
        };

        Checkout.prototype.getAddressInformation = function (address) {
            return this.ajax({
                url: this._getPostalCodeURL(address.postalCode, address.country),
                type: 'GET',
                timeout: 20000
            });
        };

        Checkout.prototype.getProfileByEmail = function (email, salesChannel) {
            if (salesChannel == null) {
                salesChannel = 1;
            }
            return this.ajax({
                url: this._getProfileURL(),
                type: 'GET',
                data: {
                    email: email,
                    sc: salesChannel
                }
            });
        };

        Checkout.prototype.startTransaction = function (value, referenceValue, interestValue, savePersonalData, optinNewsLetter, expectedOrderFormSections) {
            var transactionRequest;
            if (savePersonalData == null) {
                savePersonalData = false;
            }
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            transactionRequest = {
                referenceId: this._getOrderFormId(),
                savePersonalData: savePersonalData,
                optinNewsLetter: optinNewsLetter,
                value: value,
                referenceValue: referenceValue,
                interestValue: interestValue,
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._startTransactionURL(),
                data: JSON.stringify(transactionRequest)
            });
        };

        Checkout.prototype.getOrders = function (orderGroupId) {
            return this.ajax({
                url: this._getOrdersURL(orderGroupId),
                type: 'GET',
                headers: {
                    "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                    "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                    "x-origin": "x-requested-with",
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            });
        };

        Checkout.prototype.clearMessages = function (expectedOrderFormSections) {
            var clearMessagesRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            clearMessagesRequest = {
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this.ajax({
                url: this._getOrderFormURL() + '/messages/clear',
                type: 'POST',
                headers: {
                    "x-vtex-api-appKey": "vtexappkey-obasuplementos-GPVOUL",
                    "x-vtex-api-appToken": "CCGFDHHYJZFTKUWPDXAIMBJWVTZRVMAISKKACDFSRSDIZAYGRKQPEZXBTKJKHPDXZWBZJWMASHQTYBWUUSAKVKDSNJHRTVKBPFJDZZXVYQWXJDCSOOPPPSBOSJLZOVGX",
                    "x-origin": "x-requested-with",
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(clearMessagesRequest)
            });
        };

        Checkout.prototype.removeAccountId = function (accountId, expectedOrderFormSections) {
            var removeAccountIdRequest;
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            removeAccountIdRequest = {
                expectedOrderFormSections: expectedOrderFormSections
            };
            return this._updateOrderForm({
                url: this._getOrderFormURL() + '/paymentAccount/' + accountId + '/remove',
                data: JSON.stringify(removeAccountIdRequest)
            });
        };

        Checkout.prototype.getChangeToAnonymousUserURL = function () {
            return HOST_URL + '/checkout/changeToAnonymousUser/' + this._getOrderFormId();
        };

        Checkout.prototype.getLogoutURL = Checkout.prototype.getChangeToAnonymousUserURL;

        Checkout.prototype.replaceSKU = function (items, expectedOrderFormSections, splitItem) {
            if (expectedOrderFormSections == null) {
                expectedOrderFormSections = this._allOrderFormSections;
            }
            if (splitItem == null) {
                splitItem = true;
            }
            return this._updateOrderForm({
                url: this._getAddToCartURL(),
                type: 'PATCH',
                data: JSON.stringify({
                    "orderItems": items,
                    "expectedOrderFormSections": expectedOrderFormSections,
                    "noSplitItem": !splitItem
                })
            });
        };

        Checkout.prototype._getOrderFormId = function () {
            return this._getOrderFormIdFromURL() || this.orderFormId || this._getOrderFormIdFromCookie() || '';
        };

        Checkout.prototype._getOrderFormIdFromCookie = function () {
            var COOKIE_NAME, COOKIE_ORDER_FORM_ID_KEY, cookie;
            COOKIE_NAME = 'checkout.vtex.com';
            COOKIE_ORDER_FORM_ID_KEY = '__ofid';
            cookie = readCookie(COOKIE_NAME);
            if (cookie === void 0 || cookie === '') {
                return void 0;
            }
            return readSubcookie(COOKIE_ORDER_FORM_ID_KEY, cookie);
        };

        Checkout.prototype._getOrderFormIdFromURL = function () {
            return urlParam('orderFormId');
        };

        Checkout.prototype._getBaseOrderFormURL = function () {
            return HOST_URL + '/api/checkout/pub/orderForm';
        };

        Checkout.prototype._getOrderFormURL = function () {
            var id;
            id = this._getOrderFormId();
            if (id === '') {
                throw new Error("This method requires an OrderForm. Use getOrderForm beforehand.");
            }
            return "" + (this._getBaseOrderFormURL()) + "/" + id;
        };

        Checkout.prototype._getOrderFormURLWithId = function () {
            var id;
            id = this._getOrderFormId();
            if (id) {
                return "" + (this._getBaseOrderFormURL()) + "/" + id;
            } else {
                return this._getBaseOrderFormURL();
            }
        };

        Checkout.prototype._getSaveAttachmentURL = function (attachmentId) {
            return this._getOrderFormURL() + '/attachments/' + attachmentId;
        };

        Checkout.prototype._getAddOfferingsURL = function (itemIndex) {
            return this._getOrderFormURL() + '/items/' + itemIndex + '/offerings';
        };

        Checkout.prototype._getRemoveOfferingsURL = function (itemIndex, offeringId) {
            return this._getOrderFormURL() + '/items/' + itemIndex + '/offerings/' + offeringId + '/remove';
        };

        Checkout.prototype._getBundleItemAttachmentURL = function (itemIndex, bundleItemId, attachmentName) {
            return this._getOrderFormURL() + '/items/' + itemIndex + '/bundles/' + bundleItemId + '/attachments/' + attachmentName;
        };

        Checkout.prototype._getItemAttachmentURL = function (itemIndex, attachmentName) {
            return this._getOrderFormURL() + '/items/' + itemIndex + '/attachments/' + attachmentName;
        };

        Checkout.prototype._getChangeOrdinationURL = function () {
            return this._getOrderFormURL() + '/itemsOrdination';
        };

        Checkout.prototype._getAddCouponURL = function () {
            return this._getOrderFormURL() + '/coupons';
        };

        Checkout.prototype._startTransactionURL = function () {
            return this._getOrderFormURL() + '/transaction';
        };

        Checkout.prototype._getUpdateItemURL = function () {
            return this._getOrderFormURL() + '/items/update/';
        };

        Checkout.prototype._getCloneItemURL = function (itemIndex) {
            return this._getOrderFormURL() + '/items/' + itemIndex + '/clone';
        };

        Checkout.prototype._getUpdateSelectableGifts = function (list) {
            return this._getOrderFormURL() + '/selectable-gifts/' + list;
        };

        Checkout.prototype._getRemoveGiftRegistryURL = function () {
            return this._getBaseOrderFormURL() + ("/giftRegistry/" + (this._getOrderFormId()) + "/remove");
        };

        Checkout.prototype._getAddToCartURL = function () {
            return this._getOrderFormURL() + '/items';
        };

        Checkout.prototype._manualPriceURL = function (itemIndex) {
            return this._getOrderFormURL() + '/items/' + itemIndex + '/price';
        };

        Checkout.prototype._getOrdersURL = function (orderGroupId) {
            return HOST_URL + '/api/checkout/pub/orders/order-group/' + orderGroupId;
        };

        Checkout.prototype._getSimulationURL = function () {
            return HOST_URL + '/api/checkout/pub/orderForms/simulation';
        };

        Checkout.prototype._getPostalCodeURL = function (postalCode, countryCode) {
            if (postalCode == null) {
                postalCode = '';
            }
            if (countryCode == null) {
                countryCode = 'BRA';
            }
            return HOST_URL + '/api/checkout/pub/postal-code/' + countryCode + '/' + postalCode;
        };

        Checkout.prototype._getProfileURL = function () {
            return HOST_URL + '/api/checkout/pub/profiles/';
        };

        Checkout.prototype._getGatewayCallbackURL = function () {
            return HOST_URL + '/checkout/gatewayCallback/{0}/{1}/{2}';
        };

        return Checkout;

    })();

    window.vtexjs || (window.vtexjs = {});

    window.vtexjs.Checkout = Checkout;

    window.vtexjs.checkout = new window.vtexjs.Checkout();

}).call(this);