!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function c(n,e,t){for(var o=0;o<e.length;o++){var r={css:e[o][1],media:e[o][2],sourceMap:e[o][3]};a[n][o]?a[n][o](r):a[n].push(b(r,t))}}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function b(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=l(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=l(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),c(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),c(n,e,t);for(var o=e.length;o<a[n].length;o++)a[n][o]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o=0;o<n.length;o++){var r=[].concat(n[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r)}},e}},function(n,e,t){var o=t(0),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(n.i,r,i),r.locals?r.locals:{});n.exports=a},function(n,e,t){(e=t(1)(!1)).push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),n.exports=e},function(n,e,t){var o=t(0),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(n.i,r,i),r.locals?r.locals:{});n.exports=a},function(n,e,t){(e=t(1)(!1)).push([n.i,"/* Page layout start */\n\n.page-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-container > * {\n  max-width: 50%;\n}\n\n/* Page layout end */\n\n/* ================== */\n\n/* Drop down nav start */\n.top-nav {\n  padding: 14px 0px;\n  background-color: rgb(173, 173, 173);\n}\n\n.nav-item {\n  display: inline;\n  width: 60px;\n  padding: 12px 16px;\n}\n\n.nav-item:hover {\n  background-color: rgb(85, 85, 85);\n  color: white;\n}\n\n.dropdown {\n  position: absolute;\n}\n\n/* Drop down nav end */\n\n/* ================== */\n\n/* mobile menu start */\n\n.menu {\n  display: flex;\n}\n\n.image {\n  width: 30px;\n}\n\n.mobile-menu {\n  height: 667px;\n  width: 375px;\n}\n\n.mobile-nav {\n  background-color: #68829E;\n}\n\n.hamburger {\n  width: 32px;\n  height: 32px;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.menu-item > * {\n  margin: 5px 5px;\n}\n\n/* mobile menu end */\n\n/* ================== */\n\n/* image slider start */\n\n.slider-image {\n  height: 300px;\n}\n\n.arrow {\n  height: 125px;\n}\n\n/* image slider end */",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);t(2),t(4);t.p,t.p,t.p,t.p;var o=t.p+"2698c837b129414417850ff5e7d1c178.png",r=t.p+"20a16390ccac29aa3c54e56d97e9bbce.png";var i=t.p+"88577e0cdac5232618b2913bdb8a0788.jpg",a=t.p+"c095bd285bbfa40d904799bc73262777.jpg",c=t.p+"0f4f11227e9e009eb5409c958897c8e1.jpg",l=t.p+"5311f30e76867ec595ceeeda39d82a3b.jpg",s=t.p+"98069ce88f63a2ea7a1a2ff1cc1a2b91.jpg";((n,e)=>{const t=[],i=document.createElement("img");i.src=o,i.classList.add("arrow");const a=document.createElement("img");a.src=r,a.classList.add("arrow");const c=()=>{n.forEach((n,e)=>{if(0===e){const e=document.createElement("div");e.className="slider-image-container",e.style.display="block";const o=document.createElement("img");e.appendChild(o),o.className="slider-image",o.src=n,t.push(e)}else{const e=document.createElement("div");e.className="slider-image-container",e.style.display="none";const o=document.createElement("img");e.appendChild(o),o.className="slider-image",o.src=n,t.push(e)}})},l=()=>{let n=0;const e=e=>{n+=e,n<0?n=t.length-1:n>t.length-1&&(n=0),t.forEach(n=>{n.style.display="none"}),t[n].style.display="block"};return i.addEventListener("click",()=>e(-1)),a.addEventListener("click",()=>e(1)),{}};c(),e.appendChild(i),t.forEach(n=>{e.appendChild(n)}),e.appendChild(a),l()})([i,a,c,l,s],document.querySelector(".image-slider"))}]);
//# sourceMappingURL=main.js.map