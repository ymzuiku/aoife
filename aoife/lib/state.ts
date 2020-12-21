export const events = new Set<Function>();

export const next = (
  focusUpdateTargets?: string,
  ignoreUpdateTargets?: any[] | string
): HTMLElement[] => {
  let ignoreList: Set<any>;
  if (ignoreUpdateTargets) {
    if (typeof ignoreUpdateTargets === "string") {
      const list = document.body.querySelectorAll(ignoreUpdateTargets) as any;
      ignoreList = new Set(list);
    } else {
      ignoreList = new Set(ignoreUpdateTargets) as any;
    }
  }

  const outEle: HTMLElement[] = [];
  if (focusUpdateTargets) {
    let eleList = document.body.querySelectorAll(
      `${focusUpdateTargets}[data-next], ${focusUpdateTargets} [data-next]`
       
    ) as any;
    eleList.forEach((ele: any) => {
      if (ignoreList && ignoreList.has(ele)) {
        return;
      }
      if (ele.__next) {
        (ele.__next as Map<string, Function>).forEach((fn) => {
          fn();
        });
        outEle.push(ele);
      }
    });
  }
  events.forEach((fn) => fn());
  return outEle;
};

export const subscribe = (fn: any) => {
  events.add(fn);
  return () => {
    events.delete(fn);
  };
};

export const subscribeElement = (ele: any, key: string, fn: any) => {
  if (!ele.__next) {
    (ele as HTMLElement).setAttribute("data-next", key);
    ele.__next = new Map<string, Function>();
  }
  (ele.__next as Map<string, Function>).set(key, fn);
};
