import { onAppend, onRemove, onEntry } from "vanilla-life";
import { isElement, isText, flattenOnce } from "./helper";
import { parseChildren } from "./parseChildren";
import { ob, attributeKeys } from "vanilla-ob";
import { svgTags } from "vanilla-svg-tags";

const ignoreKeys: any = {
  class: 1,
  onUpdate: 1,
  onAppend: 1,
  onRemove: 1,
  onEntry: 1,
  children: 1,
  length: 1,
};

const svgNS = "http://www.w3.org/2000/svg";

export const aoife = (tag: any, attrs?: any, ...children: any[]): HTMLElement => {
  let props = {} as IProps;

  if (attrs) {
    if (typeof attrs === "function" || isText(attrs) || isElement(attrs)) {
      children = [attrs, ...children];
    } else if (Array.isArray(attrs)) {
      children = [...attrs, ...children];
    } else {
      props = attrs as any;
    }
  }

  // 兼容数组嵌套
  children = flattenOnce(children);

  if (!props.children || !props.children.length) {
    (props as any).children = [...children];
  }

  if (props.class) {
    props.className = props.class;
    delete props.class;
  }

  if (Array.isArray(tag)) {
    return (aoife as any)(...tag);
  }

  let ele: any;

  // 若对象是函数，就是 aoife 组件，直接执行获取返回值
  if (typeof tag === "function") {
    ele = (tag as any)(props) as any;
    // 适配 promise 类型的组件，异步渲染
    if (ele && typeof ele.then === "function") {
      const temp = document.createElement("span");
      temp.setAttribute("promise-span", "");
      ele.then((el: any) => {
        temp.replaceWith(el);
      });
      return temp;
    }
    return ele;
  }

  // 兼容第二个参数，attrs是child
  if (typeof tag === "string") {
    if (tag === "template" && props.children) {
      let html = "";
      (props as any).children.forEach((v: any) => {
        if (typeof v === "string" || typeof v === "number") {
          html += v;
        }
      });
      ele = document.createElement("template");
      ele.innerHTML = html;
    } else {
      if (svgTags.has(tag)) {
        ele = document.createElementNS(svgNS, tag as any);
        // 约定：若设置了 isSvg vanilla-ob 可以更高效的检测出此元素为svg，反之得去查找svg关系
        ele.__isSvg = true;
      } else {
        ele = document.createElement(tag as any);
      }
    }
  } else if (isElement(tag)) {
    ele = tag as any;
  }

  Object.keys(props).forEach((key) => {
    if (ignoreKeys[key]) {
      return;
    }

    ob(ele, key, props[key]);
  });

  parseChildren((props as any).children, ele);

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

  return ele as any;
};

export const jsxFrag = (props: any) => {
  if (props && props.children) {
    return aoife("span", { style: { all: "unset" } }, ...props.children);
  }
  return "";
};

aoife.jsxFrag = jsxFrag;
aoife.next = ob.next;
aoife.attributeKeys = attributeKeys;

(window as any).aoife = aoife;
