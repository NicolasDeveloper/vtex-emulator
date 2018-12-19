window.vtexIdVersion = "3.15.16",
!function(e, t) {
    "use strict";
    var o = function(e) {
        if ("object" != typeof e.document)
            throw new Error("Cookies.js requires a `window` with a `document` object");
        var o = function(e, t, n) {
            return 1 === arguments.length ? o.get(e) : o.set(e, t, n)
        };
        return o._document = e.document,
        o._cacheKeyPrefix = "cookey.",
        o.defaults = {
            path: "/",
            secure: !1
        },
        o.get = function(e) {
            return o._cachedDocumentCookie !== o._document.cookie && o._renewCache(),
            o._cache[o._cacheKeyPrefix + e]
        }
        ,
        o.set = function(e, n, r) {
            return r = o._getExtendedOptions(r),
            r.expires = o._getExpiresDate(n === t ? -1 : r.expires),
            o._document.cookie = o._generateCookieString(e, n, r),
            o
        }
        ,
        o.expire = function(e, n) {
            return o.set(e, t, n)
        }
        ,
        o._getExtendedOptions = function(e) {
            return {
                path: e && e.path || o.defaults.path,
                domain: e && e.domain || o.defaults.domain,
                expires: e && e.expires || o.defaults.expires,
                secure: e && e.secure !== t ? e.secure : o.defaults.secure
            }
        }
        ,
        o._isValidDate = function(e) {
            return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
        }
        ,
        o._getExpiresDate = function(e, t) {
            switch (t = t || new Date,
            typeof e) {
            case "number":
                e = new Date(t.getTime() + 1e3 * e);
                break;
            case "string":
                e = new Date(e)
            }
            if (e && !o._isValidDate(e))
                throw new Error("`expires` parameter cannot be converted to a valid Date instance");
            return e
        }
        ,
        o._generateCookieString = function(e, t, o) {
            e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent),
            e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"),
            t = (t + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent),
            o = o || {};
            var n = e + "=" + t;
            return n += o.path ? ";path=" + o.path : "",
            n += o.domain ? ";domain=" + o.domain : "",
            n += o.expires ? ";expires=" + o.expires.toUTCString() : "",
            n += o.secure ? ";secure" : ""
        }
        ,
        o._getCacheFromString = function(e) {
            for (var n = {}, r = e ? e.split("; ") : [], i = 0; i < r.length; i++) {
                var c = o._getKeyValuePairFromCookieString(r[i]);
                n[o._cacheKeyPrefix + c.key] === t && (n[o._cacheKeyPrefix + c.key] = c.value)
            }
            return n
        }
        ,
        o._getKeyValuePairFromCookieString = function(e) {
            var t = e.indexOf("=");
            t = 0 > t ? e.length : t;
            var o = ""
              , n = "";
            try {
                o = decodeURIComponent(e.substr(0, t)),
                n = decodeURIComponent(e.substr(t + 1))
            } catch (r) {
                o = e.substr(0, t),
                n = e.substr(t + 1)
            }
            return {
                key: o,
                value: n
            }
        }
        ,
        o._renewCache = function() {
            o._cache = o._getCacheFromString(o._document.cookie),
            o._cachedDocumentCookie = o._document.cookie
        }
        ,
        o._areEnabled = function() {
            var e = "cookies.js"
              , t = "1" === o.set(e, 1).get(e);
            return o.expire(e),
            t
        }
        ,
        o.enabled = o._areEnabled(),
        o
    }
      , n = "object" == typeof e.document ? o(e) : o;
    "function" == typeof define && define.amd ? define(function() {
        return n
    }) : "object" == typeof exports ? ("object" == typeof module && "object" == typeof module.exports && (exports = module.exports = n),
    exports.Cookies = n) : e.Cookies = n
}("undefined" == typeof window ? this : window),
function() {
    window.vtex = window.vtex || {},
    window.vtex.vtexid = window.vtex.vtexid || {},
    window.vtex.vtexid.VtexidAppUtils = function() {
        var self = this;
        return self.getMultiScripts = function(arr) {
            var _arr = $.map(arr, function(scr) {
                return $.getScript(scr)
            });
            return _arr.push($.Deferred(function(deferred) {
                $(deferred.resolve)
            })),
            $.when.apply($, _arr)
        }
        ,
        self.logger = function() {
            Cookies.get("vidui-log") && window.console && window.console.log && console.log("%c VTEXID ", "background: #F71963; color: #fff", arguments ? arguments[0] : "no message", "\n" + JSON.stringify(arguments, null, "\t"))
        }
        ,
        self.isAdminEnviroment = function(scope) {
            return null === scope || void 0 === scope
        }
        ,
        self.calculateExpiration = function(expire) {
            var expireInMiliseconds = 1e3 * (expire || 86400)
              , now = new Date
              , nowInMiliseconds = now.getTime();
            return new Date(nowInMiliseconds + expireInMiliseconds)
        }
        ,
        self.tryParseAuthToken = function(token) {
            if (!window.atob)
                return null;
            if (!token.replace(" ", ""))
                return null;
            var sections = token.split(".");
            return sections && 3 === sections.length && sections[1] ? JSON.parse(window.atob(sections[1])) : null
        }
        ,
        self.tryGetAuthTokenExpiration = function(token, fallbackExpire) {
            return token && token.exp && token.exp > 0 ? new Date(1e3 * token.exp) : self.calculateExpiration(fallbackExpire)
        }
        ,
        self.getCookie = function(name) {
            var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return v ? v[2] : null
        }
        ,
        self.setCookie = function(key, value, domain, expire) {
            if (!key || !value)
                return !1;
            var authToken = self.tryParseAuthToken(value)
              , _path = "/"
              , _expires = self.tryGetAuthTokenExpiration(authToken, expire).toUTCString()
              , _key = key
              , _value = value.trim()
              , cookie = _key + "=" + _value;
            cookie += _path ? ";path=" + _path : "",
            cookie += _expires ? ";expires=" + _expires : "",
            document.cookie = cookie,
            self.sendRCMetric("SetCookie", {
                cookie: cookie.replace(_value, "<value>"),
                expires: expire || NaN
            }),
            self.logger("Setando cookie " + key)
        }
        ,
        self.eventPub = function(_event, data) {
            return !!_event && (self.logger("Disparando evento " + _event),
            $(window).trigger(_event, data))
        }
        ,
        self.getReturnUrl = function() {
            return window.location.search.indexOf("ReturnUrl=") != -1 && window.location.search.split("ReturnUrl=")[1] ? decodeURIComponent(window.location.search.split("ReturnUrl=")[1].split("&")[0] + window.location.hash) : window.location.search.indexOf("returnUrl=") != -1 && window.location.search.split("returnUrl=")[1] ? decodeURIComponent(window.location.search.split("returnUrl=")[1].split("&")[0] + window.location.hash) : void 0
        }
        ,
        self.getRedirectUrl = function() {
            return window.location.search.indexOf("RedirectUrl=") != -1 ? (window.location.search.split("RedirectUrl=")[1] && console.log("3", decodeURIComponent(window.location.search.split("RedirectUrl=")[1].split("&")[0]) + window.location.hash),
            decodeURIComponent(window.location.search.split("RedirectUrl=")[1].split("&")[0]) + window.location.hash) : window.location.search.indexOf("redirectUrl=") != -1 ? (window.location.search.split("redirectUrl=")[1] && console.log("4", decodeURIComponent(window.location.search.split("redirectUrl=")[1].split("&")[0]) + window.location.hash),
            decodeURIComponent(window.location.search.split("redirectUrl=")[1].split("&")[0]) + window.location.hash) : void 0
        }
        ,
        self.getQSParams = function(url) {
            var hash, vars = {}, hashes = url.slice(url.indexOf("?") + 1);
            hashes = hashes.split("&");
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split("=");
                var keyQs, valueQs, sep, indexOfSep;
                try {
                    keyQs = decodeURIComponent(hash[0]),
                    valueQs = decodeURIComponent(hash[1])
                } catch (e) {
                    break
                }
                if ("authCookieValue" == keyQs && (sep = "==",
                indexOfSep = valueQs.indexOf(sep),
                valueQs = valueQs.substring(0, indexOfSep != -1 ? indexOfSep + sep.length : valueQs.length)),
                "email" == keyQs) {
                    var formatedEmail = valueQs.split("/#/");
                    valueQs = formatedEmail[0]
                }
                "authToken" != keyQs && "emailSent" != keyQs && "authStatus" != keyQs || (sep = "#",
                indexOfSep = valueQs.indexOf(sep),
                valueQs = valueQs.substring(0, indexOfSep != -1 ? indexOfSep : valueQs.length)),
                vars[keyQs] = valueQs
            }
            return vars
        }
        ,
        self.shouldReturnToOldAdmin = function() {
            self.logger("Checando se o usuário deve ser redirecionado para o admin antigo.");
            var returnUrl = self.getReturnUrl();
            if (!returnUrl)
                return self.logger("ReturnUrl é inválido. Usuário não deve ser redirecionado para o admin antigo."),
                !1;
            self.logger("Analisando returnUrl.", {
                returnUrl: returnUrl
            });
            var returnUrlAccount = returnUrl.replace("https://", "").replace("http://", "").split(".")[0].toLowerCase()
              , accountName = window.location.host.split(".")[0].toLowerCase();
            self.logger("Comparando nome das contas.", {
                returnUrl: returnUrl,
                returnUrlAccount: returnUrlAccount,
                accountName: accountName
            });
            var shouldReturn = returnUrlAccount === accountName && returnUrl.toLowerCase().indexOf("vtexcommercestable.com.br/admin") !== -1;
            return shouldReturn ? self.logger("Usuário deve ser redirecionado para o admin antigo.") : self.logger("Usuário não deve ser redirecionado para o admin antigo."),
            shouldReturn
        }
        ,
        self.shouldRedirectToMyVTEX = function() {
            self.logger("Checando se o usuário deve ser redirecionado para myvtex.");
            var shouldRedirect = 0 === window.location.pathname.toLowerCase().indexOf("/admin") && window.location.host.indexOf("vtexcommercestable.com.br") !== -1;
            return shouldRedirect ? self.logger("Usuário deve ser redirecionado para myvtex.") : self.logger("Usuário não deve ser redirecionado para myvtex."),
            shouldRedirect
        }
        ,
        self.sendRCMetric = function(name, data) {
            name && window.vtex.NavigationCapture && window.vtex.NavigationCapture.sendMetric && (data = data || {},
            data.url = window.location.host + window.location.pathname,
            data.version = window.vtexIdVersion,
            data.usesCrossDomain = window.vtex.usesCrossDomain,
            window.vtex.NavigationCapture.sendMetric({
                namespace: "vtexidui",
                name: name,
                value: 1,
                data: data
            }))
        }
        ,
        self
    }
}(),
function() {
    window.vtex = window.vtex || {},
    window.vtex.endpointAPI = window.location.protocol + "//" + window.location.host + "/api/vtexid",
    window.vtex.usesCrossDomain = !1,
    window.vtex.vtexid = window.vtex.vtexid || {},
    window.vtex.vtexid.VtexidAppServices = function() {
        function $request(route, params, successFn, errorFn) {
            utils.logger('Requisitando "' + route + '" com os parâmetros', params),
            params.method && params.method.indexOf("POST") != -1 ? $.ajax({
                url: window.vtex.endpointAPI + route,
                type: "post",
                data: params,
                headers: {
                    "vtex-id-ui-version": window.vtexIdVersion || "MISSING_VERSION"
                },
                xhrFields: {
                    withCredentials: !0
                }
            }).done(function(data) {
                data.authenticationToken || !params.appStart && !params.appLogOut ? successFn(data) : changeSameDomainUrl(route, params, successFn, errorFn)
            }).fail(function(data) {
                200 == data.status || 204 == data.status ? successFn(data) : 404 == data.status ? $changeSameDomainUrl(route, params, successFn, errorFn) : errorFn(data)
            }) : $.ajax({
                url: window.vtex.endpointAPI + route,
                data: params,
                headers: {
                    "vtex-id-ui-version": window.vtexIdVersion || "MISSING_VERSION"
                },
                xhrFields: {
                    withCredentials: !0
                }
            }).done(function(data) {
                data.authenticationToken || !params.appStart && !params.appLogOut ? successFn(data) : changeSameDomainUrl(route, params, successFn, errorFn)
            }).fail(function(data) {
                200 == data.status || 204 == data.status ? successFn(data) : 404 == data.status ? changeSameDomainUrl(route, params, successFn, errorFn) : errorFn(data)
            })
        }
        function changeSameDomainUrl(route, params, successFn, errorFn) {
            window.vtex.endpointAPI = "https://vtexid.vtex.com.br/api/vtexid",
            window.vtex.usesCrossDomain = !0,
            params.appStart && (delete params.appStart,
            $request("/pub/authentication/start", params, successFn, errorFn)),
            params.appLogOut && (delete params.appLogOut,
            $request("/pub/logout", params, successFn, errorFn))
        }
        function pageTransition(page, dontTransition, back, height) {
            var $activePage = $(".vtexIdUI-page-active")
              , $allPages = $(".vtexIdUI-page")
              , $incomingPage = $("#vtexIdUI-" + page);
            if (dontTransition)
                pageTransitionWithoutAnimation($container, $allPages, $incomingPage);
            else {
                animateHeightContainer(height ? height : $incomingPage.height());
                var direction = {
                    leave: "left",
                    enter: "right"
                };
                back && (direction.leave = "right",
                direction.enter = "left"),
                pageTransitionWithAnimation($activePage, $incomingPage, direction)
            }
        }
        function pageTransitionWithoutAnimation(container, pages, incoming) {
            pages.removeClass("vtexIdUI-page-active").addClass("vtexIdUI-page-inactive"),
            incoming.removeClass("vtexIdUI-page-inactive").addClass("vtexIdUI-page-active"),
            setTimeout(function() {
                container.height(incoming.height())
            }, 0)
        }
        function animateHeightContainer(height) {
            setTimeout(function() {
                height || (height = $(".vtexIdUI-page-active").height()),
                $container.animate({
                    height: height
                }, 70)
            }, 0)
        }
        function pageTransitionWithAnimation(active, incoming, direction) {
            active.addClass("vtexIdUI-leave-" + direction.leave),
            incoming.addClass("vtexIdUI-enter-" + direction.enter).removeClass("vtexIdUI-page-inactive"),
            setTimeout(function() {
                active.removeClass("vtexIdUI-page-active").addClass("vtexIdUI-page-inactive").removeClass("vtexIdUI-leave-" + direction.leave),
                incoming.addClass("vtexIdUI-page-active").removeClass("vtexIdUI-enter-" + direction.enter)
            }, transitionsDuration)
        }
        function doFormPost(action, params) {
            var formId = "temporaryform"
              , formEl = $('<form id="' + formId + '" style="display: none;" action="' + action + '" method="POST"></form>');
            params && Object.keys(params).forEach(function(param) {
                formEl.append('<input type="hidden" name="' + param + '" id="' + param + '" value="' + params[param] + '">')
            }),
            formEl.append('<input type="submit" value="Go">'),
            $("body").append(formEl),
            $("#temporaryform").submit()
        }
        var utils = new window.vtex.vtexid.VtexidAppUtils
          , $container = (window.location.href,
        $(".vtexIdUI"))
          , transitionsDuration = 600;
        return {
            startVtexID: function(params, successFn, errorFn) {
                $request("/pub/authentication/start", params, successFn, errorFn)
            },
            logout: function(params, successFn, errorFn) {
                $request("/pub/logout", params, successFn, errorFn)
            },
            sendAccessKey: function(params, successFn, errorFn) {
                params ? params.method = "POST" : params = {
                    method: "POST"
                },
                $request("/pub/authentication/accesskey/send", params, successFn, errorFn)
            },
            sendPhoneNumber: function(params, successFn, errorFn) {
                $request("/pub/mfa/registerphone", params, successFn, errorFn)
            },
            authenticateByAccessKey: function(params, successFn, errorFn) {
                params ? params.method = "POST" : params = {
                    method: "POST"
                },
                $request("/pub/authentication/accesskey/validate", params, successFn, errorFn)
            },
            authenticate: function(params, successFn, errorFn) {
                params ? params.method = "POST" : params = {
                    method: "POST"
                },
                $request("/pub/authentication/classic/validate", params, successFn, errorFn)
            },
            confirmMfaCode: function(params, successFn, errorFn) {
                $request("/pub/mfa/validate", params, successFn, errorFn)
            },
            selectOAuthEmail: function(params, successFn, errorFn) {
                $request("/pub/authentication/oauth/associate", params, successFn, errorFn)
            },
            changePswd: function(params, successFn, errorFn) {
                params ? params.method = "POST" : params = {
                    method: "POST"
                },
                $request("/pub/authentication/classic/setpassword", params, successFn, errorFn)
            },
            resendPhoneMessage: function(params, successFn, errorFn) {
                $request("/pub/mfa/resend", params, successFn, errorFn)
            },
            removeUserAccountMfa: function(params, successFn, errorFn) {
                $request("/pub/mfa/removephone", params, successFn, errorFn)
            },
            registerAuthenticator: function(params, successFn, errorFn) {
                $request("/pub/mfa/registerAuthenticator", params, successFn, errorFn)
            },
            getOAuthUrl: function() {
                return window.vtex.endpointAPI + "/pub/authentication/oauth/redirect"
            },
            changePage: pageTransition,
            fixContainerHeight: animateHeightContainer,
            genericDataError: function() {},
            doFormPost: doFormPost,
            transferToOldAdmin: function(authenticationToken, returnUrl) {
                utils.logger("Requisitando /api/vtexid/pub/authentication/transfer-to com os parâmetros", {
                    authenticationToken: authenticationToken,
                    returnUrl: returnUrl
                }),
                doFormPost("/api/vtexid/pub/authentication/transfer-to", {
                    authenticationToken: authenticationToken,
                    returnUrl: returnUrl
                })
            }
        }
    }
}(),
function() {
    window.vtex = window.vtex || {},
    window.vtex.vtexid = window.vtex.vtexid || {},
    window.vtex.vtexid.VtexidAppAuthModel = function() {
        var defaultLocale = $("html").attr("lang");
        return {
            accountName: null,
            flow: "login",
            canClose: !0,
            scope: null,
            scopeName: null,
            email: null,
            returnUrl: null,
            locale: defaultLocale || navigator.language || navigator.userLanguage,
            token: null,
            contexts: [],
            complementaryDomain: null,
            methods: {
                forceProviders: [],
                oAuthsAvailable: [],
                classicLogin: !1,
                accessKeyLogin: !1,
                guestUser: !1
            }
        }
    }
    ;
    var getContext = function(ctx, availableContexts) {
        if (!ctx || !availableContexts)
            return !1;
        for (var arr = [], i = 0, ilen = ctx.length; i < ilen; i++)
            for (var j = 0, jlen = availableContexts.length; j < jlen; j++)
                ctx[i] === availableContexts[j].name && arr.push(availableContexts[j]);
        return arr
    };
    window.vtex.vtexid.VtexidAppSamlModel = function(idp) {
        return {
            idpName: idp.idpName,
            idpUrl: idp.idpUrl
        }
    }
    ,
    window.vtex.vtexid.VtexidAppOAuthModel = function(data, availableContexts) {
        return {
            className: data.className,
            providerName: data.providerName,
            contexts: getContext(data.expectedContext, availableContexts)
        }
    }
    ,
    window.vtex.vtexid.VtexidAppDefaultModel = function() {
        return {
            active: !1,
            isAdmin: !1
        }
    }
    ,
    window.vtex.vtexid.VtexidAppEventsModel = function() {
        return {
            authenticatedUser: "authenticatedUser.vtexid",
            started: "started.vtexid",
            rendered: "rendered.vtexid",
            closed: "closed.vtexid",
            guestUser: "guestUser.vtexid",
            tokenRefreshed: "tokenRefreshed.vtexid"
        }
    }
}(),
function() {
    window.vtex = window.vtex || {},
    window.vtex.vtexid = window.vtex.vtexid || {},
    window.vtex.vtexid.VtexIdApp = function() {
        function instantiateModules() {
            auth = new vtex.vtexid.VtexidAppAuthModel,
            defaults = new vtex.vtexid.VtexidAppDefaultModel,
            render = new vtex.vtexid.VtexidAppRender(auth)
        }
        function closeApplication() {
            utils.logger("Fechando a interface do VTEXID"),
            $(".vtexIdUI").removeClass("vtexIdUI-show-app"),
            $("#vtexIdUI-global-loader").fadeOut(300, function() {
                $("#vtexIdContainer").remove(),
                $("#vtexIdUI-global-loader").remove()
            }),
            defaults.active = !1,
            utils.logger("Encerrando"),
            instantiateModules()
        }
        function logout(_scope) {
            if (window.location.host.indexOf(".vtexcommercestable.com.br") !== -1) {
                var urlToRedirect = utils.getRedirectUrl() || utils.getReturnUrl() || window.location.protocol + "//" + window.location.host + "/admin/login";
                return void (window.location.href = "/api/vtexid/pub/single-sign-out?urlToRedirect=" + urlToRedirect)
            }
            services.logout({
                scope: _scope,
                appLogOut: !0
            }, function(data) {
                utils.logger("LOGOUT, remove cookie e recarrega página"),
                data.cookieName && Cookies.expire(data.cookieName, {
                    domain: window.location.host,
                    path: "/"
                }),
                data.accountCookieName && Cookies.expire(data.accountCookieName, {
                    domain: window.location.host,
                    path: "/"
                });
                var redirectUrl = utils.getRedirectUrl() || utils.getReturnUrl();
                return redirectUrl ? window.location.href = "/admin/login?ReturnUrl=" + redirectUrl : window.location.reload(!0)
            }),
            function(data) {
                console.log("VTEX ID ERROR - logout")
            }
        }
        function start(options) {
            return utils.eventPub(events.started),
            options = options || {},
            options.userEmail && (options.email = options.userEmail,
            delete options.userEmail),
            defaults.active ? (utils.logger("Processo de autenticação ativo, ignora chamada"),
            !1) : (utils.logger("Inicia autenticação com parâmetros", options),
            defaults.active = !0,
            auth.scope ? scope = auth.scope : auth.scope = scope,
            auth.scopeName ? scopeName = auth.scopeName : auth.scopeName = scopeName,
            window.vtex.conciergeData && (auth.accountName = window.vtex.conciergeData.accountName || null),
            utils.sendRCMetric("ScriptStarted"),
            $.extend(!0, auth, options),
            getAvailableContexts(),
            render.renderPreloader(),
            cleanOldCookies(auth.scope, auth.scopeName),
            void $.when(getStartData(auth), render.applicationLoader()).then(function(data) {
                if (!checkSingleSignon(data)) {
                    if (utils.shouldRedirectToMyVTEX())
                        return void window.location.replace(redirectToMyVTEX());
                    options && options.forceProviders ? ("vtex" == options.forceProviders[0] && options.forceProviders.shift(),
                    auth.methods.forceProviders = options.forceProviders) : data.selectedProvider && (auth.methods.forceProviders = [data.selectedProvider]),
                    auth.methods.classicLogin = data.showClassicAuthentication,
                    auth.methods.accessKeyLogin = data.showAccessKeyAuthentication,
                    auth.methods.oAuthsAvailable = [],
                    auth.methods.samlsAvailable = [];
                    for (var i = 0, len = data.oauthProviders.length; i < len; i++) {
                        var model = new vtex.vtexid.VtexidAppOAuthModel(data.oauthProviders[i],auth.contexts);
                        auth.methods.oAuthsAvailable.push(model)
                    }
                    if (data.samlProviders)
                        for (var i = 0, len = data.samlProviders.length; i < len; i++)
                            auth.methods.samlsAvailable.push(new vtex.vtexid.VtexidAppSamlModel(data.samlProviders[i]));
                    auth.token = data.authenticationToken,
                    render.renderModal(),
                    utils.eventPub(events.rendered)
                }
            }))
        }
        function getStartData(_auth) {
            var dfd = new $.Deferred
              , minToRefresh = 54e4
              , returnOrRedirectUrl = utils.getRedirectUrl() || utils.getReturnUrl() || "/";
            return returnUrl = encodeURIComponent(returnOrRedirectUrl),
            services.startVtexID({
                callbackUrl: window.location.protocol + "//" + window.location.host + "/api/vtexid/pub/authentication/finish",
                scope: _auth.scopeName || _auth.scope,
                user: auth.email,
                locale: _auth.locale,
                accountName: _auth.accountName,
                returnUrl: returnUrl,
                appStart: !0
            }, function(data) {
                utils.sendRCMetric("Start", {
                    status: "success",
                    scope: _auth.scopeName || _auth.scope,
                    returnUrl: decodeURIComponent(returnUrl),
                    error: null
                }),
                utils.eventPub(events.tokenRefreshed, data.authenticationToken),
                dfd.resolve(data)
            }, function(data) {
                utils.sendRCMetric("Start", {
                    status: "error",
                    scope: _auth.scopeName || _auth.scope,
                    returnUrl: decodeURIComponent(returnUrl),
                    error: data
                }),
                console.log("VTEX ID ERROR - startVtexID")
            }),
            window.setTimeout(function() {
                getStartData(_auth)
            }, minToRefresh),
            dfd.promise()
        }
        function checkSingleSignon(data) {
            if (data.authCookie && utils.isAdminEnviroment(auth.scope) && "login" == auth.flow) {
                var localCookie = Cookies.get(data.authCookie.Name);
                if (localCookie = localCookie ? localCookie.replace(/\s/g, "+") : null,
                localCookie !== data.authCookie.Value)
                    utils.logger("Single signon ativo. Usuário ativo em outra aplicação", data),
                    authenticateUser([data.authCookie, data.accountAuthCookie], data.expiresIn);
                else {
                    if (utils.logger("Single signon ativo. Cookie válido presente na página de login"),
                    utils.shouldReturnToOldAdmin())
                        return utils.logger("Transferindo usuário para o admin antigo."),
                        services.transferToOldAdmin(data.authenticationToken, utils.getReturnUrl()),
                        !0;
                    redirectUser()
                }
                return !0
            }
            return !1
        }
        function redirectToMyVTEX() {
            var returnUrl = window.location.protocol + "//" + window.location.host + (utils.getReturnUrl() || utils.getReturnUrl() || "/admin")
              , redirectUrl = "https://" + accountName + ".myvtex.com/_v/auth-server/v1/login?ReturnUrl=" + encodeURIComponent(returnUrl);
            return utils.logger("Redirecionando usuário para myvtex", {
                accountName: accountName,
                returnUrl: returnUrl,
                redirectUrl: redirectUrl
            }),
            redirectUrl
        }
        function authenticateUser(cookies, expire, forceNewPsw) {
            if (cookies && cookies.length > 0)
                for (var i = 0, len = cookies.length; i < len; i++) {
                    var cookie = cookies[i];
                    cookie && utils.setCookie(cookie.Name, cookie.Value, auth.complementaryDomain, expire)
                }
            utils.eventPub(events.authenticatedUser),
            forceNewPsw || redirectUser()
        }
        function redirectUser() {
            utils.eventPub(events.closed);
            var returnUrl = utils.getRedirectUrl() || auth.returnUrl;
            returnUrl ? returnUrl !== window.location.href && (utils.logger("Redirecionando usuário"),
            window.location.href = returnUrl) : (utils.logger("Recarregando a página"),
            document.location.reload(!1)),
            closeApplication()
        }
        function checkUrlParams() {
            var qsParams = utils.getQSParams(window.location.href);
            qsParams.flow && (utils.logger("Iniciando manualmente via querystring com parâmetros ", qsParams),
            start({
                returnUrl: qsParams.returnUrl,
                email: qsParams.email,
                canClose: !1,
                flow: qsParams.flow
            }))
        }
        function listenAjaxErrors() {
            $(document).ajaxError(function(event, jqXHR) {
                if (401 == jqXHR.status || 403 == jqXHR.status) {
                    utils.logger("Erro " + jqXHR.status);
                    var startObj = {
                        canClose: !1,
                        flow: 401 == jqXHR.status ? "login" : "logout"
                    };
                    jqXHR.getResponseHeader("Expected-Provider") && (startObj.forceProviders = [jqXHR.getResponseHeader("Expected-Provider")]),
                    start(startObj)
                }
            })
        }
        function setContexts(contexts) {
            return $.isArray(contexts) ? auth.contexts = auth.contexts.concat(contexts) : auth.contexts.push(contexts)
        }
        function getAvailableContexts() {
            var orderForm = Cookies.get("checkout.vtex.com");
            orderForm && setContexts({
                name: "orderForm",
                value: orderForm.replace("__ofid=", "")
            }),
            auth.scopeName && setContexts({
                name: "accountName",
                value: auth.scopeName
            })
        }
        function removeCookieIfExpired(cookieName, authToken) {
            if (authToken) {
                var cookieExpDate = new Date(1e3 * authToken.exp);
                if (!(cookieExpDate > new Date)) {
                    var expires = (new Date).toUTCString()
                      , host = window.location.host;
                    utils.logger("Erasing cookie: " + cookieName + "=;path=/;expires=" + expires),
                    document.cookie = cookieName + "=;path=/;expires=" + expires,
                    utils.logger("Erasing cookie: " + cookieName + "=;domain=" + host + ";path=/;expires=" + expires),
                    document.cookie = cookieName + "=;domain=" + host + ";path=/;expires=" + expires,
                    utils.logger("Erasing cookie: " + cookieName + "=;domain=." + host + ";path=/;expires=" + expires),
                    document.cookie = cookieName + "=;domain=." + host + ";path=/;expires=" + expires
                }
            }
        }
        function cleanOldCookies(scope, scopeName) {
            utils.logger("Checking age of the token in the cookie VtexIdclientAutCookie");
            var nullScopeCookie = utils.getCookie("VtexIdclientAutCookie");
            nullScopeCookie && removeCookieIfExpired("VtexIdclientAutCookie", utils.tryParseAuthToken(nullScopeCookie)),
            utils.logger("Checking age of the token in the cookie VtexIdclientAutCookie_" + scope);
            var scopeCookie = scope ? utils.getCookie("VtexIdclientAutCookie_" + scope) : null;
            scopeCookie && removeCookieIfExpired("VtexIdclientAutCookie_" + scope, utils.tryParseAuthToken(scopeCookie)),
            utils.logger("Checking age of the token in the cookie VtexIdclientAutCookie_" + scopeName);
            var scopeNameCookie = scopeName ? utils.getCookie("VtexIdclientAutCookie_" + scopeName) : null;
            scopeNameCookie && removeCookieIfExpired("VtexIdclientAutCookie_" + scopeName, utils.tryParseAuthToken(scopeNameCookie))
        }
        function init() {
            auth.locale = window.vtex && window.vtex.locale || auth.locale,
            checkUrlParams(),
            listenAjaxErrors()
        }
        var auth, defaults, render, scope, scopeName, accountName = window.location.host.split(".")[0].toLowerCase(), utils = new vtex.vtexid.VtexidAppUtils, events = new vtex.vtexid.VtexidAppEventsModel, services = new vtex.vtexid.VtexidAppServices;
        return instantiateModules(),
        {
            setScope: function(value) {
                return auth.scope = value
            },
            setScopeName: function(value) {
                return auth.scopeName = value
            },
            setOAuthContexts: setContexts,
            setEmail: function(value) {
                return auth.email = value
            },
            setDefaults: function(defaults) {
                return $.extend(!0, auth, defaults)
            },
            getAuthData: function() {
                return auth
            },
            guestUser: function(value) {
                return auth.methods.guestUser = value
            },
            getQSParams: utils.getQSParams,
            getReturnUrl: utils.getReturnUrl,
            getRedirectUrl: utils.getRedirectUrl,
            logout: logout,
            close: closeApplication,
            authenticateUser: authenticateUser,
            init: init,
            start: start
        }
    }
}(),
function() {
    window.vtex = window.vtex || {},
    window.vtex.vtexid = window.vtex.vtexid || {},
    window.vtex.vtexid.VtexidAppRender = function(auth) {
        var self = this
          , utils = (new vtex.vtexid.VtexidAppEventsModel,
        new vtex.vtexid.VtexidAppUtils)
          , endpoints = {
            io: "https://io.vtex.com.br",
            rss: "//io.vtex.com.br/vtex-id-ui/3.15.16/"
        };
        return self.renderPreloader = function() {
            var $loader = $('<div id="preLoad">').css({
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: 999,
                opacity: "0.7",
                background: 'rgb(255, 255, 255) no-repeat center 35% url("data:image/gif;base64,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")',
                top: 0,
                display: "none",
                left: 0
            }).attr("id", "vtexIdUI-global-loader");
            $("body").append($loader),
            $loader.fadeIn(300)
        }
        ,
        self.applicationLoader = function() {
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: endpoints.rss + "style/vtexid.css"
            }).appendTo("head"),
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: endpoints.io + "/front-libs/intlTelInput/intlTelInput.css?x=1"
            }).appendTo("head");
            var rss = [];
            window.angular || rss.push(endpoints.io + "/front-libs/angular/1.2.11/angular.min.js"),
            window.i18n || rss.push(endpoints.io + "/front-libs/i18next/1.7.2/i18next.min.js"),
            rss.push(endpoints.io + "/front-libs/intlTelInput/intlTelInput.js"),
            rss.push(endpoints.io + "/vtex-id-ui/front-libs/figprt.js"),
            rss.push(endpoints.io + "/rc/rc.js"),
            rss.push("https://www.google.com/recaptcha/api.js?render=explicit");
            var dfd = jQuery.Deferred();
            return utils.getMultiScripts(rss).done(function() {
                utils.getMultiScripts([endpoints.rss + "vtexid-app.min.js"]).done(function() {
                    dfd.resolve(!0)
                })
            }),
            dfd.promise()
        }
        ,
        self.renderModal = function() {
            var $template = $.parseHTML(vtex.vtexid.template)
              , $container = $("<div>").attr("id", "vtexIdContainer").on("click", ".dead-link", function(evt) {
                evt.preventDefault()
            }).append($template);
            $("body").append($container),
            auth.canClose && $container.on("click", ".vtexIdUI-close", function() {
                vtexid.close()
            }),
            window.setTimeout(function() {
                $(".vtexIdUI").addClass("vtexIdUI-show-app")
            }, 0),
            self.translateApp(),
            angular.bootstrap($container, ["vtexidApplication"])
        }
        ,
        self.translateApp = function() {
            var option = {
                lng: auth.locale,
                fallbackLng: !1,
                async: !0,
                customLoad: function(lng, ns, options, loadComplete) {
                    var baseLng = lng.indexOf("-") !== -1 ? lng.split("-")[0] : lng.split("_")[0];
                    window.vtex.i18n = window.vtex.i18n || {},
                    window.vtex.i18n[lng] = window.vtex.i18n[lng] || {},
                    window.vtex.i18n[lng].vtexid = window.vtex.vtexid.locale[baseLng],
                    loadComplete(null, window.vtex.i18n[lng])
                }
            };
            i18n.init(option).done(function() {
                $("#vtexIdContainer").i18n()
            }),
            $(window).on("localeSelected.vtex", function(e, locale) {
                auth.locale = locale,
                i18n.init({
                    lng: locale
                }).done(function() {
                    $("#vtexIdContainer").i18n()
                })
            })
        }
        ,
        self
    }
}();
var vtexid = new window.vtex.vtexid.VtexIdApp;
$(document).ready(function() {
    vtexid.init()
}),
vtex.vtexid.template = Object.create(null),
vtex.vtexid.template = '<div class="vtexIdUI" ng-class="{\'vtexIdUI-shake\': userError}" ng-controller="MainController">\n  <div class="vtexIdUI-loading-modal" id="vtexIdUI-loading-modal"></div>\n  <div class="vtexIdUI-main-content" id="vtexIdUI-main-content">\n    <div>\n<!-- ngInclude: \'includes/access-key-confirmation.html\' -->\n<div class="vtexIdUI-auth-code vtexIdUI-page" ng-controller="AccessKeyConfirmationController" id="vtexIdUI-confirm-access-code">\n  <div class="modal-header">\n    <h4 ng-show="isLoginAccessKey"><span class="vtexIdUI-heading" data-i18n="vtexid.accessTokenTitle">Chave de acesso</span></h4>\n\n    <h4 ng-show="isLinkOAuthFlow"><span class="vtexIdUI-heading" data-i18n="vtexid.confirmationAccount">Confirmação de conta</span></h4>\n\n    <h4 ng-show="isChangePswdAccessKey"><span class="vtexIdUI-heading" data-i18n="vtexid.changePswdTitle">Alterar senha</span></h4>\n\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isValidatingAccessKey}"></div>\n  </div>\n  <form ng-submit="confirmAccessKey()" ng-disabled="isValidatingAccessKey">\n    <div class="modal-body">\n      <label class="info-code text-center" for="access-code">\n        <div class="connect-alert" ng-show="isLinkOAuthFlow">\n          <span data-i18n="vtexid.linkOAuthMsgPT1">Vamos conectar seu registro de</span>\n          <strong>{{shared.selectedProviderName}}</strong> \n          <span data-i18n="vtexid.linkOAuthMsgPT2">ao seu email cadastrado</span>\n          <div class="emails-join">\n            <i class="vtexid-icon-switch center-icon"></i>\n            <div class="email-join-address muted">\n              <i ng-class="vtexid-icon-{{shared.selectedProviderClassName}}"></i>\n              {{shared.oAuthEmail}}\n            </div>\n            <div class="email-join-address muted">\n              <i class="vtexid-icon-mail"></i>\n              {{auth.email}}\n              </div>\n          </div>\n        </div>\n\n        <span data-i18n="vtexid.insertAccessToken"></span><br>\n        <strong>{{auth.email}}</strong>\n      </label>\n      <div class="vtexIdUI-code-field">            \n          <input required autofocus autocomplete="off" id="access-code" class="input-fit input-block-level" ng-model="accessKey" type="text" tabindex="1">  \n      </div>\n      <!-- Usuário informou uma chave de acesso inválida.  -->\n      <div class="alert" ng-show="invalidAccessToken" data-i18n="vtexid.invalidAccessToken">\n      </div>\n      <!-- Usuário informou uma chave de acesso inválida 3 vezes.  -->\n      <div class="alert alert-wrong-access-key" ng-show="tooMuchWrongPswds">\n        <span data-i18n="vtexid.tooMuchWrongPswds"></span>\n        <strong>{{auth.email}}</strong>\n      </div>\n      <p ng-show="blockedUser" class="alert alert-warning">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.blockedUser"></span>\n      </p>\n    </div>\n    <div class="modal-footer">\n      <a class="vtexIdUI-back-link pull-left dead-link" tabindex="3" href="#" ng-click="updatePage(\'auth-selector\', false, true)">\n        <i class="vtexid-icon-arrow-left"></i> \n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n\n      <button ng-disabled="isValidatingAccessKey" ng-if="isLoginAccessKey" class="btn pull-right btn-large btn-success" type="submit" data-i18n="vtexid.send" tabindex="2" id="confirmLoginAccessKeyBtn">Enviar</button>\n\n      <button ng-disabled="isValidatingAccessKey" ng-if="isChangePswdAccessKey" class="btn pull-right btn-large btn-success" type="submit" data-i18n="vtexid.changePswdTitle" tabindex="2" id="changePswdBtn">Alterar senha</button>\n\n      <button ng-disabled="isValidatingAccessKey" ng-if="isLinkOAuthFlow" class="btn pull-right btn-large btn-success" type="submit" data-i18n="vtexid.conectAndEnter" tabindex="2" id="linkOAuthBtn">Conectar e entrar</button>\n    </div>\n   </form>\n</div>\n<!--/ngInclude: \'includes/access-key-confirmation.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/auth-selector.html\' -->\n<div class="vtexIdUI-page" id="vtexIdUI-auth-selector" ng-controller="SelectAuthController">\n  <div class="modal-header">\n    <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n    <div class="vtexIdUI-header row-fluid">\n\n      <div class="vtexIdUI-user" ng-show="auth.email && auth.systemProvidedEmail">\n        <div class="vtexIdUI-user-email pull-left muted">\n          <i class="vtexid-icon-user muted"></i>\n          <span>{{auth.email}}</span>\n        </div>\n      </div>\n    </div>\n    <h4 class="vtexIdUI-heading">\n      <span data-i18n="vtexid.selectAuthOption" ng-show="!auth.title">\n        Use uma das opções a seguir para entrar\n      </span>\n      <span ng-show="auth.title">{{auth.title}}</span>\n    </h4>\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isSendingEmailConfirmation}"></div>\n  </div>\n  <div id="reCaptchaDiv" style="display: none"></div>\n\n  <div class="modal-body">\n    <ul class="vtexIdUI-providers-list">\n\n      <li ng-show="auth.showAccessKeyAuthentication">\n        <button ng-disabled="isSendingEmailConfirmation" class="btn btn-block btn-large btn-success vtexIdUI-send-email" id="loginWithAccessKeyBtn" tabindex="1" ng-click="emailAuth()">\n          <i class="vtexid-icon-mail"></i>\n          <span data-i18n="vtexid.getEmailAccessToken">Receba chave de acesso rápido por email</span>\n        </button>\n      </li>\n\n      <li ng-repeat="provider in auth.oAuthProviders" repeat-done="updateI18n()" ng-cloak="">\n        <button id="vtexIdUI-{{provider.className}}" tabindex="2" class="btn btn-block btn-large vtexIdUI-providers-btn" ng-click="oAuthMethod(provider)">\n          <!-- classe do icone -->\n          <i class="vtexid-icon-{{provider.className}} vtexIdUI-providers-i"></i>\n          <p>\n            <span data-i18n="vtexid.enterWith">Entrar com</span>\n            <span class="vtexIdUI-providers-name">{{provider.providerName}}</span>\n          </p>\n        </button>\n      </li>\n\n      <li ng-repeat="provider in auth.samlProviders" repeat-done="updateI18n()" ng-cloak="">\n        <button id="vtexIdUI-{{provider.idpName}}" tabindex="2" class="btn btn-block btn-large vtexIdUI-providers-btn" ng-click="samlMethod(provider.idpUrl)">\n          <!-- classe do icone -->\n          <i class="vtexid-icon-saml vtexIdUI-providers-i"></i>\n          <p>\n            <span data-i18n="vtexid.enterWith">Entrar com</span>\n            <span class="vtexIdUI-providers-name">{{provider.idpName}}</span>\n          </p>\n        </button>\n      </li>\n\n      <li ng-show="auth.showClassicAuthentication">\n        <button class="btn btn-block btn-large vtexIdUI-others-send-email" tabindex="3" id="loginWithUserAndPasswordBtn" ng-click="classicLogin()">\n          <span data-i18n="vtexid.classicAuthText">Entrar com email e senha</span>\n        </button>\n      </li>\n      <li ng-show="auth.showGuestUserAuthentication">\n        <button class="btn btn-block btn-large vtexIdUI-guest-user" tabindex="4" id="guestUser" ng-click="guestUser()">\n          <span data-i18n="vtexid.guestUser">Continuar sem autenticação</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<!--/ngInclude: \'includes/auth-selector.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/classic-authentication.html\' -->\n<div class="vtexIdUI-classic-login vtexIdUI-page" id="vtexIdUI-classic-login" ng-controller="ClassicLoginController">\n  <form ng-disabled="isSendingClassicForm" ng-submit="authenticatePswd()" id="vtexIdUI-form-classic-login" autocomplete="on" form-autofill-fix="">\n    <div class="modal-header">\n      <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n      <div class="vtexIdUI-header row-fluid">\n        <div class="vtexIdUI-user" ng-show="auth.email && auth.systemProvidedEmail">\n          <div class="vtexIdUI-user-email pull-left muted">\n            <i class="vtexid-icon-user muted"></i>\n            <span>{{auth.email}}</span>\n          </div>\n        </div>\n      </div>\n      <h4>\n        <span class="vtexIdUI-heading" data-i18n="vtexid.classicAuthText">Entrar com email e senha</span>\n      </h4>\n\n      <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isSendingClassicForm}"></div>\n    </div>\n    <div class="modal-body">\n\n      <div class="control-group vtexIdUI-classic-login-control email-model" ng-show="!auth.systemProvidedEmail">\n        <label for="inputEmail" class="control-label">\n          <span data-i18n="vtexid.email">Seu email</span>\n        </label>\n\n        <div class="controls">\n          <input autofocus type="email" tabindex="1" id="inputEmail" ng-model="auth.email" data-i18n="[placeholder]vtexid.egEmail">\n        </div>\n      </div>\n\n      <div class="control-group vtexIdUI-classic-login-control">\n        <label for="inputPassword" class="control-label">\n          <span data-i18n="vtexid.password">Senha</span>\n          <a href="#" data-i18n="vtexid.forgotPswd" class="dead-link pull-right" tabindex="4" ng-click="changePswd()">Esqueci minha senha</a>\n        </label>\n        <div class="controls">\n          <input type="password" tabindex="2" autocomplete="off" required id="inputPassword" ng-model="password">\n        </div>\n        <a data-i18n="vtexid.forgotPswdHelper" href="#" tabindex="5" class="dead-link pull-right" ng-click="changePswd()">Cadastre uma nova senha</a>\n      </div>\n\n      <p ng-show="wrongPswdSubmits == 3" class="alert alert-info">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.threeWrongPswds"></span>\n      </p>\n\n      <p class="alert alert-warning alert-wrong-pswd" ng-show="classicAuthError">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.invalidAuth">O usuário e/ou senha inválidos.</span>\n      </p>\n\n      <p ng-show="userVTEXNotAllowed" class="alert alert-warning">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.methodNotAllowedForVTEXUsers"></span>\n      </p>\n\n      <p ng-show="blockedUser" class="alert alert-warning">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.blockedUser"></span>\n      </p>\n    </div>\n\n\n    <div class="modal-footer">\n      <a class="vtexIdUI-back-link pull-left dead-link" tabindex="6" href="#" ng-show="auth.flow !== \'classicLogin\'" ng-click="updatePage(\'auth-selector\', false, true)">\n        <i class="vtexid-icon-arrow-left"></i>\n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n      <button ng-disabled="isSendingClassicForm" class="btn btn-large btn-success pull-right" type="submit" tabindex="3" data-i18n="vtexid.enter" id="classicLoginBtn">Entrar</button>\n    </div>\n    \n    <p ng-show="isAdmin" class="info-why muted text-center">\n      <small>\n        <!-- <i class="vtexid-icon-lock muted"></i> -->\n        <small data-i18n="vtexid.protectedByRecaptcha"></small> - <a style="font-size: smaller;" href="https://policies.google.com/privacy?hl={{auth.locale}}" target="_blank" data-i18n="vtexid.recaptchaPrivacyLink"></a>\n        - <a style="font-size: smaller;" href="https://policies.google.com/terms?hl={{auth.locale}}" target="_blank" data-i18n="vtexid.recaptchaTermsLink"></a>\n      </small>\n    </p>\n  </form>\n</div>\n<!--/ngInclude: \'includes/classic-authentication.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/confirm-email.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ConfirmEmailController" id="vtexIdUI-email-confirmation">\n  <div class="modal-header">\n    <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n    <h4>\n      <span class="vtexIdUI-heading" data-i18n="vtexid.getEmailTitle">Informe seu email</span>\n    </h4>\n\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isSendingEmailConfirmation}"></div>\n  </div>\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="validateEmail()" autocomplete="on">\n    <div class="modal-body form-vertical">\n      <!-- Usuário informou um email que não é um VtexID válido -->\n      <div class="controls vtexIdUI-email-field">\n        <input autofocus id="appendedInputButton" ng-model="auth.email" tabindex="1" required type="email" data-i18n="[placeholder]vtexid.egEmail" class="input-block-level">\n      </div>\n      <p class="alert" ng-show="invalidEmail" data-i18n="vtexid.invalidEmail"></p>\n      <p ng-show="blockedUser" class="alert alert-warning">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.blockedUser"></span>\n      </p>\n    </div>\n\n\n    <div class="modal-footer">\n      <a class="vtexIdUI-back-link pull-left dead-link" tabindex="3" href="#" ng-click="updatePage(\'auth-selector\', false, true)">\n        <i class="vtexid-icon-arrow-left"></i>\n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n      <button ng-disabled="isSendingEmailConfirmation" type="submit" tabindex="2" class="btn btn-large btn-success pull-right" data-i18n="vtexid.confirm" id="sendAccessKeyBtn">Enviar chave</button>\n    </div>\n    \n    <p ng-show="isAdmin" class="info-why muted text-center">\n      <small>\n        <!-- <i class="vtexid-icon-lock muted"></i> -->\n        <small data-i18n="vtexid.protectedByRecaptcha"></small> - <a style="font-size: smaller;" href="https://policies.google.com/privacy?hl={{auth.locale}}" target="_blank" data-i18n="vtexid.recaptchaPrivacyLink"></a>\n        - <a style="font-size: smaller;" href="https://policies.google.com/terms?hl={{auth.locale}}" target="_blank" data-i18n="vtexid.recaptchaTermsLink"></a>\n      </small>\n    </p>\n  </form>\n</div>\n<!--/ngInclude: \'includes/confirm-email.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/confirm-mfa-phone-number.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ConfirmMfaPhoneNumberController" id="vtexIdUI-mfa-phone-number-confirmation">\n  <div class="modal-header">\n    <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n    <h4>\n      <span class="vtexIdUI-heading" data-i18n="vtexid.phoneTitle1">Informe seu email</span> (\n      <span class="vtexIdUI-heading boldText" data-i18n="vtexid.phoneTitle2"></span>)</h4>\n\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isSendingEmailConfirmation}"></div>\n  </div>\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="submitPhoneNumber()" autocomplete="on">\n\n    <div class="phone-body zIndex11 ">\n      <!-- Usuário informou um email que não é um VtexID válido -->\n      <div class="dowpDown-body">\n        <div class="phone-input">\n          <div ng-class="{\'tel-input-color\': !phoneNumber}">\n            <input id="phoneIntTelInput" ng-model="phoneNumber" type="tel" ng-init="intlTelInput(s)" ""="">\n          </div>\n          <p class="alert" ng-show="showPhoneNumberError" data-i18n="vtexid.emptyFieldError"></p>\n          <p class="alert" ng-show="phoneNumberInvalidChar" data-i18n="vtexid.invalidPhoneNumber"></p>\n\n        </div>\n      </div>\n\n      <!-- Load jQuery from CDN so can run demo immediately -->\n    </div>\n\n    <div class="modal-footer zIndex10">\n      <a class="vtexIdUI-back-link pull-left dead-link" href="#" ng-click="updatePage(\'force-mfa-new-user\', false, true)">\n        <i class="vtexIdUI-back-link vtexid-icon-arrow-left"></i>\n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n      <button ng-disabled="isSendingPhoneConfirmation" type="submit" tabindex="2" class="btn btn-large btn-success pull-right" data-i18n="vtexid.confirm" id="sendAccessKeyBtn">Enviar chave</button>\n    </div>\n  </form>\n<!--/ngInclude: \'includes/confirm-mfa-phone-number.html\' -->\n</div></div>\n    <div>\n<!-- ngInclude: \'includes/confirm-mfa-code.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ConfirmMfaCodeController" id="vtexIdUI-mfa-code-confirmation">\n  <div class="modal-header">\n    <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n    <h4>\n      <div ng-show="!applicationCode">\n        <span class="vtexIdUI-heading" data-i18n="vtexid.cornfirmPhoneCode"></span>\n        <br>\n        <div ng-show="showPoneNumber">\n          <span>(\n            <strong>\n              <span>{{phoneNumber}}</span>\n            </strong> )</span>\n          <a class="vtexIdUI-back-link dead-link" tabindex="3" href="#" ng-click="updatePage(\'mfa-phone-number-confirmation\', false, true)">\n          </a>\n        </div>\n      </div>\n      <div ng-show="applicationCode">\n        <span data-i18n="vtexid.putAppCode" class="vtexIdUI-heading">Coloque o código gerado pelo aplicativo</span>\n        <br>\n      </div>\n    </h4>\n\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isSubmittingForm}"></div>\n  </div>\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="onMfaCodeButtonPress(\'sendAccessKeyBtn\')" autocomplete="on">\n    <div class="modal-body form-vertical ">\n      <!-- Usuário informou um email que não é um VtexID válido -->\n      <div class="controls vtexIdUI-mfa-field">\n        <div class="alignItems ">\n          <input type="tel" pattern="[0-9]*" autofocus id="mfaCodeInput" ng-model="mfaCode" tabindex="1" data-i18n="[placeholder]vtexid.egMfaCode" class="input-block-level">\n          <div class="top5 text-center minHeight35">\n            <div ng-show="!applicationCode">\n              <a ng-show="!isResendCode" class="vtexIdUI-back-link dead-link " tabindex="6" href="#" ng-click="resendCode()">\n                <span data-i18n="vtexid.reSendCodeToPhone">Voltar</span>\n              </a>\n              <span ng-show="isResendCode" class="mfa-alert-success" data-i18n="vtexid.reSendedCodeToPhone">Voltar</span>\n\n              <p ng-show="showPhoneProblemsMessage" data-i18n="vtexid.didntReceiveSms" class="">Nao recebeu o SMS?</p>\n\n              <p ng-show="showPhoneProblemsMessage" class="mfa-alert-success">\n                <a href="http://help.vtex.com/pt/tutorial/habilitar-login-por-autenticacao-de-2-fatores" target="_blank">\n                  <span data-i18n="vtexid.setUpApp">Configure o aplicativo</span>\n                </a>\n              </p>\n              <p ng-show="showPhoneProblemsMessage" data-i18n="vtexid.or" class="">ou</p>\n              <p ng-show="showPhoneProblemsMessage" class="mfa-alert-success">\n                <a ng-disabled="submittingForm" tabindex="2" class="vtexIdUI-back-link dead-link" type="button" data-i18n="vtexid.tryAccesKey" id="sendeditPhoneConfiguration" ng-click="reloadButton()">\n                  Logue por Acesso Rapido\n                </a>\n              </p>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="minHeight35">\n        <div class="alert-mfa" ng-show="invalidAccessTokenLogin">\n          <span data-i18n="vtexid.invalidAccessToken">Voltar</span>\n        </div>\n        <div class="alert-mfa" ng-show="invalidAccessTokenConfigurePhone">\n          <span data-i18n="vtexid.configurePhoneNumberMessage">Voltar</span>\n        </div>\n        <div class="alert-mfa" ng-show="wrongTries == 3">\n          <span data-i18n="vtexid.almostLimitWrongTriesWarning">Voltar</span>\n        </div>\n        <div class="alert-mfa" ng-show="wrongTries >= 4">\n          <span data-i18n="vtexid.limitWrongTriesWarning">Voltar</span>\n        </div>\n      </div>\n    </div>\n    <div class="modal-footer">\n\n      <a ng-show="isSetApplication" class="vtexIdUI-back-link pull-left dead-link" href="#" ng-click="updatePage(\'configure-mfa-application\', false, true)">\n        <i class="vtexIdUI-back-link vtexid-icon-arrow-left"></i>\n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n      <button ng-disabled="submittingForm || isUserBlocked" tabindex="2" class="btn btn-large btn-success pull-right" type="button" data-i18n="vtexid.enter" id="sendAccessKeyBtn" ng-click="onMfaCodeButtonPress(\'sendAccessKeyBtn\')">Enviar chave</button>\n\n      <a ng-show="false" ng-disabled="submittingForm || isUserBlocked" tabindex="2" class="vtexIdUI-back-link dead-link  pull-left" type="button" data-i18n="vtexid.configPhoneNUmber" id="sendeditPhoneConfiguration" ng-click="(submittingForm || isUserBlocked) || onMfaCodeButtonPress(\'sendeditPhoneConfiguration\')">\n        <span>Enviar chave</span>\n      </a>\n\n    </div>\n</form></div>\n<div>\n</div>\n\n<!--/ngInclude: \'includes/confirm-mfa-code.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/logout.html\' -->\n<div class="vtexIdUI-no-permission vtexIdUI-page" ng-controller="LogoutController" id="vtexIdUI-logout">\n  <div class="modal-header">\n    <h4 class="vtexIdUI-heading">\n      <span data-i18n="vtexid.needPermission" ng-show="!auth.title">\n        Você precisa de permissões\n      </span>\n      <span ng-show="auth.title">{{auth.title}}</span>\n\n      <small class="pull-right" data-i18n="vtexid.error403">Erro 403</small>\n    </h4>\n  </div>\n\n  <div class="alert alert-info alert-general alert-modal-body clearfix">\n    <i class="vtexid-icon-sad logout-icon pull-left"></i>\n    <p><span data-i18n="vtexid.accDontHaveAccess">Sua conta de email não tem acesso a esta página no momento.</span><br>\n      <small data-i18n="vtexid.tryAnotherAcc">Tente entrar com outra conta de email ou falar com o suporte.</small>\n    </p>\n  </div>\n\n  <div class="modal-footer">\n    <button data-i18n="vtexid.logout" class="btn btn-large btn-success pull-right" id="logoutBtn" ng-click="logout()">Sair</button>\n  </div>\n</div>\n<!--/ngInclude: \'includes/logout.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/multiple-oauth.html\' -->\n<div class="vtexIdUI-multiple-link-account vtexIdUI-page" id="vtexIdUI-multiple-link-account" ng-controller="MultipleOAuthController">\n  <div class="modal-header">\n    <h4><span class="vtexIdUI-heading" data-i18n="vtexid.changeAccount">Escolha uma conta</span></h4>\n  </div>\n  <div class="modal-body">\n    <p data-i18n="vtexid.changeAccountDescription">Agora você só precisa escolher a conta que deseja usar:</p>\n    <ul class="account-list text-center">\n      <li ng-repeat="email in shared.multipleOAuthReturn">\n        <button class="btn btn-block btn-large btn-success" ng-click="selectEmailToAuth(email)"><i class="vtexid-icon-user"></i> {{email.userEmail}}</button>\n      </li>\n    </ul>\n    <p class="info-why muted">\n      <small><i class="vtexid-icon-info"></i> \n      <span data-i18n="vtexid.infoWhyMultipleLinkPtOne">Isto é necessário, pois você usa seu registro de</span> \n      <strong>{{shared.selectedProviderName}}</strong> \n      <span data-i18n="vtexid.infoWhyMultipleLinkPtTwo">para identificar-se conosco em mais de uma conta.</span>\n    </small>\n  </p>\n  </div>\n</div>\n<!--/ngInclude: \'includes/multiple-oauth.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/recovery-password.html\' -->\n<div ng-controller="ChangePswdController" class="vtexIdUI-change-pswd vtexIdUI-page" id="vtexIdUI-change-pswd">\n  <div class="modal-header">\n    <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n    <div class="vtexIdUI-header row-fluid">\n      <div class="vtexIdUI-user" ng-show="auth.email">\n        <div class="vtexIdUI-user-email pull-left muted">\n          <i class="vtexid-icon-user muted"></i>\n          <span>{{auth.email}}</span>\n        </div>\n      </div>\n    </div>\n    <h4><span class="vtexIdUI-heading" data-i18n="vtexid.changePswd">Alterar senha</span></h4>\n\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isRecoveringPswd}"></div>\n\n  </div>\n\n  <form ng-submit="tryChangePswd()" ng-disabled="isRecoveringPswd">\n    <div class="modal-body">\n      <p class="info-why muted">\n        <small><i class="vtexid-icon-lock muted"></i>\n          <span data-i18n="vtexid.confirmChangePswdText"></span>\n        </small>\n      </p>\n\n      <div class="control-group">\n        <label class="control-label" for="inputNewPassword">\n          <span data-i18n="vtexid.newPassword">Nova senha</span>\n        </label>\n        <div class="controls">\n          <input type="password" autocomplete="off" required ngminlength="8" id="inputNewPassword" ng-model="newPassword" ng-change="onChangePassword()">\n        </div>\n      </div>\n\n      <div class="control-group">\n        <label class="control-label" for="inputConfirmNewPassword">\n              <span data-i18n="vtexid.confirmNewPassword">Confirmar nova senha</span>\n        </label>\n        <div class="controls">\n          <input type="password" autocomplete="off" required ngminlength="8" id="inputConfirmNewPassword" ng-model="confirmNewPassword">\n        </div>\n      </div>\n\n      <div class="vtexid-password-requirements">\n        <span class="vtexid-password-requirements-description" data-i18n="vtexid.passwordRequirements">\n          Sua senha deve ter\n        </span>\n        <ul class="vtexid-password-requirements-list">\n          <li>\n            <span ng-show="passwordHasMinLength" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasMinLength"></span>\n            <span data-i18n="vtexid.password8char" class="vtexid-instruction">Mínimo de 8 caracteres</span>\n          </li>\n          <li>\n            <span ng-show="passwordHasNumber" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasNumber"></span>\n            <span data-i18n="vtexid.passwordNumber" class="vtexid-instruction">1 número</span>\n          </li>\n          <li>\n            <span ng-show="passwordHasLowerCaseLetter" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasLowerCaseLetter"></span>\n            <span data-i18n="vtexid.passwordLowercase" class="vtexid-instruction">1 letra minúscula</span>\n          </li>\n          <li>\n            <span ng-show="passwordHasUpperCaseLetter" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasUpperCaseLetter"></span>\n            <span data-i18n="vtexid.passwordUppercase" class="vtexid-instruction">1 letra maiúscula</span>\n          </li>\n        </ul>\n      </div>\n\n      <p class="alert" ng-show="dontMatchPswd" data-i18n="vtexid.dontMatchPswd"></p>\n\n      <div class="force-new-pswd-info alert alert-info" ng-if="shared.forceNewPswd">\n        <p><i class="vtexid-icon-lock muted"></i> <span data-i18n="vtexid.forceNewPswd1"></span></p>\n        <p data-i18n="vtexid.forceNewPswd2"></p>\n      </div>\n      <p ng-show="blockedUser" class="alert alert-warning">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.blockedUser"></span>\n      </p>\n    </div>\n\n    <div class="modal-footer">\n      <a class="vtexIdUI-back-link pull-left dead-link" href="#" ng-click="updatePage(\'classic-login\', false, true)">\n        <i class="vtexid-icon-arrow-left"></i>\n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n\n      <button class="btn btn-large btn-success pull-right" type="submit" data-i18n="vtexid.changePswd" id="tryChangePswdBtn" ng-disabled="isRecoveringPswd">Alterar senha</button>\n    </div>\n  </form>\n</div>\n<!--/ngInclude: \'includes/recovery-password.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/change-expired-password.html\' -->\n<div ng-controller="ChangeExpPswdController" class="vtexIdUI-change-exp-pswd vtexIdUI-page" id="vtexIdUI-change-exp-pswd">\n  <div class="modal-header">\n    <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n    <div class="vtexIdUI-header row-fluid">\n      <div class="vtexIdUI-user" ng-show="auth.email">\n        <div class="vtexIdUI-user-email pull-left muted">\n          <i class="vtexid-icon-user muted"></i>\n          <span>{{auth.email}}</span>\n        </div>\n      </div>\n    </div>\n    <h4>\n      <span class="vtexIdUI-heading" data-i18n="vtexid.changeExpPswdTitle">Sua senha expirou</span>\n    </h4>\n\n    <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isRecoveringPswd}"></div>\n\n  </div>\n\n  <form ng-submit="tryChangePswd()" ng-disabled="isRecoveringPswd">\n    <div class="modal-body">\n      <p class="info-why muted">\n        <span data-i18n="vtexid.expiredPasswordInfo">\n          Sua senha expirou. Por favor, escolha um novo. Lembre-se, sua nova senha deve ser diferente da senha anterior que\n          você usou.\n        </span>\n      </p>\n\n      <div class="control-group">\n        <label class="control-label" for="expiredpass_inputNewPassword">\n          <span data-i18n="vtexid.newPassword">Nova senha</span>\n        </label>\n        <div class="controls">\n          <input type="password" autocomplete="off" required ngminlength="8" id="expiredpass_inputNewPassword" ng-model="newPassword" ng-change="onChangePassword()">\n        </div>\n      </div>\n\n      <div class="control-group">\n        <label class="control-label" for="expiredpass_inputConfirmNewPassword">\n          <span data-i18n="vtexid.confirmNewPassword">Confirmar nova senha</span>\n        </label>\n        <div class="controls">\n          <input type="password" autocomplete="off" required ngminlength="8" id="expiredpass_inputConfirmNewPassword" ng-model="confirmNewPassword">\n        </div>\n      </div>\n\n      <div class="vtexid-password-requirements">\n        <span class="vtexid-password-requirements-description" data-i18n="vtexid.passwordRequirements">\n          Sua senha deve ter\n        </span>\n        <ul class="vtexid-password-requirements-list">\n          <li>\n            <span ng-show="passwordHasMinLength" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasMinLength"></span>\n            <span data-i18n="vtexid.password8char" class="vtexid-instruction">Mínimo de 8 caracteres</span>\n          </li>\n          <li>\n            <span ng-show="passwordHasNumber" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasNumber"></span>\n            <span data-i18n="vtexid.passwordNumber" class="vtexid-instruction">1 número</span>\n          </li>\n          <li>\n            <span ng-show="passwordHasLowerCaseLetter" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasLowerCaseLetter"></span>\n            <span data-i18n="vtexid.passwordLowercase" class="vtexid-instruction">1 letra minúscula</span>\n          </li>\n          <li>\n            <span ng-show="passwordHasUpperCaseLetter" class="vtexid-icon-checkmark">OK</span>\n            <span ng-show="!passwordHasUpperCaseLetter"></span>\n            <span data-i18n="vtexid.passwordUppercase" class="vtexid-instruction">1 letra maiúscula</span>\n          </li>\n        </ul>\n      </div>\n\n      <p class="alert" ng-show="dontMatchPswd" data-i18n="vtexid.dontMatchPswd"></p>\n      <p class="alert" ng-show="passwordAlreadyUsed" data-i18n="vtexid.passwordAlreadyUsed"></p>\n\n      <div class="force-new-pswd-info alert alert-info" ng-if="shared.forceNewPswd">\n        <p>\n          <i class="vtexid-icon-lock muted"></i>\n          <span data-i18n="vtexid.forceNewPswd1"></span>\n        </p>\n        <p data-i18n="vtexid.forceNewPswd2"></p>\n      </div>\n      <p ng-show="blockedUser" class="alert alert-warning">\n        <i class="icon-warning-sign"></i>\n        <span data-i18n="vtexid.blockedUser"></span>\n      </p>\n    </div>\n\n    <div class="modal-footer">\n      <a class="vtexIdUI-back-link pull-left dead-link" href="#" ng-click="updatePage(\'classic-login\', false, true)">\n        <i class="vtexid-icon-arrow-left"></i>\n        <span data-i18n="vtexid.backLink">Voltar</span>\n      </a>\n\n      <button class="btn btn-large btn-success pull-right" type="submit" data-i18n="vtexid.changePswd" id="tryChangeExpPswdBtn">Alterar senha</button>\n    </div>\n  </form>\n</div>\n<!--/ngInclude: \'includes/change-expired-password.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/force-mfa-new-user.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ForceMfaNewUserController" id="vtexIdUI-force-mfa-new-user">\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="LogIn()" autocomplete="on">\n    <div class="modal-require-mfa ">\n      <div>\n        <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n        <h4>\n          <span class="vtexIdUI-heading forceLetterSpacing " data-i18n="vtexid.optionalRegisteMfaRequired"></span>\n          <br>\n        </h4>\n        <div>\n          <div class="hover">\n            <a class="vtexIdUI-back-link dead-link top10">\n              <span ng-mouseover="onMouseOver()" class="" data-i18n="vtexid.WhatIsMfa">\n            </span></a>\n            <div class="appear">\n              <h4>\n                <span class="mfaExplanationText" data-i18n="vtexid.mfaExplanation1">\n              </span></h4>\n              <span>\n                <span class="mfaExplanationText boldText" data-i18n="vtexid.mfaUserAndPassword"></span>\n                <br>\n                <span>\n                  <span class="mfaExplanationText boldText" data-i18n="vtexid.mfaPhoneMessage"></span>\n\n            </span></span></div>\n          </div>\n        </div>\n        <div class="top5">\n          <div class="grayColor paddgIfSmall paddingtop25 ">\n\n            <!-- Usuário informou um email que não é um VtexID válido -->\n            <button ng-disabled="submittingForm" tabindex="2" class="btn btn-large btn-primary pull-left vtexIdUI-back-phone-button leftAlign" type="button" data-i18n="vtexid.configMultifactor" id="sendeditPhoneConfiguration" ng-click="SetPhoneNumber()">\n              Enviar chave\n            </button>\n\n            <button ng-disabled="submittingForm" tabindex="1" class="btn btn-large btn-success vtexIdUI-back-phone-button force-mfa-login-button leftAlign" type="button" data-i18n="vtexid.enterForceMfa" id="sendAccessKeyBtn" ng-click="skipButtonPress()">Enviar chave</button>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </form>\n</div>\n<!--/ngInclude: \'includes/force-mfa-new-user.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/force-mfa-mandatory.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page unsetOverflow" ng-controller="ForceMfaMandatoryController" id="vtexIdUI-force-mfa-mandatory">\n\t<div class="modal-require-mfa ">\n\n\t\t<button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n\t\t<h4>\n\t\t\t<span class="vtexIdUI-heading forceLetterSpacing4 " data-i18n="vtexid.optionalRegisteMfaRequired1">Torne a sua conta mais segura. A verificaçao em dois passos agora é\n\t\t\t</span>\n\t\t\t<span class="vtexIdUI-heading forceLetterSpacing4 boldText" data-i18n="vtexid.mandatoryLow">\n\t\t\t\tobrigatória\n\t\t\t</span>\n\t\t\t<span class="vtexIdUI-heading forceLetterSpacing4" data-i18n="vtexid.optionalRegisteMfaRequired2">para o login com usuário e senha\n\t\t\t</span>\n\t\t\t<br>\n\t\t</h4>\n\t\t<div>\n\t\t\t<div class="hover">\n\t\t\t\t<a class="vtexIdUI-back-link dead-link top10">\n\t\t\t\t\t<span ng-mouseover="onMouseOver()" class="" data-i18n="vtexid.WhatIsMfa">\n\t\t\t\t</span></a>\n\t\t\t\t<div class="appear">\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t<span class="mfaExplanationText" data-i18n="vtexid.mfaExplanation1">\n\t\t\t\t\t</span></h4>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<span class="mfaExplanationText boldText" data-i18n="vtexid.mfaUserAndPassword"></span>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<span class="mfaExplanationText boldText" data-i18n="vtexid.mfaPhoneMessage"></span>\n\n\t\t\t\t</span></span></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="top5">\n\t\t\t<div class="grayColor  paddingtop45 top10">\n\n\t\t\t\t<!-- Usuário informou um email que não é um VtexID válido -->\n\t\t\t\t<div class="width110">\n\t\t\t\t\t<a ng-disabled="submittingForm" tabindex="2" class="vtexIdUI-back-link dead-link pull-left margin10" type="button" data-i18n="vtexid.otherWaysToLogin" id="sendeditPhoneConfiguration" ng-click="reloadButton()">\n\t\t\t\t\t\tOutras formas de login\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t\t<button ng-disabled="submittingForm" tabindex="1" class="btn btn-large btn-success vtexIdUI-back-phone-button force-mfa-login-button " type="button" data-i18n="vtexid.configMultifactor" id="sendAccessKeyBtn" ng-click="SetPhoneNumber() ">Configurar</button>\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</div>\n<!--/ngInclude: \'includes/force-mfa-mandatory.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/configure-user-MFA.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ConfigureUserMFAController" id="vtexIdUI-configure-user-MFA">\n    <div class="modal-header">\n        <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n        <div class="vtexIdUI-header row-fluid">\n            <h4>\n            <span class="vtexIdUI-heading" data-i18n="vtexid.MFAConfiguration"></span><br>\n            </h4>\n        </div>\n    </div>\n    <div class="show-message-redirect-body">\n      <div>\n        <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n\n        <div class="grayColor paddgIfSmall ">\n          <!-- Usuário informou um email que não é um VtexID válido -->\n          <button ng-disabled="submittingForm" tabindex="2" class="btn btn-large btn-primary pull-left vtexIdUI-back-phone-button leftAlign" type="button" data-i18n="vtexid.editPhoneNumber" id="sendeditPhoneConfiguration" ng-click="ChangePhoneNumber()">\n              Enviar chave\n          </button> \n\n          <button ng-disabled="submittingForm" tabindex="1" class="btn btn-large btn-delete vtexIdUI-back-phone-button force-mfa-login-button leftAlign" type="button" data-i18n="vtexid.removeMfa" id="sendAccessKeyBtn" ng-click="removeUserAccountMfa()">Enviar chave</button>\n\n        </div>\n      </div>\n    </div>\n    \n</div>\n<!--/ngInclude: \'includes/configure-user-MFA.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/show-message-and-redirect.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ShowMessageAndRedirectController" id="vtexIdUI-show-message-and-redirect">\n    <div class="modal-header">\n        <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n        <div class="vtexIdUI-header row-fluid">\n            <h4>\n                <span ng-show="showRemovedMessage" class="vtexIdUI-heading" data-i18n="vtexid.phoneRemoved"></span>\n                <span ng-show="showEditedMessasge" class="vtexIdUI-heading" data-i18n="vtexid.phoneEdited"></span>\n                <div class="vtexid-icon-redirect-checkmark pull-right"> </div>\n            </h4>\n        </div>\n        <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isLogginIn}"></div>\n    </div>\n    <div class="show-message-redirect-body">\n        <div class="vtexIdUI-header row-fluid">\n            <h4 class="paddingtop25">\n            <span class="vtexIdUI-heading" data-i18n="vtexid.redirectingLoggedUser"></span><br>\n            </h4>\n        </div>\n    </div>\n    \n</div>\n<!--/ngInclude: \'includes/show-message-and-redirect.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/reload-page-message.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="RealoadPageMessagecontroller" id="vtexIdUI-realod-page-message">\n    <div class="modal-header">\n        <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n        <div class="vtexIdUI-header row-fluid">\n            <h4>\n                <span class="vtexIdUI-heading" data-i18n="vtexid.reloadingPage">estamos recarregando a página</span>\n                <div class="vtexid-icon-redirect-checkmark pull-right"> </div>\n            </h4>\n        </div>\n        <div class="vtexIdUI-loading" ng-class="{\'vtexIdUI-loading-show\': isLogginIn}"></div>\n    </div>\n    <div class="show-message-redirect-body">\n        <div class="vtexIdUI-header row-fluid">\n            <h4 class="paddingtop25">\n                <span class="vtexIdUI-heading" data-i18n="vtexid.redirectingLoggedUser"></span>\n                <br>\n            </h4>\n        </div>\n    </div>\n\n</div>\n<!--/ngInclude: \'includes/reload-page-message.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/jsError-component.html\' -->\n<div class="vtexIdUI-page" ng-controller="JsErrorComponentController" id="vtexIdUI-jsError-component">\n\n  <div class=" textAlign top5 height170 control-label">\n    <h4>\n      <i class="vtexid-icon-sad muted"></i>\n      <span class="vtexid-password-requirements-description" data-i18n="vtexid.jsErrorHappend"></span>\n      <br>\n    </h4>\n\n    <div class="grayColor paddingtop15">\n      <button ng-click="onRefeshButtonPress()" tabindex="1" class="btn btn-large btn-primary" type="button" data-i18n="vtexid.tyAgain">\n      </button>\n    </div>\n  </div>\n\n</div>\n<!--/ngInclude: \'includes/jsError-component.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/choose-mfa-login-type.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ChooseMfaLoginType" id="vtexIdUI-choose-mfa-login-type">\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="LogIn()" autocomplete="on">\n    <div class="modal-header">\n      <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n      <div class="vtexIdUI-header row-fluid">\n        <h4>\n          <b>\n            <a class=" pull-left dead-link" href="#" ng-click="onBackArrowClick()">\n              <i class="vtexid-icon-arrow-left"></i>\n              <span data-i18n="vtexid.backLink">Voltar</span>\n            </a>\n            <span class="paddingLeft60" data-i18n="vtexid.loginTypesTitle">Formas de LogIn</span>\n          </b>\n        </h4>\n      </div>\n    </div>\n    <div class="modal-choose-require-body" style="height: 380px">\n      <div>\n        <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n        <div>\n          <!-- Usuário informou um email que não é um VtexID válido -->\n          <div>\n            <h4 class="textAlign top10">\n              <b>\n                <span data-i18n="vtexid.AppMessage">Mensagem por aplicativo</span>\n              </b>\n            </h4>\n            <ul>\n              <li>\n                <span data-i18n="vtexid.openGoogleAuth">Baixe o aplicativo do google authenticator</span>\n              </li>\n              <li>\n                <span data-i18n="vtexid.setUpApp">Configure o aplicativo</span>\n              </li>\n              <li>\n                <span data-i18n="vtexid.LoginWithApp">Utilize o app para logar</span>\n              </li>\n            </ul>\n            <button style="position: relative;\n              width: 100%;" ng-disabled="submittingForm" tabindex="1" class="btn btn-medium  pull-left btn-success pull-right " type="button" data-i18n="vtexid.setUpApp" id="sendAccessKeyBtn" ng-click="ConfigureAplicattionButtonPress()">Configure o aplicativo</button>\n          </div>\n\n          <hr style="position: relative;\n          top: 20px;\n          width: 100%;">\n\n          <div class="top10">\n            <h4 class="textAlign top10">\n              <b>\n                <span data-i18n="vtexid.PhoneMessage">Mensagem de celular</span>\n              </b>\n            </h4>\n            <ul>\n              <li>\n                <span data-i18n="vtexid.registePhoneNumber">Cadastre seu numero de telefone</span>\n              </li>\n              <li>\n                <span data-i18n="vtexid.receiveAppCode">Receba códigos no seu celular para logar</span>\n              </li>\n            </ul>\n            <button style="position: relative;\n              width: 100%;" ng-disabled="submittingForm" tabindex="2" class="btn btn-small btn-primary top10 " type="button" data-i18n="vtexid.registePhoneNumber" id="sendeditPhoneConfiguration" ng-click="ConfigurePhoneButtonPress()">\n              Enviar chave\n            </button>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n</form></div>\n\n\n\n\n<!--/ngInclude: \'includes/choose-mfa-login-type.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/configure-mfa-application.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ConfigureMfaApplication" id="vtexIdUI-configure-mfa-application">\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="LogIn()" autocomplete="on">\n    <div class="modal-header">\n      <button type="button" class="close vtexIdUI-close" ng-show="canClose" data-dismiss="modal">&times;</button>\n      <div class="vtexIdUI-header row-fluid">\n        <h4><b> <span data-i18n="vtexid.loginTypesTitle">Formas de LogIn</span></b></h4>\n      </div>\n    </div>\n    <div class="modal-choose-require-body" style="height: 355px">\n      <div class="textAlign">\n        <div>\n          <ul style="margin-bottom:0px">\n            <li> <span data-i18n="vtexid.downloadGoogleAuth">Abra o aplicativo Google Authenticator</span> <a href="https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8" target="_blank">\n              AppStore\n          </a> /\n              <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR" target="_blank">\n              Google Play\n          </a></li>\n            <li><span data-i18n="vtexid.configureNewAccountApp">Configure uma nova conta no aplicativo</span></li>\n            <li><span data-i18n="vtexid.ReadQrCode">Leia o seguinte QRCode</span></li>\n          </ul>\n        </div>\n        <div style="width: 100%">\n          <img src="{{qRCodeUrl}}" width="200 " height="200 ">\n          <div>\n          </div>\n          <a ng-show="!showUserSecret" class="vtexIdUI-back-link dead-link textAlign" tabindex="6" href="#" ng-click="onShowUserSecretButtonClick()">\n            <span data-i18n="vtexid.cantReadCode">Nao consgue ler o código ?</span>\n        </a>\n        </div>\n        <div ng-show="showUserSecret">\n          <span data-i18n="vtexid.putTheFollowingCode">Coloque manualmente o seguinte código</span>\n          <input readonly class="textAlign top10" style="background-color: #eee" ng-model="manualEntryCode">\n        </div>\n\n      </div>\n    </div>\n  </form>\n\n  <div class="modal-footer">\n    <button ng-disabled="isSendingClassicForm" class="btn btn-large btn-success pull-right" type="submit" tabindex="3" data-i18n="vtexid.continue" id="classicLoginBtn" ng-click="onContinueButtonClick()">Continuar</button>\n  </div>\n\n</div>\n<!--/ngInclude: \'includes/configure-mfa-application.html\' -->\n</div>\n    <div>\n<!-- ngInclude: \'includes/force.mfa.date.remider.html\' -->\n<div class="vtexIdUI-confirm-email vtexIdUI-page" ng-controller="ForceMfaDateReminderController" id="vtexIdUI-force-mfa-date-reminder">\n  <form ng-disabled="isSendingEmailConfirmation" ng-submit="LogIn()" autocomplete="on">\n    <div class="modal-require-mfa ">\n      <div>\n        <button type="button" ng-show="canClose" class="close vtexIdUI-close" data-dismiss="modal">&times;</button>\n        <h4>\n          <p class="boldText" data-i18n="vtexid.attention">Atenção</p>\n          <span class="vtexIdUI-heading forceLetterSpacing " data-i18n="vtexid.mfaDateReminderMessage"></span>\n          <span class="vtexIdUI-heading forceLetterSpacing boldText" data-i18n="vtexid.mandatory"></span>\n          <span class="vtexIdUI-heading forceLetterSpacing boldText" data-i18n="vtexid.mfaDateReminderMessage2"></span>\n          <br>\n        </h4>\n        <div class="top5">\n          <div class="grayColor paddgIfSmall paddingtop25 ">\n\n            <!-- Usuário informou um email que não é um VtexID válido -->\n            <button ng-disabled="submittingForm" tabindex="2" class="btn btn-large btn-primary pull-left vtexIdUI-back-phone-button leftAlign" type="button" data-i18n="vtexid.configMultifactor" id="sendeditPhoneConfiguration" ng-click="SetPhoneNumber()">\n              Enviar chave\n            </button>\n\n            <button ng-disabled="submittingForm" tabindex="1" class="btn btn-large btn-success vtexIdUI-back-phone-button force-mfa-login-button leftAlign" type="button" data-i18n="vtexid.continue" id="sendAccessKeyBtn" ng-click="LogIn()">Enviar chave</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<!--/ngInclude: \'includes/force.mfa.date.remider.html\' -->\n</div>\n    <i class="vtexid-icon-lock bottom-icon"></i>\n  </div>\n</div>\n';
//# sourceMappingURL=//io.vtex.com.br/vtex-id-ui/3.15.16/vtexid.min.js.map
