!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i={};function l(e,n,t){for(var o=0;o<n.length;o++){var r={css:n[o][1],media:n[o][2],sourceMap:n[o][3]};i[e][o]?i[e][o](r):i[e].push(y(r,t))}}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,b=0;function y(e,n){var t,o,r;if(n.singleton){var a=b++;t=f||(f=c(n)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=c(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),e=t.base?e+t.base:e,n=n||[],i[e]||(i[e]=[]),l(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){i[e]||(i[e]=[]),l(e,n,t);for(var o=n.length;o<i[e].length;o++)i[e][o]();i[e].length=n.length,0===i[e].length&&delete i[e]}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,l,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r)}},n}},function(e,n,t){var o=t(0),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),e.exports=n},function(e,n,t){var o=t(0),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,"/* Page layout start */\n\n.page-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-container > * {\n  max-width: 50%;\n}\n\n/* Page layout end */\n\n/* ================== */\n\n/* Drop down nav start */\n.top-nav {\n  padding: 14px 0px;\n  background-color: rgb(173, 173, 173);\n}\n\n.nav-item {\n  display: inline;\n  width: 60px;\n  padding: 12px 16px;\n}\n\n.nav-item:hover {\n  background-color: rgb(85, 85, 85);\n  color: white;\n}\n\n.dropdown {\n  position: absolute;\n}\n\n/* Drop down nav end */\n\n/* ================== */\n\n/* mobile menu start */\n\n.menu {\n  display: flex;\n}\n\n.image {\n  width: 30px;\n}\n\n.mobile-menu {\n  height: 667px;\n  width: 375px;\n}\n\n.mobile-nav {\n  background-color: #68829E;\n}\n\n.hamburger {\n  width: 32px;\n  height: 32px;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.menu-item > * {\n  margin: 5px 5px;\n}\n\n/* mobile menu end */\n\n/* ================== */\n\n/* image slider start */\n\n.slider-image {\n  height: 300px;\n}\n\n.arrow {\n  height: 125px;\n}\n\n/* image slider end */",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);t(2),t(4);var o=t.p+"7b142b1fc78526eca32a6d324ed96bc7.png",r=t.p+"f16646acab4b19b482f5eabe4f6ab9e6.png",a=t.p+"12cb97611f773ac08a34705d9ac77e2b.png",i=t.p+"7319baad5eed8e648ab40f9acd7788a1.png";var l=t.p+"88577e0cdac5232618b2913bdb8a0788.jpg",c=t.p+"c095bd285bbfa40d904799bc73262777.jpg",s=t.p+"0f4f11227e9e009eb5409c958897c8e1.jpg",d=t.p+"5311f30e76867ec595ceeeda39d82a3b.jpg",u=t.p+"98069ce88f63a2ea7a1a2ff1cc1a2b91.jpg",p=t.p+"2698c837b129414417850ff5e7d1c178.png",f=t.p+"20a16390ccac29aa3c54e56d97e9bbce.png";document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("mouseenter",e=>{const n=e.target.querySelector(".dropdown");"none"===n.style.display?n.style.display="block":n.style.display="none"}),e.addEventListener("mouseleave",e=>{const n=e.target.querySelector(".dropdown");"block"===n.style.display?n.style.display="none":n.style.display="block"})}),(()=>{const e=document.querySelectorAll(".image"),n=[o,r,a],t=()=>{const e=document.querySelector(".hamburger");e.src=i,e.addEventListener("click",()=>{const e=document.querySelector(".menu");"block"===e.style.display?e.style.display="none":e.style.display="block"})},l=()=>{e.forEach((e,t)=>{e.src=n[t]})};t(),l()})(),(()=>{const e=[l,c,s,d,u],n=[p,f],t=()=>{document.querySelectorAll(".slider-image").forEach((n,t)=>{n.src=e[t]})},o=()=>{document.querySelectorAll(".arrow").forEach((e,t)=>{e.src=n[t]})};return t(),o(),{addSliderImages:t,addArrows:o,slide:()=>{const e=document.querySelectorAll(".slider-image-container");let n=0;const t=()=>{document.querySelector("#slider-left").addEventListener("click",()=>{n-=1,console.log(n);const t=e[n%e.length],o=e[(n%e.length+1)%e.length];"block"===t.style.display?t.style.display="none":t.style.display="block","block"===o.style.display?o.style.display="none":o.style.display="block"})},o=()=>{document.querySelector("#slider-right").addEventListener("click",()=>{n+=1,console.log(n);const t=e[n%e.length],o=e[(n%e.length+1)%e.length];"block"===t.style.display?t.style.display="none":t.style.display="block","block"===o.style.display?o.style.display="none":o.style.display="block"})};return t(),o(),{left:t,right:o}}}})().slide()}]);