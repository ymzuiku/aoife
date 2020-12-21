export function waitAppend(ele: HTMLElement | string, max = 300): Promise<HTMLElement> {
  let n = 0;
  return new Promise((res, rej) => {
    let fn: Function;
    if (typeof ele === "string") {
      fn = () => document.querySelector(ele);
    } else {
      fn = () => {
        if (document.body.contains(ele)) {
          return ele;
        }
      };
    }
    const check = () => {
      const target = fn();
      if (target) {
        res(target);
      } else if (n < max) {
        n++;
        requestAnimationFrame(check);
      } else {
        rej(ele);
      }
    };
    check();
  });
}
