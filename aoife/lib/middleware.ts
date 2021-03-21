type Middleware = (ele:HTMLElement, props:IProps)=>any;

export const middlewares = [] as Middleware[];

export const use = (fn:Middleware)=>{
  middlewares.push(fn);
}