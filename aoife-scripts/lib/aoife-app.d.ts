/// <reference types="aoife-scripts" />
/// <reference path="../../aoife/jsx.d.ts" />

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.less" {
  const content: string;
  export default content;
}

declare module "*.sass" {
  const content: string;
  export default content;
}

declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*.text" {
  const content: string;
  export default content;
}

declare module "object-hash" {
  const content: any;
  export default content;
}

declare module "@babel/*" {
  const content: any;
  export default content;
}

declare module "@babel/core" {
  const content: any;
  export default content;
}

declare module "@babel/standalone" {
  const content: any;
  export default content;
}

declare module "@babel/preset-react" {
  const content: any;
  export default content;
}

declare module "babel-preset-minify" {
  export default any;
}
