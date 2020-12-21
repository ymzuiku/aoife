import { ChildOne, IProps } from "./interface";
import { subscribeElement } from "./state";
import { loadable } from "./loadable";
import { bindFn } from "./bindFn";
import { isElement, isString, uiCaches, registerTag } from "./helper";
import { parseChildren } from "./parseChildren";
import { waitAppend } from "./waitAppend";

import { events, next, subscribe } from "./state";
import { propFn } from "./propFn";
import { stringToHex } from "./stringToHex";

const ignoreKeys: any = {
  class: 1,
  className: 1,
  classAdd: 1,
  classPick: 1,
  classExtends: 1,
  onsubmit: 1,
  for: 1,
  fixFor: 1,
  replace: 1,
  oncreate: 1,
  onappend: 1,
  child: 1,
  children: 1,
  length: 1,
  // __propsKeys: 1,
  __proxy: 1,
  __proxyEle: 1,
};

const classKeys = ["className", "classReplace", "classPick", "classAdd"];

export const aoife = (tag: ChildOne, attrs?: ChildOne, ...child: ChildOne[]): HTMLElement => {
  let props = {} as IProps;
  // 兼容第二个参数，attrs是child

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
    return (tag as any)(props, ...child) as any;
  }
  if (Array.isArray(tag)) {
    return (aoife as any)(...tag);
  }

  let ele: any;

  // 若 tag 是一个函数组件，attrs 就作为 props 使用，并且实力化这个组件
  if (typeof tag === "string") {
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

export const aoifeFrag = (...attrs: any[]) => {
  console.error("Dont Use Frag JSX");
};

(window as any).aoife = aoife;
(window as any).aoifeFrag = aoifeFrag;

aoife.stringToHex = stringToHex;
aoife.waitAppend = waitAppend;
aoife.subscribe = subscribe;
aoife.next = next;
aoife.events = events;
aoife.registerTag = registerTag;
aoife.propFn = propFn;
