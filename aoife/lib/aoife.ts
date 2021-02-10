import { subscribeElement } from "./state";
import { loadable } from "./loadable";
import { bindFn } from "./bindFn";
import { isElement, isString, uiCaches, registerTag } from "./helper";
import { parseChildren } from "./parseChildren";
import { waitAppend, waitValue } from "./waitAppend";

import { events, next, subscribe } from "./state";
import { propFn } from "./propFn";
import { stringToHex } from "./stringToHex";
import { memo } from "./memo";
import { deepEqual } from "./deepEqual";
import { deepMerge } from "./deepMerge";
import { svgList } from "./svgList";

const ignoreKeys: any = {
  class: 1,
  className: 1,
  classPick: 1,
  onsubmit: 1,
  oncreate: 1,
  onappend: 1,
  child: 1,
  children: 1,
  length: 1,
  memo: 1,
  __memo: 1,
  __memoLast: 1,
  __memoSeted: 1,
  __proxy: 1,
  __proxyEle: 1,
};

const classKeys = ["className", "classPick"];

export const aoife = (
  tag: ChildOne,
  attrs?: ChildOne,
  ...child: ChildOne[]
): HTMLElement => {
  let props = {} as IProps;

  if (
    attrs &&
    (typeof attrs === "function" ||
      Array.isArray(attrs) ||
      isString(attrs) ||
      isElement(attrs))
  ) {
    child = [attrs, ...child];
  } else if (attrs) {
    props = attrs as any;
  }
  props.children = [...child];

  if (props.class) {
    props.className = props.class;
  }

  if (Array.isArray(tag)) {
    return (aoife as any)(...tag);
  }

  let ele: any;

  if (typeof tag === "function") {
    ele = (tag as any)(props, ...child) as any;
    // 适配 promise 类型的组件
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
    if (tag === "style" && props["global"]) {
      if (child && typeof child[0] === "string") {
        const cssTxt = child[0];
        const sty = document.createElement("style");
        sty.textContent = cssTxt;
        document.head.append(sty);
        return sty;
      }
    }
    if (tag === "template" && props.children) {
      // props.children.forEach()
      let html = "";
      props.children.forEach((v) => {
        if (typeof v === "string" || typeof v === "number") {
          html += v;
        }
      });
      ele = document.createElement("template");
      ele.innerHTML = html;
    }
    // 若 tag 是一个函数组件，attrs 就作为 props 使用，并且实力化这个组件
    else if (uiCaches[tag]) {
      ele = loadable(uiCaches[tag], [props, ...child]);
      return ele;
    } else {
      if (svgList[tag]) {
        ele = document.createElementNS(
          "http://www.w3.org/2000/svg",
          tag as any
        );
        ele.__isSvg = true;
      } else {
        ele = document.createElement(tag as any);
      }
    }
  } else if (isElement(tag)) {
    ele = tag as any;
  }

  if (props.memo) {
    ele.__memo = props.memo;
    ele.__memoSeted = 1;
    Promise.resolve(props.memo()).then((res) => {
      ele.__memoLast = res;
    });
  }

  if (props.onsubmit) {
    ele.onsubmit = (e: any) => {
      e.preventDefault();
      props.onsubmit && props.onsubmit(e as any);
    };
  }

  classKeys.forEach((key) => {
    if (props[key]) {
      const fn = bindFn(ele, key, props[key]);
      if (fn) {
        // if (props.memo) {
        //   subscribeElement(ele, key, memo(props.memo)(fn));
        // } else {
        // }
        subscribeElement(ele, key, fn);
      }
    }
  });

  Object.keys(props).forEach((key) => {
    if (ignoreKeys[key]) {
      return;
    }
    let fn = bindFn(ele, key, props[key]);
    if (fn) {
      // if (props.memo) {
      //   subscribeElement(ele, key, memo(props.memo)(fn));
      // } else {
      // }
      subscribeElement(ele, key, fn);
    }
  });

  parseChildren(child, ele);

  if (typeof props.oncreate === "function") {
    props.oncreate(ele);
  }

  if (typeof props.onappend === "function") {
    waitAppend(ele).then(props.onappend as any);
  }

  return ele as any;
};

export const jsxFrag = (props: any, ...attrs: any[]) => {
  if (props && props.children) {
    return aoife("span", { style: { all: "unset" } }, ...props.children);
  }
  return "";
};

aoife.jsxFrag = jsxFrag;
aoife.stringToHex = stringToHex;
aoife.waitAppend = waitAppend;
aoife.subscribe = subscribe;
aoife.next = next;
aoife.events = events;
aoife.registerTag = registerTag;
aoife.propFn = propFn;
aoife.waitValue = waitValue;
aoife.memo = memo;
aoife.deepEqual = deepEqual;
aoife.deepMerge = deepMerge;
aoife.styles = <T extends { [key: string]: IStyled }>(sheet: T): T => sheet;

(window as any).aoife = aoife;
