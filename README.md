# aoife

使用 jsx 开发 native-js 程序, 每个组件都是一个原始的 HTMLElment，可以和所有原生 js 库很好的兼容使用。

> aoife 非常小, gzip 5kb

## 特性

- 核心 API 只有一个: aoife.next
- 极简的组件声明
- 每次更新只会更新一次，不会有重复渲染
- 拥抱原生 JS 生态，可以和原生 JS 库很好的兼容使用

## 安装 / 启动

安装

```sh
$ npm init aoife-app <project-name>
$ cd <project-name>
$ yarn install
```

启动：

```sh
$ yarn dev # 开发环境
$ yarn build # 编译
```

<!-- 其它扩展

```sh
$ hard=1 yarn start # 开发环境 (使用缓存编译)
$ hard=1 monaco=1 yarn start # 开发环境 (使用缓存编译、应用 monaco 插件)
``` -->

## API

aoife 是一个全局函数, 用于 jsx 解析，其中 aoife.next 用于更新元素

```ts
declare const aoife: {
  (tag: any, attrs?: ChildOne, ...child: ChildOne[]): HTMLElement;
  next: (
    focusUpdateTargets?: string | undefined,
    ignoreUpdateTargets?: string | any[] | undefined
  ) => HTMLElement[];
  waitAppend(ele: HTMLElement | string, max?: number): Promise<HTMLElement>;
  subscribe: (fn: any) => () => void;
  events: Set<Function>;
  registerTag(data: { [key: string]: any }): void;
  propFn(
    target: any,
    fn: (val: any) => IStyle | string | boolean | number | any[] | object
  ): any;
  waitValue<T>(fn: () => T, max?: number): Promise<T>;
  memo: (blocker: () => any) => (fn: any) => Promise<any>;
  deepEqual: (a: any, b: any) => boolean;
  deepMerge: <T, U>(a: T, b: U) => T & U;
};
```

## 很短且完整的教程

如果你会 React，学习 aoife 只需要 5 分钟，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

但是 aoife 可以完成所有 React 能完成的项目，为了弥补缺少 React 相关的概念，看看我们是怎么做的：

前端开发可以抽象为两部分：页面绘制、页面更新；在 aoife 中，页面绘制就是使用 jsx 语法组织原始的 HTMLElement；然后使用 **函数赋值** 来解决元素更新。

**函数赋值**: 即在声明元素的过程中，给属性绑定一个函数，jsx 解析过程中，若发现属性是一个函数，记录一个发布订阅任务，然后则执行函数，并且赋值；在未来需要更新此属性时，使用 `aoife.next` 函数对文档进行选择，命中的**元素及其子元素**会执行之前订阅的任务，更新属性。

我们看一个例子

```tsx
import "aoife"; // 在项目入口处引入一次，注册全局 dom 对象

// 这是一个普通的 jsx 组件
function App() {
  return (
    <div class="app">
      <h1>Hello World</h1>
      <StatefulExample name="Add Num" />
    </div>
  );
}

// 这是一个用于演示 函数赋值/更新 的组件
function StatefulExample({ name }: { name: string }) {
  console.log(
    "这个日志仅会打印一次，因为 aoife.next 更新仅仅会派发元素的子属性，不会重绘整个组件"
  );
  let num = 0;
  return (
    <div>
      <button
        onclick={() => {
          num += 1;
          aoife.next(".add");
        }}
      >
        {name}
      </button>
      <div
        class="add"
        style={() => ({
          fontSize: 20 + num + "px",
        })}
      >
        <p>{() => num}</p>
      </div>
    </div>
  );
}

document.body.append(<App />);
```

## 异步 JSX

aoife 可以异步取值和异步插入 children，这可以简化远程获取数据渲染的业务。
注意，aoife.next 仅仅是一个派发更新，并不会等待所有异步更新的回调

```jsx
import "aoife";

function App() {
  return (
    <div>
      <input
        placeholder="Input"
        value={() => {
          // 异步取值
          return new Promise((res) => {
            setTimeout(() => res("hello"), 500);
          });
        }}
      />
      {() => {
        // 异步插入元素
        return new Promise((res) => {
          setTimeout(() => {
            res(<div>list-a</div>);
          }, 1000);
        });
      }}
      {() => {
        // 异步插入元素
        return new Promise((res) => {
          setTimeout(() => {
            res(<div>list-b</div>);
          }, 300);
        });
      }}
    </div>
  );
}
```

## 设计细节

1. 为了延续声明式的开发方式，`aoife.next` 函数并没有传递值，仅仅是派发了更新命令，元素的属性还是由内部状态管理的逻辑来解决状态分支问题
2. 我们移除了类似 React 中 SCU，purecomponent、memo 等解决重绘问题的概念，因为**一次** aoife.next 执行仅仅更新**一次**局部元素的**属性**，并不会造成大规模重绘
3. `aoife.next` 已经是全局可选则的更新，所以失去了传统的状态管理库的必要；合理规范好 `aoife.next` 的调用即可。

## 常用额外方法

### 去抖动 debounce

```jsx
<button debounce="onclick,ontouchstart" onclick={handleClick}>
  频繁点击我
</button>
```

### 节流 throttle

```jsx
<button throttle="onclick" onclick={handleClick}>
  频繁点击我
</button>
```

### 编写 css

```jsx
const css = (
  <style>{`
.hello {
  background: #f00;
}
`}</style>
);

document.body.append(css);
```

## 生态

aoife 的核心设计理念就是用原生 JS 解决生态问题，任何一个函数，其返回值是一个 HTMLElement，就可以在 aoife 中作为标签进行使用。

### 原生 JS 和 aoife 混用的例子

vanilla-pop 组件是一个由 tippy.js 封装的函数，内部并无引入 aoife， 使用方法：

```jsx
// npm i --save vanilla-app
import Pop from "vanilla-pop";

const App = () => {
  return (
    <Pop placement="top">
      <div>label</div>
      <div>pop tip</div>
    </Pop>
  );
};
```

从这个案例可以看到，一个原生 JS 组件，本身可以不需要包含 aoife，也可以被 aoife 使用；只需要此组件满足 3 个规则：

- 1. 组件是一个函数，返回值是一个 HTMLElement 类型
- 2. 组件的参数是一个对象
- 3. 若 JSX 传递了 children，在组件第一个参数中会包含 children 字段，值是一个 HTMLElement 数组
