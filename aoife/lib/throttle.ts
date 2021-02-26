export function throttle(method: Function, delay = 500) {
  let timer = 0;
  return function (this: any, ...args: any[]) {
    const context = this;
    const now = Date.now();
    if (timer < 1 || now - timer > delay) {
      timer = now;
      method.apply(context, args);
    }
  };
}
