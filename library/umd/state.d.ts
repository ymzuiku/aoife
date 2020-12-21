export declare const events: Set<Function>;
export declare const next: (focusUpdateTargets?: string | undefined, ignoreUpdateTargets?: string | any[] | undefined) => HTMLElement[];
export declare const subscribe: (fn: any) => () => void;
export declare const subscribeElement: (ele: any, key: string, fn: any) => void;
