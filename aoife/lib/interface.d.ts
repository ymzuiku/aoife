type PartialDetail<T> = {
  [P in keyof T]?: Partial<T[P]> | (() => Partial<T[P]>);
};

type PartialJSX<T> = {
  [P in keyof T]?: PartialDetail<T[P]>;
};

type JSXHTML<T> = {
  [P in keyof HTMLElementTagNameMap]?: Partial<HTMLElementTagNameMap[P]>;
};

type RefOne = (e: HTMLInputElement) => any;

interface ExtendHTML {
  class?: any;
  ref?: RefOne;
  /** 当元素更新时执行 */
  watch?: () => any;
  /** 当元素 append 时回调 */
  onAppend?: () => any;
  /** 当元素 remove 时回调 */
  onRemove?: () => any;
  /** 当元素 entry 时回调 */
  onEntry?: any;
}

type IProps = PartialJSX<HTMLInputElement> & ExtendHTML;
type IPropsBy<K extends keyof HTMLElementTagNameMap> = PartialJSX<HTMLElementTagNameMap[K]> & ExtendHTML;

declare namespace JSX {
  interface IntrinsicElements extends PartialJSX<HTMLElementTagNameMap> {}
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
