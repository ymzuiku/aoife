type AoifeElement = HTMLInputElement & Record<string, unknown>;
type AoifeNode = Element | string | number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AoifeChildren = any[];

type AoifeTag =
  | string
  | AoifeElement
  | ((props: AoifeProps & Record<string, unknown>) => (string | AoifeElement) | Promise<string | AoifeElement>);

type PartialDetail<T> = {
  [P in keyof T]?: Partial<T[P]> | (() => Partial<T[P]>);
};

type ExtendHTML = {
  ref?: RefSelf;
  /** 当元素 append 时回调 */
  onUpdate?: RefSelf;
  /** 当元素 append 时回调 */
  onAppend?: RefSelf;
  /** 当元素 remove 时回调 */
  onRemove?: RefSelf;
  /** 当元素 entry 时回调 */
  onEntry?: RefSelf;
  [key: string]: unknown;
};

type PartialJSX<T> =
  | {
      [P in keyof T]?: PartialDetail<T[P]>;
    }
  | {
      [E in keyof ExtendHTML]?: ExtendHTML[E];
    };

type JSXHTML = {
  [P in keyof HTMLElementTagNameMap]?: Partial<HTMLElementTagNameMap[P]>;
};

type RefSelf = (e: HTMLInputElement) => unknown;

// type IProps =
// interface IProps extends PartialJSX<HTMLInputElement>, ExtendHTML {}

// HTML标签列表
type AoifeJSX = PartialJSX<HTMLElementTagNameMap>;
type AoifeEvent = Event & { target: AoifeElement; [key: string]: unknown };

interface AoifeProps extends PartialDetail<HTMLElement>, ExtendHTML {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: AoifeChildren;
  "test-id"?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element?: any;
  onclick?: (e: AoifeEvent) => unknown;
  onchange?: (e: AoifeEvent) => unknown;
  oninput?: (e: AoifeEvent) => unknown;
}

declare namespace JSX {
  interface Element extends AoifeElement {
    [key: string]: AoifeProps;
  }
  interface IntrinsicElements extends AoifeJSX {
    // 标准元素之外的元素
    modify?: AoifeProps;
    [key: string]: AoifeProps;
  }
}

declare const aoife: {
  <K extends keyof HTMLElementTagNameMap>(
    tag: K | Element | string,
    attrs?: AoifeProps | null,
    ...children: AoifeChildren
  ): HTMLElementTagNameMap[K] & AoifeElement;
  next: (
    focusUpdateTargets?: string | HTMLElement | undefined,
    ignoreUpdateTargets?: string | HTMLElement | HTMLElement[]
  ) => void;
  attributeKeys: {
    [key: string]: boolean;
  };
  subscrib<T extends HTMLElement, K extends keyof T>(target: T, param: K, props: AoifeProps): unknown;
};
