(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+"."+{"chunk-22c8b756":"6ba50fdd","chunk-3117a9b4":"fc68d868","chunk-5de64e53":"13080c9b","chunk-2d0e95df":"47c0d4e4","chunk-77f4d6e1":"9aff1c75","chunk-2d2559fa":"702964d0","chunk-606e6721":"ee53170d","chunk-57b94032":"70c481c6","chunk-98ec15c6":"96f22d6d","chunk-99171b64":"d64f630b",canvg:"a1543fca",pdfmake:"b17ba0e4",xlsx:"f99b6874"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3117a9b4":1,"chunk-5de64e53":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+"."+{"chunk-22c8b756":"31d6cfe0","chunk-3117a9b4":"9e9874ff","chunk-5de64e53":"9e9874ff","chunk-2d0e95df":"31d6cfe0","chunk-77f4d6e1":"31d6cfe0","chunk-2d2559fa":"31d6cfe0","chunk-606e6721":"31d6cfe0","chunk-57b94032":"31d6cfe0","chunk-98ec15c6":"31d6cfe0","chunk-99171b64":"31d6cfe0",canvg:"31d6cfe0",pdfmake:"31d6cfe0",xlsx:"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),t(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/stats/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=t("5f5b"),o=t("b1e0"),c=(t("f9e3"),t("2dd8"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("CustomNavbar",[t("router-view")],1)],1)}),u=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"navbar"}},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[t("b-navbar-brand",{attrs:{href:"#"}},[e._v("AG-Spiel Statistiken³")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:{name:"market"}}},[t("b-icon-globe"),e._v(" Markt ")],1),t("b-nav-item-dropdown",{attrs:{to:{name:"premium"},right:""}},[t("template",{slot:"button-content"},[t("b-icon-map"),e._v(" TreeMaps ")],1),t("b-dropdown-item",{attrs:{to:{name:"agsTree"}}},[e._v("AGs")]),t("b-dropdown-item",{attrs:{to:{name:"indizesTree"}}},[e._v("Indizes")])],2),t("b-nav-item",{attrs:{to:{name:"indizes"}}},[t("b-icon-diagram3"),e._v(" Indizes ")],1),t("b-nav-item",{attrs:{to:{name:"wkns"}}},[t("b-icon-building"),e._v(" AGs ")],1)],1)],1)],1),t("b-container",{staticClass:"fp",attrs:{fluid:"xl"}},[e._t("default")],2),t("CustomFooter")],1)},s=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-navbar",{attrs:{fixed:"bottom",type:"dark",variant:"dark"}},[t("b-navbar-nav",[t("b-nav-text",[e._v(" Copyright © AG-Spiel-Statistiken "+e._s((new Date).getFullYear())+" ")])],1)],1)},d=[],f={name:"customFooter"},p=f,h=t("2877"),b=Object(h["a"])(p,l,d,!1,null,null,null),m=b.exports,v={name:"CustomNavbar",components:{CustomFooter:m}},k=v,g=(t("e678"),Object(h["a"])(k,i,s,!1,null,"2697a2ba",null)),w=g.exports,y={name:"app",components:{CustomNavbar:w}},x=y,_=Object(h["a"])(x,c,u,!1,null,null,null),P=_.exports,j=t("9483");Object(j["a"])("".concat("/stats/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var O=t("8c4f");r["default"].use(O["a"]);var C=[{path:"/",name:"Home",redirect:{name:"market"}},{path:"/markt",name:"market",component:function(){return Promise.all([t.e("chunk-77f4d6e1"),t.e("chunk-57b94032")]).then(t.bind(null,"788b"))}},{path:"/index",name:"indizes",component:function(){return Promise.all([t.e("chunk-22c8b756"),t.e("chunk-3117a9b4")]).then(t.bind(null,"fa18"))}},{path:"/index/:id",name:"index",component:function(){return Promise.all([t.e("chunk-77f4d6e1"),t.e("chunk-22c8b756"),t.e("chunk-606e6721")]).then(t.bind(null,"3ffe"))}},{path:"/wkn",name:"wkns",component:function(){return Promise.all([t.e("chunk-22c8b756"),t.e("chunk-5de64e53")]).then(t.bind(null,"b6ee"))}},{path:"/wkn/:wkn(\\d{6})",name:"ag",component:function(){return Promise.all([t.e("chunk-77f4d6e1"),t.e("chunk-22c8b756"),t.e("chunk-2d2559fa")]).then(t.bind(null,"4bbd"))}},{path:"/treemap/indizes",name:"indizesTree",component:function(){return Promise.all([t.e("chunk-77f4d6e1"),t.e("chunk-98ec15c6")]).then(t.bind(null,"a287"))}},{path:"/treemap/ags",name:"agsTree",component:function(){return Promise.all([t.e("chunk-77f4d6e1"),t.e("chunk-99171b64")]).then(t.bind(null,"0f8c"))}},{path:"*",name:"notFound",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}}],S=new O["a"]({mode:"hash",base:"/stats/",routes:C}),A=S,E=t("2f62");r["default"].use(E["a"]);var T=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,r["default"].use(a["a"]),r["default"].use(o["a"]),new r["default"]({router:A,store:T,render:function(e){return e(P)}}).$mount("#app")},b41d:function(e,n,t){},e678:function(e,n,t){"use strict";var r=t("b41d"),a=t.n(r);a.a}});
//# sourceMappingURL=app.4caea4d1.js.map