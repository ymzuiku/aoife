const css = `
.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}
.tippy-box[data-theme~=material]{background-color:#505355;font-weight:600}.tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before{border-top-color:#505355}.tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#505355}.tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before{border-left-color:#505355}.tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before{border-right-color:#505355}.tippy-box[data-theme~=material]>.tippy-backdrop{background-color:#505355}.tippy-box[data-theme~=material]>.tippy-svg-arrow{fill:#505355}
.tippy-box[data-animation=perspective-extreme][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=perspective-extreme][data-placement^=top][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-extreme][data-placement^=top][data-state=hidden]{transform:perspective(700px) translateY(10px) rotateX(90deg)}.tippy-box[data-animation=perspective-extreme][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=perspective-extreme][data-placement^=bottom][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-extreme][data-placement^=bottom][data-state=hidden]{transform:perspective(700px) translateY(-10px) rotateX(-90deg)}.tippy-box[data-animation=perspective-extreme][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=perspective-extreme][data-placement^=left][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-extreme][data-placement^=left][data-state=hidden]{transform:perspective(700px) translateX(10px) rotateY(-90deg)}.tippy-box[data-animation=perspective-extreme][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=perspective-extreme][data-placement^=right][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-extreme][data-placement^=right][data-state=hidden]{transform:perspective(700px) translateX(-10px) rotateY(90deg)}.tippy-box[data-animation=perspective-extreme][data-state=hidden]{opacity:.5}
.tippy-box[data-animation=perspective-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=perspective-subtle][data-placement^=top][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-subtle][data-placement^=top][data-state=hidden]{transform:perspective(700px) translateY(5px) rotateX(30deg)}.tippy-box[data-animation=perspective-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=perspective-subtle][data-placement^=bottom][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-subtle][data-placement^=bottom][data-state=hidden]{transform:perspective(700px) translateY(-5px) rotateX(-30deg)}.tippy-box[data-animation=perspective-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=perspective-subtle][data-placement^=left][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-subtle][data-placement^=left][data-state=hidden]{transform:perspective(700px) translateX(5px) rotateY(-30deg)}.tippy-box[data-animation=perspective-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=perspective-subtle][data-placement^=right][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective-subtle][data-placement^=right][data-state=hidden]{transform:perspective(700px) translateX(-5px) rotateY(30deg)}.tippy-box[data-animation=perspective-subtle][data-state=hidden]{opacity:0}
.tippy-box[data-animation=perspective][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=perspective][data-placement^=top][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective][data-placement^=top][data-state=hidden]{transform:perspective(700px) translateY(8px) rotateX(60deg)}.tippy-box[data-animation=perspective][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=perspective][data-placement^=bottom][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective][data-placement^=bottom][data-state=hidden]{transform:perspective(700px) translateY(-8px) rotateX(-60deg)}.tippy-box[data-animation=perspective][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=perspective][data-placement^=left][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective][data-placement^=left][data-state=hidden]{transform:perspective(700px) translateX(8px) rotateY(-60deg)}.tippy-box[data-animation=perspective][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=perspective][data-placement^=right][data-state=visible]{transform:perspective(700px)}.tippy-box[data-animation=perspective][data-placement^=right][data-state=hidden]{transform:perspective(700px) translateX(-8px) rotateY(60deg)}.tippy-box[data-animation=perspective][data-state=hidden]{opacity:0}
.tippy-box[data-animation=scale-extreme][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-extreme][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-extreme][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-extreme][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-extreme][data-state=hidden]{transform:scale(0);opacity:.25}
.tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}
.tippy-box[data-animation=scale][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale][data-state=hidden]{transform:scale(.5);opacity:0}
.tippy-box[data-animation=shift-away-extreme][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away-extreme][data-state=hidden][data-placement^=top]{transform:translateY(20px)}.tippy-box[data-animation=shift-away-extreme][data-state=hidden][data-placement^=bottom]{transform:translateY(-20px)}.tippy-box[data-animation=shift-away-extreme][data-state=hidden][data-placement^=left]{transform:translateX(20px)}.tippy-box[data-animation=shift-away-extreme][data-state=hidden][data-placement^=right]{transform:translateX(-20px)}
.tippy-box[data-animation=shift-away-subtle][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=top]{transform:translateY(5px)}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=bottom]{transform:translateY(-5px)}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=left]{transform:translateX(5px)}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=right]{transform:translateX(-5px)}
.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}
.tippy-box[data-animation=shift-toward-extreme][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-toward-extreme][data-state=hidden][data-placement^=top]{transform:translateY(-20px)}.tippy-box[data-animation=shift-toward-extreme][data-state=hidden][data-placement^=bottom]{transform:translateY(20px)}.tippy-box[data-animation=shift-toward-extreme][data-state=hidden][data-placement^=left]{transform:translateX(-20px)}.tippy-box[data-animation=shift-toward-extreme][data-state=hidden][data-placement^=right]{transform:translateX(20px)}
.tippy-box[data-animation=shift-toward-subtle][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-toward-subtle][data-state=hidden][data-placement^=top][data-state=hidden]{transform:translateY(-5px)}.tippy-box[data-animation=shift-toward-subtle][data-state=hidden][data-placement^=bottom][data-state=hidden]{transform:translateY(5px)}.tippy-box[data-animation=shift-toward-subtle][data-state=hidden][data-placement^=left][data-state=hidden]{transform:translateX(-5px)}.tippy-box[data-animation=shift-toward-subtle][data-state=hidden][data-placement^=right][data-state=hidden]{transform:translateX(5px)}
.tippy-box[data-animation=shift-toward][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-toward][data-state=hidden][data-placement^=top]{transform:translateY(-10px)}.tippy-box[data-animation=shift-toward][data-state=hidden][data-placement^=bottom]{transform:translateY(10px)}.tippy-box[data-animation=shift-toward][data-state=hidden][data-placement^=left]{transform:translateX(-10px)}.tippy-box[data-animation=shift-toward][data-state=hidden][data-placement^=right]{transform:translateX(10px)}


:root {
  --pop-box-border-color: rgba(0, 8, 16, 0.08);
  --pop-padding: 5px 9px;
}
.tippy-content {
  padding: var(--pop-padding) !important;
}
.tippy-box[data-theme~="light"] {
  color: #26323d;
  box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.1),
    0 4px 80px -8px rgba(36, 40, 47, 0.15),
    0 4px 4px -2px rgba(91, 94, 105, 0.15), 0 -3px 4px -2px rgba(91, 94, 105, 0.15);
  background-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="top"] > .tippy-arrow:before {
  border-top-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="bottom"]
  > .tippy-arrow:before {
  border-bottom-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="left"] > .tippy-arrow:before {
  border-left-color: #fff;
}
.tippy-box[data-theme~="light"][data-placement^="right"] > .tippy-arrow:before {
  border-right-color: #fff;
}
.tippy-box[data-theme~="light"] > .tippy-backdrop {
  background-color: #fff;
}
.tippy-box[data-theme~="light"] > .tippy-svg-arrow {
  fill: #fff;
}
.tippy-box[data-theme~="light-border"] {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid var(--pop-box-border-color);
  color: #333;
  box-shadow: 0 4px 14px -2px rgba(0, 8, 16, 0.08);
}
.tippy-box[data-theme~="light-border"] > .tippy-backdrop {
  background-color: #fff;
}
.tippy-box[data-theme~="light-border"] > .tippy-arrow:after,
.tippy-box[data-theme~="light-border"] > .tippy-svg-arrow:after {
  content: "";
  position: absolute;
  z-index: -1;
}
.tippy-box[data-theme~="light-border"] > .tippy-arrow:after {
  border-color: transparent;
  border-style: solid;
}
.tippy-box[data-theme~="light-border"][data-placement^="top"]
  > .tippy-arrow:before {
  border-top-color: #fff;
}
.tippy-box[data-theme~="light-border"][data-placement^="top"]
  > .tippy-arrow:after {
  border-top-color: rgba(0, 8, 16, 0.2);
  border-width: 7px 7px 0;
  top: 17px;
  left: 1px;
}
.tippy-box[data-theme~="light-border"][data-placement^="top"]
  > .tippy-svg-arrow
  > svg {
  top: 16px;
}
.tippy-box[data-theme~="light-border"][data-placement^="top"]
  > .tippy-svg-arrow:after {
  top: 17px;
}
.tippy-box[data-theme~="light-border"][data-placement^="bottom"]
  > .tippy-arrow:before {
  border-bottom-color: #fff;
  bottom: 16px;
}
.tippy-box[data-theme~="light-border"][data-placement^="bottom"]
  > .tippy-arrow:after {
  border-bottom-color: rgba(0, 8, 16, 0.2);
  border-width: 0 7px 7px;
  bottom: 17px;
  left: 1px;
}
.tippy-box[data-theme~="light-border"][data-placement^="bottom"]
  > .tippy-svg-arrow
  > svg {
  bottom: 16px;
}
.tippy-box[data-theme~="light-border"][data-placement^="bottom"]
  > .tippy-svg-arrow:after {
  bottom: 17px;
}
.tippy-box[data-theme~="light-border"][data-placement^="left"]
  > .tippy-arrow:before {
  border-left-color: #fff;
}
.tippy-box[data-theme~="light-border"][data-placement^="left"]
  > .tippy-arrow:after {
  border-left-color: rgba(0, 8, 16, 0.2);
  border-width: 7px 0 7px 7px;
  left: 17px;
  top: 1px;
}
.tippy-box[data-theme~="light-border"][data-placement^="left"]
  > .tippy-svg-arrow
  > svg {
  left: 11px;
}
.tippy-box[data-theme~="light-border"][data-placement^="left"]
  > .tippy-svg-arrow:after {
  left: 12px;
}
.tippy-box[data-theme~="light-border"][data-placement^="right"]
  > .tippy-arrow:before {
  border-right-color: #fff;
  right: 16px;
}
.tippy-box[data-theme~="light-border"][data-placement^="right"]
  > .tippy-arrow:after {
  border-width: 7px 7px 7px 0;
  right: 17px;
  top: 1px;
  border-right-color: rgba(0, 8, 16, 0.2);
}
.tippy-box[data-theme~="light-border"][data-placement^="right"]
  > .tippy-svg-arrow
  > svg {
  right: 11px;
}
.tippy-box[data-theme~="light-border"][data-placement^="right"]
  > .tippy-svg-arrow:after {
  right: 12px;
}
.tippy-box[data-theme~="light-border"] > .tippy-svg-arrow {
  fill: #fff;
}
.tippy-box[data-theme~="light-border"] > .tippy-svg-arrow:after {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);
  background-size: 16px 6px;
  width: 16px;
  height: 6px;
}
`;

const style = document.createElement("style");
style.textContent = css;
document.head.append(style);
