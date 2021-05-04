export const events = new Set<Function>();

function getElementList(targets?: string | HTMLElement | HTMLElement[]) {
  let list: HTMLElement[] = [];
  if (targets) {
    if (typeof targets === "string") {
      let query = "";
      const _list = targets.split(", ");
      _list.forEach((v, i) => {
        v = v.trim();
        if (i === _list.length - 1) {
          query += `${v}[aoife-next], ${v} [aoife-next]`;
        } else {
          query += `${v}[aoife-next], ${v} [aoife-next],`;
        }
      });
      list = document.body.querySelectorAll(query) as any;
    } else if (Object.prototype.toString.call(targets) === "[object Array]") {
      list = [...(targets as any[])];
      (targets as any[]).forEach((e) => {
        list.push(...e.querySelectorAll("*"));
      });
    } else {
      list = [targets as any];
      list.push(...(targets as any).querySelectorAll("*"));
    }
  }
  return list;
}

export const nextState = (
  focusUpdateTargets?: string | HTMLElement | HTMLElement[],
  ignoreUpdateTargets?: string | HTMLElement | HTMLElement[]
) => {
  if (!focusUpdateTargets) {
    console.error("aoife.next() need target");
    return;
  }
  const ignoreList = getElementList(ignoreUpdateTargets);
  const eleList = getElementList(focusUpdateTargets);

  const len = eleList.length;
  for (let i = 0; i < len; i++) {
    const ele = eleList[i] as any;
    if ((ele as any).__next) {
      // 判断元素是否存在
      if (document.body.contains(ele)) {
        // 忽略元素及其子元素的更新
        if (ignoreList.length) {
          const len = ignoreList.length;
          let isUseIgnoreList = false;
          for (let i = 0; i < len; i++) {
            const parent = ignoreList[i] as HTMLElement;
            if (parent === ele || parent.contains(ele)) {
              isUseIgnoreList = true;
              break;
            }
          }
          if (isUseIgnoreList) {
            continue;
          }
        }

        ((ele as any).__next as Map<string, Function>).forEach((fn) => {
          fn();
        });
      }
    }
  }

  events.forEach((fn) => fn());
};

// export const subscribe = (fn: any) => {
//   events.add(fn);
//   return () => {
//     events.delete(fn);
//   };
// };

export const subscribeElement = (ele: any, key: string, fn: any) => {
  if (!ele.__next) {
    (ele as HTMLElement).setAttribute("aoife-next", "");
    ele.__next = new Map<string, Function>();
  }
  (ele.__next as Map<string, Function>).set(key, fn);
};
