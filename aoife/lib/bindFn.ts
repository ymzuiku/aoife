import { debounce } from "./debounce";
import { throttle } from "./throttle";

const attrKeys: any = {
  autofocus: true,
  role: true,
  viewBox: true,
  flavor: true,
  "flavor-ignore": true,
};

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

function getValue(ele: any, value: any) {
  return typeof value === "function" ? Promise.resolve(value(ele)) : value;
}

export function bindFn(ele: any, key: string, props: IProps): any {
  let value = props[key] as any;
  if (
    props.debounce! &&
    typeof value === "function" &&
    props.debounce!.indexOf(key) > -1
  ) {
    value = debounce(value, props.debounceTime);
  } else if (
    props.throttle! &&
    typeof value === "function" &&
    props.throttle!.indexOf(key) > -1
  ) {
    value = throttle(value, props.throttleTime);
  }

  if (/^on/.test(key)) {
    ele[key] = value;
    return null;
  }
  if (/^listen/.test(key)) {
    ele.addEventListener(key.replace("listen", ""), value);
    return null;
  }
  let fn: Function;
  if (ele.__isSvg || attrKeys[key] || /-/.test(key)) {
    fn = async () => {
      const v = await getValue(ele, value);
      if (ele.getAttribute(key) !== v) {
        if (v === false) {
          (ele as HTMLElement).removeAttribute(key);
        } else {
          ele.setAttribute(key, v);
        }
      }
    };
  } else if (key === "style") {
    // if (typeof ele.className === "undefined") {
    //   ele.className = " ";
    // }
    fn = async () => {
      const v = await getValue(ele, value);
      if (!v) {
        return;
      }
      if (typeof v === "string") {
        (ele as HTMLElement).style.cssText = v;
        return;
      }
      // cssInJs(ele, v);
      Object.keys(v).forEach((k) => {
        if (/-/.test(k)) {
          (ele as HTMLElement).style.setProperty(k, v[k]);
        } else {
          let _v = v[k];
          if (typeof _v === "number" && !isUnitlessNumber[k]) {
            _v = _v + "px";
          }
          (ele.style as any)[k] = _v;
        }
      });
    };
  } else if (key === "className") {
    fn = async () => {
      let v = await getValue(ele, value);
      if (Array.isArray(v)) {
        v = v.join(" ");
      }
      if ((ele as HTMLElement).className !== v) {
        (ele as HTMLElement).className = v;
      }
    };
  } else {
    fn = async () => {
      const v = await getValue(ele, value);
      if (ele[key] !== v) {
        ele[key] = v;
      }
    };
  }

  fn();
  if (typeof value !== "function") {
    return null;
  }
  return fn;
}
