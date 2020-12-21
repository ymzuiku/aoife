/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/indent */

interface IGlobalValues {
  inherit: string;
  initial: string;
  unset: string;
}
interface IPosition {
  relative: string;
  absolute: string;
  fixed: string;
  static: string;
  inherit: string;
  sticky: string;
  "-webkit-sticky": string;
}

interface GlobalValuesOptions {
  none: string;
}

interface IDisplay {
  /**此元素不会被显示。 */
  none: string;
  flex: string | number;
  /** 此元素将显示为块级元素，此元素前后会带有换行符。 */
  block: string;
  /** 默认。此元素会被显示为内联元素，元素前后没有换行符。 */
  inline: string;
  /** 行内块元素。（CSS2.1 新增的值） */
  "inline-block": string;
  /** 此元素会作为列表显示。 */
  "list-item": string;
  /** 此元素会根据上下文作为块级元素或内联元素显示。*/
  "run-in": string;
  /** 此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。 */
  table: string;
  /**此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。 */
  "inline-table": string;
  /**此元素会作为一个或多个行的分组来显示（类似 <tbody>）。 */
  "table-row-group": string;
  /** 此元素会作为一个或多个行的分组来显示（类似 <thead>）。 */
  "table-header-group": string;
  /** 此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。 */
  "table-footer-group": string;
  /**此元素会作为一个表格行显示（类似 <tr>）。 */
  "table-row": string;
  /** 此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。 */
  "table-column-group": string;
  /** 此元素会作为一个单元格列显示（类似 <col>） */
  "table-column": string;
  /** 此元素会作为一个表格单元格显示（类似 <td> 和 <th>） */
  "table-cell": string;
  /** 此元素会作为一个表格标题显示（类似 <caption>） */
  "table-caption": string;
  /**	规定应该从父元素继承 display 属性的值。 */
  inherit: string;
}

type JustifyAlignItems =
  | "start-start"
  | "start-center"
  | "start-end"
  | "start-stretch"
  | "start-baseline"
  | "center-start"
  | "center-center"
  | "center-end"
  | "center-stretch"
  | "center-baseline"
  | "end-start"
  | "end-center"
  | "end-end"
  | "end-stretch"
  | "end-baseline"
  | "around-start"
  | "around-center"
  | "around-end"
  | "around-stretch"
  | "around-baseline"
  | "between-start"
  | "between-center"
  | "between-end"
  | "between-stretch"
  | "between-baseline"
  | "evenly-start"
  | "evenly-center"
  | "evenly-end"
  | "evenly-stretch"
  | "evenly-baseline";

