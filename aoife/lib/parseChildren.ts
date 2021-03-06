import { isElement, isText } from "./helper";
import { bindState } from "vanilla-ob";

function replace(old: HTMLElement, ele: HTMLElement) {
  if (!old.isEqualNode(ele)) {
    old.replaceWith(ele);
  }
}

export function parseChildren(_childs: any[], ele: HTMLElement) {
  if (!Array.isArray(_childs)) {
    return;
  }

  const childs = (_childs as any).filter((v: any) => v !== undefined && v !== null);

  childs.forEach((ch: any, index: number) => {
    if (isText(ch)) {
      const text = document.createTextNode(ch) as any;
      text.key = index;
      ele.append(text);
    } else if (typeof ch === "function") {
      const temp = document.createTextNode("");
      ele.append(temp);
      const fn = async () => {
        const child = await Promise.resolve(ch());
        if (isText(child)) {
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
              replace(e as any, text);
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
          child.forEach((c) => {
            const oldEl = oldKeys[c.key] as HTMLElement;
            if (oldEl) {
              if (!oldEl.isEqualNode(c)) {
                replace(oldEl, c);
              }
            } else if (c !== false) {
              ele.insertBefore(c, temp);
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
              replace(e as any, child);
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
      bindState(ele, null, fn);
    } else if (isElement(ch)) {
      ele.append(ch);
    } else if (ch !== false) {
      if (Object.prototype.toString.call(ch) === "[object Array]") {
        const nextCh = [];
        for (let i = 0; i < ch.length; i++) {
          const c = ch[i];
          if (c !== false) {
            nextCh.push(c);
          }
        }
        ele.append(...nextCh);
      } else {
        ele.appendChild(ch);
      }
    }
  });
}
