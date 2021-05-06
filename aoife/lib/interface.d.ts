type PartialDetail<T> = {
  [P in keyof T]?: Partial<T[P]> | (() => Partial<T[P]>);
};

type PartialJSX<T> =
  | {
      [P in keyof T]?: PartialDetail<T[P]>;
    }
  | {
      [E in keyof ExtendHTML]?: ExtendHTML<E>;
    };

type JSXHTML<T> = {
  [P in keyof HTMLElementTagNameMap]?: Partial<HTMLElementTagNameMap[P]>;
};

type RefOne = (e: HTMLInputElement) => any;

type ExtendHTML = {
  class?: any;
  ref?: RefOne;
  /** 当元素 append 时回调 */
  onUpdate?: RefOne;
  /** 当元素 append 时回调 */
  onAppend?: RefOne;
  /** 当元素 remove 时回调 */
  onRemove?: RefOne;
  /** 当元素 entry 时回调 */
  onEntry?: any;
  [key: string]: any;
};

// type IProps =
// interface IProps extends PartialJSX<HTMLInputElement>, ExtendHTML {}

// 标准元素列表
type AoifeJSX = PartialJSX<HTMLElementTagNameMap>;
interface IProps extends PartialDetail<HTMLElement>, ExtendHTML {
  children?: (HTMLElement | string)[];
  onclick?: (e: any) => any;
  onchange?: (e: any) => any;
  oninput?: (e: any) => any;
}

declare namespace JSX {
  interface IntrinsicElements extends AoifeJSX {
    // 标准元素之外的元素
    [key: string]: IProps;
  }
}

declare const aoife: {
  <K extends keyof HTMLElementTagNameMap>(
    tag: K | Element,
    attrs?: IProps | null,
    ...children: any[]
  ): HTMLElementTagNameMap[K];
  next: (
    focusUpdateTargets?: string | HTMLElement | undefined,
    ignoreUpdateTargets?: string | HTMLElement | HTMLElement[]
  ) => void;
  attributeKeys: {
    [key: string]: boolean;
  };
  subscrib<T extends HTMLElement, K extends keyof T>(target: T, param: K, props: IProps): any;
};
