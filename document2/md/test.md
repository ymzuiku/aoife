JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

<details>
  <summary>什么是iuap design</summary>
  - iuap design 是用友网络FED团队开发的企业级应用前端集成解决方案。
  - iuap design 是用友网络FED团队开发的企业级应用前端集成解决方案。
</details>

<details>
  <summary>什么是tinper</summary>

`tinper`是开源前端技术平台。

</details>

:::warning SECURITY NOTES

- hello
- dog

:::

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```

JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

# h1 表达式

## h2 表达式

### h3 表达式

#### h4 表达式

在 Aoife 中，每个 JSX 表达式的值是一个原生 HTMLElement , 所以可以直接 append 到 document.body 中:

```jsx
const hello = <div id="foo">Hello world</div>;

document.body.append(hello);
```

以上代码等价于原生 JS 代码:

```jsx
const hello = document.createElement("div");
hello.id = "foo";
hello.textContent = "Hello world";

document.body.append(hello);
```

## 一个简单的组件

由于 JSX 表达式在 Aoife 中就是一个 HTMLElement 声明语法，所以 Aoife 的组件只是一个普通的函数，函数的返回值是一个 JSX 表达式。

```jsx
const App = () => {
  return <div>Hello world</div>;
};

document.body.append(<App />);
```

同时我们可以放心，在 Aoife 中没有 React.hooks 的概念，我们不需要担心这个组件函数最后会变得很复杂。

## 原生 HTMLElement 和 JSX 可以混合使用

我们使用 createElement 创建一个普通的 div 元素，然后在 JSX 中直接使用它:

```jsx
const world = document.createElement("div");
world.id = "foo";
world.textContent = "world";

function App() {
  return <div>hello {world}</div>;
}

document.body.append(<App />);
```

我们也可以将 HTMLElement 封装成一个 Aoife 组件:

```jsx
// 纯原生的组件
function World() {
  const world = document.createElement("div");
  world.id = "foo";
  world.textContent = "world";
  return world;
}

function App() {
  return (
    <div>
      hello <World />
    </div>
  );
}

document.body.append(<App />);
```

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

```css
.back {
  background: #f00;
}
```

> hello

| aaaaaaaaaaaa | bbb   | ccc |
| ------------ | ----- | --- |
| hello        | table | end |

test **bbb** hello `<div />`

```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```g
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<!-- 我们已经有了 React/Vue/Angular, 为什么还需要 Aoife? -->

Aoife 是一个使用 JSX 语法的 纯原生 JS 开发框架，或者叫 Vanilla JS 框架。

Aoife 存在的目的，是为了降低现代前端开发的复杂度。

作者本身是 React 的忠实用户。但是在使用 React 的过程中，我们往往会遇到非常多的概念和问题：

- 我们不需要花费非常心力去解决重复渲染（这往往是性能瓶颈所在）
- 我们不需要学习生命周期，没有 Hooks 和 Component Class
- 我们不需要学习 HOC、Hooks 等概念
- 我们不需要学习 Refs 等概念
- 我们不需要学习 Lazy 、Suspense 等概念
- 我们不需要开发许许多多只能在 React 中使用的组件

以上概念都是现在框架赋予我们的，在开始进行 Web 开发的很长一段时间内，我们花费学习他们的经历，甚至比学习 Web 原生 API 还多。
其实我们不需要以上概念，我们一样可以很好的开发复杂的 Web 应用。

使用 Aoife 我们仅仅需要学习下面 3 个概念:

- JSX 语法
- aoife.next
- aoife.waitAppend

## 安装及开始

使用 Vite 版本：

```bash
$ npm init aoife-app my-project
$ cd my-project
$ yarn install
$ yarn dev
```

使用 Webpack 版本：

```bash
$ npm init aoife-app my-project --webpack
$ cd my-project
$ yarn install
$ yarn start
```

创建并启动好工程，我们就可以开始学习 Aoife 之旅，若你有 React 基础或明白 JSX 语法，相信你可以在 5 - 10 分钟完成这段旅程

# moc-10000000000000000000000000000000000000000000

moc-1

## moc-2

moc-2

### moc-3

moc-3

#### moc-4

moc-4

##### moc-5

moc-5

###### moc-6

moc-6

## 属性

在 Aoife 一个属性的属性其实仅仅是给 HTMLElement 元素进行赋值

```jsx
const ele = (
  <div
    id="page"
    tab-index={10}
    class="page"
    style={{ background: "#f33" }}
  ></div>
);
```

以上代码等同于

```jsx
const ele = document.createElement("div");
ele.id = "page";
ele.className = "page";
ele.setAttribute("tab-index", 10);
ele.style.background = "#f33";
```

在 HTMLElement 中，使用 `.` 取属性赋值和使用 `setAttribute`进行赋值的行为不一定是一致的。
在 Aoife 中，若属性中有 `-` 字符， 会使用 `setAttribute` 进行设置属性，否则使用 `.` 取属性赋值.

若要扩展 Aoife 默认使用 setAttribute 的属性，可以在 aoife.attributeKeys 中增加属性为 true:

```js
aoife.attributeKeys.other = true;
console.log(aoife.attributeKeys); // 查看默认使用 setAttribute 的属性
```

## 事件

若一个属性为 'on' 开头，我们认为它是一个事件，这和 HTML 原生事件保持一致，我们可以赋予一个函数:

```jsx
document.body.append(
  <button onclick={() => console.log("hello")}>Click</button>
);
```

## 组件 Props

组件的 Props 其实是 JSX 的基础特性，JSX 会获取 标签上的属性，并且组合成一个 Object 对象作为参数传递到函数中.

Aoife 的 Props 和 React 的保持一致，只是没有做特殊的约束，仅仅是一个数据传递

```jsx
function App({ name }) {
  return <div>hello {name}</div>;
}

document.body.append(<App name="foo" />);
```

## children

children 是 Props 中的一个属性，它会获取外部传递的子 JSX 对象，和 React 不同 children 永远是一个数组.

```jsx
function App({ children }) {
  return <div>hello {children}</div>;
}

document.body.append(
  <App>
    <h1>dog</h1>
    <h1>cat</h1>
  </App>
);
```

我们也可以将 children 分开使用:

```jsx
function App({ children }) {
  return (
    <div>
      <h2>{chilren[0]}</h2>
      <label>{chilren[1]}</label>
    </div>
  );
}

document.body.append(
  <App>
    <span>dog</span>
    <span>cat</span>
  </App>
);
```
