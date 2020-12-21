import { stringToHex } from "./stringToHex";
import { cssInJs } from "./cssInJs";

const attrKeys: any = {
  autofocus: true,
};

function getValue(value: any) {
  return typeof value === "function" ? value() : value;
}

export function bindFn(ele: any, key: string, value: any): any {
  if (/^on/.test(key)) {
    ele[key] = value;
    return null;
  }
  if (/^listen/.test(key)) {
    ele.addEventListener(key.replace("listen", ""), value);
    return null;
  }
  let fn: Function;
  if (attrKeys[key] || /-/.test(key)) {
    fn = () => {
      const v = getValue(value);
      if (ele.getAttribute(key) !== v) {
        ele.setAttribute(key, v);
      }
    };
  } else if (key === "style") {
    if (typeof ele.className === "undefined") {
      ele.className = " ";
    }
    fn = () => {
      const v = getValue(value);
      if (!v) {
        return;
      }
      if (typeof v === "string") {
        (ele as HTMLElement).style.cssText = v;
        return;
      }
      Object.keys(v).forEach((k) => {
        const pesudo = (cssInJs as any)[k];
        if (pesudo) {
          pesudo(ele, v[k]);
        } else if (/-/.test(k)) {
          (ele as HTMLElement).style.setProperty(k, v[k]);
        } else {
          ele.style[k] = v[k];
        }
      });
    };
  } else if (key === "className") {
    fn = () => {
      let v = getValue(value);
      if (Array.isArray(v)) {
        v = v.join(" ");
      }
      if ((ele as HTMLElement).className !== v) {
        (ele as HTMLElement).className = v;
      }
    };
  } else if (key === "classAdd") {
    if (typeof ele.className === "undefined") {
      ele.className = " ";
    }
    fn = () => {
      ele.className += " " + value;
    };
  } else if (key === "classReplace") {
    fn = () => {
      const v = getValue(value);
      if (!Array.isArray(v)) {
        console.error("classReplace need return [string, string]");
        return;
      }
      const newVal = ele.className.replace(v[0], v[1]);
      if (newVal !== ele.className) {
        ele.className = newVal;
      }
    };
  } else if (key === "classPick") {
    if (typeof ele.className === "undefined") {
      ele.className = " ";
    }
    fn = () => {
      const v = getValue(value);
      if (!v) {
        return;
      }
      Object.keys(v).forEach((k) => {
        const right = v[k];
        const hex = stringToHex(k);
        if (!ele.__isFirstClassPick) {
          (ele as HTMLElement).className += " " + (right ? k : hex) + " ";
        } else {
          let newVal: any;
          if (right) {
            newVal = (ele as HTMLElement).className.replace(hex, k);
          } else {
            newVal = (ele as HTMLElement).className.replace(k, hex);
          }
          if (newVal !== ele.className) {
            ele.className = newVal;
          }
        }
      });
      ele.__isFirstClassPick = true;
    };
  } else {
    fn = () => {
      const v = getValue(value);
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
