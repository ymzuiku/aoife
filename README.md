<img src="./document/aoife.svg" style="width:50%; margin:60px 0px 40px 25%;" />

# Aoife Introduction

## [完整文档](https://aoife-one.vercel.app/)

## [中文文档](/README-zh.md)

Developing native JavaScript programs using JSX, where each component is a raw HTMLElement, can seamlessly integrate with all native JavaScript libraries.

> aoife Very lightweight, gzip 5kb

Why do we need Aoife when there are already React, Vue, and Angular in the community?

## Features

Developing native JavaScript programs using JSX, where each component is a raw HTMLElement, allows for excellent compatibility with all native JavaScript libraries.

- There's only one core API: aoife.next.
- Extremely simple component declaration.
- Updates only occur once per render, with no redundant rendering.
- Embraces the native JS ecosystem, allowing seamless compatibility with native JS libraries.

## Installation / Startup

Installation

```bash
$ npm init aoife-app <project-name>
$ cd <project-name>
$ yarn install
```

Startup

```bash
$ yarn dev
$ yarn build # build
```

## API

aoife is a global function used for JSX parsing, where aoife.next is used to update elements.

```typescript
declare const aoife: {
  <K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs?: PartialDetail<HTMLElementTagNameMap[K]>,
    ...child: any[]
  ): HTMLElementTagNameMap[K];
  next: (
    focusUpdateTargets?: string | HTMLElement | undefined,
    ignoreUpdateTargets?: string | HTMLElement | HTMLElement[]
  ) => void;
  attributeKeys: {
    [key: string]: boolean;
  };
  useMiddleware: (fn: (ele: HTMLElement, props: IProps) => any) => void;
};
```

## A Very Short and Complete Tutorial

If you know React, learning aoife only takes 5 minutes. Please note that aoife is not a replacement for React.

Aoife retains only the concepts related to JSX and removes all non-JSX related concepts from React. Therefore, aoife does not have lifecycles, hooks, or diffDOM.

However, aoife can accomplish everything that React can in a project. To compensate for the absence of React-related concepts, let's see how it's done:

Front-end development can be abstracted into two parts: rendering and updating a page. In aoife, rendering is done using JSX syntax to organize raw HTMLElements. Then, we use "function assignment" to handle element updates.

**Function Assignment**: This means that during the declaration of an element, you bind a function to an attribute. During JSX parsing, if an attribute is recognized as a function, it records a publish-subscribe task and then executes the function, assigning the result. When you need to update this attribute in the future, you use the `aoife.next` function to select elements in the document. Elements and their child elements that match will execute the previously subscribed tasks to update the attribute.

Let's take a look at an example.

```tsx
import "aoife"; // At the project's entry point, import and register the global DOM object once.

// This is a regular JSX component.
function App() {
  return (
    <div class="app">
      <h1>Hello World</h1>
      <StatefulExample name="Add Num" />
    </div>
  );
}

// This is a component used to demonstrate function assignment/updates.
function StatefulExample({ name }: { name: string }) {
  console.log(
    "This log will only be printed once because aoife.next updates only dispatch the child attributes of an element without redrawing the entire component."
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

## Async JSX

aoife can perform asynchronous value retrieval and asynchronous insertion of children, which can simplify business logic involving rendering data fetched remotely. Please note that aoife.next is merely a dispatch for updates and does not wait for callbacks from all asynchronous updates.

```jsx
import "aoife";

function App() {
  return (
    <div>
      <input
        placeholder="Input"
        value={() => {
          return new Promise((res) => {
            setTimeout(() => res("hello"), 500);
          });
        }}
      />
      {() => {
        return new Promise((res) => {
          setTimeout(() => {
            res(<div>list-a</div>);
          }, 1000);
        });
      }}
      {() => {
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

## Design details

1. To continue the declarative development approach, the aoife.next function doesn't pass values; it merely dispatches update commands. The element's properties are still managed by internal state logic to address state branching issues.
2. We have removed concepts similar to SCU (ShouldComponentUpdate), PureComponent, Memo, etc., which are used in React to address rendering issues because a single execution of aoife.next only updates the attributes of local elements once, without causing extensive re-rendering.
3. aoife.next is now a globally optional update, eliminating the need for traditional state management libraries. Properly regulating the use of aoife.next is sufficient.

### Write css

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

## Ecology

The core design concept of aoife is to solve ecosystem issues using native JavaScript. Any function that returns an HTMLElement can be used as a tag in aoife.

### Translation into English: An example of mixing native JS and aoife

The vanilla-pop component is a function encapsulated by tippy.js, and it does not internally import aoife. Usage:

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

From this example, it can be seen that a native JS component can be used by aoife without the need to include aoife itself, as long as this component satisfies three rules:

1. The component is a function that returns an HTMLElement type.
2. The component's parameter is an object.
3. If JSX passes children, the component's first parameter will include a children field, which is an array of HTMLElements.

# Thanks
