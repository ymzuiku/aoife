var L=Object.create;var b=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty;var x=e=>b(e,"__esModule",{value:!0});var S=(e,t)=>{x(e);for(var r in t)b(e,r,{get:t[r],enumerable:!0})},_=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of C(t))!O.call(e,n)&&n!=="default"&&b(e,n,{get:()=>t[n],enumerable:!(r=w(t,n))||r.enumerable});return e},A=e=>_(x(b(e!=null?L(M(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var k=(e,t,r)=>new Promise((n,o)=>{var a=i=>{try{s(r.next(i))}catch(y){o(y)}},l=i=>{try{s(r.throw(i))}catch(y){o(y)}},s=i=>i.done?n(i.value):Promise.resolve(i.value).then(a,l);s((r=r.apply(e,t)).next())});S(exports,{aoife:()=>c,jsxFrag:()=>H});var u=A(require("vanilla-life"));function E(e){let t=Object.prototype.toString.call(e);if(t==="[object String]"||t==="[object Number]")return!0}function h(e){return Object.prototype.toString.call(e).indexOf("lement")>0}var T=e=>{let t=[];return e.forEach(r=>{Array.isArray(r)?t=t.concat(r):t.push(r)}),t};var N=A(require("vanilla-ob"));function v(e,t){e.isEqualNode(t)||e.replaceWith(t)}function g(e,t){if(!Array.isArray(e))return;e.filter(n=>n!=null).forEach((n,o)=>{if(E(n)){let a=document.createTextNode(n);a.key=o,t.append(a)}else if(typeof n=="function"){let a=document.createTextNode("");t.append(a);let l=()=>k(this,null,function*(){let s=yield Promise.resolve(n());if(E(s)){let i=document.createTextNode(s);i.key=o;let y=!1;return t.childNodes.forEach(p=>{if(p.key===i.key){if(p.textContent===i.textContent){y=!0;return}v(p,i),y=!0}}),y||t.insertBefore(i,a),o}else if(Array.isArray(s)){let i={},y={};s.forEach((f,d)=>{f.___forList=o,f.key||(f.key=`fn(${o})-list(${d})`),y[f.key]=f});let p=[];return t.childNodes.forEach(f=>{f.___forList===o&&(y[f.key]?i[f.key]=f:p.push(f))}),p.forEach(f=>{f.remove()}),s.forEach(f=>{let d=i[f.key];d?d.isEqualNode(f)||v(d,f):f!==!1&&t.insertBefore(f,a)}),"for-list-"+o}else if(s){s.key||(s.key=o);let i=!1;return t.childNodes.forEach(y=>{y.key===s.key&&(v(y,s),i=!0)}),i||t.insertBefore(s,a),s.key}});l(),(0,N.ob)(t,null,l)}else if(h(n))t.append(n);else if(n!==!1)if(Object.prototype.toString.call(n)==="[object Array]"){let a=[];for(let l=0;l<n.length;l++){let s=n[l];s!==!1&&a.push(s)}t.append(...a)}else t.appendChild(n)})}var m=A(require("vanilla-ob")),j=A(require("vanilla-svg-tags")),K={class:1,onUpdate:1,onAppend:1,onRemove:1,onEntry:1,children:1,length:1},R="http://www.w3.org/2000/svg",c=(e,t,...r)=>{let n={};if(t&&(typeof t=="function"||E(t)||h(t)?r=[t,...r]:Array.isArray(t)?r=[...t,...r]:n=t),r=T(r),(!n.children||!n.children.length)&&(n.children=[...r]),n.class&&(n.className=n.class,delete n.class),Array.isArray(e))return c(...e);let o;if(typeof e=="function"){if(o=e(n),o&&typeof o.then=="function"){let a=document.createElement("span");return a.setAttribute("promise-span",""),o.then(l=>{a.replaceWith(l)}),a}return o}if(typeof e=="string")if(e==="template"&&n.children){let a="";n.children.forEach(l=>{(typeof l=="string"||typeof l=="number")&&(a+=l)}),o=document.createElement("template"),o.innerHTML=a}else j.svgTags.has(e)?(o=document.createElementNS(R,e),o.__isSvg=!0):o=document.createElement(e);else h(e)&&(o=e);return Object.keys(n).forEach(a=>{K[a]||(0,m.ob)(o,a,n[a])}),g(n.children,o),typeof n.onUpdate=="function"&&(0,m.ob)(o,null,n.onUpdate),typeof n.onAppend=="function"&&(0,u.onAppend)(o,n.onAppend),typeof n.onRemove=="function"&&(0,u.onRemove)(o,n.onRemove),typeof n.onEntry=="function"&&(0,u.onEntry)(o,n.onEntry),o},H=e=>e&&e.children?c("span",{style:{all:"unset"}},...e.children):"";c.jsxFrag=H;c.next=m.ob.next;c.attributeKeys=m.attributeKeys;window.aoife=c;