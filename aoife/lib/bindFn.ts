export const attributeKeys: any = {
  autofocus: true,
  role: true,
  viewBox: true,
  flavor: true,
};

function getValue(ele: any, value: any) {
  return typeof value === "function" ? Promise.resolve(value(ele)) : value;
}

export function bindFn(ele: any, key: string, props: any): any {
  let value = props[key] as any;

  if (/^on/.test(key)) {
    ele[key] = value;
    return null;
  }
  if (/^listen/.test(key)) {
    ele.addEventListener(key.replace("listen", ""), value);
    return null;
  }
  let fn: Function;
  if (ele.__isSvg || attributeKeys[key] || /-/.test(key)) {
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
    fn = async () => {
      const v = await getValue(ele, value);
      if (!v) {
        return;
      }
      if (typeof v === "string") {
        (ele as HTMLElement).style.cssText = v;
        return;
      }

      Object.assign(ele.style, v);
    };
  } else if (key === "className") {
    fn = async () => {
      let v = await getValue(ele, value);
      if (typeof v !== "string") {
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
