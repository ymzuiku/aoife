!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).aoifeSvg=e()}(this,function(){"use strict";var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};return function(e){var t=document.createElement("div");t.innerHTML=e;var r=t.querySelector("svg");if(!r)throw"传入的 html 不是一个svg";return r.setAttribute("fill","currentColor"),r.setAttribute("width","1em"),r.setAttribute("height","1em"),r.querySelectorAll("path").forEach(function(t){t.setAttribute("fill","currentColor"),t.setAttribute("width","1em"),t.setAttribute("height","1em")}),e=t.innerHTML,function(t){return aoife("span",n({},t,{innerHTML:e}))}}});
