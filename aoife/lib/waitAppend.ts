export function waitValue<T>(fn: () => T, max = 5000): Promise<T> {
  return new Promise((res, rej) => {
    let n = 0;
    const check = () => {
      const v = fn();
      if (v) {
        res(v);
      } else if (n < max) {
        n++;
        setTimeout(check, 20 + n);
      } else {
        rej();
      }
    };
    check();
  });
}

export function waitAppend(ele: HTMLElement | string, max = 300): Promise<HTMLElement> {
  let fn: any;
  if (typeof ele === "string") {
    fn = () => document.querySelector(ele);
  } else {
    fn = () => {
      if (document.body.contains(ele)) {
        return ele;
      }
    };
  }
  return waitValue(fn);
}
