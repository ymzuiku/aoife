import { IStyled } from "./interface";

export function propFn(
  target: any,
  fn: (val: any) => IStyled | string | boolean | number | any[] | object
): any {
  if (typeof target === "function") {
    return () => fn(target());
  }
  return fn(target);
}
