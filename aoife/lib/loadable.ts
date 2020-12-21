interface ILoadable {
  defaultKey?: string;
  loading?: HTMLElement;
  ref?: (el: HTMLElement) => any;
}

export function loadable(
  createElementFn: any,
  args = [] as any[],
  { ref, loading, defaultKey = "default" }: ILoadable = {}
): HTMLElement {
  if (!loading) {
    loading = document.createElement("input");
  }

  Promise.resolve(createElementFn(...args)).then((obj) => {
    const fn = obj[defaultKey];
    if (fn) {
      obj = fn(...args);
    }
    if (typeof obj === "function") {
      obj = obj(...args);
    }
    if (ref) {
      ref(obj);
    }
    loading && loading.replaceWith(obj);
  });

  return loading;
}
