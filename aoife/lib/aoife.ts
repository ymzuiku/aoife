import { subscribeElement } from "./state";
import { loadable } from "./loadable";
import { bindFn, attributeKeys } from "./bindFn";
import { isElement, isString, uiCaches, registerTag } from "./helper";
import { parseChildren } from "./parseChildren";
import { waitAppend, waitValue } from "./waitAppend";

import { next, subscribe } from "./state";
import { memo } from "./memo";
import { deepEqual } from "./deepEqual";
import { deepMerge } from "./deepMerge";
import { debounce } from "./debounce";
import { throttle } from "./throttle";
import { use, middlewares } from "./middleware";
import { svgList } from "./svgList";
import { flattenOnce } from "./flatten";

const ignoreKeys: any = {
  class: 1,
  className: 1,
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

const classKeys = ["className"];

export const aoife = (tag: ChildOne, attrs?: ChildOne, ...child: ChildOne[]): HTMLElement => {
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
    props.children = [...child];
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
        ele = document.createElementNS("http://www.w3.org/2000/svg", tag as any);
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

  if (typeof props.debounce === "string") {
    props.debounce = [props.debounce];
  }
  if (typeof props.throttle === "string") {
    props.throttle = [props.throttle];
  }

  classKeys.forEach((key) => {
    if (props[key]) {
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

  parseChildren(props.children, ele);

  if (typeof props.oncreate === "function") {
    props.oncreate(ele);
  }

  if (typeof props.onappend === "function") {
    waitAppend(ele).then(props.onappend as any);
  }

  if (middlewares.length) {
    middlewares.forEach(fn=>{
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
aoife.waitAppend = waitAppend;
aoife.subscribe = subscribe;
aoife.next = next;
// aoife.events = events;
aoife.registerTag = registerTag;
aoife.waitValue = waitValue;
aoife.memo = memo;
aoife.deepEqual = deepEqual;
aoife.deepMerge = deepMerge;
aoife.debounce = debounce;
aoife.throttle = throttle;
aoife.attributeKeys = attributeKeys;
aoife.use = use;

(window as any).aoife = aoife;
