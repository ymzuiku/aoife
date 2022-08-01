import { onAppend, onEntry, onRemove } from "vanilla-life";
import { attributeKeys, ob } from "vanilla-ob";
import { svgTags } from "vanilla-svg-tags";
import { flattenOnce, isElement, isText } from "./helper";
import { parseChildren } from "./parseChildren";

const ignoreKeys: Record<string, number> = {
  element: 1,
  onUpdate: 1,
  onAppend: 1,
  onRemove: 1,
  onEntry: 1,
  children: 1,
  length: 1,
};

const svgNS = "http://www.w3.org/2000/svg";

export const aoife = (
  tag: AoifeTag,
  attrs?: Record<string, unknown> & AoifeProps,
  ...children: unknown[]
): string | AoifeElement => {
  let props = {} as AoifeProps;

  if (attrs) {
    if (typeof attrs === "function" || isText(attrs) || isElement(attrs)) {
      children = [attrs, ...children];
    } else if (Array.isArray(attrs)) {
      children = [...attrs, ...children];
    } else {
      props = attrs;
    }
  }

  // 兼容数组嵌套
  children = flattenOnce(children);

  if (!props.children || !props.children.length) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props as any).children = [...children];
  }

  if (Array.isArray(tag)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (aoife as any)(...tag);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ele: any;

  // 若对象是函数，就是 aoife 组件，直接执行获取返回值
  if (typeof tag === "function") {
    ele = tag(props) as AoifeElement;
    // 适配 promise 类型的组件，异步渲染
    if (ele && typeof (ele as unknown as Promise<string | AoifeElement>).then === "function") {
      const temp = document.createElement("span") as unknown as AoifeElement;
      temp.setAttribute("promise-span", "");
      (ele as unknown as Promise<string | AoifeElement>).then((el) => {
        temp.replaceWith(el);
      });
      return temp;
    }
    return ele;
  } else if (typeof tag === "string") {
    if (tag === "modify") {
      if (!props.element) {
        return aoife("span", { style: { all: "unset" } });
      }

      Object.keys(props).forEach((key) => {
        if (ignoreKeys[key]) {
          return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ob((props as any).element, key as any, props[key]);
      });
      return (props as unknown as { element: AoifeElement }).element;
    }
    // 兼容第二个参数，attrs是child
    if (tag === "template" && props.children) {
      let html = "";
      props.children.forEach((v) => {
        if (typeof v === "string" || typeof v === "number") {
          html += v;
        }
      });
      ele = document.createElement("template") as unknown as AoifeElement;
      ele.innerHTML = html;
    } else {
      if (svgTags.has(tag)) {
        ele = document.createElementNS(svgNS, tag) as unknown as AoifeElement;
        // 约定：若设置了 isSvg vanilla-ob 可以更高效的检测出此元素为svg，反之得去查找svg关系
        ele.__isSvg = true;
      } else {
        ele = document.createElement(tag);
      }
    }
  } else {
    return aoife("span", { style: { all: "unset" } });
  }

  Object.keys(props).forEach((key) => {
    if (ignoreKeys[key]) {
      return;
    }
    ob(ele, key, props[key]);
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseChildren(props.children as any, ele);

  if (typeof props.onUpdate === "function") {
    ob(ele, null, props.onUpdate);
  }

  if (typeof props.onAppend === "function") {
    onAppend(ele, props.onAppend);
  }

  if (typeof props.onRemove === "function") {
    onRemove(ele, props.onRemove);
  }

  if (typeof props.onEntry === "function") {
    onEntry(ele, props.onEntry);
  }

  return ele;
};

export const jsxFrag = (props: AoifeProps) => {
  if (props && props.children) {
    return aoife("span", { style: { all: "unset" } }, ...props.children);
  }
  return "";
};

aoife.jsxFrag = jsxFrag;
aoife.next = ob.next;
aoife.attributeKeys = attributeKeys;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).aoife = aoife;
