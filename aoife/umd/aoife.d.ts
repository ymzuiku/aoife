import { registerTag } from "./helper";
import { waitAppend, waitValue } from "./waitAppend";
import { propFn } from "./propFn";
import { stringToHex } from "./stringToHex";
import { equal } from "./equal";
export declare const aoife: {
    (tag: any, attrs?: any, ...child: any[]): HTMLElement;
    jsxFrag: (children: any, ...attrs: any[]) => any[];
    stringToHex: typeof stringToHex;
    waitAppend: typeof waitAppend;
    subscribe: (fn: any) => () => void;
    next: (focusUpdateTargets?: string | HTMLElement[] | undefined, ignoreUpdateTargets?: string | HTMLElement[] | undefined) => HTMLElement[];
    events: Set<Function>;
    registerTag: typeof registerTag;
    propFn: typeof propFn;
    waitValue: typeof waitValue;
    memo: (blocker: () => any) => (fn: any) => () => Promise<any>;
    equal: typeof equal;
    styles<T extends {
        [key: string]: IStyled;
    }>(sheet: T): T;
};
export declare const jsxFrag: (children: any, ...attrs: any[]) => any[];
