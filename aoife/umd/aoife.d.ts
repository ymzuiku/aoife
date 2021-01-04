import { registerTag } from "./helper";
import { waitAppend, waitValue } from "./waitAppend";
import { propFn } from "./propFn";
import { stringToHex } from "./stringToHex";
export declare const aoife: {
    (tag: any, attrs?: any, ...child: any[]): HTMLElement;
    jsxFrag: (...attrs: any[]) => void;
    stringToHex: typeof stringToHex;
    waitAppend: typeof waitAppend;
    subscribe: (fn: any) => () => void;
    next: (focusUpdateTargets?: string | HTMLElement[] | undefined, ignoreUpdateTargets?: string | HTMLElement[] | undefined) => HTMLElement[];
    events: Set<Function>;
    registerTag: typeof registerTag;
    propFn: typeof propFn;
    waitValue: typeof waitValue;
};
export declare const jsxFrag: (...attrs: any[]) => void;
