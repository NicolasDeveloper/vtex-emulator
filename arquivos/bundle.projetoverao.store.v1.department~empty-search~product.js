(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{380:function(t,n,e){"use strict";var r=e(30),i=e.n(r),a=e(593),o=e.n(a),_=e(357),l=e(595),s=e.n(l),c=e(352),p=e.n(c),d=e(373),f=e.n(d),m=e(374),h=e.n(m),u=e(365),v=e.n(u),g=e(597),w=e.n(g),x=e(18),b=e(358),C=e(366),y=e(599),k=e.n(y),S=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),P=function(t){function n(n){return t.call(this,n)||this}return S(n,t),n.prototype.render=function(){var t=this;return i.a.createElement("div",{className:[k.a.flag,this.props.className].join(" ")},Object.keys(this.props.flags).map(function(n,e){return 0===e&&i.a.createElement("div",{key:e,className:"flag "+n},i.a.createElement("span",null,x.a.truncate(t.props.flags[n],1,"...")))}),this.props.children)},n}(i.a.Component),N=e(367),j=e(368),E=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),F=function(t){function n(n){return t.call(this,n)||this}return E(n,t),n.prototype.render=function(){var t=this.props.product,n=t.items[0],e=this.props.product.clusterHighlights,r=n.sellers[0].commertialOffer.ListPrice,a=n.sellers[0].commertialOffer.Price,o=x.a.parseMoney(r).split(/\,/g),_=x.a.getPathFromImageTag(n.images[0].imageTag,240,240);return i.a.createElement("a",{href:t.link,className:[w.a.card,"card",this.props.index%2==0?w.a.even:w.a.odd].join(" ")},i.a.createElement(b.a,{className:w.a.image,alt:t.productName,scale:4,small:!0,src:-1===_.search("//lojaprojetoverao.vteximg.com.br")?"//lojaprojetoverao.vteximg.com.br"+_:_,srcMob:-1===_.search("//lojaprojetoverao.vteximg.com.br")?"//lojaprojetoverao.vteximg.com.br"+_:_}),i.a.createElement("div",{className:w.a.informations},i.a.createElement(P,{className:w.a.flag,flags:e},i.a.createElement(N.a,{newPrice:a,oldPrice:r})),i.a.createElement("p",{className:w.a.productName},x.a.truncate(t.productName,12,"...")),i.a.createElement(j.a,{className:w.a.ratting,productId:this.props.product.productId}),window.innerWidth<768&&i.a.createElement("em",{className:w.a.price},i.a.createElement("span",null,"r$")," ",o[0],",",i.a.createElement("span",{className:w.a.up},o[1])),window.innerWidth>767&&i.a.createElement("em",{className:w.a.bestPrice},i.a.createElement("span",null,"r$ ",x.a.parseMoney(a))," à vista"),window.innerWidth<768&&i.a.createElement("em",{className:w.a.bestPrice},"pague á vista ",i.a.createElement("span",null,"r$ ",x.a.parseMoney(a)))),i.a.createElement(C.a,{product:t,className:w.a.addToCartButton}))},n}(i.a.Component),z=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),I=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},W=function(t){function n(n){return t.call(this,n)||this}return z(n,t),n.prototype.render=function(){if(!this.props.shelf)return null;var t=this.props.shelf,n=t.products,e=t.title,r={arrows:!0,dots:!0,infinite:!1,lazyLoad:"ondemand",slidesToScroll:4,slidesToShow:4,speed:500,prevArrow:i.a.createElement("div",null,i.a.createElement(p.a,{className:s.a.prevArrow,svg:f.a})),nextArrow:i.a.createElement("div",null,i.a.createElement(p.a,{className:s.a.nextArrow,svg:h.a})),responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:875,settings:{slidesToShow:1.5,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]};return i.a.createElement("section",{className:[s.a.wrapperShelf,this.props.className].join(" ")},i.a.createElement("h2",{className:s.a.title},e,i.a.createElement("span",null,".")),i.a.createElement(v.a,I({className:s.a.slider},r),n&&n.map(function(t,n){return i.a.createElement("div",{className:s.a.cardItem},i.a.createElement(F,{key:n,index:n,product:t}))})))},n}(i.a.Component);e.d(n,"a",function(){return O});var q=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),O=function(t){function n(n){var e=t.call(this,n)||this;return e.state={},e}return q(n,t),n.prototype.render=function(){return i.a.createElement(_.a,null,i.a.createElement("section",{className:[o.a.productCatalog,this.props.className].join(" ")},i.a.createElement("div",{className:[o.a.wrapper,this.props.wrapperClass].join(" ")},i.a.createElement(W,{className:o.a.shelf,shelf:this.props.shelf}))))},n}(i.a.Component)},593:function(t,n,e){var r=e(594);"string"==typeof r&&(r=[[t.i,r,""]]);e(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},594:function(t,n,e){(n=t.exports=e(99)(!1)).push([t.i,"/* checkout */\n@-webkit-keyframes vitrio-ProductCatalog__fadeIn___1RkJq {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-ProductCatalog__fadeIn___1RkJq {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-ProductCatalog__productCatalog___2687G {\n  margin-bottom: 88px;\n  padding-top: 44px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .vitrio-ProductCatalog__productCatalog___2687G > .vitrio-ProductCatalog__wrapper___143cA {\n    width: 72.91667%; }\n  @media screen and (max-width: 1600px) {\n    .vitrio-ProductCatalog__productCatalog___2687G > .vitrio-ProductCatalog__wrapper___143cA {\n      width: 80.20833%; } }\n  @media screen and (max-width: 1440px) {\n    .vitrio-ProductCatalog__productCatalog___2687G > .vitrio-ProductCatalog__wrapper___143cA {\n      width: 88.02083%; } }\n  @media screen and (max-width: 991px) {\n    .vitrio-ProductCatalog__productCatalog___2687G > .vitrio-ProductCatalog__wrapper___143cA {\n      width: 94.66667%; } }\n",""]),n.locals={productCatalog:"vitrio-ProductCatalog__productCatalog___2687G",wrapper:"vitrio-ProductCatalog__wrapper___143cA",fadeIn:"vitrio-ProductCatalog__fadeIn___1RkJq"}},595:function(t,n,e){var r=e(596);"string"==typeof r&&(r=[[t.i,r,""]]);e(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},596:function(t,n,e){(n=t.exports=e(99)(!1)).push([t.i,"/* checkout */\n@-webkit-keyframes vitrio-Shelf__fadeIn___Z9e9M {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Shelf__fadeIn___Z9e9M {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Shelf__wrapperShelf___20uPW {\n  width: 100%; }\n  .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__slider___3FUfg {\n    width: 100%; }\n  .vitrio-Shelf__wrapperShelf___20uPW .slick-prev,\n  .vitrio-Shelf__wrapperShelf___20uPW .slick-next {\n    width: 40px;\n    height: 40px;\n    z-index: 11; }\n    .vitrio-Shelf__wrapperShelf___20uPW .slick-prev.slick-disabled,\n    .vitrio-Shelf__wrapperShelf___20uPW .slick-next.slick-disabled {\n      display: none !important; }\n  .vitrio-Shelf__wrapperShelf___20uPW .slick-next {\n    right: 0% !important; }\n  .vitrio-Shelf__wrapperShelf___20uPW .slick-prev {\n    left: 0% !important; }\n  @media screen and (max-width: 767px) {\n    .vitrio-Shelf__wrapperShelf___20uPW .slick-next {\n      right: 0% !important;\n      margin-right: -5%; }\n    .vitrio-Shelf__wrapperShelf___20uPW .slick-prev {\n      left: 0% !important;\n      margin-left: -5%; } }\n  .vitrio-Shelf__wrapperShelf___20uPW .slick-arrow:before, .vitrio-Shelf__wrapperShelf___20uPW .slick-arrow:after {\n    content: none; }\n  .vitrio-Shelf__wrapperShelf___20uPW .slick-dots {\n    display: block;\n    bottom: inherit;\n    top: 0;\n    margin-top: -4%;\n    right: 0;\n    left: 0;\n    text-align: right; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Shelf__wrapperShelf___20uPW .slick-dots {\n        text-align: center;\n        bottom: 0;\n        top: initial;\n        margin-bottom: -1%; } }\n    .vitrio-Shelf__wrapperShelf___20uPW .slick-dots li {\n      height: 10px;\n      width: 10px;\n      margin: 0 7px; }\n      .vitrio-Shelf__wrapperShelf___20uPW .slick-dots li button {\n        width: 10px;\n        height: 10px;\n        background: #D3D1D1;\n        border-radius: 100%; }\n        .vitrio-Shelf__wrapperShelf___20uPW .slick-dots li button:before, .vitrio-Shelf__wrapperShelf___20uPW .slick-dots li button:after {\n          content: none; }\n      .vitrio-Shelf__wrapperShelf___20uPW .slick-dots li.slick-active button {\n        background: #FC3C53; }\n  .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__prevArrow___2HP4E,\n  .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__nextArrow___2Uknr {\n    width: 100%;\n    display: block; }\n  .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__cardItem___mNxvO {\n    width: 34.32432%; }\n  .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__title___YnKKn {\n    font-size: 1.5em;\n    line-height: 1.66667em;\n    margin-bottom: 7.56757%;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__title___YnKKn {\n        font-size: 1.25em;\n        line-height: 2em; } }\n    .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__title___YnKKn span {\n      color: #FC3C53; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Shelf__wrapperShelf___20uPW .vitrio-Shelf__title___YnKKn {\n        text-align: center; } }\n",""]),n.locals={wrapperShelf:"vitrio-Shelf__wrapperShelf___20uPW",slider:"vitrio-Shelf__slider___3FUfg",prevArrow:"vitrio-Shelf__prevArrow___2HP4E",nextArrow:"vitrio-Shelf__nextArrow___2Uknr",cardItem:"vitrio-Shelf__cardItem___mNxvO",title:"vitrio-Shelf__title___YnKKn",fadeIn:"vitrio-Shelf__fadeIn___Z9e9M"}},597:function(t,n,e){var r=e(598);"string"==typeof r&&(r=[[t.i,r,""]]);e(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},598:function(t,n,e){(n=t.exports=e(99)(!1)).push([t.i,"/* checkout */\n@-webkit-keyframes vitrio-Card__fadeIn___3worE {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Card__fadeIn___3worE {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Card__card___1z7qj {\n  padding: 7.43243% 8.78378% 33.78378% 8.78378%;\n  position: relative;\n  text-decoration: none;\n  display: block;\n  background: #FFF;\n  border-radius: 20px;\n  margin-right: 5px;\n  margin-left: 5px; }\n  @media screen and (max-width: 767px) {\n    .vitrio-Card__card___1z7qj {\n      padding: 7.04225%;\n      padding-bottom: 11.26761%; } }\n  .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__flag___37QTC {\n      margin-bottom: 20px;\n      height: 23px;\n      text-transform: lowercase;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__flag___37QTC {\n          display: none; } }\n    .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__productName___1oJqZ {\n      font-size: 0.875em;\n      line-height: 1.42857em;\n      margin-bottom: 37px;\n      color: #100F0F;\n      text-transform: lowercase;\n      height: 38px;\n      overflow: hidden;\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 600; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__productName___1oJqZ {\n          height: auto;\n          margin-bottom: 20px; } }\n    .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__bestPrice___1NIpB {\n      color: #100F0F;\n      display: block;\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 500; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__bestPrice___1NIpB {\n          font-size: 0.875em; } }\n      .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__bestPrice___1NIpB span {\n        color: #FFF;\n        display: inline-block;\n        font-size: 1.3125em;\n        padding: 6px 8px;\n        background: #FC3C53;\n        cursor: pointer;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700; }\n        @media screen and (max-width: 767px) {\n          .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__bestPrice___1NIpB span {\n            background: #100F0F;\n            margin-left: 17px;\n            font-size: 1em; } }\n    @media screen and (max-width: 767px) {\n      .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__price___2Gfd0 {\n        background: #FFD500;\n        font-size: 2.25em;\n        color: #100F0F;\n        padding: 10px 20px;\n        margin-bottom: 20px;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700; } }\n  @media screen and (max-width: 767px) and (max-width: 767px) {\n    .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__price___2Gfd0 {\n      color: #FFF;\n      background: #FC3C53; } }\n    @media screen and (max-width: 767px) {\n        .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__price___2Gfd0 > span {\n          font-family: 'Montserrat', sans-serif;\n          font-weight: 300;\n          font-size: 50%; }\n        .vitrio-Card__card___1z7qj .vitrio-Card__informations___NZeib .vitrio-Card__price___2Gfd0 .vitrio-Card__up___5ciAC {\n          font-size: 50%;\n          display: inline-block;\n          vertical-align: top; } }\n  .vitrio-Card__card___1z7qj .vitrio-Card__addToCartButton___vxxXc {\n    width: 83%;\n    position: absolute;\n    bottom: 3%;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    margin: auto;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    opacity: 1; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Card__card___1z7qj .vitrio-Card__addToCartButton___vxxXc {\n        display: none; } }\n  .vitrio-Card__card___1z7qj .vitrio-Card__ratting___XZWPw {\n    height: 25px;\n    margin-bottom: 28px;\n    width: 100%; }\n",""]),n.locals={card:"vitrio-Card__card___1z7qj",informations:"vitrio-Card__informations___NZeib",flag:"vitrio-Card__flag___37QTC",productName:"vitrio-Card__productName___1oJqZ",bestPrice:"vitrio-Card__bestPrice___1NIpB",price:"vitrio-Card__price___2Gfd0",up:"vitrio-Card__up___5ciAC",addToCartButton:"vitrio-Card__addToCartButton___vxxXc",ratting:"vitrio-Card__ratting___XZWPw",fadeIn:"vitrio-Card__fadeIn___3worE"}},599:function(t,n,e){var r=e(600);"string"==typeof r&&(r=[[t.i,r,""]]);e(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},600:function(t,n,e){(n=t.exports=e(99)(!1)).push([t.i,"/* checkout */\n@-webkit-keyframes vitrio-Flag__fadeIn___3zXMp {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Flag__fadeIn___3zXMp {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Flag__flag___2he-C .flag {\n  padding: 3px 16px;\n  border-radius: 30px;\n  border: 1px solid #FC3C53;\n  color: #FC3C53;\n  text-transform: lowercase;\n  text-align: center;\n  overflow: hidden;\n  margin-right: 10px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600; }\n  .vitrio-Flag__flag___2he-C .flag:last-child {\n    margin-bottom: 0;\n    margin-right: 0; }\n",""]),n.locals={flag:"vitrio-Flag__flag___2he-C",fadeIn:"vitrio-Flag__fadeIn___3zXMp"}}}]);