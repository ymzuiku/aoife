export function isText(obj: unknown) {
  const t = Object.prototype.toString.call(obj);
  if (t === "[object String]" || t === "[object Number]") {
    return true;
  }
}

export function isElement(obj: unknown) {
  return Object.prototype.toString.call(obj).indexOf("lement") > 0;
}

export const flattenOnce = (arr: unknown[]): unknown[] => {
  let res = [] as unknown[];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(item);
    } else {
      res.push(item);
    }
  });
  return res;
};
