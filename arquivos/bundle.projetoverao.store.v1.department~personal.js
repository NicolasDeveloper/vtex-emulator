(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{354:function(r,t,e){"use strict";var i=new(function(){function r(){}return Object.defineProperty(r.prototype,"sessions",{get:function(){return new Promise(function(r,t){var e=localStorage.getItem("session");e?r(JSON.parse(e)):$.ajax({type:"GET",url:"/api/sessions?items=*",success:function(t){localStorage.setItem("session",JSON.stringify(t)),window.dispatchEvent(new Event("reset.session.request")),r(t)},error:function(r){t(r)}})})},enumerable:!0,configurable:!0}),r}()),n=function(){function r(){this.endoint="",this.HEADERS={"x-origin":"x-requested-with","Content-Type":"application/json"},this.HEADERS_PRIVATE={"Content-Type":"application/json",Accept:"application/vnd.vtex.ds.v10+json","x-origin":"x-requested-with"},this.setUpSession()}return r.prototype.setUpSession=function(){return function(r,t,e,i){return new(e||(e=Promise))(function(n,a){function o(r){try{s(i.next(r))}catch(r){a(r)}}function _(r){try{s(i.throw(r))}catch(r){a(r)}}function s(r){r.done?n(r.value):new e(function(t){t(r.value)}).then(o,_)}s((i=i.apply(r,t||[])).next())})}(this,void 0,void 0,function(){var r;return function(r,t){var e,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:_(0),throw:_(1),return:_(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function _(a){return function(_){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(r,o)}catch(r){a=[6,r],i=0}finally{e=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,_])}}}(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,i.sessions];case 1:return(r=t.sent())&&r.namespaces&&r.namespaces.cookie.VtexIdclientAutCookie_lojaprojetoverao&&r.namespaces.cookie.VtexIdclientAutCookie_lojaprojetoverao.value&&(this.HEADERS.VtexIdclientAutCookie=r.namespaces.cookie.VtexIdclientAutCookie_lojaprojetoverao.value),[3,3];case 2:return t.sent(),[3,3];case 3:return[2]}})})},r}();t.a=new n},362:function(r,t,e){"use strict";var i=e(18),n=e(354),a=function(){function r(){this.db={products:n.a.endoint+"/api/catalog_system/pub/products",search:n.a.endoint+"/buscaautocomplete/?productNameContains="}}return r.prototype.getSearchProducts=function(r){var t=this;return new Promise(function(e,i){$.ajax({url:""+t.db.search+encodeURIComponent(r),type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){e(r)},error:function(r){i(r)}})})},r.prototype.getProductsById=function(r){var t=this;return new Promise(function(e,i){$.ajax({url:t.db.products+"/search?fq=productId:"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){e(r)},error:function(r){i(r)}})})},r.prototype.getProductsByCategory=function(r,t,e,i,n){var a=this;return void 0===i&&(i=0),void 0===n&&(n=13),new Promise(function(o,_){$.ajax({url:a.db.products+"/search/"+(r&&r.length>0?"?"+r.join("&")+"&":(t||"")+"?")+"_from="+i+"&_to="+n+"&O="+e,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){o(r)},error:function(r){_(r)}})})},r.prototype.getProductsBySearch=function(r,t,e){var i=this;return void 0===t&&(t=0),void 0===e&&(e=13),new Promise(function(n,a){$.ajax({url:i.db.products+"/search/?"+r+"&_from="+t+"&_to="+e,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){n(r)},error:function(r){a(r)}})})},r.prototype.getProductById=function(r){var t=this;return new Promise(function(e,i){$.ajax({url:t.db.products+"/search?fq=productId:"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){e(r[0])},error:function(r){i(r)}})})},r.prototype.getProductBySku=function(r){return new Promise(function(t,e){$.ajax({url:n.a.endoint+"/produto/sku/"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){t(r[0])},error:function(r){e(r)}})})},r.prototype.getProductCatalogBySku=function(r){return new Promise(function(t,e){$.ajax({url:n.a.endoint+"/api/catalog_system/pvt/sku/stockkeepingunitbyid/"+r,type:"GET",headers:n.a.HEADERS_PRIVATE,success:function(r){t(r)},error:function(r){e(r)}})})},r.prototype.getRelations=function(r){return new Promise(function(t,e){$.ajax({url:n.a.endoint+"/api/catalog_system/pub/products/crossselling/similars/"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){t(r)},error:function(r){e(r)}})})},r.prototype.whoboughtalsobought=function(r){return new Promise(function(t,e){$.ajax({url:n.a.endoint+"/api/catalog_system/pub/products/crossselling/whoboughtalsobought/"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){t(r)},error:function(r){e(r)}})})},r.prototype.suggestions=function(r){return new Promise(function(t,e){$.ajax({url:n.a.endoint+"/api/catalog_system/pub/products/crossselling/suggestions/"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){t(r)},error:function(r){e(r)}})})},r.prototype.getWhosaWalsoSaw=function(r){return new Promise(function(t,e){$.ajax({url:n.a.endoint+"/api/catalog_system/pub/products/crossselling/whosawalsosaw/"+r,type:"GET",headers:{"x-origin":"x-requested-with"},success:function(r){t(r)},error:function(r){e(r)}})})},r.prototype.getProductInfo=function(r,t,e,n,a){void 0===t&&(t=318),void 0===e&&(e=445),void 0===n&&(n=218),void 0===a&&(a=306);for(var o=r.items,_=r.productName,s=null,d=null,l=0;l<o.length;l++)for(var c=o[l],p=0;p<c.sellers.length;p++){var f=c.sellers[p];f.commertialOffer.AvailableQuantity>0&&(s=c,d=f)}s||(s=o[0]);var m=s.images.find(function(r){return"wearfront"===r.imageLabel.toLowerCase()});return m||(m=s.images[0]),{pathDesk:m&&i.a.getPathFromImageTag(m.imageTag,t,e),pathMob:m&&i.a.getPathFromImageTag(m.imageTag,n,a),sellerAvaible:d,sku:s,productName:_}},r.prototype.setLastSaw=function(r){var t=sessionStorage.getItem("products-lastsaw"),e=[];t&&(e=JSON.parse(t)),e.find(function(t){return t.productId===r.productId})||(e.push(r),sessionStorage.setItem("products-lastsaw",JSON.stringify(e)))},r.prototype.getLastSaw=function(){var r=sessionStorage.getItem("products-lastsaw");return JSON.parse(r)},r}();t.a=new a},389:function(r,t,e){"use strict";e.d(t,"a",function(){return u});var i=e(30),n=e.n(i),a=e(390),o=e.n(a),_=e(352),s=e.n(_),d=e(392),l=e.n(d),c=e(393),p=e.n(c),f=e(394),m=e.n(f);function u(r){var t=r.product,e=t.items[0].sellers[0].commertialOffer.GiftSkuIds.length>0;return n.a.createElement("div",{className:[o.a.flagsWrapper,r.withoutspace?o.a.withoutspace:"",r.className].join(" ")},e&&n.a.createElement("div",{className:[o.a.flagAttribute,o.a.presente].join(" ")},n.a.createElement("span",null,"brinde ",n.a.createElement(s.a,{className:o.a.icon,svg:p.a}))),t["PRODUTOS VEGETARIANOS"]&&"SIM"===t["PRODUTOS VEGETARIANOS"][0]&&n.a.createElement("div",{className:[o.a.flagAttribute,o.a.vegetariano].join(" ")},n.a.createElement("span",null,"vegetariano ",n.a.createElement(s.a,{className:o.a.icon,svg:l.a}))),t["SELO RECOMENDAMOS"]&&"SIM"===t["SELO RECOMENDAMOS"][0]&&n.a.createElement("div",{className:[o.a.flagAttribute,o.a.curti].join(" ")},n.a.createElement("span",null,"recomendado ",n.a.createElement(s.a,{className:o.a.icon,svg:m.a}))))}},390:function(r,t,e){var i=e(391);"string"==typeof i&&(i=[[r.i,i,""]]);e(100)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(r.exports=i.locals)},391:function(r,t,e){(t=r.exports=e(99)(!1)).push([r.i,"/* checkout */\n@-webkit-keyframes vitrio-FlagsAttr__fadeIn___10oHL {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-FlagsAttr__fadeIn___10oHL {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-FlagsAttr__flagsWrapper___3D5mC {\n  position: absolute;\n  top: -6%;\n  right: -14%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  cursor: pointer; }\n  .vitrio-FlagsAttr__flagsWrapper___3D5mC.vitrio-FlagsAttr__withoutspace___2iMpj {\n    position: absolute;\n    top: 0;\n    right: 0%; }\n  .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC {\n    width: 53px;\n    height: 56px;\n    border-radius: 13px;\n    position: relative;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 1.5em;\n    line-height: 1.66667em;\n    overflow: hidden;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    margin-bottom: 14px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700; }\n    .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__presente___1R7c- {\n      background: #5795FF;\n      color: #FFF; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__presente___1R7c- .vitrio-FlagsAttr__icon___1YgKX {\n        width: 20.86px;\n        height: 20px;\n        margin-right: 15px; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__presente___1R7c-:hover {\n        width: 158px; }\n    .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__vegetariano___NJbb- {\n      background: #43DD16;\n      color: #FFF; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__vegetariano___NJbb- .vitrio-FlagsAttr__icon___1YgKX {\n        width: 31.73px;\n        height: 24px;\n        margin-right: 10px;\n        margin-top: 5px; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__vegetariano___NJbb-:hover {\n        width: 239px; }\n    .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__curti___2lCns {\n      background: #FC3C53;\n      color: #FFF; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__curti___2lCns .vitrio-FlagsAttr__icon___1YgKX {\n        width: 24.9px;\n        height: 22px;\n        margin-right: 14px; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC.vitrio-FlagsAttr__curti___2lCns:hover {\n        width: 250px; }\n    .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC > span {\n      display: block;\n      white-space: nowrap;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      position: absolute;\n      right: 0; }\n      .vitrio-FlagsAttr__flagsWrapper___3D5mC .vitrio-FlagsAttr__flagAttribute___2GoOC > span .vitrio-FlagsAttr__icon___1YgKX {\n        display: block;\n        margin-left: 30px; }\n  @media screen and (max-width: 599px) {\n    .vitrio-FlagsAttr__flagsWrapper___3D5mC {\n      right: 0%; } }\n",""]),t.locals={flagsWrapper:"vitrio-FlagsAttr__flagsWrapper___3D5mC",withoutspace:"vitrio-FlagsAttr__withoutspace___2iMpj",flagAttribute:"vitrio-FlagsAttr__flagAttribute___2GoOC",presente:"vitrio-FlagsAttr__presente___1R7c-",icon:"vitrio-FlagsAttr__icon___1YgKX",vegetariano:"vitrio-FlagsAttr__vegetariano___NJbb-",curti:"vitrio-FlagsAttr__curti___2lCns",fadeIn:"vitrio-FlagsAttr__fadeIn___10oHL"}},392:function(r,t){r.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.735 24"><defs><style> .__2IV_7Pi__cls-1 { fill: #fff; } </style></defs><g id="vegetariano" transform="translate(-4.433 -14.93)"><g id="Group_2492" data-name="Group 2492" transform="translate(4.433 14.93)"><path id="Path_1291" data-name="Path 1291" class="__2IV_7Pi__cls-1 " d="M4.433,14.93c14.082,7.14,15.372,24,15.372,24C22.581,16.715,4.433,14.93,4.433,14.93Z" transform="translate(-4.433 -14.93)"></path></g><g id="Group_2493" data-name="Group 2493" transform="translate(20.817 14.93)"><path id="Path_1292" data-name="Path 1292" class="__2IV_7Pi__cls-1 " d="M48.981,33.773C52.65,21.377,58.7,19.294,58.7,19.294A29.031,29.031,0,0,0,50.37,31.988,48.131,48.131,0,0,0,64.254,14.93C46.9,16.715,48.981,33.773,48.981,33.773Z" transform="translate(-48.903 -14.93)"></path></g></g></svg>'},393:function(r,t){r.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.859 20"><defs><style> .__2cQjjE8__cls-1 { fill: #fff; } </style></defs><g id="presente" transform="translate(-33.317 -34.004)"><path id="Path_1289" data-name="Path 1289" class="__2cQjjE8__cls-1 " d="M34.764,50.91v8.481c.028.336.227.95,1.32.95H52.5a1.247,1.247,0,0,0,.968-.5h0v0a1.172,1.172,0,0,0,.171-.66V50.91Z" transform="translate(-0.542 -6.337)"></path><path id="Path_1290" data-name="Path 1290" class="__2cQjjE8__cls-1 " d="M53.171,38.765H44.56a8.091,8.091,0,0,1,1.185-.55c.989-.4,2.1-.838,2.47-1.756a1.974,1.974,0,0,0-.121-1.576A1.264,1.264,0,0,0,46.943,34c-1.111,0-2.293,1.857-3.2,3.7-.9-1.846-2.084-3.7-3.195-3.7a1.264,1.264,0,0,0-1.155.879,1.949,1.949,0,0,0-.116,1.576c.361.918,1.478,1.36,2.462,1.756a7.476,7.476,0,0,1,1.188.55H34.117a.857.857,0,0,0-.8.971v2.917a.788.788,0,0,0,.9.767H53.1a.977.977,0,0,0,1.08-.885v-2.8A.928.928,0,0,0,53.171,38.765Zm-6.228-3.729c.024,0,.115.069.214.282a.974.974,0,0,1,.093.761c-.2.5-1.1.862-1.889,1.178-.091.034-.184.074-.274.109C45.96,35.772,46.66,35.036,46.943,35.036Zm-4.816,2.221c-.79-.316-1.689-.675-1.889-1.178a.977.977,0,0,1,.1-.761c.1-.213.187-.282.215-.282.279,0,.986.736,1.854,2.33C42.317,37.331,42.22,37.291,42.127,37.257Z"></path></g></svg>'},394:function(r,t){r.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.904 22"><defs><style> .__2tGU3M9__cls-1 { fill: #fff; } </style></defs><g id="curti" transform="translate(-929.5 -857.25)"><path id="Path_1287" data-name="Path 1287" class="__2tGU3M9__cls-1 " d="M8.219,10.887V26.355H5.758A1.739,1.739,0,0,1,4,24.637V12.605a1.739,1.739,0,0,1,1.758-1.719Zm17.873,0H20.875l.816-3.262a2.63,2.63,0,0,0-1.72-3.133h0a2.628,2.628,0,0,0-3.02,1.036l-1.7,2.547-4.219,4.219V24.949L15.9,26.355H22.96a4.868,4.868,0,0,0,4.83-4.264l1.089-8.013a2.812,2.812,0,0,0-2.787-3.191Z" transform="translate(925.5 852.894)"></path></g></svg>'},400:function(r,t,e){"use strict";var i=e(30),n=e(569),a=e.n(n),o=e(18),_=e(361),s=e(571),d=e.n(s),l=function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])};return function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),c=function(r){function t(t){return r.call(this,t)||this}return l(t,r),t.prototype.render=function(){var r=this;return i.createElement("div",{className:[d.a.flag,this.props.className].join(" ")},Object.keys(this.props.flags).map(function(t,e){return 0===e&&i.createElement("div",{key:e,className:"flag "+t},i.createElement("span",null,o.a.truncate(r.props.flags[t],2,"")))}),this.props.children)},t}(i.Component),p=e(367),f=e(366),m=e(389),u=e(368);e.d(t,"a",function(){return v});var g=function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])};return function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),v=function(r){function t(t){return r.call(this,t)||this}return g(t,r),t.prototype.render=function(){var r=this.props.product,t=r.items[0],e=this.props.product.clusterHighlights,n=t.sellers[0].commertialOffer.ListPrice,s=t.sellers[0].commertialOffer.Price,d=o.a.parseMoney(s),l=o.a.parseMoney(n),g=d.split(/\,/g);return i.createElement("a",{style:{width:this.props.full&&"100%"},href:r.link,className:[a.a.card,"card",this.props.index%2==0?a.a.even:a.a.odd,this.props.full?a.a.reverse:"",this.props.className].join(" ")},i.createElement("div",{className:a.a.wrapperCard},i.createElement(_.a,{className:a.a.image,alt:r.productName,scale:4,small:!0,src:"//lojaprojetoverao.vteximg.com.br"+o.a.getPathFromImageTag(t.images[0].imageTag,240,240),srcMob:"//lojaprojetoverao.vteximg.com.br"+o.a.getPathFromImageTag(t.images[0].imageTag,240,240)},i.createElement(m.a,{withoutspace:this.props.full,product:r})),i.createElement("div",{className:a.a.boxInformations},i.createElement(c,{className:a.a.flag,flags:e},i.createElement(p.a,{newPrice:s,oldPrice:n})),!this.props.full&&i.createElement("p",{className:a.a.productName},o.a.truncate(r.productName,12,"...")),this.props.full&&i.createElement("p",{className:a.a.productName},r.productName),this.props.full&&i.createElement("p",{className:a.a.complementName,dangerouslySetInnerHTML:{__html:o.a.truncate(t.complementName,28,"...")}}),i.createElement(u.a,{className:a.a.ratting,productId:r.productId})),s>0&&i.createElement("div",{className:a.a.boxPrice},i.createElement("em",{className:[a.a.oldPrice,s<n?a.a.active:""].join(" ")},s<n&&"r$ "+l),i.createElement("em",{className:a.a.price},i.createElement("span",null,"r$")," ",g[0],",",i.createElement("span",{className:a.a.up},g[1])),i.createElement("em",{className:a.a.bestPrice},"á vista no boleto ",i.createElement("span",null,"r$ ",o.a.parseMoney(o.a.boletopercentage(s,10)))),this.props.full&&i.createElement("em",{className:a.a.parcels},"ou até ",i.createElement("span",null,"8x")," de ",i.createElement("span",null,"r$ ",o.a.parseMoney(s/8)," s/ juros")),i.createElement(f.a,{product:r,className:a.a.addToCartButton}))))},t}(i.Component)},569:function(r,t,e){var i=e(570);"string"==typeof i&&(i=[[r.i,i,""]]);e(100)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(r.exports=i.locals)},570:function(r,t,e){(t=r.exports=e(99)(!1)).push([r.i,"/* checkout */\n@-webkit-keyframes vitrio-Card__fadeIn___1zQfK {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Card__fadeIn___1zQfK {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Card__card___31Gjo {\n  position: relative;\n  text-decoration: none;\n  display: block;\n  width: 24.47674%;\n  height: 548px;\n  margin-bottom: 3.02326%;\n  margin-right: 0.69767%; }\n  @media screen and (max-width: 1280px) {\n    .vitrio-Card__card___31Gjo {\n      width: 32.86822%; } }\n  @media screen and (max-width: 991px) {\n    .vitrio-Card__card___31Gjo {\n      height: 580px; } }\n  @media screen and (max-width: 767px) {\n    .vitrio-Card__card___31Gjo {\n      margin-right: 1.16279%;\n      width: 49.4186%; } }\n  @media screen and (max-width: 599px) {\n    .vitrio-Card__card___31Gjo {\n      width: 100%;\n      margin-right: 0;\n      height: auto; } }\n  .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: row;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n  .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg {\n    height: auto; }\n    .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: row;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 2.48062%;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-flex-wrap: wrap;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap; }\n      .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__image___3gftM {\n        width: 30.23256%;\n        max-width: 300px; }\n      .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw {\n        width: 46.51163%;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        padding: 0 3.10078%; }\n        .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__productName___Gb7yF {\n          -webkit-box-ordinal-group: 2;\n          -webkit-order: 1;\n              -ms-flex-order: 1;\n                  order: 1;\n          font-size: 1.0625em;\n          height: auto;\n          margin-bottom: 27px; }\n        .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__ratting___2-iV- {\n          -webkit-box-ordinal-group: 3;\n          -webkit-order: 2;\n              -ms-flex-order: 2;\n                  order: 2;\n          height: 34px;\n          border-bottom: 1px solid #C3C3C3;\n          margin-bottom: 17px;\n          margin-top: 0; }\n        .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__complementName___1iAth {\n          -webkit-box-ordinal-group: 4;\n          -webkit-order: 3;\n              -ms-flex-order: 3;\n                  order: 3;\n          font-size: 0.875em;\n          line-height: 1.42857em;\n          color: #100F0F;\n          text-transform: lowercase;\n          text-decoration: none;\n          margin-bottom: 40px;\n          font-family: 'Montserrat', sans-serif;\n          font-weight: 400; }\n          .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__complementName___1iAth strong {\n            font-family: 'Montserrat', sans-serif;\n            font-weight: 700; }\n        .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__flag___2xm3M {\n          -webkit-box-ordinal-group: 5;\n          -webkit-order: 4;\n              -ms-flex-order: 4;\n                  order: 4; }\n      .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj {\n        width: 23.25581%; }\n        .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__bestPrice___3ouFV {\n          margin-bottom: 10px; }\n        .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__parcels___3Fugx {\n          color: #100F0F;\n          font-size: 0.875em;\n          margin-bottom: 26px;\n          font-family: 'Montserrat', sans-serif;\n          font-weight: 400; }\n          .vitrio-Card__card___31Gjo.vitrio-Card__reverse___2XUTg .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__parcels___3Fugx span {\n            font-family: 'Montserrat', sans-serif;\n            font-weight: 700; }\n  .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__image___3gftM {\n    max-width: 214px;\n    margin: 0 auto; }\n  @media screen and (min-width: 1281px) {\n    .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg):nth-child(4n + 3) {\n      margin-right: 0; } }\n  @media screen and (min-width: 992px) and (max-width: 1280px) {\n    .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg):nth-child(3n + 2) {\n      margin-right: 0; } }\n  @media screen and (max-width: 991px) and (min-width: 766px) {\n    .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg):nth-child(3n + 4) {\n      margin-right: 0; } }\n  @media screen and (max-width: 767px) and (min-width: 600px) {\n    .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg):nth-child(odd) {\n      margin-right: 0; } }\n  .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC {\n    padding: 11.08472% 13.30166%; }\n    @media screen and (max-width: 599px) {\n      .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC {\n        padding: 9.85915% 14.64789%;\n        border: none; } }\n    .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC:hover {\n      -webkit-box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1);\n              box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1);\n      height: 114%;\n      position: relative;\n      z-index: 1; }\n      @media screen and (max-width: 991px) {\n        .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC:hover {\n          height: 100%;\n          -webkit-box-shadow: none;\n                  box-shadow: none; } }\n      .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC:hover .vitrio-Card__addToCartButton___1P8c9 {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex; }\n    .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__addToCartButton___1P8c9 {\n      display: none;\n      -webkit-animation-duration: 1.5s;\n              animation-duration: 1.5s;\n      -webkit-animation-name: vitrio-Card__fadeIn___1zQfK;\n      animation-name: vitrio-Card__fadeIn___1zQfK; }\n\n@keyframes vitrio-Card__fadeIn___1zQfK {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n      @media screen and (max-width: 991px) {\n        .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__addToCartButton___1P8c9 {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex; } }\n      @media screen and (max-width: 599px) {\n        .vitrio-Card__card___31Gjo:not(.vitrio-Card__reverse___2XUTg) .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__addToCartButton___1P8c9 {\n          display: none !important; } }\n  .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC {\n    width: 100%;\n    height: 100%;\n    background: #FFF;\n    border-radius: 20px;\n    -webkit-transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n    border: 1px solid #F6F6F6; }\n    .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__flag___2xm3M {\n      margin-bottom: 20px;\n      height: 23px;\n      text-transform: lowercase;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__flag___2xm3M {\n          display: none; } }\n    .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw {\n      margin-bottom: 20px; }\n      .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__productName___Gb7yF {\n        font-size: 0.875em;\n        line-height: 1.42857em;\n        color: #100F0F;\n        text-transform: lowercase;\n        height: 38px;\n        overflow: hidden;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 600; }\n        @media screen and (max-width: 767px) {\n          .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxInformations___1fxpw .vitrio-Card__productName___Gb7yF {\n            height: auto;\n            margin-bottom: 20px; } }\n    .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n      -webkit-justify-content: flex-start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: start;\n      -webkit-align-items: flex-start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n      .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__bestPrice___3ouFV {\n        color: #100F0F;\n        display: block;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 500;\n        font-size: 0.875em;\n        white-space: pre;\n        margin-bottom: 26px; }\n        .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__bestPrice___3ouFV span {\n          color: #FFF;\n          display: inline-block;\n          font-size: 1em;\n          padding: 6px 8px 6px 0px;\n          background: #100F0F;\n          cursor: pointer;\n          margin-left: 17px;\n          font-family: 'Montserrat', sans-serif;\n          font-weight: 700; }\n      .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__oldPrice___3dmSc {\n        font-size: 0.875em;\n        color: #707070;\n        height: 19px;\n        padding: 0 8px;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700;\n        position: relative;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 10px; }\n        .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__oldPrice___3dmSc.vitrio-Card__active___3zmm-:after {\n          content: \"\";\n          width: 100%;\n          margin: auto;\n          height: 1.5px;\n          background: #707070;\n          display: block;\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0; }\n      .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC .vitrio-Card__boxPrice___10Eaj .vitrio-Card__price___1mmB4 {\n        background: #FC3C53;\n        font-size: 1.3125em;\n        color: #FFF;\n        padding: 10px 20px;\n        margin-bottom: 20px;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700; }\n  .vitrio-Card__card___31Gjo .vitrio-Card__ratting___2-iV- {\n    height: 25px;\n    margin-top: 20px;\n    width: 100%; }\n  @media screen and (max-width: 599px) {\n    .vitrio-Card__card___31Gjo {\n      margin-bottom: -1px; }\n      .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC {\n        border-radius: 0px;\n        position: relative; }\n        .vitrio-Card__card___31Gjo .vitrio-Card__wrapperCard___3TWPC::after {\n          content: \"\";\n          display: block;\n          width: 67.60563%;\n          left: 0;\n          right: 0;\n          margin: auto;\n          bottom: 1px;\n          position: absolute;\n          background: #707070;\n          opacity: .3;\n          height: 1px; }\n      .vitrio-Card__card___31Gjo:last-child .vitrio-Card__wrapperCard___3TWPC::after {\n        content: none; } }\n",""]),t.locals={card:"vitrio-Card__card___31Gjo",reverse:"vitrio-Card__reverse___2XUTg",wrapperCard:"vitrio-Card__wrapperCard___3TWPC",image:"vitrio-Card__image___3gftM",boxInformations:"vitrio-Card__boxInformations___1fxpw",productName:"vitrio-Card__productName___Gb7yF",ratting:"vitrio-Card__ratting___2-iV-",complementName:"vitrio-Card__complementName___1iAth",flag:"vitrio-Card__flag___2xm3M",boxPrice:"vitrio-Card__boxPrice___10Eaj",bestPrice:"vitrio-Card__bestPrice___3ouFV",parcels:"vitrio-Card__parcels___3Fugx",addToCartButton:"vitrio-Card__addToCartButton___1P8c9",fadeIn:"vitrio-Card__fadeIn___1zQfK",oldPrice:"vitrio-Card__oldPrice___3dmSc",active:"vitrio-Card__active___3zmm-",price:"vitrio-Card__price___1mmB4"}},571:function(r,t,e){var i=e(572);"string"==typeof i&&(i=[[r.i,i,""]]);e(100)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(r.exports=i.locals)},572:function(r,t,e){(t=r.exports=e(99)(!1)).push([r.i,"/* checkout */\n@-webkit-keyframes vitrio-Flag__fadeIn___2ZtYf {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Flag__fadeIn___2ZtYf {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Flag__flag___1xvuq .flag {\n  padding: 3px 16px;\n  border-radius: 30px;\n  border: 1px solid #FC3C53;\n  color: #FC3C53;\n  text-transform: lowercase;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  position: relative;\n  margin-right: 10px;\n  white-space: pre;\n  overflow: hidden !important; }\n  .vitrio-Flag__flag___1xvuq .flag:last-child {\n    margin-bottom: 0; }\n",""]),t.locals={flag:"vitrio-Flag__flag___1xvuq",fadeIn:"vitrio-Flag__fadeIn___2ZtYf"}}}]);