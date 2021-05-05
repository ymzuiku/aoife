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

// type PartialJSXCustom<T> = {
//   [E in keyof ExtendHTML]?: ExtendHTML<E>;
// };

type JSXHTML<T> = {
  [P in keyof HTMLElementTagNameMap]?: Partial<HTMLElementTagNameMap[P]>;
};

type RefOne = (e: HTMLInputElement) => any;

type ExtendHTML = {
  class?: any;
  ref?: RefOne;
  /** 当元素更新时执行 */
  watch?: RefOne;
  /** 当元素 append 时回调 */
  onAppend?: RefOne;
  /** 当元素 remove 时回调 */
  onRemove?: RefOne;
  /** 当元素 entry 时回调 */
  onEntry?: any;
  children?: any[] | (() => any[]);
  [key: string]: any;
};

// type IProps =
// interface IProps extends PartialJSX<HTMLInputElement>, ExtendHTML {}

// 标准元素列表
type AoifeJSX = PartialJSX<HTMLElementTagNameMap>;
interface IProps extends PartialDetail<HTMLInputElement>, ExtendHTML {}

declare namespace JSX {
  interface IntrinsicElements extends AoifeJSX {
    // 标准元素之外的元素
    [key: string]: IProps;
  }
}

declare const aoife: {
  <K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs?: PartialDetail<HTMLElementTagNameMap[K]>,
    ...child: any[]
  ): HTMLElementTagNameMap[K];
  next: (
    focusUpdateTargets?: string | HTMLElement | undefined,
    ignoreUpdateTargets?: string | HTMLElement | HTMLElement[]
  ) => void;
  attributeKeys: {
    [key: string]: boolean;
  };
  useMiddleware: (fn: (ele: HTMLElement, props: IProps) => any) => void;
};
