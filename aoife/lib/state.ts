export const events = new Set<Function>();

export const next = (focusUpdateTargets?: string | HTMLElement[], ignoreUpdateTargets?: string | HTMLElement[]) => {
  let ignoreList: any[];
  if (ignoreUpdateTargets) {
    if (typeof ignoreUpdateTargets === "string") {
      const list = document.body.querySelectorAll(ignoreUpdateTargets) as any;
      // ignoreList = new Set(list);
      ignoreList = list;
    } else {
      // ignoreList = new Set(ignoreUpdateTargets) as any;
      ignoreList = ignoreUpdateTargets;
    }
  }

  let outElement = [] as HTMLElement[];

  if (focusUpdateTargets) {
    let eleList: any[];
    let isEle = false;
    if (typeof focusUpdateTargets !== "string") {
      eleList = focusUpdateTargets;
      isEle = true;
    } else {
      // 处理逗号分割query
      let query = "";
      const list = focusUpdateTargets.split(", ");
      list.forEach((v, i) => {
        v = v.trim();
        if (i === list.length - 1) {
          query += `${v}[aoife-next], ${v} [aoife-next]`;
        } else {
          query += `${v}[aoife-next], ${v} [aoife-next],`;
        }
      });
      eleList = document.body.querySelectorAll(query) as any;
    }

    eleList.forEach((ele: any) => {
      if (ele.__next) {
        // 判断元素是否存在
        if (isEle || document.body.contains(ele)) {
          // 忽略元素及其子元素的更新
          if (ignoreList) {
            const len = ignoreList.length;
            for (let i = 0; i < len; i++) {
              const parent = ignoreList[i] as HTMLElement;
              if (parent === ele || parent.contains(ele)) {
                return;
              }
            }
          }
          (ele.__next as Map<string, Function>).forEach((fn) => {
            fn();
          });
          outElement.push(ele);
        }
      }
    });
  }
  events.forEach((fn) => fn());
  return outElement;
};

export const subscribe = (fn: any) => {
  events.add(fn);
  return () => {
    events.delete(fn);
  };
};

export const subscribeElement = (ele: any, key: string, fn: any) => {
  if (!ele.__next) {
    (ele as HTMLElement).setAttribute("aoife-next", "");
    ele.__next = new Map<string, Function>();
  }
  (ele.__next as Map<string, Function>).set(key, fn);
};
