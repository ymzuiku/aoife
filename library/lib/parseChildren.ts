import { isElement, isString } from "./helper";
import { subscribeElement } from "./state";

function deepCloneElement(old: Element, next: Element) {
  old.replaceWith(next);
  return;
}

export function parseChildren(_childs: any[], ele: HTMLElement) {
  if (!Array.isArray(_childs)) {
    return;
  }

  // ele.innerText = "";
  // 递归 Array

  const childs = (_childs as any).filter((v: any) => v !== undefined && v !== null);

  childs.forEach((ch: any, index: number) => {
    if (isString(ch)) {
      const text = document.createTextNode(ch) as any;
      text.key = index;
      ele.append(text);
    } else if (typeof ch === "function") {
      const temp = document.createTextNode("");
      ele.append(temp);
      const fn = () => {
        const child = ch();
        if (isString(child)) {
          const text = document.createTextNode(child) as any;
          text.key = index;
          let isHave = false;
          ele.childNodes.forEach((e) => {
            if ((e as any).key === text.key) {
              // 如果内容一致，不更新
              if (e.textContent === text.textContent) {
                isHave = true;
                return;
              }
              e.replaceWith(text);
              isHave = true;
            }
          });
          if (!isHave) {
            ele.insertBefore(text, temp);
          }
          return index;
        } else if (Array.isArray(child)) {
          // 函数返回一个数组
          const oldKeys = {} as any;
          const childKeys = {} as any;
          child.forEach((c, i) => {
            c.___forList = index;
            if (!c.key) {
              c.key = `fn(${index})-list(${i})`;
            }
            childKeys[c.key] = c;
          });

          // 找到之前的list元素，并且删除现在key没有的，然后array转map
          const needRemove = [] as HTMLElement[];
          ele.childNodes.forEach((el: any) => {
            if (el.___forList === index) {
              if (!childKeys[el.key]) {
                needRemove.push(el);
              } else {
                oldKeys[el.key] = el;
              }
            }
          });
          needRemove.forEach((e) => {
            e.remove();
          });

          // 遍历数组，替换旧的元素或插入之前没有的
          child.forEach((c, i) => {
            const oldEl = oldKeys[c.key] as HTMLElement;
            if (oldEl) {
              if (!oldEl.isEqualNode(c)) {
                deepCloneElement(oldEl, c);
              }
            } else {
              ele.insertBefore(c, temp);
              // ele.append(c);
            }
          });
          return "for-list-" + index;
        } else if (child) {
          if (!child.key) {
            child.key = index;
          }
          let isHave = false;
          ele.childNodes.forEach((e) => {
            if ((e as any).key === child.key) {
              deepCloneElement(e as any, child);
              isHave = true;
            }
          });
          if (!isHave) {
            ele.insertBefore(child, temp);
          }
          return child.key;
        }
      };
      fn();
      subscribeElement(ele, "childfn-" + index, fn);
    } else if (isElement(ch)) {
      ele.append(ch);
    } else {
      // 如果不用 jsx， 就需要使用此方法
      // if (dom.noUseJSX) {
      // ele.append((dom as any)(...ch));
      // }
      ele.append(...ch);
    }
  });
}
