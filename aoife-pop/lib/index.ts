import tippy, { followCursor, inlinePositioning } from "tippy.js";
import "./style";

export interface IPop {
  followCursor?: boolean | "horizontal" | "vertical" | "initial";
  // animateFill?: boolean;
  animation?: "scale" | "shift-away" | "shift-toward" | "perspective";
  appendTo?: (() => HTMLElement) | "parent" | HTMLElement;
  arrow?: boolean | string | Element;
  delay?: number | [number, number];
  inertia?: boolean;
  allowHTML?: boolean;
  padding?: string;
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "auto"
    | "auto-start"
    | "auto-end";

  getReferenceClientRect?: () => {
    width: number;
    height: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  hideOnClick?: boolean | "toggle";
  inlinePositioning?: boolean;
  interactive?: boolean;
  interactiveBorder?: number;
  interactiveDebounce?: number;
  maxWidth?: number | "none";
  moveTransition?: string;
  offset?: [number, number];
  popperOptions?: any;
  onAfterUpdate?: (instance: any, partialProps: any) => any;
  onBeforeUpdate?: (instance: any, partialProps: any) => any;
  onClickOutside?: (instance: any, event: any) => any;
  onCreate?: (instance: any) => any;
  onDestroy?: (instance: any) => any;
  onHidden?: (instance: any) => any;
  onHide?: (instance: any) => any;
  onMount?: (instance: any) => any;
  onShow?: (instance: any) => any;
  onShown?: (instance: any) => any;
  onTrigger?: (instance: any, event: any) => any;
  onUntrigger?: (instance: any, event: any) => any;
  render?: any;
  showOnCreate?: boolean;
  sticky?: boolean | "reference" | "popper";
  theme?: "light" | "material" | "light-border" | "dark";
  touch?: boolean | "hold" | ["hold", number];
  trigger?: "hover" | "click" | "mouseenter focus" | "focusin" | "mouseenter click" | "manual";
  triggerTarget?: Element | Element[];
  zIndex?: number;
  children?: any[];
}

export default ({ onCreate, padding, children = [], onHidden, trigger, zIndex, ...rest }: IPop) => {
  if (!children) {
    return document.createElement("span");
  }
  let button = children[0] || document.createElement("span");
  let content = children[1] || document.createElement("span");

  if (trigger === "hover") {
    trigger = "mouseenter focus";
  }

  tippy(button, {
    // arrowType: "round",
    content,
    duration: [170, 170],
    // animation: "shift-away",
    animation: void 0,
    inlinePositioning: true,
    // inertia: true,
    interactive: true,
    zIndex,
    trigger,
    theme: "dark",
    appendTo: document.body,
    placement: "bottom",
    plugins: [followCursor, inlinePositioning],
    onCreate: (ins: any) => {
      (button as any).popper = ins;
      if (onCreate) {
        onCreate(ins);
      }
      if (padding) {
        (ins.popper as HTMLElement).style.setProperty("--pop-padding", padding);
      }
    },
    onHidden: (ins: any) => {
      if (onHidden) {
        onHidden(ins);
      }
    },
    ...(rest as any),
  });
  return button;
};
