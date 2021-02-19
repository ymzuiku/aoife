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
