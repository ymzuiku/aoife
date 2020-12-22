export declare const events: Set<Function>;
export declare const next: (focusUpdateTargets?: string | HTMLElement[] | undefined, ignoreUpdateTargets?: string | HTMLElement[] | undefined) => HTMLElement[];
export declare const subscribe: (fn: any) => () => void;
export declare const subscribeElement: (ele: any, key: string, fn: any) => void;
