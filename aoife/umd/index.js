!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).aoife=t()}(this,function(){"use strict";function e(){var e,t=this.parentNode,n=arguments.length;if(t)for(n||t.removeChild(this);n--;)"object"!=typeof(e=arguments[n])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),n?t.insertBefore(e,this.nextSibling):t.replaceChild(e,this)}void 0===HTMLElement.prototype.append&&(Element.prototype.append=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e.forEach(function(e){t.prototype.appendChild(e)})}),void 0===HTMLElement.prototype.remove&&(Element.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.prototype.parentNode&&this.prototype.parentNode.removeChild(this)}),Element.prototype.replaceWith||(Element.prototype.replaceWith=e),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=e),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=e);function a(e,t,n){e.__next||(e.setAttribute("aoife-next",""),e.__next=new Map),e.__next.set(t,n)}var u=new Set;function c(i,a,c,u){return new(c=c||Promise)(function(e,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,r)}o((u=u.apply(i,a||[])).next())})}function p(n,r){var o,i,a,e,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,i=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var i={};function s(e,t){void 0===t&&(t="c");var n=i[e];if(n)return t+n;for(var r="",o=0;o<e.length;o++)""===r?r=e.charCodeAt(o).toString(36):r+=e.charCodeAt(o).toString(36);return t+(i[e]=r)}var o={autofocus:!0};function f(e,t){return"function"==typeof t?Promise.resolve(t(e)):t}function l(i,n,r){var e,t=this;return/^on/.test(n)?(i[n]=r,null):/^listen/.test(n)?(i.addEventListener(n.replace("listen",""),r),null):((e=o[n]||/-/.test(n)?function(){return c(t,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,f(i,r)];case 1:return t=e.sent(),i.getAttribute(n)!==t&&i.setAttribute(n,t),[2]}})})}:"style"===n?(void 0===i.className&&(i.className=" "),function(){return c(t,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,f(i,r)];case 1:return(t=e.sent())&&("string"==typeof t?i.style.cssText=t:Object.keys(t).forEach(function(e){/-/.test(e)?i.style.setProperty(e,t[e]):i.style[e]=t[e]})),[2]}})})}):"className"===n?function(){return c(t,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,f(i,r)];case 1:return t=e.sent(),Array.isArray(t)&&(t=t.join(" ")),i.className!==t&&(i.className=t),[2]}})})}:"classPick"===n?(void 0===i.className&&(i.className=" "),function(){return c(t,void 0,void 0,function(){var o;return p(this,function(e){switch(e.label){case 0:return[4,f(i,r)];case 1:return(o=e.sent())&&(Object.keys(o).forEach(function(e){var t=o[e],n=s(e);if(i.__isFirstClassPick){var r=void 0;(r=t?i.className.replace(n,e):i.className.replace(e,n))!==i.className&&(i.className=r)}else i.className+=" "+(t?e:n)+" "}),i.__isFirstClassPick=!0),[2]}})})}):function(){return c(t,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,f(i,r)];case 1:return t=e.sent(),i[n]!==t&&(i[n]=t),[2]}})})})(),"function"!=typeof r?null:e)}var d={};function y(e){var t=Object.prototype.toString.call(e);if("[object String]"===t||"[object Number]"===t)return!0}function h(e){return 0<Object.prototype.toString.call(e).indexOf("lement")}function v(i,a){void 0===a&&(a=300);var c=0;return new Promise(function(t,n){var r;r="string"==typeof i?function(){return document.querySelector(i)}:function(){if(document.body.contains(i))return i};var o=function(){var e=r();e?t(e):c<a?(c++,requestAnimationFrame(o)):n(i)};o()})}var m={class:1,className:1,classPick:1,onsubmit:1,oncreate:1,onappend:1,child:1,children:1,length:1,__proxy:1,__proxyEle:1},b=["className","classPick"],x=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o,i={};if(t&&("function"==typeof t||Array.isArray(t)||y(t)||h(t))?n=[t].concat(n):t&&(i=t),i.children=n.slice(),i.class&&(i.className=i.class),"function"==typeof e)return e.apply(void 0,[i].concat(n));if(Array.isArray(e))return x.apply(void 0,e);if("string"==typeof e){if(d[e])return o=function(e,n,t){void 0===n&&(n=[]);var r=void 0===t?{}:t,o=r.ref,i=r.loading,a=r.defaultKey,c=void 0===a?"default":a;return i=i||document.createElement("input"),Promise.resolve(e.apply(void 0,n)).then(function(e){var t=e[c];t&&(e=t.apply(void 0,n)),"function"==typeof e&&(e=e.apply(void 0,n)),o&&o(e),i&&i.replaceWith(e)}),i}(d[e],[i].concat(n));o=document.createElement(e)}else h(e)&&(o=e);return i.onsubmit&&(o.onsubmit=function(e){e.preventDefault(),i.onsubmit&&i.onsubmit(e)}),b.forEach(function(e){if(i[e]){var t=l(o,e,i[e]);t&&a(o,e,t)}}),Object.keys(i).forEach(function(e){if(!m[e]){var t=l(o,e,i[e]);t&&a(o,e,t)}}),function(e,l){var n=this;Array.isArray(e)&&e.filter(function(e){return null!=e}).forEach(function(u,s){if(y(u)){var e=document.createTextNode(u);e.key=s,l.append(e)}else if("function"==typeof u){var f=document.createTextNode("");l.append(f);var t=function(){return c(n,void 0,void 0,function(){var t,n,r,o,i,a,c;return p(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(u())];case 1:return y(t=e.sent())?((n=document.createTextNode(t)).key=s,r=!1,l.childNodes.forEach(function(e){if(e.key===n.key){if(e.textContent===n.textContent)return void(r=!0);e.replaceWith(n),r=!0}}),r||l.insertBefore(n,f),[2,s]):Array.isArray(t)?(o={},i={},t.forEach(function(e,t){e.___forList=s,e.key||(e.key="fn("+s+")-list("+t+")"),i[e.key]=e}),a=[],l.childNodes.forEach(function(e){e.___forList===s&&(i[e.key]?o[e.key]=e:a.push(e))}),a.forEach(function(e){e.remove()}),t.forEach(function(e,t){var n=o[e.key];n?n.isEqualNode(e)||n.replaceWith(e):l.insertBefore(e,f)}),[2,"for-list-"+s]):t?(t.key||(t.key=s),c=!1,l.childNodes.forEach(function(e){e.key===t.key&&(e.replaceWith(t),c=!0)}),c||l.insertBefore(t,f),[2,t.key]):[2]}})})};t(),a(l,"childfn-"+s,t)}else h(u)?l.append(u):l.append.apply(l,u)})}(n,o),"function"==typeof i.oncreate&&i.oncreate(o),"function"==typeof i.onappend&&v(o).then(i.onappend),o};return x.jsxFrag=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.error("Dont Use Frag JSX")},x.stringToHex=s,x.waitAppend=v,x.subscribe=function(e){return u.add(e),function(){u.delete(e)}},x.next=function(e,t){var o;if(t)if("string"==typeof t){var n=document.body.querySelectorAll(t);o=n}else o=t;var i=[];if(e){var r=void 0;if("string"!=typeof e)r=e;else{var a="",c=e.split(", ");c.forEach(function(e,t){e=e.trim(),t===c.length-1?a+=e+"[aoife-next], "+e+" [aoife-next]":a+=e+"[aoife-next], "+e+" [aoife-next],"}),r=document.body.querySelectorAll(a)}r.forEach(function(e){if(e.__next&&document.body.contains(e)){if(o)for(var t=o.length,n=0;n<t;n++){var r=o[n];if(r===e||r.contains(e))return}e.__next.forEach(function(e){e()}),i.push(e)}})}return u.forEach(function(e){return e()}),i},x.events=u,x.registerTag=function(t){Object.keys(t).forEach(function(e){d[e]=t[e]})},x.propFn=function(e,t){return"function"==typeof e?function(){return t(e())}:t(e)},window.aoife=x});
