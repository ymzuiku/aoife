interface ILoadable {
    defaultKey?: string;
    loading?: HTMLElement;
    ref?: (el: HTMLElement) => any;
}
export declare function loadable(createElementFn: any, args?: any[], { ref, loading, defaultKey }?: ILoadable): HTMLElement;
export {};