export declare interface IStyled {
  // -------------css-in-js-start
  onExtraSmall?: IStyled;
  onSmall?: IStyled;
  onMiddle?: IStyled;
  onLarge?: IStyled;
  onExtraLager?: IStyled;
  onActive?: IStyled;
  onFocus?: IStyled;
  onHover?: IStyled;
  onFirstChild?: IStyled;
  onLastChild?: IStyled;
  onBlank?: IStyled;
  onChecked?: IStyled;
  onCurrent?: IStyled;
  onDisabled?: IStyled;
  onFocusWithin?: IStyled;
  onPlaceholderShown?: IStyled;
  onInRange?: IStyled;
  onVisited?: IStyled;
  onAfter?: IStyled;
  onBefore?: IStyled;
  onEven?: IStyled;
  onOdd?: IStyled;
  setNowrap?: "clip" | "ellipsis";
  setRow?: JustifyAlignItems;
  setCol?: JustifyAlignItems;
  // -------------css-in-js-end
  // -------------css-value-start
  "--xs"?: string;
  "--sm"?: string;
  "--md"?: string;
  "--lg"?: string;
  "--xl"?: string;
  "--tip"?: string;
  "--info"?: string;
  "--sub"?: string;
  "--text"?: string;
  "--title"?: string;
  "--t1"?: string;
  "--t2"?: string;
  "--t3"?: string;
  "--t4"?: string;
  "--t5"?: string;
  "--t6"?: string;
  "--h1"?: string;
  "--h2"?: string;
  "--h3"?: string;
  "--h4"?: string;
  "--h5"?: string;
  "--h6"?: string;
  "--0"?: string;
  "--auto"?: string;
  "--px"?: string;
  "--a1"?: string;
  "--a2"?: string;
  "--a3"?: string;
  "--a4"?: string;
  "--a5"?: string;
  "--a6"?: string;
  "--b1"?: string;
  "--b2"?: string;
  "--b3"?: string;
  "--b4"?: string;
  "--b5"?: string;
  "--b6"?: string;
  "--c1"?: string;
  "--c2"?: string;
  "--c3"?: string;
  "--c4"?: string;
  "--c5"?: string;
  "--c6"?: string;
  "--max"?: string;
  "--white"?: string;
  "--black"?: string;
  "--primary1"?: string;
  "--primary2"?: string;
  "--primary3"?: string;
  "--primary4"?: string;
  "--primary5"?: string;
  "--primary6"?: string;
  "--primary7"?: string;
  "--primary8"?: string;
  "--primary9"?: string;
  "--gray1"?: string;
  "--gray2"?: string;
  "--gray3"?: string;
  "--gray4"?: string;
  "--gray5"?: string;
  "--gray6"?: string;
  "--gray7"?: string;
  "--gray8"?: string;
  "--gray9"?: string;
  "--red1"?: string;
  "--red2"?: string;
  "--red3"?: string;
  "--red4"?: string;
  "--red5"?: string;
  "--red6"?: string;
  "--red7"?: string;
  "--red8"?: string;
  "--red9"?: string;
  "--orange1"?: string;
  "--orange2"?: string;
  "--orange3"?: string;
  "--orange4"?: string;
  "--orange5"?: string;
  "--orange6"?: string;
  "--orange7"?: string;
  "--orange8"?: string;
  "--orange9"?: string;
  "--yellow1"?: string;
  "--yellow2"?: string;
  "--yellow3"?: string;
  "--yellow4"?: string;
  "--yellow5"?: string;
  "--yellow6"?: string;
  "--yellow7"?: string;
  "--yellow8"?: string;
  "--yellow9"?: string;
  "--green1"?: string;
  "--green2"?: string;
  "--green3"?: string;
  "--green4"?: string;
  "--green5"?: string;
  "--green6"?: string;
  "--green7"?: string;
  "--green8"?: string;
  "--green9"?: string;
  "--teal1"?: string;
  "--teal2"?: string;
  "--teal3"?: string;
  "--teal4"?: string;
  "--teal5"?: string;
  "--teal6"?: string;
  "--teal7"?: string;
  "--teal8"?: string;
  "--teal9"?: string;
  "--blue1"?: string;
  "--blue2"?: string;
  "--blue3"?: string;
  "--blue4"?: string;
  "--blue5"?: string;
  "--blue6"?: string;
  "--blue7"?: string;
  "--blue8"?: string;
  "--blue9"?: string;
  "--indigo1"?: string;
  "--indigo2"?: string;
  "--indigo3"?: string;
  "--indigo4"?: string;
  "--indigo5"?: string;
  "--indigo6"?: string;
  "--indigo7"?: string;
  "--indigo8"?: string;
  "--indigo9"?: string;
  "--purple1"?: string;
  "--purple2"?: string;
  "--purple3"?: string;
  "--purple4"?: string;
  "--purple5"?: string;
  "--purple6"?: string;
  "--purple7"?: string;
  "--purple8"?: string;
  "--purple9"?: string;
  "--pink1"?: string;
  "--pink2"?: string;
  "--pink3"?: string;
  "--pink4"?: string;
  "--pink5"?: string;
  "--pink6"?: string;
  "--pink7"?: string;
  "--pink8"?: string;
  "--pink9"?: string;
  "--light1"?: string;
  "--light2"?: string;
  "--light3"?: string;
  "--light4"?: string;
  "--light5"?: string;
  "--light6"?: string;
  "--light7"?: string;
  "--light8"?: string;
  "--light9"?: string;
  "--dark1"?: string;
  "--dark2"?: string;
  "--dark3"?: string;
  "--dark4"?: string;
  "--dark5"?: string;
  "--dark6"?: string;
  "--dark7"?: string;
  "--dark8"?: string;
  "--dark9"?: string;
  "--shadow-out"?: string;
  "--shadow-xs"?: string;
  "--shadow-sm"?: string;
  "--shadow-md"?: string;
  "--shadow-lg"?: string;
  "--shadow-xl"?: string;
  "--ease"?: string;
  "--ease-in"?: string;
  "--ease-out"?: string;
  "--ease-in-out"?: string;
  "--sans"?: string;
  "--serif"?: string;
  "--mono"?: string;
  // -------------css-value-end
  all?: string;
  contain?: "none" | "strict" | "content" | "size" | "layout" | "style" | "paint";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | keyof GlobalValuesOptions;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline" | keyof GlobalValuesOptions;
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline" | keyof GlobalValuesOptions;
  alignmentBaseline?: string | null;
  animation?: string;
  animation__snippet?:
    | "name 1s linear 0s infinite normal both running"
    | "name 3s linear 1s infinite running"
    | "name 3s linear 1s infinite alternate"
    | "name .5s linear 1s infinite alternate";
  animationDelay?: string;
  animationDirection?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  animationDuration?: string;
  animationFillMode?: "none" | "forwards" | "backwards" | "both";
  animationIterationCount?: string;
  animationName?: string;
  animationPlayState?: string;
  animationTimingFunction?: string;
  backfaceVisibility?: string | null;
  background?: string | null;
  backdropFilter__snippet?: "saturate(180%) blur(5px)";
  backdropFilter?: string | null;
  background__snippet?: "rgba(0,0,0,0)" | "#fff" | "linear-gradient(180deg, red, blue)";
  backgroundAttachment?: "scroll" | "fixed" | "local";
  backgroundClip?: "padding-box" | "border-box" | "content-box" | keyof GlobalValuesOptions;
  backgroundColor?: string | null;
  backgroundImage?: string | null;
  backgroundImage__snippet?: "url(bgimage.gif)";
  backgroundOrigin?: "padding-box" | "border-box" | "content-box" | keyof GlobalValuesOptions;
  backgroundPosition?: string | null;
  backgroundPosition__snippet?: "inherit" | "0% 50%";
  backgroundPositionX?: string | null;
  backgroundPositionY?: string | null;
  backgroundRepeat?: string | null;
  backgroundSize?: string | null;
  baselineShift?: string | null;
  border?: string | null;
  border__snippet?: "1px solid #000" | "1px solid rgba(0,0,0,0.1)";
  borderBottom?: string | null;
  borderBottomColor?: string | null;
  borderBottomLeftRadius?: string | null;
  borderBottomRightRadius?: string | null;
  borderBottomStyle?: string | null;
  borderBottomWidth?: string | null;
  borderCollapse?: string | null;
  borderColor?: string | null;
  borderImage?: string | null;
  borderImageOutset?: string | null;
  borderImageRepeat?: string | null;
  borderImageSlice?: string | null;
  borderImageSource?: string | null;
  borderImageWidth?: string | null;
  borderLeft?: string | null;
  borderLeftColor?: string | null;
  borderLeftStyle?: string | null;
  borderLeftWidth?: string | null;
  borderRadius?: string | null;
  borderRight?: string | null;
  borderRightColor?: string | null;
  borderRightStyle?: string | null;
  borderRightWidth?: string | null;
  borderSpacing?: string | null;
  borderStyle?:
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | "inherit";
  borderTop?: string | null;
  borderTopColor?: string | null;
  borderTopLeftRadius?: string | null;
  borderTopRightRadius?: string | null;
  borderTopStyle?: string | null;
  borderTopWidth?: string | null;
  borderWidth?: string | null;
  bottom?: string | null;
  boxShadow?: string | null;
  boxSizing?: "content-box" | "border-box" | keyof GlobalValuesOptions;
  breakAfter?: string | null;
  breakBefore?: string | null;
  breakInside?: string | null;
  captionSide?: string | null;
  caretColor?: string;
  clear?: "none" | "left" | "right" | "both" | "inherit";
  clip?: string;
  clipPath?: string;
  clipRule?: string;
  color?: string | null;
  colorInterpolationFilters?: string;
  columnCount?: string;
  columnFill?: string;
  columnGap?: string;
  columnRule?: string;
  columnRuleColor?: string;
  columnRuleStyle?: string;
  columnRuleWidth?: string;
  columnSpan?: string;
  columnWidth?: string;
  columns?: string;
  content?: string | null;
  counterIncrement?: string | null;
  counterReset?: string | null;
  cssFloat?: "left" | "right" | "none" | "inherit";
  float?: "left" | "right" | "none" | "inherit";
  cssText?: string;
  cursor?:
    | "auto"
    | "default"
    | "pointer"
    | "crosshair"
    | "move"
    | "e-resize"
    | "ne-resize"
    | "nw-resize"
    | "n-resize"
    | "se-resize"
    | "sw-resize"
    | "s-resize"
    | "w-resize"
    | "text"
    | "wait"
    | "help";
  direction?: string;
  display?: "fixed" | "block" | "inline-block" | any;
  dominantBaseline?: string | null;
  emptyCells?: string | null;
  enableBackground?: string | null;
  fill?: string | null;
  fillOpacity?: string | null;
  fillRule?: string | null;
  filter?: string;
  flex?: string | number | null;
  flexBasis?: string | null;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexFlow?: string | null;
  flexGrow?: string | null;
  flexShrink?: string | null;
  flexWrap?: string | null;
  floodColor?: string;
  floodOpacity?: string;
  font?: string;
  fontFamily?: string;
  fontFamily__snip?:
    | "ssans-serif,SimSun,宋体,serif,Arial,sans-serif"
    | `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";`
    | `Georgia,Cambria,"Times New Roman",Times,serif`
    | `Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
    | `"Helvetica Neue","PingFang SC", "Hiragino Sans GB", "Heiti SC", -apple-system,BlinkMacSystemFont,NotoSans,"Source Han Sans CN",Roboto,"Fira Sans","Microsoft YaHei", "WenQuanYi Micro Hei"`;
  fontFeatureSettings?: string;
  fontKerning?: string;
  fontSize?: string;
  fontSizeAdjust?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontSynthesis?: string;
  fontVariant?: string;
  fontVariantCaps?: string;
  fontVariantEastAsian?: string;
  fontVariantLigatures?: string;
  fontVariantNumeric?: string;
  fontVariantPosition?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "800"
    | "900"
    | keyof GlobalValuesOptions;
  gap?: string;
  glyphOrientationHorizontal?: string | null;
  glyphOrientationVertical?: string;
  grid?: string | null;
  gridArea?: string | null;
  gridAutoColumns?: string | null;
  gridAutoFlow?: string | null;
  gridAutoRows?: string | null;
  gridColumn?: string | null;
  gridColumnEnd?: string | null;
  gridColumnGap?: string;
  gridColumnStart?: string | null;
  gridGap?: string;
  gridRow?: string | null;
  gridRowEnd?: string | null;
  gridRowGap?: string;
  gridRowStart?: string | null;
  gridTemplate?: string | null;
  gridTemplateAreas?: string | null;
  gridTemplateColumns?: string | null;
  gridTemplateRows?: string | null;
  height?: string | null;
  hyphens?: string;
  imageOrientation?: string;
  imageRendering?: string;
  imeMode?: string | null;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | keyof GlobalValuesOptions;
  justifyItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | keyof GlobalValuesOptions;
  justifySelf?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | keyof GlobalValuesOptions;
  kerning?: string | null;
  /** ios 不支持 */
  overscrollBehavior?: "auto" | "contain" | "none";
  layoutGrid?: string | null;
  layoutGridChar?: string | null;
  layoutGridLine?: string | null;
  layoutGridMode?: string | null;
  layoutGridType?: string | null;
  left?: string | null;
  letterSpacing?: string;
  lightingColor?: string;
  lineBreak?: string;
  lineHeight?: string | null;
  listStyle?: string | null;
  listStyleImage?: string | null;
  listStylePosition?: string | null;
  listStyleType?: string | null;
  margin?: string | null;
  marginBottom?: string | null;
  marginLeft?: string | null;
  marginRight?: string | null;
  marginTop?: string | null;
  marker?: string | null;
  markerEnd?: string | null;
  markerMid?: string | null;
  markerStart?: string | null;
  mask?: string;
  maskComposite?: string;
  maskImage?: string;
  maskPosition?: string;
  maskRepeat?: string;
  maskSize?: string;
  maskType?: string;
  maxHeight?: string | null;
  maxWidth?: string | null;
  minHeight?: string | null;
  minWidth?: string | null;
  msContentZoomChaining?: string | null;
  msContentZoomLimit?: string | null;
  msContentZoomLimitMax?: any;
  msContentZoomLimitMin?: any;
  msContentZoomSnap?: string | null;
  msContentZoomSnapPoints?: string | null;
  msContentZoomSnapType?: string | null;
  msContentZooming?: string | null;
  msFlowFrom?: string | null;
  msFlowInto?: string | null;
  msFontFeatureSettings?: string | null;
  msGridColumn?: any;
  msGridColumnAlign?: string | null;
  msGridColumnSpan?: any;
  msGridColumns?: string | null;
  msGridRow?: any;
  msGridRowAlign?: string | null;
  msGridRowSpan?: any;
  msGridRows?: string | null;
  msHighContrastAdjust?: string | null;
  msHyphenateLimitChars?: string | null;
  msHyphenateLimitLines?: any;
  msHyphenateLimitZone?: any;
  msHyphens?: string | null;
  msImeAlign?: string | null;
  msOverflowStyle?: string | null;
  msScrollChaining?: string | null;
  msScrollLimit?: string | null;
  msScrollLimitXMax?: any;
  msScrollLimitXMin?: any;
  msScrollLimitYMax?: any;
  msScrollLimitYMin?: any;
  msScrollRails?: string | null;
  msScrollSnapPointsX?: string | null;
  msScrollSnapPointsY?: string | null;
  msScrollSnapType?: string | null;
  msScrollSnapX?: string | null;
  msScrollSnapY?: string | null;
  msScrollTranslation?: string | null;
  msTextCombineHorizontal?: string | null;
  msTextSizeAdjust?: any;
  msTouchAction?: string | null;
  msTouchSelect?: string | null;
  msUserSelect?: string | null;
  msWrapFlow?: string;
  msWrapMargin?: any;
  msWrapThrough?: string;
  objectFit?: "none" | "fill" | "contain" | "cover" | "scale-down";
  objectPosition?: string;
  objectPosition__snippet?: "50% 50%";
  opacity?: string | number | null;
  order?: string | null;
  orphans?: string | null;
  outline?: string;
  outlineColor?: string;
  outlineOffset?: string;
  outlineStyle?: string;
  outlineWidth?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "hidden scroll";
  overflowAnchor?: string;
  overflowWrap?: string;
  overflowX?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "hidden scroll";
  overflowY?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "hidden scroll";
  padding?: string | null;
  paddingBottom?: string | null;
  paddingLeft?: string | null;
  paddingRight?: string | null;
  paddingTop?: string | null;
  pageBreakAfter?: string | null;
  pageBreakBefore?: string | null;
  pageBreakInside?: string | null;
  penAction?: string | null;
  perspective?: string | null;
  perspectiveOrigin?: string | null;
  placeContent?: string;
  placeItems?: string;
  placeSelf?: string;
  pointerEvents?:
    | "auto"
    | "none"
    | "inherit"
    | "initial"
    | "unset"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all";
  position?: "block" | "fixed" | "absolute" | "relative" | "static" | "inherit" | "sticky";
  quotes?: string | null;
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline" | keyof GlobalValuesOptions;
  right?: string | null;
  rotate?: string | null;
  rowGap?: string;
  rubyAlign?: string | null;
  rubyOverhang?: string | null;
  rubyPosition?: string | null;
  scale?: string | null;
  scrollBehavior?: "auto" | "instant" | "smooth";
  stopColor?: string | null;
  stopOpacity?: string | null;
  stroke?: string | null;
  strokeDasharray?: string | null;
  strokeDashoffset?: string | null;
  strokeLinecap?: string | null;
  strokeLinejoin?: string | null;
  strokeMiterlimit?: string | null;
  strokeOpacity?: string | null;
  strokeWidth?: string | null;
  tabSize?: string;
  tableLayout?: "auto" | "fixed" | keyof GlobalValuesOptions;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "inherit";
  textAlignLast?: "auto" | "left" | "right" | "center" | "justify" | "inherit" | "start" | "end" | "initial";
  textAnchor?: string | null;
  textCombineUpright?: string;
  textDecoration?: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit";
  textDecorationColor?: string;
  textDecorationLine?: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit";
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | "wavy" | "initial" | "inherit";
  textEmphasis?: string;
  textEmphasisColor?: string;
  textEmphasisPosition?: string;
  textEmphasisStyle?: string;
  textIndent?: string;
  textJustify?: string;
  textKashida?: string | null;
  textKashidaSpace?: string | null;
  textOrientation?: string;
  textOverflow?: "clip" | "ellipsis";
  textShadow?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "inherit";
  textUnderlinePosition?: string;
  top?: string | null;
  touchAction?: string;
  transform?: string;
  transform__snippet?:
    | "none"
    | "translate(0px, 0px)"
    | "translateY(0px)"
    | "perspective(500px) translate3d(0px,0px,0px)"
    | "scale(1,1)"
    | "rotate(0deg)";
  transformBox?: string;
  transformOrigin?: string;
  transformStyle?: string | null;
  transition?: string;
  transition__snippet?:
    | "all 0.2s ease-in"
    | "all 0.2s ease-out"
    | "all 0.2s ease"
    | "all 0.2s ease-in-out"
    | "all 0.2s linear"
    | "all 0.2s cubic-bezier(0,0.25,0.75,1)";
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
  translate?: string | null;
  unicodeBidi?: string;
  userSelect?: "none" | "auto" | "text" | "contain" | "all" | keyof GlobalValuesOptions;
  verticalAlign?: string | null;
  visibility?: string | null;
  /** @deprecated */
  webkitAlignContent?: string;
  /** @deprecated */
  webkitAlignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline" | GlobalValuesOptions;
  /** @deprecated */
  webkitAlignSelf?: string;
  /** @deprecated */
  webkitAnimation?: string;
  /** @deprecated */
  webkitAnimationDelay?: string;
  /** @deprecated */
  webkitAnimationDirection?: string;
  /** @deprecated */
  webkitAnimationDuration?: string;
  /** @deprecated */
  webkitAnimationFillMode?: string;
  /** @deprecated */
  webkitAnimationIterationCount?: string;
  /** @deprecated */
  webkitAnimationName?: string;
  /** @deprecated */
  webkitAnimationPlayState?: string;
  /** @deprecated */
  webkitAnimationTimingFunction?: string;
  /** @deprecated */
  webkitAppearance?: string;
  appearance?: string;
  /** @deprecated */
  webkitBackfaceVisibility?: string;
  /** @deprecated */
  webkitBackgroundClip?: string;
  /** @deprecated */
  webkitBackgroundOrigin?: string;
  /** @deprecated */
  webkitBackgroundSize?: string;
  /** @deprecated */
  webkitBorderBottomLeftRadius?: string;
  /** @deprecated */
  webkitBorderBottomRightRadius?: string;
  webkitBorderImage?: string | null;
  /** @deprecated */
  webkitBorderRadius?: string;
  /** @deprecated */
  webkitBorderTopLeftRadius?: string;
  /** @deprecated */
  webkitBorderTopRightRadius?: string;
  /** @deprecated */
  webkitBoxAlign?: string;
  webkitBoxDirection?: string | null;
  /** @deprecated */
  webkitBoxFlex?: string;
  /** @deprecated */
  webkitBoxOrdinalGroup?: string;
  webkitBoxOrient?: string | null;
  /** @deprecated */
  webkitBoxPack?: string;
  /** @deprecated */
  webkitBoxShadow?: string;
  /** @deprecated */
  webkitBoxSizing?: string;
  webkitColumnBreakAfter?: string | null;
  webkitColumnBreakBefore?: string | null;
  webkitColumnBreakInside?: string | null;
  webkitColumnCount?: any;
  webkitColumnGap?: any;
  webkitColumnRule?: string | null;
  webkitColumnRuleColor?: any;
  webkitColumnRuleStyle?: string | null;
  webkitColumnRuleWidth?: any;
  webkitColumnSpan?: string | null;
  webkitColumnWidth?: any;
  webkitColumns?: string | null;
  /** @deprecated */
  webkitFilter?: string;
  /** @deprecated */
  webkitFlex?: string;
  /** @deprecated */
  webkitFlexBasis?: string;
  /** @deprecated */
  webkitFlexDirection?: string;
  /** @deprecated */
  webkitFlexFlow?: string;
  /** @deprecated */
  webkitFlexGrow?: string;
  /** @deprecated */
  webkitFlexShrink?: string;
  /** @deprecated */
  webkitFlexWrap?: string;
  /** @deprecated */
  webkitJustifyContent?: string;
  webkitLineClamp?: string;
  /** @deprecated */
  webkitMask?: string;
  /** @deprecated */
  webkitMaskBoxImage?: string;
  /** @deprecated */
  webkitMaskBoxImageOutset?: string;
  /** @deprecated */
  webkitMaskBoxImageRepeat?: string;
  /** @deprecated */
  webkitMaskBoxImageSlice?: string;
  /** @deprecated */
  webkitMaskBoxImageSource?: string;
  /** @deprecated */
  webkitMaskBoxImageWidth?: string;
  /** @deprecated */
  webkitMaskClip?: string;
  /** @deprecated */
  webkitMaskComposite?: string;
  /** @deprecated */
  webkitMaskImage?: string;
  /** @deprecated */
  webkitMaskOrigin?: string;
  /** @deprecated */
  webkitMaskPosition?: string;
  /** @deprecated */
  webkitMaskRepeat?: string;
  /** @deprecated */
  webkitMaskSize?: string;
  /** @deprecated */
  webkitOrder?: string;
  /** @deprecated */
  webkitPerspective?: string;
  /** @deprecated */
  webkitPerspectiveOrigin?: string;
  webkitTapHighlightColor?: string | null;
  /** @deprecated */
  webkitTextFillColor?: string;
  /** @deprecated */
  webkitTextSizeAdjust?: string;
  /** @deprecated */
  webkitTextStroke?: string;
  /** @deprecated */
  webkitTextStrokeColor?: string;
  /** @deprecated */
  webkitTextStrokeWidth?: string;
  /** @deprecated */
  webkitTransform?: string;
  /** @deprecated */
  webkitTransformOrigin?: string;
  /** @deprecated */
  webkitTransformStyle?: string;
  /** @deprecated */
  webkitTransition?: string;
  /** @deprecated */
  webkitTransitionDelay?: string;
  /** @deprecated */
  webkitTransitionDuration?: string;
  /** @deprecated */
  webkitTransitionProperty?: string;
  /** @deprecated */
  webkitTransitionTimingFunction?: string;
  webkitUserModify?: string | null;
  webkitUserSelect?: string | null;
  webkitWritingMode?: string | null;
  webkitOverflowScrolling?: "auto" | "touch";
  whiteSpace?: string;
  // windows?: string | null;
  width?: string | null;
  willChange?:
    | "auto"
    | "scroll-position"
    | "contents"
    | "transform"
    | "opacity"
    | "left, top"
    | keyof GlobalValuesOptions;
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  /** 3px|0.3em|inherit|normal(default) */
  wordSpacing?: string;
  wordSpacing__snippet?: "normal" | "3px" | "0.3em" | "inherit";
  wordWrap?: "normal" | "break-word";
  writingMode?: string;
  zIndex?: string | number | null;
  zoom?: string | null;
  [index: number]: string;
  [key: string]: any;
}

// interface HTMLInputEvent extends HTMLElementCustomeEventMap["input"] {
//   target: HTMLInputElement & EventTarget;
// }

interface HTMLInputCustomeEvent extends HTMLElementEventMap {
  target: HTMLInputElement;
  preventDefault: any;
  stopPropagation: any;
}

interface HTMLElementCustomeEventMap {
  [key: string]: HTMLInputCustomeEvent;
}

// type HTMLInputEvent = typeof HTMLElementCustomeEventMap & HTMLInputEventTarget;

interface EventOptions {
  onabort?: (ev: HTMLElementEventMap["abort"]) => any;
  onanimationcancel?: (ev: HTMLElementEventMap["animationcancel"]) => any;
  onanimationend?: (ev: HTMLElementEventMap["animationend"]) => any;
  onanimationiteration?: (ev: HTMLElementEventMap["animationiteration"]) => any;
  onanimationstart?: (ev: HTMLElementEventMap["animationstart"]) => any;
  onauxclick?: (ev: HTMLElementCustomeEventMap["auxclick"]) => any;
  onblur?: (ev: HTMLElementCustomeEventMap["blur"]) => any;
  oncancel?: (ev: HTMLElementCustomeEventMap["cancel"]) => any;
  oncanplay?: (ev: HTMLElementCustomeEventMap["canplay"]) => any;
  oncanplaythrough?: (ev: HTMLElementCustomeEventMap["canplaythrough"]) => any;
  onchange?: (ev: HTMLElementCustomeEventMap["change"]) => any;
  onclick?: (ev: HTMLElementCustomeEventMap["click"]) => any;
  onclose?: (ev: HTMLElementCustomeEventMap["close"]) => any;
  oncontextmenu?: (ev: HTMLElementCustomeEventMap["contextmenu"]) => any;
  oncopy?: (ev: HTMLElementEventMap["copy"]) => any;
  oncuechange?: (ev: HTMLElementEventMap["cuechange"]) => any;
  oncut?: (ev: HTMLElementEventMap["cut"]) => any;
  ondblclick?: (ev: HTMLElementCustomeEventMap["dblclick"]) => any;
  ondrag?: (ev: HTMLElementEventMap["drag"]) => any;
  ondragend?: (ev: HTMLElementEventMap["dragend"]) => any;
  ondragenter?: (ev: HTMLElementEventMap["dragenter"]) => any;
  ondragexit?: (ev: HTMLElementEventMap["dragexit"]) => any;
  ondragleave?: (ev: HTMLElementEventMap["dragleave"]) => any;
  ondragover?: (ev: HTMLElementEventMap["dragover"]) => any;
  ondragstart?: (ev: HTMLElementEventMap["dragstart"]) => any;
  ondrop?: (ev: HTMLElementEventMap["drop"]) => any;
  ondurationchange?: (ev: HTMLElementEventMap["durationchange"]) => any;
  onemptied?: (ev: HTMLElementEventMap["emptied"]) => any;
  onended?: (ev: HTMLElementEventMap["ended"]) => any;
  onerror?: (ev: HTMLElementEventMap["error"]) => any;
  onfocus?: (ev: HTMLElementCustomeEventMap["focus"]) => any;
  onfocusin?: (ev: HTMLElementCustomeEventMap["focusin"]) => any;
  onfocusout?: (ev: HTMLElementCustomeEventMap["focusout"]) => any;
  onfullscreenchange?: (ev: HTMLElementEventMap["fullscreenchange"]) => any;
  onfullscreenerror?: (ev: HTMLElementEventMap["fullscreenerror"]) => any;
  ongotpointercapture?: (ev: HTMLElementEventMap["gotpointercapture"]) => any;
  oninput?: (ev: HTMLElementCustomeEventMap["input"]) => any;
  oninvalid?: (ev: HTMLElementCustomeEventMap["invalid"]) => any;
  onkeydown?: (ev: HTMLElementEventMap["keydown"]) => any;
  onkeypress?: (ev: HTMLElementEventMap["keypress"]) => any;
  onkeyup?: (ev: HTMLElementEventMap["keyup"]) => any;
  onload?: (ev: HTMLElementEventMap["load"]) => any;
  onloadeddata?: (ev: HTMLElementEventMap["loadeddata"]) => any;
  onloadedmetadata?: (ev: HTMLElementEventMap["loadedmetadata"]) => any;
  onloadstart?: (ev: HTMLElementEventMap["loadstart"]) => any;
  onlostpointercapture?: (ev: HTMLElementEventMap["lostpointercapture"]) => any;
  onmousedown?: (ev: HTMLElementEventMap["mousedown"]) => any;
  onmouseenter?: (ev: HTMLElementEventMap["mouseenter"]) => any;
  onmouseleave?: (ev: HTMLElementEventMap["mouseleave"]) => any;
  onmousemove?: (ev: HTMLElementEventMap["mousemove"]) => any;
  onmouseout?: (ev: HTMLElementEventMap["mouseout"]) => any;
  onmouseover?: (ev: HTMLElementEventMap["mouseover"]) => any;
  onmouseup?: (ev: HTMLElementEventMap["mouseup"]) => any;
  onpaste?: (ev: HTMLElementEventMap["paste"]) => any;
  onpause?: (ev: HTMLElementEventMap["pause"]) => any;
  onplay?: (ev: HTMLElementEventMap["play"]) => any;
  onplaying?: (ev: HTMLElementEventMap["playing"]) => any;
  onpointercancel?: (ev: HTMLElementEventMap["pointercancel"]) => any;
  onpointerdown?: (ev: HTMLElementEventMap["pointerdown"]) => any;
  onpointerenter?: (ev: HTMLElementEventMap["pointerenter"]) => any;
  onpointerleave?: (ev: HTMLElementEventMap["pointerleave"]) => any;
  onpointermove?: (ev: HTMLElementEventMap["pointermove"]) => any;
  onpointerout?: (ev: HTMLElementEventMap["pointerout"]) => any;
  onpointerover?: (ev: HTMLElementEventMap["pointerover"]) => any;
  onpointerup?: (ev: HTMLElementEventMap["pointerup"]) => any;
  onprogress?: (ev: HTMLElementEventMap["progress"]) => any;
  onratechange?: (ev: HTMLElementEventMap["ratechange"]) => any;
  onreset?: (ev: HTMLElementEventMap["reset"]) => any;
  onresize?: (ev: HTMLElementEventMap["resize"]) => any;
  onscroll?: (ev: HTMLElementEventMap["scroll"]) => any;
  onsecuritypolicyviolation?: (ev: HTMLElementEventMap["securitypolicyviolation"]) => any;
  onseeked?: (ev: HTMLElementEventMap["seeked"]) => any;
  onseeking?: (ev: HTMLElementEventMap["seeking"]) => any;
  onselect?: (ev: HTMLElementEventMap["select"]) => any;
  onselectionchange?: (ev: HTMLElementEventMap["selectionchange"]) => any;
  onselectstart?: (ev: HTMLElementEventMap["selectstart"]) => any;
  onstalled?: (ev: HTMLElementEventMap["stalled"]) => any;
  onsubmit?: (ev: HTMLElementCustomeEventMap["submit"]) => any;
  onsuspend?: (ev: HTMLElementEventMap["suspend"]) => any;
  ontimeupdate?: (ev: HTMLElementEventMap["timeupdate"]) => any;
  ontoggle?: (ev: HTMLElementEventMap["toggle"]) => any;
  ontouchcancel?: (ev: HTMLElementEventMap["touchcancel"]) => any;
  ontouchend?: (ev: HTMLElementEventMap["touchend"]) => any;
  ontouchmove?: (ev: HTMLElementEventMap["touchmove"]) => any;
  ontouchstart?: (ev: HTMLElementEventMap["touchstart"]) => any;
  ontransitioncancel?: (ev: HTMLElementEventMap["transitioncancel"]) => any;
  ontransitionend?: (ev: HTMLElementEventMap["transitionend"]) => any;
  ontransitionrun?: (ev: HTMLElementEventMap["transitionrun"]) => any;
  ontransitionstart?: (ev: HTMLElementCustomeEventMap["transitionstart"]) => any;
  onvolumechange?: (ev: HTMLElementEventMap["volumechange"]) => any;
  onwaiting?: (ev: HTMLElementEventMap["waiting"]) => any;
  onwheel?: (ev: HTMLElementEventMap["wheel"]) => any;
  [key: string]: any;
}

interface AddEventOptions extends EventOptions {
  listenabort?: (ev: HTMLElementEventMap["abort"]) => any;
  listenanimationcancel?: (ev: HTMLElementEventMap["animationcancel"]) => any;
  listenanimationend?: (ev: HTMLElementEventMap["animationend"]) => any;
  listenanimationiteration?: (ev: HTMLElementEventMap["animationiteration"]) => any;
  listenanimationstart?: (ev: HTMLElementEventMap["animationstart"]) => any;
  listenauxclick?: (ev: HTMLElementEventMap["auxclick"]) => any;
  listenblur?: (ev: HTMLElementEventMap["blur"]) => any;
  listencancel?: (ev: HTMLElementEventMap["cancel"]) => any;
  listencanplay?: (ev: HTMLElementEventMap["canplay"]) => any;
  listencanplaythrough?: (ev: HTMLElementEventMap["canplaythrough"]) => any;
  listenchange?: (ev: HTMLElementCustomeEventMap["change"]) => any;
  listenclick?: (ev: HTMLElementCustomeEventMap["click"]) => any;
  listenclose?: (ev: HTMLElementCustomeEventMap["close"]) => any;
  listencontextmenu?: (ev: HTMLElementEventMap["contextmenu"]) => any;
  listencopy?: (ev: HTMLElementEventMap["copy"]) => any;
  listencuechange?: (ev: HTMLElementEventMap["cuechange"]) => any;
  listencut?: (ev: HTMLElementEventMap["cut"]) => any;
  listendblclick?: (ev: HTMLElementCustomeEventMap["dblclick"]) => any;
  listendrag?: (ev: HTMLElementEventMap["drag"]) => any;
  listendragend?: (ev: HTMLElementEventMap["dragend"]) => any;
  listendragenter?: (ev: HTMLElementEventMap["dragenter"]) => any;
  listendragexit?: (ev: HTMLElementEventMap["dragexit"]) => any;
  listendragleave?: (ev: HTMLElementEventMap["dragleave"]) => any;
  listendragover?: (ev: HTMLElementEventMap["dragover"]) => any;
  listendragstart?: (ev: HTMLElementEventMap["dragstart"]) => any;
  listendrop?: (ev: HTMLElementEventMap["drop"]) => any;
  listendurationchange?: (ev: HTMLElementEventMap["durationchange"]) => any;
  listenemptied?: (ev: HTMLElementEventMap["emptied"]) => any;
  listenended?: (ev: HTMLElementEventMap["ended"]) => any;
  listenerror?: (ev: HTMLElementEventMap["error"]) => any;
  listenfocus?: (ev: HTMLElementCustomeEventMap["focus"]) => any;
  listenfocusin?: (ev: HTMLElementEventMap["focusin"]) => any;
  listenfocusout?: (ev: HTMLElementEventMap["focusout"]) => any;
  listenfullscreenchange?: (ev: HTMLElementEventMap["fullscreenchange"]) => any;
  listenfullscreenerror?: (ev: HTMLElementEventMap["fullscreenerror"]) => any;
  listengotpointercapture?: (ev: HTMLElementEventMap["gotpointercapture"]) => any;
  listeninput?: (ev: HTMLElementCustomeEventMap["input"]) => any;
  listeninvalid?: (ev: HTMLElementCustomeEventMap["invalid"]) => any;
  listenkeydown?: (ev: HTMLElementEventMap["keydown"]) => any;
  listenkeypress?: (ev: HTMLElementEventMap["keypress"]) => any;
  listenkeyup?: (ev: HTMLElementEventMap["keyup"]) => any;
  listenload?: (ev: HTMLElementEventMap["load"]) => any;
  listenloadeddata?: (ev: HTMLElementEventMap["loadeddata"]) => any;
  listenloadedmetadata?: (ev: HTMLElementEventMap["loadedmetadata"]) => any;
  listenloadstart?: (ev: HTMLElementEventMap["loadstart"]) => any;
  listenlostpointercapture?: (ev: HTMLElementEventMap["lostpointercapture"]) => any;
  listenmousedown?: (ev: HTMLElementCustomeEventMap["mousedown"]) => any;
  listenmouseenter?: (ev: HTMLElementCustomeEventMap["mouseenter"]) => any;
  listenmouseleave?: (ev: HTMLElementCustomeEventMap["mouseleave"]) => any;
  listenmousemove?: (ev: HTMLElementEventMap["mousemove"]) => any;
  listenmouseout?: (ev: HTMLElementCustomeEventMap["mouseout"]) => any;
  listenmouseover?: (ev: HTMLElementCustomeEventMap["mouseover"]) => any;
  listenmouseup?: (ev: HTMLElementCustomeEventMap["mouseup"]) => any;
  listenpaste?: (ev: HTMLElementEventMap["paste"]) => any;
  listenpause?: (ev: HTMLElementEventMap["pause"]) => any;
  listenplay?: (ev: HTMLElementEventMap["play"]) => any;
  listenplaying?: (ev: HTMLElementEventMap["playing"]) => any;
  listenpointercancel?: (ev: HTMLElementCustomeEventMap["pointercancel"]) => any;
  listenpointerdown?: (ev: HTMLElementCustomeEventMap["pointerdown"]) => any;
  listenpointerenter?: (ev: HTMLElementCustomeEventMap["pointerenter"]) => any;
  listenpointerleave?: (ev: HTMLElementCustomeEventMap["pointerleave"]) => any;
  listenpointermove?: (ev: HTMLElementEventMap["pointermove"]) => any;
  listenpointerout?: (ev: HTMLElementCustomeEventMap["pointerout"]) => any;
  listenpointerover?: (ev: HTMLElementCustomeEventMap["pointerover"]) => any;
  listenpointerup?: (ev: HTMLElementCustomeEventMap["pointerup"]) => any;
  listenprogress?: (ev: HTMLElementEventMap["progress"]) => any;
  listenratechange?: (ev: HTMLElementEventMap["ratechange"]) => any;
  listenreset?: (ev: HTMLElementEventMap["reset"]) => any;
  listenresize?: (ev: HTMLElementEventMap["resize"]) => any;
  listenscroll?: (ev: HTMLElementEventMap["scroll"]) => any;
  listensecuritypolicyviolation?: (ev: HTMLElementEventMap["securitypolicyviolation"]) => any;
  listenseeked?: (ev: HTMLElementEventMap["seeked"]) => any;
  listenseeking?: (ev: HTMLElementEventMap["seeking"]) => any;
  listenselect?: (ev: HTMLElementEventMap["select"]) => any;
  listenselectionchange?: (ev: HTMLElementEventMap["selectionchange"]) => any;
  listenselectstart?: (ev: HTMLElementEventMap["selectstart"]) => any;
  listenstalled?: (ev: HTMLElementEventMap["stalled"]) => any;
  listensubmit?: (ev: HTMLElementCustomeEventMap["submit"]) => any;
  listensuspend?: (ev: HTMLElementEventMap["suspend"]) => any;
  listentimeupdate?: (ev: HTMLElementEventMap["timeupdate"]) => any;
  listentoggle?: (ev: HTMLElementEventMap["toggle"]) => any;
  listentouchcancel?: (ev: HTMLElementCustomeEventMap["touchcancel"]) => any;
  listentouchend?: (ev: HTMLElementCustomeEventMap["touchend"]) => any;
  listentouchmove?: (ev: HTMLElementEventMap["touchmove"]) => any;
  listentouchstart?: (ev: HTMLElementCustomeEventMap["touchstart"]) => any;
  listentransitioncancel?: (ev: HTMLElementEventMap["transitioncancel"]) => any;
  listentransitionend?: (ev: HTMLElementEventMap["transitionend"]) => any;
  listentransitionrun?: (ev: HTMLElementEventMap["transitionrun"]) => any;
  listentransitionstart?: (ev: HTMLElementEventMap["transitionstart"]) => any;
  listenvolumechange?: (ev: HTMLElementEventMap["volumechange"]) => any;
  listenwaiting?: (ev: HTMLElementEventMap["waiting"]) => any;
  listenwheel?: (ev: HTMLElementEventMap["wheel"]) => any;
  [key: string]: any;
}

type RefOne = (e: HTMLInputElement) => any;
type RefList = ((e: HTMLInputElement) => any)[];

type ChildOne = Element | string | number | boolean | undefined | IProps | ChildFn | ChildJsx;
type ChildJsx = ChildOne[];

type ChildFn = (list: any[], i: number) => ChildOne;

export declare interface IProps extends AddEventOptions {
  tabIndex?: number | ((e: any) => number);
  tag?: string | ((e: any) => string) | HTMLInputElement | Function;
  // 当 next 时，重绘整个 children
  // render?: (v?: any) => ChildOne;
  children?: ChildOne[];
  memo?: () => any[];
  /** 当元素更新时执行 */
  watch?: () => any;
  /** 当元素 onappend 到文档中时执行 */
  onappend?: RefOne;
  /** 当元素 create 时回调 */
  oncreate?: RefOne;
  class?: string | string[] | ((e: any) => string | string[]);
  className?: string | string[] | ((e: any) => string | string[]);
  replace?: boolean;
  /** 用于扩展类的class，可以很好的组织class或者class数组，并且可以组合props.class 的关系 */
  // classExtends?: [string | string[] | (() => string | string[]), any?];
  // classAdd?: string | ((e: any) => string);
  classAdd?: string;
  classReplace?: string[] | ((e: any) => string[]);
  classPick?: { [key: string]: any } | ((e: any) => { [key: string]: any });
  href?: string | ((e: any) => string);
  rel?: string | ((e: any) => string);
  // cssText?: string | ((e: any) => string);
  id?: string | number | ((e: any) => string | number);
  style?: string | (() => string) | IStyled | (() => IStyled);
  textContent?: any | ((e: any) => any);
  accessKey?: string | ((e: any) => string);
  autocapitalize?: string | ((e: any) => string);
  dir?: string | ((e: any) => string);
  draggable?: boolean | ((e: any) => boolean);
  hidden?: boolean | ((e: any) => boolean);
  innerText?: string | ((e: any) => string);
  innerHTML?: string | ((e: any) => string);
  lang?: string | ((e: any) => string);
  spellcheck?: boolean | ((e: any) => boolean);
  title?: string | number | ((e: any) => string | number);
  translate?: boolean | ((e: any) => boolean);
  accept?: string | ((e: any) => string);
  align?: string | ((e: any) => string);
  alt?: string | ((e: any) => string);
  autocomplete?: string | ((e: any) => string);
  autofocus?: boolean | ((e: any) => boolean);
  checked?: boolean | ((e: any) => boolean);
  defaultChecked?: boolean | ((e: any) => boolean);
  defaultValue?: string | ((e: any) => string);
  dirName?: string | ((e: any) => string);
  disabled?: boolean | ((e: any) => boolean);
  files?: FileList | null;
  formAction?: string | ((e: any) => string);
  formEnctype?: string | ((e: any) => string);
  formMethod?: string | ((e: any) => string);
  formNoValidate?: boolean | ((e: any) => boolean);
  formTarget?: string | ((e: any) => string);
  height?: string | number | ((e: any) => string | number);
  indeterminate?: boolean | ((e: any) => boolean);
  max?: string | number | ((e: any) => string | number);
  maxLength?: number | ((e: any) => number);
  min?: string | number | ((e: any) => string | number);
  minLength?: number | ((e: any) => number);
  multiple?: string | ((e: any) => string);
  name?: string | ((e: any) => string);
  pattern?: string | ((e: any) => string);
  placeholder?: string | ((e: any) => string);
  readOnly?: boolean | ((e: any) => boolean);
  required?: boolean | ((e: any) => boolean);
  selectionDirection?: string | ((e: any) => string) | null;
  selectionEnd?: number | ((e: any) => number) | null;
  selectionStart?: number | ((e: any) => number) | null;
  size?: number | ((e: any) => number);
  src?: string | number | ((e: any) => string | number);
  step?: string | number | ((e: any) => string | number);
  type?: string | number | ((e: any) => string | number);
  value?: any;
  label?: string;
  key?: string | number | ((e: any) => string | number);
  valueAsDate?: Date | null;
  valueAsNumber?: number | ((e: any) => number);
  width?: string | number | ((e: any) => string | number);
  [key: string]: any;
  [index: number]: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    a: IProps;
    abbr: IProps;
    address: IProps;
    applet: IProps;
    area: IProps;
    article: IProps;
    aside: IProps;
    audio: IProps;
    b: IProps;
    base: IProps;
    basefont: IProps;
    bdi: IProps;
    bdo: IProps;
    blockquote: IProps;
    body: IProps;
    br: IProps;
    button: IProps;
    canvas: IProps;
    caption: IProps;
    cite: IProps;
    code: IProps;
    col: IProps;
    colgroup: IProps;
    data: IProps;
    datalist: IProps;
    dd: IProps;
    del: IProps;
    details: IProps;
    dfn: IProps;
    dialog: IProps;
    dir: IProps;
    div: IProps;
    dl: IProps;
    dt: IProps;
    em: IProps;
    embed: IProps;
    fieldset: IProps;
    figcaption: IProps;
    figure: IProps;
    font: IProps;
    footer: IProps;
    form: IProps;
    frame: IProps;
    frameset: IProps;
    h1: IProps;
    h2: IProps;
    h3: IProps;
    h4: IProps;
    h5: IProps;
    h6: IProps;
    head: IProps;
    header: IProps;
    hgroup: IProps;
    hr: IProps;
    html: IProps;
    i: IProps;
    iframe: IProps;
    img: IProps;
    input: IProps;
    ins: IProps;
    kbd: IProps;
    label: IProps;
    legend: IProps;
    li: IProps;
    link: IProps;
    main: IProps;
    map: IProps;
    mark: IProps;
    marquee: IProps;
    menu: IProps;
    meta: IProps;
    meter: IProps;
    nav: IProps;
    noscript: IProps;
    object: IProps;
    ol: IProps;
    optgroup: IProps;
    option: IProps;
    output: IProps;
    p: IProps;
    param: IProps;
    picture: IProps;
    pre: IProps;
    progress: IProps;
    q: IProps;
    rp: IProps;
    rt: IProps;
    ruby: IProps;
    s: IProps;
    samp: IProps;
    script: IProps;
    section: IProps;
    select: IProps;
    slot: IProps;
    small: IProps;
    source: IProps;
    span: IProps;
    strong: IProps;
    style: IProps;
    sub: IProps;
    summary: IProps;
    sup: IProps;
    table: IProps;
    tbody: IProps;
    td: IProps;
    template: IProps;
    textarea: IProps;
    tfoot: IProps;
    th: IProps;
    thead: IProps;
    time: IProps;
    title: IProps;
    tr: IProps;
    track: IProps;
    u: IProps;
    ul: IProps;
    var: IProps;
    video: IProps;
    wbr: IProps;
    [key: string]: IProps;
  }
}
