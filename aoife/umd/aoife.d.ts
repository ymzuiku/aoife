import { registerTag } from "./helper";
import { waitAppend, waitValue } from "./waitAppend";
import { propFn } from "./propFn";
import { stringToHex } from "./stringToHex";
import { deepEqual } from "./deepEqual";
import { deepMerge } from "./deepMerge";
export declare const aoife: {
    (tag: any, attrs?: any, ...child: any[]): HTMLElement;
    jsxFrag: (props: any, ...attrs: any[]) => HTMLElement | "";
    stringToHex: typeof stringToHex;
    waitAppend: typeof waitAppend;
    subscribe: (fn: any) => () => void;
    next: (focusUpdateTargets?: string | HTMLElement | HTMLElement[] | undefined, ignoreUpdateTargets?: string | HTMLElement | HTMLElement[] | undefined) => HTMLElement[];
    events: Set<Function>;
    registerTag: typeof registerTag;
    propFn: typeof propFn;
    waitValue: typeof waitValue;
    memo: (blocker: () => any) => (fn: any) => () => Promise<any>;
    deepEqual: typeof deepEqual;
    deepMerge: typeof deepMerge;
    styles<T extends {
        [key: string]: IStyled;
    }>(sheet: T): T;
};
export declare const jsxFrag: (props: any, ...attrs: any[]) => HTMLElement | "";
