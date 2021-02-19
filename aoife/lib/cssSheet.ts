// import { deepMerge } from "./deepMerge";

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

// const shortStyles = {
//   bg: "background",
//   areas: "grid-template-areas",
//   cols: "grid-template-columns",
//   rows: "grid-template-rows",
// };

const isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
} as any;

function appendStyle(cid: string, css: string) {
  const sty = document.createElement("style");
  sty.id = cid;
  sty.textContent = css;
  document.head.append(sty);
}

interface FixStyle {
  cid: string;
  value: any;
  media?: string;
  pesudo?: string;
  important?: boolean;
}

function fixStyle({ cid, value, media, pesudo, important }: FixStyle) {
  let css = "";
  const medias = [] as string[];
  const pesudos = [] as string[];

  Object.keys(value).forEach((k) => {
    const v = value[k];

    if (typeof v === "object") {
      if (/(@media)/.test(k)) {
        medias.push(
          fixStyle({
            cid,
            value: v,
            media: k,
            important,
          })
        );
        return;
      } else {
        pesudos.push(
          fixStyle({
            cid,
            value: v,
            pesudo: k,
            important,
          })
        );
        return;
      }
    }
    if (k.indexOf("webkit") === 0) {
      k = k.replace("webkit", "--webkit");
    }
    let _k = k.replace(/[A-Z]/g, (v) => {
      return UpKeys[v];
    });
    const last = important ? " !important; " : "; ";
    if (typeof v === "number" && !isUnitlessNumber[k]) {
      css += _k + ":" + v + "px" + last;
    } else {
      css += _k + ":" + v + last;
    }
  });
  if (media) {
    css = `${media} {.${cid} {${css}} ${pesudos.join(" ")}}`;
  } else if (pesudo) {
    css = `.${cid}${pesudo} {${css}}`;
  } else {
    css = `.${cid} {${css}} ${pesudos.join(" ")}`;
  }

  return css + " " + medias.join(" ");
}

// let num = 0;
// const cacheKeys = {} as any;
// const cacheObjs = {} as any;

// export const cssInJs = (ele: HTMLElement, value: any) => {
//   // 若对象没变，使用不进行字符串转化
//   // if (cacheObjs[value]) {
//   //   const cid = cacheObjs[value];
//   //   if (!ele.classList.contains(cid)) {
//   //     ele.classList.add(cid);
//   //   }
//   //   return;
//   // }

//   // 使用内容映射 cid
//   const hex = JSON.stringify(value);
//   if (!cacheKeys[hex]) {
//     if (value.cssInJsName) {
//       cacheKeys[hex] = value.cssInJsName;
//       // cacheObjs[value] = value.cssInJsName;
//     } else {
//       num += 1;
//       cacheKeys[hex] = "cij-" + num;
//       // cacheObjs[value] = "cij-" + num;
//     }
//   }
//   const cid = cacheKeys[hex];

//   if (
//     Object.prototype.toString.call(value) === "[object Array]" &&
//     value.length > 0
//   ) {
//     if (value.length === 1) {
//       value = value[0];
//     } else {
//       const obj = {};
//       value.forEach((v: any) => {
//         deepMerge(obj, v);
//       });
//       cssInJs(ele, obj);
//       return;
//     }
//   }

//   if (!ele.classList.contains(cid)) {
//     ele.classList.add(cid);
//   }

//   const css = fixStyle({ cid, value, important: !value.ignoreImportant });

//   appendStyle(cid, css);
// };

let num = 0;
export const cssSheet = <T extends { [key: string]: IStyle }>(
  sheet: T
): { [P in keyof T]: string } => {
  const out = {} as any;
  Object.keys(sheet).forEach((k) => {
    num += 1;
    const value = sheet[k];
    const cid = value.className || k + "-cij-" + num;
    const css = fixStyle({ cid, value });

    appendStyle(cid, css);
    out[k] = cid;
  });
  return out;
};
