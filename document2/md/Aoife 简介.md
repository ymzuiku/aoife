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
