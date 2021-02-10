import { deepMerge } from "./deepMerge";
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

function makeCss(
  ele: any,
  style: any,
  type: string,
  fn: (cssName: string) => string
) {
  let cssName = stringToHex(JSON.stringify(style), type);
  // cssName 转化 为有序短名
  const oldCssNameNum = cssKeyMap[cssName];
  if (oldCssNameNum) {
    cssName = oldCssNameNum;
  } else {
    cssKeyNum += 1;
    cssKeyMap[cssName] = "cssinjs-" + type + "-" + cssKeyNum;
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

const UA = navigator.userAgent;
const isAndroid = /(?:Android)/.test(UA);
const isIos = /(?:iPhone)/.test(UA);
const isPc = !isIos && !isAndroid;

const mediaKeys = {
  "media-xs": "480px",
  "media-sm": "640px",
  "media-md": "720px",
  "media-lg": "1024px",
  "media-xl": "1280px",
  "media-2xl": "1920px",
  "media-android": isAndroid ? "9999px" : "0px",
  "media-ios": isIos ? "9999px" : "0px",
  "media-pc": isPc ? "9999px" : "0px",
  "media-pone": !isPc ? "9999px" : "0px",
} as any;

const pesudoKeys = {
  ":hover": ":hover",
  ":focus": ":focus",
  ":active": ":active",
  ":first-child": ":first-child",
  ":last-child": ":last-child",
  ":blank": ":blank",
  ":checked": ":checked",
  ":current": ":current",
  ":disabled": ":disabled",
  ":focus-within": ":focus-within",
  ":in-range": ":in-range",
  ":visited": ":visited",
  ":nth-child(even)": ":nth-child(even)",
  ":nth-child(odd)": ":nth-child(odd)",
  ":placeholder-shown": ":placeholder-shown",
  "::after": "::after",
  "::before": "::before",
} as any;

// 伪类
const _pseudoStyle = {
  ":hover": (ele: any, style: any) => {
    makeCss(
      ele,
      style,
      "onHover",
      (c) => `@media (min-width: ${isPc ? "9999px" : "0px"}) {.${c}:hover`
    );
  },
} as any;
Object.keys(pesudoKeys).forEach((k) => {
  if (k !== ":hover") {
    const v = pesudoKeys[k];
    _pseudoStyle[k] = (ele: any, style: any) => {
      makeCss(ele, style, k, (c) => `.${c}${v}`);
    };
  }
});

// 媒体查询
const _mediaStyle = {} as any;

Object.keys(mediaKeys).forEach((k) => {
  const v = mediaKeys[k];
  _mediaStyle[k] = (ele: any, style: any) => {
    makeCss(ele, style, k, (c) => `@media (max-width:${v}) {.${c}`);
  };
});

const fixCssInJsKey = {
  ..._pseudoStyle,
  ..._mediaStyle,
};

const fixCssInJsKeys = Object.keys(fixCssInJsKey);

export const cssInJs = (ele: HTMLElement, value: any) => {
  if (
    Object.prototype.toString.call(value) === "[object Array]" &&
    value.length > 0
  ) {
    if (value.length === 1) {
      value = value[0];
    } else {
      const obj = {};
      value.forEach((v: any) => {
        deepMerge(obj, v);
      });
      cssInJs(ele, obj);
      return;
    }
  }
  fixCssInJsKeys.forEach((k) => {
    if (value[k]) {
      const pesudo = (fixCssInJsKey as any)[k];
      pesudo(ele, value[k]);
    }
  });
  Object.keys(value).forEach((k) => {
    if (fixCssInJsKey[k]) {
    } else if (/-/.test(k)) {
      (ele as HTMLElement).style.setProperty(k, value[k]);
    } else {
      (ele.style as any)[k] = value[k];
    }
  });
  (ele as any).__style_old = value;
};
