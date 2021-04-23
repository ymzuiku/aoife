export function waitValue<T>(fn: () => T, max = 5000): Promise<T> {
  const time = Date.now();
  return new Promise((res, rej) => {
    const n = 0;
    const check = () => {
      const v = fn();
      if (v) {
        res(v);
      } else if (time + max > Date.now()) {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(check);
        } else {
          setTimeout(check, 20);
        }
      } else {
        rej("waitValue is timeout: \n" + fn.toString());
      }
    };
    check();
  });
}

export function waitAppend(ele: HTMLElement | string, max = 5000): Promise<HTMLElement> {
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
  return waitValue(fn, max);
}
