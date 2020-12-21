import { stringToHex } from "./stringToHex";

let cssKeyNum = 0;
const cssKeyMap = {} as any;
const cssCache = {} as any;
const UpKeys = {
  A: "-a",
  B: "-b",
  C: "-c",
  D: "-d",
  E: "-e",
  F: "-f",
  G: "-g",
  H: "-h",
  I: "-i",
  J: "-j",
  K: "-k",
  L: "-l",
  M: "-m",
  N: "-n",
  O: "-o",
  P: "-p",
  Q: "-q",
  R: "-r",
  S: "-s",
  T: "-t",
  U: "-u",
  V: "-v",
  W: "-w",
  X: "-x",
  Y: "-y",
  Z: "-z",
} as any;

interface IStyleAddCss {
  ele: any;
  elKey: string;
  select: string;
  cssName: string;
  style: any;
}

function styleAddCss({ ele, elKey, select, cssName, style }: IStyleAddCss) {
  // 若ele旧的css一致，不执行
  const oldCssName = ele[elKey];
  if (oldCssName === cssName) {
    return;
  }

  // 设置旧的ele名称缓存和样式设定
  if (oldCssName) {
    (ele as HTMLElement).classList.replace(oldCssName, cssName);
  } else {
    (ele as HTMLElement).classList.add(cssName);
  }

  ele[elKey] = cssName;

  if (cssCache[cssName]) {
    return;
  }
  // 如果未创建类似的css，才创建
  let css = select + "{";
  Object.keys(style).forEach((k) => {
    if (k.indexOf("webkit") === 0) {
      k = k.replace("webkit", "--webkit");
    }
    let _k = "";
    for (let i = 0; i < k.length; i++) {
      const v = k[i];
      _k += UpKeys[v] || v;
    }
    css += _k + ":" + style[k] + " !important; ";
  });
  css += "}";
  if (/@media/.test(select)) {
    css += "}";
  }
  const el = document.createElement("style");
  el.id = cssName;
  el.textContent = css;
  cssCache[cssName] = true;
  document.head.appendChild(el);
}

function makeCss(ele: any, style: any, type: string, fn: (cssName: string) => string) {
  let cssName = stringToHex(JSON.stringify(style), type);
  // cssName 转化 为有序短名
  const oldCssNameNum = cssKeyMap[cssName];
  if (oldCssNameNum) {
    cssName = oldCssNameNum;
  } else {
    cssKeyNum += 1;
    cssKeyMap[cssName] = "cssinjs-" + cssKeyNum;
    cssName = cssKeyMap[cssName];
  }
  styleAddCss({
    ele,
    style,
    elKey: "__style_" + type,
    cssName,
    select: fn(cssName),
  });
}

const mediaKeys = {
  onExtraSmall: "480px",
  onSmall: "640px",
  onMiddle: "720px",
  onLarge: "1024px",
  onExtraLager: "1280px",
} as any;

const pesudoKeys = {
  onActive: ":active",
  onFocus: ":focus",
  onFirstChild: ":first-child",
  onLastChild: ":last-child",
  onBlank: ":blank",
  onChecked: ":checked",
  onCurrent: ":current",
  onDisabled: ":disabled",
  onFocusWithin: ":focus-within",
  onInRange: ":in-range",
  onVisited: ":visited",
  onEven: ":nth-child(even)",
  onOdd: ":nth-child(odd)",
  onAfter: "::after",
  onBefore: "::before",
  onPlaceholderShown: ":placeholder-shown",
} as any;

const _pseudoStyle = {} as any;
Object.keys(pesudoKeys).forEach((k) => {
  const v = pesudoKeys[k];
  _pseudoStyle[k] = (ele: any, style: any) => {
    makeCss(ele, style, k, (c) => `.${c}${v}`);
  };
});

const _mediaStyle = {} as any;
Object.keys(mediaKeys).forEach((k) => {
  const v = mediaKeys[k];
  _mediaStyle[k] = (ele: any, style: any) => {
    makeCss(ele, style, k, (c) => `@media (min-width:${v}) {.${c}`);
  };
});

const just = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  around: "space-around",
  between: "space-between",
  evenly: "space-evenly",
} as any;
const align = {
  start: "flex-start",
  center: "center",
  end: "flex_end",
  stretch: "stretch",
  baseline: "baseline",
} as any;

function setJustItem(ele: HTMLElement, val: string) {
  const [a, b] = val.split("-");
  ele.style.display = "flex";
  ele.style.justifyContent = just[a];
  ele.style.alignItems = align[b];
}

export const cssInJs = {
  onHover: (ele: any, style: any) => {
    makeCss(ele, style, "onHover", (c) => `@media (min-width:640px) {.${c}:hover`);
  },
  ..._mediaStyle,
  ..._pseudoStyle,
  setRow: (ele: HTMLElement, val: string) => {
    setJustItem(ele, val);
    ele.style.flexDirection = "row";
  },
  setCol: (ele: HTMLElement, val: string) => {
    setJustItem(ele, val);
    ele.style.flexDirection = "column";
  },
  setNowrap: (ele: HTMLElement, val: "clip" | "ellipsis") => {
    ele.style.whiteSpace = "nowrap";
    ele.style.overflow = "hidden";
    ele.style.wordBreak = "break-all";
    ele.style.textOverflow = val;
  },
};
