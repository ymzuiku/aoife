!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).aoife=t()}(this,function(){"use strict";function e(){var e,t=this.parentNode,n=arguments.length;if(t)for(n||t.removeChild(this);n--;)"object"!=typeof(e=arguments[n])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),n?t.insertBefore(e,this.nextSibling):t.replaceChild(e,this)}function p(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!p(e[r],t[r]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(var i=0,a=e.entries();i<a.length;i++)if(r=a[i],!t.has(r[0]))return!1;for(var c=0,s=e.entries();c<s.length;c++)if(!p((r=s[c])[1],t.get(r[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(var u=0,f=e.entries();u<f.length;u++)if(r=f[u],!t.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){var l=o[r];if(!p(e[l],t[l]))return!1}return!0}return e!=e&&t!=t}void 0===HTMLElement.prototype.append&&(Element.prototype.append=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e.forEach(function(e){t.prototype.appendChild(e)})}),void 0===HTMLElement.prototype.remove&&(Element.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.prototype.parentNode&&this.prototype.parentNode.removeChild(this)}),Element.prototype.replaceWith||(Element.prototype.replaceWith=e),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=e),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=e);function c(e,t,n){e.__next||(e.setAttribute("aoife-next",""),e.__next=new Map),e.__next.set(t,n)}var d=new Set;var t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function h(i,a,c,s){return new(c=c||Promise)(function(e,t){function n(e){try{o(s.next(e))}catch(e){t(e)}}function r(e){try{o(s.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,r)}o((s=s.apply(i,a||[])).next())})}function v(n,r){var o,i,a,e,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,i=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var i={};function a(e,t){void 0===t&&(t="c");var n=i[e];if(n)return t+n;for(var r="",o=0;o<e.length;o++)""===r?r=e.charCodeAt(o).toString(36):r+=e.charCodeAt(o).toString(36);return t+(i[e]=r)}var s=0,u={},f={},l={A:"-a",B:"-b",C:"-c",D:"-d",E:"-e",F:"-f",G:"-g",H:"-h",I:"-i",J:"-j",K:"-k",L:"-l",M:"-m",N:"-n",O:"-o",P:"-p",Q:"-q",R:"-r",S:"-s",T:"-t",U:"-u",V:"-v",W:"-w",X:"-x",Y:"-y",Z:"-z"};function o(e,t,n,r){var o=a(JSON.stringify(t),n),i=u[o];!function(e){var t=e.ele,n=e.elKey,r=e.select,o=e.cssName,i=e.style,a=t[n];if(a!==o&&(a?t.classList.replace(a,o):t.classList.add(o),t[n]=o,!f[o])){var c=r+"{";Object.keys(i).forEach(function(e){0===e.indexOf("webkit")&&(e=e.replace("webkit","--webkit"));for(var t="",n=0;n<e.length;n++){var r=e[n];t+=l[r]||r}c+=t+":"+i[e]+" !important; "}),c+="}",/@media/.test(r)&&(c+="}");var s=document.createElement("style");s.id=o,s.textContent=c,f[o]=!0,/media/.test(c)&&console.log(c),document.head.appendChild(s)}}({ele:e,style:t,elKey:"__style_"+n,cssName:o=i||(s+=1,u[o]="cssinjs-"+n+"-"+s,u[o]),select:r(o)})}var y={onXs:"480px",onSm:"640px",onMd:"720px",onLg:"1024px",onXl:"1280px"},m={onHover:":hover",onFocus:":focus",onActive:":active",onFirstChild:":first-child",onLastChild:":last-child",onBlank:":blank",onChecked:":checked",onCurrent:":current",onDisabled:":disabled",onFocusWithin:":focus-within",onInRange:":in-range",onVisited:":visited",onEven:":nth-child(even)",onOdd:":nth-child(odd)",onAfter:"::after",onBefore:"::before",onPlaceholderShown:":placeholder-shown"},b={onHover:function(e,t){o(e,t,"onHover",function(e){return"@media (min-width:"+y.onMd+") {."+e+":hover"})}};Object.keys(m).forEach(function(n){if("onHover"!==n){var r=m[n];b[n]=function(e,t){o(e,t,n,function(e){return"."+e+r})}}});var g={};Object.keys(y).forEach(function(n){var r=y[n];g[n]=function(e,t){o(e,t,n,function(e){return"@media (max-width:"+r+") {."+e})}});var x={start:"flex-start",center:"center",end:"flex-end",around:"space-around",between:"space-between",evenly:"space-evenly"},_={start:"flex-start",center:"center",end:"flex_end",stretch:"stretch",baseline:"baseline"};function n(e,t){var n=t.split("-"),r=n[0],o=n[1];e.style.display="flex",e.style.justifyContent=x[r],e.style.alignItems=_[o]}var w=t({},b,g,{setRow:function(e,t){n(e,t),e.style.flexDirection="row"},setCol:function(e,t){n(e,t),e.style.flexDirection="column"},setNowrap:function(e,t){e.style.whiteSpace="nowrap",e.style.overflow="hidden",e.style.wordBreak="break-all",e.style.textOverflow=t}}),k=Object.keys(w),E={autofocus:!0,role:!0};function N(e,t){return"function"==typeof t?Promise.resolve(t(e)):t}function O(i,n,r){var e,t=this;return/^on/.test(n)?(i[n]=r,null):/^listen/.test(n)?(i.addEventListener(n.replace("listen",""),r),null):((e=E[n]||/-/.test(n)?function(){return h(t,void 0,void 0,function(){var t;return v(this,function(e){switch(e.label){case 0:return[4,N(i,r)];case 1:return t=e.sent(),i.getAttribute(n)!==t&&i.setAttribute(n,t),[2]}})})}:"style"===n?(void 0===i.className&&(i.className=" "),function(){return h(t,void 0,void 0,function(){var t;return v(this,function(e){switch(e.label){case 0:return[4,N(i,r)];case 1:return(t=e.sent())&&("string"==typeof t?i.style.cssText=t:function(t,n){k.forEach(function(e){n[e]&&(0,w[e])(t,n[e])}),Object.keys(n).forEach(function(e){w[e]||(/-/.test(e)?t.style.setProperty(e,n[e]):t.style[e]=n[e])})}(i,t)),[2]}})})}):"className"===n?function(){return h(t,void 0,void 0,function(){var t;return v(this,function(e){switch(e.label){case 0:return[4,N(i,r)];case 1:return t=e.sent(),Array.isArray(t)&&(t=t.join(" ")),i.className!==t&&(i.className=t),[2]}})})}:"classPick"===n?(void 0===i.className&&(i.className=" "),function(){return h(t,void 0,void 0,function(){var o;return v(this,function(e){switch(e.label){case 0:return[4,N(i,r)];case 1:return(o=e.sent())&&(Object.keys(o).forEach(function(e){var t=o[e],n=a(e);if(i.__isFirstClassPick){var r=void 0;(r=t?i.className.replace(n,e):i.className.replace(e,n))!==i.className&&(i.className=r)}else i.className+=" "+(t?e:n)+" "}),i.__isFirstClassPick=!0),[2]}})})}):function(){return h(t,void 0,void 0,function(){var t;return v(this,function(e){switch(e.label){case 0:return[4,N(i,r)];case 1:return t=e.sent(),i[n]!==t&&(i[n]=t),[2]}})})})(),"function"!=typeof r?null:e)}var j={};function A(e){var t=Object.prototype.toString.call(e);if("[object String]"===t||"[object Number]"===t)return!0}function S(e){return 0<Object.prototype.toString.call(e).indexOf("lement")}function C(e,t){e.isEqualNode(t)||e.replaceWith(t)}function r(i,a){return void 0===a&&(a=5e3),new Promise(function(t,n){var r=0,o=function(){var e=i();e?t(e):r<a?(r++,setTimeout(o,20+r)):n()};o()})}function P(e,t){return r("string"==typeof e?function(){return document.querySelector(e)}:function(){if(document.body.contains(e))return e})}var L=void 0,T={class:1,className:1,classPick:1,onsubmit:1,oncreate:1,onappend:1,child:1,children:1,length:1,memo:1,__memo:1,__memoLast:1,__memoSeted:1,__proxy:1,__proxyEle:1},W=["className","classPick"],B=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o,i={};if(t&&("function"==typeof t||Array.isArray(t)||A(t)||S(t))?n=[t].concat(n):t&&(i=t),i.children=n.slice(),i.class&&(i.className=i.class),Array.isArray(e))return B.apply(void 0,e);if("function"==typeof e&&(o=e.apply(void 0,[i].concat(n)))&&"function"==typeof o.then){var a=document.createElement("span");return a.setAttribute("promise-span",""),o.then(function(e){a.replaceWith(e)}),a}if("string"==typeof e){if(j[e])return o=function(e,n,t){void 0===n&&(n=[]);var r=void 0===t?{}:t,o=r.ref,i=r.loading,a=r.defaultKey,c=void 0===a?"default":a;return i=i||document.createElement("input"),Promise.resolve(e.apply(void 0,n)).then(function(e){var t=e[c];t&&(e=t.apply(void 0,n)),"function"==typeof e&&(e=e.apply(void 0,n)),o&&o(e),i&&i.replaceWith(e)}),i}(j[e],[i].concat(n));o=document.createElement(e)}else S(e)&&(o=e);return i.memo&&(o.__memo=i.memo,o.__memoSeted=1,Promise.resolve(i.memo()).then(function(e){o.__memoLast=e})),i.onsubmit&&(o.onsubmit=function(e){e.preventDefault(),i.onsubmit&&i.onsubmit(e)}),W.forEach(function(e){if(i[e]){var t=O(o,e,i[e]);t&&c(o,e,t)}}),Object.keys(i).forEach(function(e){if(!T[e]){var t=O(o,e,i[e]);t&&c(o,e,t)}}),function(e,l){var n=this;Array.isArray(e)&&e.filter(function(e){return null!=e}).forEach(function(s,u){if(A(s)){var e=document.createTextNode(s);e.key=u,l.append(e)}else if("function"==typeof s){var f=document.createTextNode("");l.append(f);var t=function(){return h(n,void 0,void 0,function(){var t,n,r,o,i,a,c;return v(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(s())];case 1:return A(t=e.sent())?((n=document.createTextNode(t)).key=u,r=!1,l.childNodes.forEach(function(e){if(e.key===n.key){if(e.textContent===n.textContent)return void(r=!0);C(e,n),r=!0}}),r||l.insertBefore(n,f),[2,u]):Array.isArray(t)?(o={},i={},t.forEach(function(e,t){e.___forList=u,e.key||(e.key="fn("+u+")-list("+t+")"),i[e.key]=e}),a=[],l.childNodes.forEach(function(e){e.___forList===u&&(i[e.key]?o[e.key]=e:a.push(e))}),a.forEach(function(e){e.remove()}),t.forEach(function(e,t){var n=o[e.key];n?n.isEqualNode(e)||C(n,e):l.insertBefore(e,f)}),[2,"for-list-"+u]):t?(t.key||(t.key=u),c=!1,l.childNodes.forEach(function(e){e.key===t.key&&(C(e,t),c=!0)}),c||l.insertBefore(t,f),[2,t.key]):[2]}})})};t(),c(l,"children",t)}else S(s)?l.append(s):l.append.apply(l,s)})}(n,o),"function"==typeof i.oncreate&&i.oncreate(o),"function"==typeof i.onappend&&P(o).then(i.onappend),o};return B.jsxFrag=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t},B.stringToHex=a,B.waitAppend=P,B.subscribe=function(e){return d.add(e),function(){d.delete(e)}},B.next=function(e,t){var a;if(e=e||"*",t)if("string"==typeof t){var n=document.body.querySelectorAll(t);a=n}else a=t;var c=[];if(e){var s=void 0,u=!1;if("string"!=typeof e)s=e,u=!0;else{var r="",o=e.split(", ");o.forEach(function(e,t){e=e.trim(),t===o.length-1?r+=e+"[aoife-next], "+e+" [aoife-next]":r+=e+"[aoife-next], "+e+" [aoife-next],"}),s=document.body.querySelectorAll(r)}for(var i=s.length,f=function(e){var n=s[e];if(n.__next&&(u||document.body.contains(n))){if(a){for(var t=a.length,r=!1,o=0;o<t;o++){var i=a[o];if(i===n||i.contains(n)){r=!0;break}}if(r)return"continue"}n.__memo?Promise.resolve(n.__memo()).then(function(e){var t=!p(n.__memoLast,e);n.__memoLast=e,t&&n.__next.forEach(function(e){e()})}):n.__next.forEach(function(e){e()}),c.push(n)}},l=0;l<i;l++)f(l)}return d.forEach(function(e){return e()}),c},B.events=d,B.registerTag=function(t){Object.keys(t).forEach(function(e){j[e]=t[e]})},B.propFn=function(e,t){return"function"==typeof e?function(){return t(e())}:t(e)},B.waitValue=r,B.memo=function(r){function o(){return h(L,void 0,void 0,function(){var t,n;return v(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(r())];case 1:return t=e.sent(),i.fixed?(n=p(i.data,t),i.data=t,[2,!n]):(i.fixed=1,i.data=t,[2,!0])}})})}var i={fixed:0,data:null,value:null};return o(),function(n){return function(){return h(L,void 0,void 0,function(){var t;return v(this,function(e){switch(e.label){case 0:return[4,Promise.resolve(o())];case 1:return e.sent()?(t=i,[4,Promise.resolve(n())]):[3,3];case 2:t.value=e.sent(),e.label=3;case 3:return[2,i.value]}})})}}},B.equal=p,B.styles=function(e){return e},window.aoife=B});
