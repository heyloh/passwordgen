(()=>{"use strict";var n,e,r,t={122:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(15),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(74, 5, 153);\n  --primary-color-darker: rgb(47, 9, 92);\n}\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background:#fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.generated-pwd {\n  font-size: 1.2em;\n  letter-spacing: 5px;\n  margin: 40px 0;\n}\n\nbutton {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nbutton {\n  border: none;\n  background: var(--primary-color);\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n  border-radius: 10px;\n}\n\ninput[type=\"checkbox\"] {\n  width: 25px;\n  height: 25px;\n}\n\nbutton:hover {\n  background: var(--primary-color-darker);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,gCAAgC;EAChC,sCAAsC;AACxC;AACA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,qCAAqC;EACrC,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uCAAuC;AACzC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');\n\n:root {\n  --primary-color: rgb(74, 5, 153);\n  --primary-color-darker: rgb(47, 9, 92);\n}\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background:#fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.generated-pwd {\n  font-size: 1.2em;\n  letter-spacing: 5px;\n  margin: 40px 0;\n}\n\nbutton {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nbutton {\n  border: none;\n  background: var(--primary-color);\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n  border-radius: 10px;\n}\n\ninput[type=\"checkbox\"] {\n  width: 25px;\n  height: 25px;\n}\n\nbutton:hover {\n  background: var(--primary-color-darker);\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(n){o=!0,a=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),A="/*# ".concat(s," */"),u=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(u).concat([A]).join("\n")}return[a].join("\n")}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function i(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],A=r[s]||0,u="".concat(s," ").concat(A);r[s]=A+1;var l=i(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:u,updater:m(d,e),references:1}),t.push(u)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var A,u=(A=[],function(n,e){return A[n]=e,A.filter(Boolean).join("\n")});function l(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,f=0;function m(n,e){var r,t,o;if(e.singleton){var a=f++;r=p||(p=s(e)),t=l.bind(null,r,a,!1),o=l.bind(null,r,a,!0)}else r=s(e),t=d.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var s=c(n,e),A=0;A<r.length;A++){var u=i(r[A]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=s}}}}},o={};function a(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return t[n](e,e.exports,a),e.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var r in e)a.o(e,r)&&!a.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=a(379),e=a.n(n),r=a(122),e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.addEventListener("click",(function(n){n.target.classList.contains("generate")}))})();
//# sourceMappingURL=bundle.js.map