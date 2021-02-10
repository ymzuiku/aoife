export function debounce(method: Function, delay = 500) {
  let timer: any = null;
  return function (this: any) {
    let context = this;
    let args = arguments;
    if (!timer) {
      method.apply(context, args);
    } else {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      timer = null;
    }, delay);
  };
}
