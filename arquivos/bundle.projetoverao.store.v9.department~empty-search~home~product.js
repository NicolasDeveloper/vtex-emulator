(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{355:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var r=t(30),i=t(370),a=t.n(i),o=t(360),_=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),l=function(n){function e(e){var t=n.call(this,e)||this;return t.state={loading:!0},window.addEventListener("resize",function(){t.forceUpdate()}),t}return _(e,n),e.prototype.render=function(){var n=this,e=window.innerWidth<768&&this.props.srcMob||window.innerWidth>768&&this.props.src;return r.createElement(o.a,{className:[a.a.imageBackgroundComponent,"wrapperImage",this.props.index?"banner-"+this.props.index:""].join(" ")},e&&r.createElement("img",{style:{display:"none"},onLoad:function(){setTimeout(function(){n.setState({loading:!1})},200)},onError:function(){n.setState({loading:!1})},onAbort:function(){n.setState({loading:!1})},width:this.props.width,height:this.props.heigth,src:window.innerWidth<768?this.props.srcMob:this.props.src,alt:this.props.alt}),r.createElement("a",{href:this.props.href,ref:function(e){n.imageRef=e},className:[this.props.className,this.state.loading&&!this.props.notcolor&&e?a.a.background:"",a.a.transition].join(" "),style:{backgroundImage:"url("+(window.innerWidth<768?!this.state.loading&&e&&this.props.srcMob:!this.state.loading&&this.props.src)+")"}},this.state.loading?e&&r.createElement("div",{className:a.a.ldsRoller},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null)):"",this.props.children))},e}(r.Component)},360:function(n,e,t){"use strict";t.d(e,"a",function(){return _});var r=t(30),i=t(372),a=t.n(i),o=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),_=function(n){function e(e){var t=n.call(this,e)||this;return t.state={visiable:!1},t}return o(e,n),e.prototype.componentDidMount=function(){var n=this;"undefined"!=typeof IntersectionObserver?new IntersectionObserver(function(e){e[0].isIntersecting&&n.setState({visiable:!0},function(){n.props.loaded&&n.props.loaded()})}).observe(this.element):this.setState({visiable:!0},function(){n.props.loaded&&n.props.loaded()})},e.prototype.render=function(){var n=this;return r.createElement("div",{className:[this.props.className,a.a.fadeInUp].join(" "),ref:function(e){n.element=e}},this.state.visiable?this.props.children:"")},e}(r.Component)},370:function(n,e,t){var r=t(371);"string"==typeof r&&(r=[[n.i,r,""]]);t(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},371:function(n,e,t){(e=n.exports=t(99)(!1)).push([n.i,'/* checkout */\n@-webkit-keyframes vitrio-ImageBackground__fadeIn___qgeKh {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-ImageBackground__fadeIn___qgeKh {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-ImageBackground__imageBackgroundComponent___1VQCB {\n  width: 100%;\n  height: 100%; }\n  .vitrio-ImageBackground__imageBackgroundComponent___1VQCB > div {\n    position: relative;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    width: 100%;\n    height: 100%; }\n  .vitrio-ImageBackground__imageBackgroundComponent___1VQCB > a {\n    height: 100%;\n    display: block;\n    position: relative; }\n  .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div {\n      -webkit-animation: vitrio-ImageBackground__lds-roller___1T0-i 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n              animation: vitrio-ImageBackground__lds-roller___1T0-i 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      -webkit-transform-origin: 32px 32px;\n              transform-origin: 32px 32px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:after {\n      content: " ";\n      display: block;\n      position: absolute;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background: #3f4444;\n      margin: -3px 0 0 -3px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(1) {\n      -webkit-animation-delay: -0.036s;\n              animation-delay: -0.036s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(1):after {\n      top: 50px;\n      left: 50px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(2) {\n      -webkit-animation-delay: -0.072s;\n              animation-delay: -0.072s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(2):after {\n      top: 54px;\n      left: 45px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(3) {\n      -webkit-animation-delay: -0.108s;\n              animation-delay: -0.108s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(3):after {\n      top: 57px;\n      left: 39px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(4) {\n      -webkit-animation-delay: -0.144s;\n              animation-delay: -0.144s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(4):after {\n      top: 58px;\n      left: 32px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(5) {\n      -webkit-animation-delay: -0.18s;\n              animation-delay: -0.18s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(5):after {\n      top: 57px;\n      left: 25px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(6) {\n      -webkit-animation-delay: -0.216s;\n              animation-delay: -0.216s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(6):after {\n      top: 54px;\n      left: 19px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(7) {\n      -webkit-animation-delay: -0.252s;\n              animation-delay: -0.252s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(7):after {\n      top: 50px;\n      left: 14px; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(8) {\n      -webkit-animation-delay: -0.288s;\n              animation-delay: -0.288s; }\n    .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__ldsRoller___25Aws div:nth-child(8):after {\n      top: 45px;\n      left: 10px; }\n\n@-webkit-keyframes vitrio-ImageBackground__lds-roller___1T0-i {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes vitrio-ImageBackground__lds-roller___1T0-i {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__background___nTLZZ {\n    background: #cecece; }\n  .vitrio-ImageBackground__imageBackgroundComponent___1VQCB .vitrio-ImageBackground__transition___2qhuy {\n    text-decoration: none;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out; }\n',""]),e.locals={imageBackgroundComponent:"vitrio-ImageBackground__imageBackgroundComponent___1VQCB",ldsRoller:"vitrio-ImageBackground__ldsRoller___25Aws","lds-roller":"vitrio-ImageBackground__lds-roller___1T0-i",background:"vitrio-ImageBackground__background___nTLZZ",transition:"vitrio-ImageBackground__transition___2qhuy",fadeIn:"vitrio-ImageBackground__fadeIn___qgeKh"}},372:function(n,e,t){var r=t(373);"string"==typeof r&&(r=[[n.i,r,""]]);t(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},373:function(n,e,t){(e=n.exports=t(99)(!1)).push([n.i,"/* checkout */\n@-webkit-keyframes vitrio-LazyLoad__fadeIn___33bMk {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-LazyLoad__fadeIn___33bMk {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n",""]),e.locals={fadeIn:"vitrio-LazyLoad__fadeIn___33bMk"}},395:function(n,e,t){"use strict";var r=t(30),i=t(355),a=t(360),o=t(553),_=t.n(o),l=t(555),s=t.n(l),d=t(18),p=t(356),c=t(364),m=t(365),f=t(374),g=t(375),h=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),v=function(n){function e(e){return n.call(this,e)||this}return h(e,n),e.prototype.render=function(){var n=this.props.product,e=n.items[0],t=this.props.product.clusterHighlights,i=e.sellers[0].commertialOffer.ListPrice,a=e.sellers[0].commertialOffer.Price,o=d.a.parseMoney(i).split(/\,/g),_=d.a.cropImage(500,500,e.images[0].imageUrl);return r.createElement("a",{href:n.link,className:[s.a.card,"card",this.props.index%2==0?s.a.even:s.a.odd].join(" ")},r.createElement(p.a,{className:s.a.image,alt:n.productName,scale:4,small:!0,src:-1===_.search("//lojaprojetoverao.vteximg.com.br")?"//lojaprojetoverao.vteximg.com.br"+_:_,srcMob:-1===_.search("//lojaprojetoverao.vteximg.com.br")?"//lojaprojetoverao.vteximg.com.br"+_:_}),r.createElement("div",{className:s.a.informations},r.createElement(f.a,{className:s.a.ratting,productId:n.productId}),r.createElement(g.a,{className:s.a.flag,flags:t},r.createElement(m.a,{newPrice:a,oldPrice:i})),r.createElement("p",{className:s.a.productName},d.a.truncate(n.productName,12,"...")),window.innerWidth<768&&r.createElement("em",{className:s.a.price},r.createElement("span",null,"r$")," ",o[0],",",r.createElement("span",{className:s.a.up},o[1])),window.innerWidth>767&&r.createElement("em",{className:s.a.bestPrice},r.createElement("span",null,"r$ ",d.a.parseMoney(a))," à vista"),window.innerWidth<768&&r.createElement("em",{className:s.a.bestPrice},"pague á vista ",r.createElement("span",null,"r$ ",d.a.parseMoney(a)))),r.createElement(c.a,{product:n,className:s.a.addToCartButton}))},e}(r.Component),u=t(366),w=t.n(u),k=t(352),b=t.n(k),x=t(561),C=t.n(x),y=t(368),B=t.n(y),S=t(369),I=t.n(S),j=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),E=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},z=function(n){function e(e){return n.call(this,e)||this}return j(e,n),e.prototype.render=function(){if(!this.props.shelf)return null;var n=this.props.shelf,e=n.products,t=n.title,i={arrows:!0,dots:!0,infinite:!1,lazyLoad:"ondemand",slidesToScroll:2,slidesToShow:2,speed:500,prevArrow:r.createElement("div",null,r.createElement(b.a,{className:C.a.prevArrow,svg:B.a})),nextArrow:r.createElement("div",null,r.createElement(b.a,{className:C.a.nextArrow,svg:I.a})),responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:875,settings:{slidesToShow:1.5,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]};return r.createElement("section",{className:[C.a.wrapperShelf,this.props.className].join(" ")},r.createElement("h2",{className:C.a.title},t,r.createElement("span",null,".")),r.createElement(w.a,E({className:C.a.slider},i),e&&e.map(function(n,e){return r.createElement("div",{className:C.a.cardItem},r.createElement(v,{key:e,index:e,product:n}))})))},e}(r.Component);t.d(e,"a",function(){return N});var A=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),N=function(n){function e(e){var t=n.call(this,e)||this;return t.state={banner:null,shelf:t.props.shelf},t}return A(e,n),e.prototype.setBanners=function(n){this.setState({banner:n[0]})},e.prototype.setShelfs=function(n){try{this.setState({shelf:n[0]})}catch(n){console.warn("Não foi possivel renderizar a prateleira.")}},e.prototype.render=function(){var n=this.state.banner,e=r.createElement("section",{className:_.a.bannerWrapper},r.createElement("div",{className:_.a.wrapper},window.innerWidth>991&&n&&r.createElement("div",{className:_.a.imageWrapper},r.createElement(i.a,{alt:n.alt,className:_.a.banner,heigth:300,src:n.src,srcMob:n.srcMob,width:500,href:n.href})),r.createElement("div",{className:_.a.wrapperShelf},r.createElement(z,{className:_.a.shelf,shelf:this.state.shelf}))),this.props.children);return this.props.notLazy?e:r.createElement(a.a,null,e)},e}(r.Component)},553:function(n,e,t){var r=t(554);"string"==typeof r&&(r=[[n.i,r,""]]);t(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},554:function(n,e,t){(e=n.exports=t(99)(!1)).push([n.i,"/* checkout */\n@-webkit-keyframes vitrio-BannerCatalog__fadeIn___VXP1w {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-BannerCatalog__fadeIn___VXP1w {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-BannerCatalog__bannerWrapper___3KSIe {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 6.04167%; }\n  .vitrio-BannerCatalog__bannerWrapper___3KSIe > .vitrio-BannerCatalog__wrapper___3q6gF {\n    width: 72.91667%; }\n  @media screen and (max-width: 1600px) {\n    .vitrio-BannerCatalog__bannerWrapper___3KSIe > .vitrio-BannerCatalog__wrapper___3q6gF {\n      width: 80.20833%; } }\n  @media screen and (max-width: 1440px) {\n    .vitrio-BannerCatalog__bannerWrapper___3KSIe > .vitrio-BannerCatalog__wrapper___3q6gF {\n      width: 88.02083%; } }\n  @media screen and (max-width: 991px) {\n    .vitrio-BannerCatalog__bannerWrapper___3KSIe > .vitrio-BannerCatalog__wrapper___3q6gF {\n      width: 94.66667%; } }\n  .vitrio-BannerCatalog__bannerWrapper___3KSIe .vitrio-BannerCatalog__wrapper___3q6gF {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .vitrio-BannerCatalog__bannerWrapper___3KSIe .vitrio-BannerCatalog__wrapper___3q6gF .vitrio-BannerCatalog__imageWrapper___C_tAj {\n      width: 42.63566%; }\n      .vitrio-BannerCatalog__bannerWrapper___3KSIe .vitrio-BannerCatalog__wrapper___3q6gF .vitrio-BannerCatalog__imageWrapper___C_tAj .vitrio-BannerCatalog__banner___36XrE {\n        background-size: 100%;\n        padding-top: 112.72727%; }\n    .vitrio-BannerCatalog__bannerWrapper___3KSIe .vitrio-BannerCatalog__wrapper___3q6gF .vitrio-BannerCatalog__wrapperShelf___12voR {\n      width: 53.87597%;\n      padding-left: 10.07752%; }\n      @media screen and (max-width: 991px) {\n        .vitrio-BannerCatalog__bannerWrapper___3KSIe .vitrio-BannerCatalog__wrapper___3q6gF .vitrio-BannerCatalog__wrapperShelf___12voR {\n          width: 100%;\n          background: #FFF;\n          border-radius: 20px;\n          overflow: hidden;\n          padding: 9.01408%; } }\n",""]),e.locals={bannerWrapper:"vitrio-BannerCatalog__bannerWrapper___3KSIe",wrapper:"vitrio-BannerCatalog__wrapper___3q6gF",imageWrapper:"vitrio-BannerCatalog__imageWrapper___C_tAj",banner:"vitrio-BannerCatalog__banner___36XrE",wrapperShelf:"vitrio-BannerCatalog__wrapperShelf___12voR",fadeIn:"vitrio-BannerCatalog__fadeIn___VXP1w"}},555:function(n,e,t){var r=t(556);"string"==typeof r&&(r=[[n.i,r,""]]);t(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},556:function(n,e,t){(e=n.exports=t(99)(!1)).push([n.i,"/* checkout */\n@-webkit-keyframes vitrio-Card__fadeIn___2789p {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Card__fadeIn___2789p {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Card__card___3pjXb {\n  padding: 0 8.78378% 33.78378% 8.78378%;\n  position: relative;\n  text-decoration: none;\n  display: block; }\n  @media screen and (max-width: 767px) {\n    .vitrio-Card__card___3pjXb {\n      padding: 7.04225%;\n      padding-bottom: 11.26761%; } }\n  .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__flag___3-2NY {\n      margin-bottom: 20px;\n      height: 26px;\n      text-transform: lowercase;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      -webkit-flex-wrap: wrap;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n      overflow: hidden; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__flag___3-2NY {\n          display: none; } }\n    .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__productName___2SoVE {\n      font-size: 0.875em;\n      line-height: 1.42857em;\n      margin-bottom: 37px;\n      color: #100F0F;\n      text-transform: lowercase;\n      height: 38px;\n      overflow: hidden;\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 600; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__productName___2SoVE {\n          height: auto;\n          margin-bottom: 20px; } }\n    .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__bestPrice___1LpZq {\n      color: #100F0F;\n      display: block;\n      width: 100%;\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 500; }\n      @media screen and (max-width: 767px) {\n        .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__bestPrice___1LpZq {\n          font-size: 0.875em; } }\n      .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__bestPrice___1LpZq span {\n        color: #FFF;\n        display: inline-block;\n        font-size: 1.3125em;\n        padding: 6px 8px;\n        background: #FC3C53;\n        cursor: pointer;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700; }\n        @media screen and (max-width: 767px) {\n          .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__bestPrice___1LpZq span {\n            background: #100F0F;\n            margin-left: 17px;\n            font-size: 1em; } }\n    @media screen and (max-width: 767px) {\n      .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__price___5e6hD {\n        background: #FFD500;\n        font-size: 2.25em;\n        color: #100F0F;\n        padding: 10px 20px;\n        margin-bottom: 20px;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700; } }\n  @media screen and (max-width: 767px) and (max-width: 767px) {\n    .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__price___5e6hD {\n      color: #FFF;\n      background: #FC3C53; } }\n    @media screen and (max-width: 767px) {\n        .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__price___5e6hD > span {\n          font-family: 'Montserrat', sans-serif;\n          font-weight: 300;\n          font-size: 50%; }\n        .vitrio-Card__card___3pjXb .vitrio-Card__informations___3srox .vitrio-Card__price___5e6hD .vitrio-Card__up___1K_d0 {\n          font-size: 50%;\n          display: inline-block;\n          vertical-align: top; } }\n  .vitrio-Card__card___3pjXb .vitrio-Card__ratting___14iJB {\n    height: 25px;\n    margin: 28px 0;\n    width: 100%; }\n  .vitrio-Card__card___3pjXb .vitrio-Card__addToCartButton___qpAbR {\n    width: 83%;\n    position: absolute;\n    bottom: 3%;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    margin: auto;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    opacity: 1; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Card__card___3pjXb .vitrio-Card__addToCartButton___qpAbR {\n        display: none; } }\n",""]),e.locals={card:"vitrio-Card__card___3pjXb",informations:"vitrio-Card__informations___3srox",flag:"vitrio-Card__flag___3-2NY",productName:"vitrio-Card__productName___2SoVE",bestPrice:"vitrio-Card__bestPrice___1LpZq",price:"vitrio-Card__price___5e6hD",up:"vitrio-Card__up___1K_d0",ratting:"vitrio-Card__ratting___14iJB",addToCartButton:"vitrio-Card__addToCartButton___qpAbR",fadeIn:"vitrio-Card__fadeIn___2789p"}},561:function(n,e,t){var r=t(562);"string"==typeof r&&(r=[[n.i,r,""]]);t(100)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},562:function(n,e,t){(e=n.exports=t(99)(!1)).push([n.i,"/* checkout */\n@-webkit-keyframes vitrio-Shelf__fadeIn___1SGgo {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vitrio-Shelf__fadeIn___1SGgo {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.vitrio-Shelf__wrapperShelf___38zwn {\n  width: 100%; }\n  .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__slider___2VPh3 {\n    width: 100%; }\n  .vitrio-Shelf__wrapperShelf___38zwn .slick-prev,\n  .vitrio-Shelf__wrapperShelf___38zwn .slick-next {\n    width: 40px;\n    height: 40px;\n    z-index: 11; }\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-prev.slick-disabled,\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-next.slick-disabled {\n      display: none !important; }\n  @media screen and (max-width: 767px) {\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-next {\n      right: 0% !important;\n      margin-right: -10%; }\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-prev {\n      left: 0% !important;\n      margin-left: -10%; } }\n  .vitrio-Shelf__wrapperShelf___38zwn .slick-arrow:before, .vitrio-Shelf__wrapperShelf___38zwn .slick-arrow:after {\n    content: none; }\n  @media screen and (max-width: 767px) {\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-next {\n      right: 10px; }\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-prev {\n      left: 10px; } }\n  .vitrio-Shelf__wrapperShelf___38zwn .slick-dots {\n    display: block;\n    bottom: inherit;\n    top: 0;\n    margin-top: -4%;\n    right: 0;\n    left: 0;\n    text-align: right; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Shelf__wrapperShelf___38zwn .slick-dots {\n        text-align: center;\n        bottom: 0;\n        top: initial;\n        margin-bottom: -1%; } }\n    .vitrio-Shelf__wrapperShelf___38zwn .slick-dots li {\n      height: 10px;\n      width: 10px;\n      margin: 0 7px; }\n      .vitrio-Shelf__wrapperShelf___38zwn .slick-dots li button {\n        width: 10px;\n        height: 10px;\n        background: #D3D1D1;\n        border-radius: 100%; }\n        .vitrio-Shelf__wrapperShelf___38zwn .slick-dots li button:before, .vitrio-Shelf__wrapperShelf___38zwn .slick-dots li button:after {\n          content: none; }\n      .vitrio-Shelf__wrapperShelf___38zwn .slick-dots li.slick-active button {\n        background: #FC3C53; }\n  .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__prevArrow___3SXdh,\n  .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__nextArrow___1lmut {\n    width: 100%;\n    display: block; }\n  .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__cardItem___10Z3A {\n    width: 34.32432%; }\n  .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__title___3uxeX {\n    font-size: 2.25em;\n    line-height: 1.11111em;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__title___3uxeX {\n        font-size: 1.5em;\n        line-height: 1.66667em; } }\n    .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__title___3uxeX span {\n      color: #FC3C53; }\n    @media screen and (max-width: 767px) {\n      .vitrio-Shelf__wrapperShelf___38zwn .vitrio-Shelf__title___3uxeX {\n        text-align: center; } }\n",""]),e.locals={wrapperShelf:"vitrio-Shelf__wrapperShelf___38zwn",slider:"vitrio-Shelf__slider___2VPh3",prevArrow:"vitrio-Shelf__prevArrow___3SXdh",nextArrow:"vitrio-Shelf__nextArrow___1lmut",cardItem:"vitrio-Shelf__cardItem___10Z3A",title:"vitrio-Shelf__title___3uxeX",fadeIn:"vitrio-Shelf__fadeIn___1SGgo"}}}]);