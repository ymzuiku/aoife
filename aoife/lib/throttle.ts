export function throttle(method: Function, delay = 500) {
  let timer: number = 0;
  return function (this: any) {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (timer < 1 || now - timer > delay) {
      timer = now;
      method.apply(context, args);
    }
  };
}
