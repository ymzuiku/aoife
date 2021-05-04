import { onAppend, onRemove, onEntry } from "vanilla-life";
import { subscribeElement } from "./state";
import { bindFn, attributeKeys } from "./bindFn";
import { isElement, isString } from "./helper";
import { parseChildren } from "./parseChildren";

import { nextState } from "./state";
import { useMiddleware, middlewares } from "./middleware";
import { svgList } from "./svgList";
import { flattenOnce } from "./flatten";

const ignoreKeys: any = {
  class: 1,
  className: 1,
  onsubmit: 1,
  onAppend: 1,
  onRemove: 1,
  onEntry: 1,
  child: 1,
  children: 1,
  length: 1,
};

const classKeys = ["className"];

export const aoife = (tag: any, attrs?: IProps, ...child: any[]): HTMLElement => {
  let props = {} as IProps;

  if (attrs) {
    if (typeof attrs === "function" || isString(attrs) || isElement(attrs)) {
      child = [attrs, ...child];
    } else if (Array.isArray(attrs)) {
      child = [...attrs, ...child];
    } else {
      props = attrs as any;
    }
  }

  // 兼容数组嵌套
  child = flattenOnce(child);

  if (!props.children || !props.children.length) {
    (props as any).children = [...child];
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
      // props.children.forEach()
      let html = "";
      (props as any).children.forEach((v: any) => {
        if (typeof v === "string" || typeof v === "number") {
          html += v;
        }
      });
      ele = document.createElement("template");
      ele.innerHTML = html;
    } else {
      if (svgList[tag]) {
        ele = document.createElementNS("http://www.w3.org/2000/svg", tag as any);
        ele.__isSvg = true;
      } else {
        ele = document.createElement(tag as any);
      }
    }
  } else if (isElement(tag)) {
    ele = tag as any;
  }

  if (props.onsubmit) {
    ele.onsubmit = (e: any) => {
      e.preventDefault();
      props.onsubmit && (props as any).onsubmit(e as any);
    };
  }

  classKeys.forEach((key) => {
    if ((props as any)[key]) {
      const fn = bindFn(ele, key, props);
      if (fn) {
        subscribeElement(ele, key, fn);
      }
    }
  });

  Object.keys(props).forEach((key) => {
    if (ignoreKeys[key]) {
      return;
    }
    const fn = bindFn(ele, key, props);
    if (fn) {
      subscribeElement(ele, key, fn);
    }
  });

  parseChildren((props as any).children, ele);

  if (typeof props.onAppend === "function") {
    onAppend(ele, props.onAppend);
  }

  if (typeof props.onRemove === "function") {
    onRemove(ele, props.onRemove);
  }

  if (typeof props.onEntry === "function") {
    onEntry(ele, props.onEntry);
  }

  if (middlewares.length) {
    middlewares.forEach((fn) => {
      fn(ele, props);
    });
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
aoife.next = nextState;
aoife.attributeKeys = attributeKeys;
aoife.useMiddleware = useMiddleware;

(window as any).aoife = aoife;
