import { stringToHex } from "./stringToHex";
// import { cssInJs } from "./cssInJs";

const attrKeys: any = {
  autofocus: true,
  role: true,
  viewBox: true,
  flavor: true,
  "flavor-ignore": true,
};

function getValue(ele: any, value: any) {
  return typeof value === "function" ? Promise.resolve(value(ele)) : value;
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
  if (ele.__isSvg || attrKeys[key] || /-/.test(key)) {
    fn = async () => {
      const v = await getValue(ele, value);
      if (ele.getAttribute(key) !== v) {
        ele.setAttribute(key, v);
      }
    };
  } else if (key === "style") {
    if (typeof ele.className === "undefined") {
      ele.className = " ";
    }
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
          (ele as HTMLElement).style.setProperty(k, value[k]);
        } else {
          (ele.style as any)[k] = value[k];
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
  } else if (key === "classPick") {
    if (typeof ele.className === "undefined") {
      ele.className = " ";
    }
    fn = async () => {
      const v = await getValue(ele, value);
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
