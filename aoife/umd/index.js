!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).aoife=t()}(this,function(){"use strict";function e(){var e,t=this.parentNode,n=arguments.length;if(t)for(n||t.removeChild(this);n--;)"object"!=typeof(e=arguments[n])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),n?t.insertBefore(e,this.nextSibling):t.replaceChild(e,this)}function p(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!p(e[r],t[r]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(var i=0,a=e.entries();i<a.length;i++)if(r=a[i],!t.has(r[0]))return!1;for(var c=0,u=e.entries();c<u.length;c++)if(!p((r=u[c])[1],t.get(r[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(var f=0,l=e.entries();f<l.length;f++)if(r=l[f],!t.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){var s=o[r];if(!p(e[s],t[s]))return!1}return!0}return e!=e&&t!=t}void 0===HTMLElement.prototype.append&&(Element.prototype.append=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e.forEach(function(e){t.prototype.appendChild(e)})}),void 0===HTMLElement.prototype.remove&&(Element.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.prototype.parentNode&&this.prototype.parentNode.removeChild(this)}),Element.prototype.replaceWith||(Element.prototype.replaceWith=e),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=e),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=e);var i=new Set;function f(e){var t=[];if(e)if("string"==typeof e){var n="",r=e.split(", ");r.forEach(function(e,t){e=e.trim(),t===r.length-1?n+=e+"[aoife-next], "+e+" [aoife-next]":n+=e+"[aoife-next], "+e+" [aoife-next],"}),t=document.body.querySelectorAll(n)}else"[object Array]"===Object.prototype.toString.call(e)?(t=e.slice(),e.forEach(function(e){t.push.apply(t,e.querySelectorAll("*"))})):(t=[e]).push.apply(t,e.querySelectorAll("*"));return t}function d(e,t,n){e.__next||(e.setAttribute("aoife-next",""),e.__next=new Map),e.__next.set(t,n)}function y(i,a,c,u){return new(c=c||Promise)(function(e,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,r)}o((u=u.apply(i,a||[])).next())})}function h(n,r){var o,i,a,e,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,i=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function a(t,n){void 0===n&&(n=500);var r=null;return function(){var e=arguments;r?(clearTimeout(r),r=null):t.apply(this,e),r=setTimeout(function(){r=null},n)}}function c(n,r){void 0===r&&(r=500);var o=0;return function(){var e=arguments,t=Date.now();(o<1||r<t-o)&&(o=t,n.apply(this,e))}}var u={autofocus:!0,role:!0,viewBox:!0,flavor:!0,"flavor-ignore":!0};function l(e,t){return"function"==typeof t?Promise.resolve(t(e)):t}function s(n,r,e){var t,o=this,i=e[r];return e.debounce&&"function"==typeof i&&-1<e.debounce.indexOf(r)?i=a(i,e.debounceTime):e.throttle&&"function"==typeof i&&-1<e.throttle.indexOf(r)&&(i=c(i,e.throttleTime)),/^on/.test(r)?(n[r]=i,null):/^listen/.test(r)?(n.addEventListener(r.replace("listen",""),i),null):((t=n.__isSvg||u[r]||/-/.test(r)?function(){return y(o,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,l(n,i)];case 1:return t=e.sent(),n.getAttribute(r)!==t&&(!1===t?n.removeAttribute(r):n.setAttribute(r,t)),[2]}})})}:"style"===r?function(){return y(o,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,l(n,i)];case 1:return(t=e.sent())&&("string"==typeof t?n.style.cssText=t:Object.keys(t).forEach(function(e){/-/.test(e)?n.style.setProperty(e,t[e]):n.style[e]=t[e]})),[2]}})})}:"className"===r?function(){return y(o,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,l(n,i)];case 1:return t=e.sent(),Array.isArray(t)&&(t=t.join(" ")),n.className!==t&&(n.className=t),[2]}})})}:function(){return y(o,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,l(n,i)];case 1:return t=e.sent(),n[r]!==t&&(n[r]=t),[2]}})})})(),"function"!=typeof i?null:t)}var v={};function m(e){var t=Object.prototype.toString.call(e);if("[object String]"===t||"[object Number]"===t)return!0}function b(e){return 0<Object.prototype.toString.call(e).indexOf("lement")}function g(e,t){e.isEqualNode(t)||e.replaceWith(t)}function n(i,a){return void 0===a&&(a=5e3),new Promise(function(t,n){var r=0,o=function(){var e=i();e?t(e):r<a?(r++,setTimeout(o,20+r)):n()};o()})}function _(e,t){return n("string"==typeof e?function(){return document.querySelector(e)}:function(){if(document.body.contains(e))return e})}var x={};var t=void 0;var E="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;var w={svg:!0,rect:!0,circle:!0,ellipse:!0,line:!0,polyline:!0,polygon:!0,path:!0,animate:!0,animateColor:!0,animateMotion:!0,animateTransform:!0,clipPath:!0,"color-profile":!0,"definition-src":!0,defs:!0,desc:!0,filter:!0,font:!0,"font-face":!0,"font-face-format":!0,"font-face-name":!0,"font-face-src":!0,"font-face-uri":!0,g:!0,glyph:!0,hkern:!0,linearGradient:!0,marker:!0,mask:!0,view:!0},S={class:1,className:1,onsubmit:1,oncreate:1,onappend:1,child:1,children:1,length:1,memo:1,__memo:1,__memoLast:1,__memoSeted:1,__proxy:1,__proxyEle:1},k=["className"],j=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o,i={};if(t&&("function"==typeof t||Array.isArray(t)||m(t)||b(t))?n=[t].concat(n):t&&(i=t),i.children=n.slice(),i.class&&(i.className=i.class),Array.isArray(e))return j.apply(void 0,e);if("function"==typeof e){if((o=e.apply(void 0,[i].concat(n)))&&"function"==typeof o.then){var a=document.createElement("span");return a.setAttribute("promise-span",""),o.then(function(e){a.replaceWith(e)}),a}return o}if("string"==typeof e){if("style"===e&&i.global&&n&&"string"==typeof n[0]){var c=n[0],u=document.createElement("style");return u.textContent=c,document.head.append(u),u}if("template"===e&&i.children){var f="";i.children.forEach(function(e){"string"!=typeof e&&"number"!=typeof e||(f+=e)}),(o=document.createElement("template")).innerHTML=f}else{if(v[e])return o=function(e,n,t){void 0===n&&(n=[]);var r=void 0===t?{}:t,o=r.ref,i=r.loading,a=r.defaultKey,c=void 0===a?"default":a;return i=i||document.createElement("input"),Promise.resolve(e.apply(void 0,n)).then(function(e){var t=e[c];t&&(e=t.apply(void 0,n)),"function"==typeof e&&(e=e.apply(void 0,n)),o&&o(e),i&&i.replaceWith(e)}),i}(v[e],[i].concat(n));w[e]?(o=document.createElementNS("http://www.w3.org/2000/svg",e)).__isSvg=!0:o=document.createElement(e)}}else b(e)&&(o=e);return i.memo&&(o.__memo=i.memo,o.__memoSeted=1,Promise.resolve(i.memo()).then(function(e){o.__memoLast=e})),i.onsubmit&&(o.onsubmit=function(e){e.preventDefault(),i.onsubmit&&i.onsubmit(e)}),"string"==typeof i.debounce&&(i.debounce=[i.debounce]),"string"==typeof i.throttle&&(i.throttle=[i.throttle]),k.forEach(function(e){if(i[e]){var t=s(o,e,i);t&&d(o,e,t)}}),Object.keys(i).forEach(function(e){if(!S[e]){var t=s(o,e,i);t&&d(o,e,t)}}),function(e,s){var i=this;Array.isArray(e)&&e.filter(function(e){return null!=e}).forEach(function(u,f){if(m(u)){var e=document.createTextNode(u);e.key=f,s.append(e)}else if("function"==typeof u){var l=document.createTextNode("");s.append(l);var t=function(){return y(i,void 0,void 0,function(){var t,n,r,o,i,a,c;return h(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(u())];case 1:return m(t=e.sent())?((n=document.createTextNode(t)).key=f,r=!1,s.childNodes.forEach(function(e){if(e.key===n.key){if(e.textContent===n.textContent)return void(r=!0);g(e,n),r=!0}}),r||s.insertBefore(n,l),[2,f]):Array.isArray(t)?(o={},i={},t.forEach(function(e,t){e.___forList=f,e.key||(e.key="fn("+f+")-list("+t+")"),i[e.key]=e}),a=[],s.childNodes.forEach(function(e){e.___forList===f&&(i[e.key]?o[e.key]=e:a.push(e))}),a.forEach(function(e){e.remove()}),t.forEach(function(e,t){var n=o[e.key];n?n.isEqualNode(e)||g(n,e):!1!==e&&s.insertBefore(e,l)}),[2,"for-list-"+f]):t?(t.key||(t.key=f),c=!1,s.childNodes.forEach(function(e){e.key===t.key&&(g(e,t),c=!0)}),c||s.insertBefore(t,l),[2,t.key]):[2]}})})};t(),d(s,"children",t)}else if(b(u))s.append(u);else if(!1!==u)if("[object Array]"===Object.prototype.toString.call(u)){for(var n=[],r=0;r<u.length;r++){var o=u[r];!1!==o&&n.push(o)}s.append.apply(s,n)}else s.appendChild(u)})}(n,o),"function"==typeof i.oncreate&&i.oncreate(o),"function"==typeof i.onappend&&_(o).then(i.onappend),o};return j.jsxFrag=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e&&e.children?j.apply(void 0,["span",{style:{all:"unset"}}].concat(e.children)):""},j.stringToHex=function(e,t){void 0===t&&(t="c");var n=x[e];if(n)return t+n;for(var r="",o=0;o<e.length;o++)""===r?r=e.charCodeAt(o).toString(36):r+=e.charCodeAt(o).toString(36);return t+(x[e]=r)},j.waitAppend=_,j.subscribe=function(e){return i.add(e),function(){i.delete(e)}},j.next=function(e,t){e=e||"*";for(var a=f(t),c=f(e),u=[],n=c.length,r=function(e){var n=c[e];if(n.__next&&document.body.contains(n)){if(a.length){for(var t=a.length,r=!1,o=0;o<t;o++){var i=a[o];if(i===n||i.contains(n)){r=!0;break}}if(r)return"continue"}n.__memo?Promise.resolve(n.__memo()).then(function(e){var t=!p(n.__memoLast,e);n.__memoLast=e,t&&n.__next.forEach(function(e){e()})}):n.__next.forEach(function(e){e()}),u.push(n)}},o=0;o<n;o++)r(o);return i.forEach(function(e){return e()}),u},j.events=i,j.registerTag=function(t){Object.keys(t).forEach(function(e){v[e]=t[e]})},j.propFn=function(e,t){return"function"==typeof e?function(){return t(e())}:t(e)},j.waitValue=n,j.memo=function(r){function o(){return y(t,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(r())];case 1:return t=e.sent(),i.fixed?(n=p(i.data,t),i.data=t,[2,!n]):(i.fixed=1,i.data=t,[2,!0])}})})}var i={fixed:0,data:null,value:null};return o(),function(n){return function(){return y(t,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(o())];case 1:return e.sent()?(t=i,[4,Promise.resolve(n())]):[3,3];case 2:t.value=e.sent(),e.label=3;case 3:return[2,i.value]}})})}}},j.deepEqual=p,j.deepMerge=function e(t,n){for(var r in n)n.hasOwnProperty(r)&&(Object.prototype.toString.call(r),t[r]&&function(e){return e&&"object"==typeof e}(o=r)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===E}(e)}(o)?e(t[r],n[r]):t[r]=n[r]);var o;return t},j.debounce=a,j.throttle=c,j.styles=function(e){return e},window.aoife=j});
