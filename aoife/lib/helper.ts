export function isText(obj: any) {
  const t = Object.prototype.toString.call(obj);
  if (t === "[object String]" || t === "[object Number]") {
    return true;
  }
}

export function isElement(obj: any) {
  return Object.prototype.toString.call(obj).indexOf("lement") > 0;
}

export const flattenOnce = (arr: any[]): any[] => {
  let res = [] as any[];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(item);
    } else {
      res.push(item);
    }
  });
  return res;
};
