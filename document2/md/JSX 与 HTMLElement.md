JSX 对 aoife 非常重要，`注意 aoife 并不是 React 的轮子`。

aoife 仅仅保留了 JSX 相关的概念，移除了 React 所有非 JSX 相关的概念，所以 aoife 没有生命周期，hooks、diffDOM。

本章我们会参数一些 JSX 语法，并且说清楚 JSX 在 Aoife 的关系。

## JSX 表达式

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
