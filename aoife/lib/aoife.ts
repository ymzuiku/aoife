import { subscribeElement } from "./state";
import { loadable } from "./loadable";
import { bindFn } from "./bindFn";
import { isElement, isString, uiCaches, registerTag } from "./helper";
import { parseChildren } from "./parseChildren";
import { waitAppend, waitValue } from "./waitAppend";

import { events, next, subscribe } from "./state";
import { propFn } from "./propFn";
import { stringToHex } from "./stringToHex";

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
  _memoFn: 1,
  _memoLast: 1,
  _memoLen: 1,
  __proxy: 1,
  __proxyEle: 1,
};

const classKeys = ["className", "classPick"];

export const aoife = (tag: ChildOne, attrs?: ChildOne, ...child: ChildOne[]): HTMLElement => {
  let props = {} as IProps;

  if (attrs && (typeof attrs === "function" || Array.isArray(attrs) || isString(attrs) || isElement(attrs))) {
    child = [attrs, ...child];
  } else if (attrs) {
    props = attrs as any;
  }
  props.children = [...child];

  if (props.class) {
    props.className = props.class;
  }

  if (typeof tag === "function") {
    const out = (tag as any)(props, ...child) as any;
    // 适配 promise 类型的组件
    if (out && typeof out.then === "function") {
      const temp = document.createElement("span");
      temp.setAttribute("promise-span", "");
      out.then((el: any) => {
        temp.replaceWith(el);
      });
      return temp;
    }
    return out;
  }
  if (Array.isArray(tag)) {
    return (aoife as any)(...tag);
  }

  let ele: any;

  // 兼容第二个参数，attrs是child
  if (typeof tag === "string") {
    // 若 tag 是一个函数组件，attrs 就作为 props 使用，并且实力化这个组件
    if (uiCaches[tag]) {
      ele = loadable(uiCaches[tag], [props, ...child]);
      return ele;
    } else {
      ele = document.createElement(tag as any);
    }
  } else if (isElement(tag)) {
    ele = tag as any;
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
        subscribeElement(ele, key, fn);
      }
    }
  });

  if (typeof props.memo === "function") {
    (ele as HTMLElement).setAttribute("aoife-memo", "");
    ele._memoFn = props.memo;
    ele._memoLast = ele._memoFn();
    ele._memoLen = ele._memoLast.length;
  }

  Object.keys(props).forEach((key) => {
    if (ignoreKeys[key]) {
      return;
    }
    const fn = bindFn(ele, key, props[key]);
    if (fn) {
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

export const jsxFrag = (...attrs: any[]) => {
  console.error("Dont Use Frag JSX");
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

(window as any).aoife = aoife;
