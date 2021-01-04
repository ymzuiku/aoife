export const events = new Set<Function>();
function getId() {
  return "id" + Date.now() + Math.random();
}
function getCloseMemoList(ele: Element, list: Element[]) {
  const close = ele.closest("[aoife-memo]");
  if (close) {
    list.unshift(close);
    const parent = close.parentNode as Element;
    if (parent) {
      getCloseMemoList(parent, list);
    }
  }
}

let lastNextId = getId();

export const next = (focusUpdateTargets?: string | HTMLElement[], ignoreUpdateTargets?: string | HTMLElement[]) => {
  if (!focusUpdateTargets) {
    focusUpdateTargets = "*";
  }
  lastNextId = getId();
  let ignoreList: any;
  if (ignoreUpdateTargets) {
    if (typeof ignoreUpdateTargets === "string") {
      const list = document.body.querySelectorAll(ignoreUpdateTargets) as any;
      ignoreList = list;
    } else {
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

    const len = eleList.length;
    for (let i = 0; i < len; i++) {
      const ele = eleList[i];
      if ((ele as any).__next) {
        // 判断元素是否存在
        if (isEle || document.body.contains(ele)) {
          // check memo block
          const closeList = [] as any[];
          getCloseMemoList(ele, closeList);

          if (closeList.length) {
            let isBlock = false;

            // if this next fixed, use lastFix block;
            for (let u = 0; u < closeList.length; u++) {
              const closeEl = closeList[u];
              if (closeEl._memoId === lastNextId) {
                if (closeEl._memoBlock) {
                  isBlock = true;
                  break;
                } else {
                  continue;
                }
              }

              // get old memo and new memo
              const memo = closeEl._memoFn();

              // save new fixId
              closeEl._memoId = lastNextId;

              // create block open;
              closeEl._memoBlock = true;

              // fix is have diff and close block
              for (let i = 0; i < closeEl._memoLen; i++) {
                if (closeEl._memoLast[i] !== memo[i]) {
                  closeEl._memoBlock = false;
                  break;
                }
              }

              // useNewMemo;
              closeEl._memoLast = memo;

              // if block save status
              if (closeEl._memoBlock) {
                isBlock = true;
                break;
              }
            }

            // is have block, keep this for
            if (isBlock) {
              continue;
            }
          }

          // 忽略元素及其子元素的更新
          if (ignoreList) {
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
          outElement.push(ele);
        }
      }
    }
  }

  events.forEach((fn) => fn());
  lastNextId = getId();

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
