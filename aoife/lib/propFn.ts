export function propFn(target: any, fn: (val: any) => IStyle | string | boolean | number | any[] | object): any {
  if (typeof target === "function") {
    return () => fn(target());
  }
  return fn(target);
}
