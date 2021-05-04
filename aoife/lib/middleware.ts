type Middleware = (ele: HTMLElement, props: IProps) => any;

export const middlewares = [] as Middleware[];

export const useMiddleware = (fn: Middleware) => {
  middlewares.push(fn);
};
