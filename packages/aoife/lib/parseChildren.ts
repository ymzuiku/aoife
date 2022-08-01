import { ob } from "vanilla-ob";
import { isElement, isText } from "./helper";

function replace(old: HTMLElement, ele: HTMLElement) {
  if (!old.isEqualNode(ele)) {
    old.replaceWith(ele);
  }
}

export function parseChildren(_childs: AoifeElement[], ele: AoifeElement) {
  if (!Array.isArray(_childs)) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childs = (_childs as any).filter((v: unknown) => v !== void 0 && v !== null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  childs.forEach((ch: any, index: number) => {
    if (isText(ch)) {
      const text = document.createTextNode(ch);
      (text as unknown as { key: number }).key = index;
      ele.append(text);
    } else if (typeof ch === "function") {
      const temp = document.createTextNode("");
      ele.append(temp);
      const fn = async () => {
        const child = await Promise.resolve(ch());
        if (isText(child)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const text = document.createTextNode(child) as any;
          text.key = index;
          let isHave = false;
          ele.childNodes.forEach((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((e as any).key === text.key) {
              // 如果内容一致，不更新
              if (e.textContent === text.textContent) {
                isHave = true;
                return;
              }
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          const oldKeys = {} as Record<string, unknown>;
          const childKeys = {} as Record<string, unknown>;
          child.forEach((c, i) => {
            c.___forList = index;
            if (!c.key) {
              c.key = `fn(${index})-list(${i})`;
            }
            childKeys[c.key] = c;
          });

          // 找到之前的list元素，并且删除现在key没有的，然后array转map
          const needRemove = [] as HTMLElement[];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((e as any).key === child.key) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      ob(ele, null, fn);
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
