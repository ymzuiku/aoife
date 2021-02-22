/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/indent */
/*
based on [CSSProperties from Galmorous Typings](https://github.com/paypal/glamorous/blob/master/typings/css-properties.d.ts)
The MIT License (MIT)
Copyright (c) 2017 PayPal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// See CSS 3 CSS-wide keywords https://www.w3.org/TR/css3-values/#common-keywords
// See CSS 3 Explicit Defaulting https://www.w3.org/TR/css-cascade-3/#defaulting-keywords
// "all CSS properties can accept these values"
type CSSWideKeyword = "initial" | "inherit" | "unset";
// type CSSWideKeyword = "initial" | "inherit" | "unset" | CSSProperties;

type PlaceContent =
  | CSSWideKeyword
  | "auto"
  | "auto auto"
  | "auto center"
  | "auto normal"
  | "auto start"
  | "auto end"
  | "auto flex-start"
  | "auto flex-end"
  | "auto self-start"
  | "auto self-end"
  | "auto left"
  | "auto right"
  | "auto baseline"
  | "auto first baseline"
  | "auto last baseline"
  | "auto stretch"
  | "auto space-between"
  | "auto space-evenly"
  | "auto space-around"
  | "center"
  | "center auto"
  | "center center"
  | "center normal"
  | "center start"
  | "center end"
  | "center flex-start"
  | "center flex-end"
  | "center self-start"
  | "center self-end"
  | "center left"
  | "center right"
  | "center baseline"
  | "center first baseline"
  | "center last baseline"
  | "center stretch"
  | "center space-between"
  | "center space-evenly"
  | "center space-around"
  | "normal"
  | "normal auto"
  | "normal center"
  | "normal normal"
  | "normal start"
  | "normal end"
  | "normal flex-start"
  | "normal flex-end"
  | "normal self-start"
  | "normal self-end"
  | "normal left"
  | "normal right"
  | "normal baseline"
  | "normal first baseline"
  | "normal last baseline"
  | "normal stretch"
  | "normal space-between"
  | "normal space-evenly"
  | "normal space-around"
  | "start"
  | "start auto"
  | "start center"
  | "start normal"
  | "start start"
  | "start end"
  | "start flex-start"
  | "start flex-end"
  | "start self-start"
  | "start self-end"
  | "start left"
  | "start right"
  | "start baseline"
  | "start first baseline"
  | "start last baseline"
  | "start stretch"
  | "start space-between"
  | "start space-evenly"
  | "start space-around"
  | "end"
  | "end auto"
  | "end center"
  | "end normal"
  | "end start"
  | "end end"
  | "end flex-start"
  | "end flex-end"
  | "end self-start"
  | "end self-end"
  | "end left"
  | "end right"
  | "end baseline"
  | "end first baseline"
  | "end last baseline"
  | "end stretch"
  | "end space-between"
  | "end space-evenly"
  | "end space-around"
  | "flex-start"
  | "flex-start auto"
  | "flex-start center"
  | "flex-start normal"
  | "flex-start start"
  | "flex-start end"
  | "flex-start flex-start"
  | "flex-start flex-end"
  | "flex-start self-start"
  | "flex-start self-end"
  | "flex-start left"
  | "flex-start right"
  | "flex-start baseline"
  | "flex-start first baseline"
  | "flex-start last baseline"
  | "flex-start stretch"
  | "flex-start space-between"
  | "flex-start space-evenly"
  | "flex-start space-around"
  | "flex-end"
  | "flex-end auto"
  | "flex-end center"
  | "flex-end normal"
  | "flex-end start"
  | "flex-end end"
  | "flex-end flex-start"
  | "flex-end flex-end"
  | "flex-end self-start"
  | "flex-end self-end"
  | "flex-end left"
  | "flex-end right"
  | "flex-end baseline"
  | "flex-end first baseline"
  | "flex-end last baseline"
  | "flex-end stretch"
  | "flex-end space-between"
  | "flex-end space-evenly"
  | "flex-end space-around"
  | "self-start"
  | "self-start auto"
  | "self-start center"
  | "self-start normal"
  | "self-start start"
  | "self-start end"
  | "self-start flex-start"
  | "self-start flex-end"
  | "self-start self-start"
  | "self-start self-end"
  | "self-start left"
  | "self-start right"
  | "self-start baseline"
  | "self-start first baseline"
  | "self-start last baseline"
  | "self-start stretch"
  | "self-start space-between"
  | "self-start space-evenly"
  | "self-start space-around"
  | "self-end"
  | "self-end auto"
  | "self-end center"
  | "self-end normal"
  | "self-end start"
  | "self-end end"
  | "self-end flex-start"
  | "self-end flex-end"
  | "self-end self-start"
  | "self-end self-end"
  | "self-end left"
  | "self-end right"
  | "self-end baseline"
  | "self-end first baseline"
  | "self-end last baseline"
  | "self-end stretch"
  | "self-end space-between"
  | "self-end space-evenly"
  | "self-end space-around"
  | "left"
  | "left auto"
  | "left center"
  | "left normal"
  | "left start"
  | "left end"
  | "left flex-start"
  | "left flex-end"
  | "left self-start"
  | "left self-end"
  | "left left"
  | "left right"
  | "left baseline"
  | "left first baseline"
  | "left last baseline"
  | "left stretch"
  | "left space-between"
  | "left space-evenly"
  | "left space-around"
  | "right"
  | "right auto"
  | "right center"
  | "right normal"
  | "right start"
  | "right end"
  | "right flex-start"
  | "right flex-end"
  | "right self-start"
  | "right self-end"
  | "right left"
  | "right right"
  | "right baseline"
  | "right first baseline"
  | "right last baseline"
  | "right stretch"
  | "right space-between"
  | "right space-evenly"
  | "right space-around"
  | "baseline"
  | "baseline auto"
  | "baseline center"
  | "baseline normal"
  | "baseline start"
  | "baseline end"
  | "baseline flex-start"
  | "baseline flex-end"
  | "baseline self-start"
  | "baseline self-end"
  | "baseline left"
  | "baseline right"
  | "baseline baseline"
  | "baseline first baseline"
  | "baseline last baseline"
  | "baseline stretch"
  | "baseline space-between"
  | "baseline space-evenly"
  | "baseline space-around"
  | "first baseline"
  | "first auto"
  | "first center"
  | "first normal"
  | "first start"
  | "first end"
  | "first flex-start"
  | "first flex-end"
  | "first self-start"
  | "first self-end"
  | "first left"
  | "first right"
  | "first baseline"
  | "first first baseline"
  | "first last baseline"
  | "first stretch"
  | "first space-between"
  | "first space-evenly"
  | "first space-around"
  | "last baseline"
  | "last auto"
  | "last center"
  | "last normal"
  | "last start"
  | "last end"
  | "last flex-start"
  | "last flex-end"
  | "last self-start"
  | "last self-end"
  | "last left"
  | "last right"
  | "last baseline"
  | "last first baseline"
  | "last last baseline"
  | "last stretch"
  | "last space-between"
  | "last space-evenly"
  | "last space-around"
  | "stretch"
  | "stretch auto"
  | "stretch center"
  | "stretch normal"
  | "stretch start"
  | "stretch end"
  | "stretch flex-start"
  | "stretch flex-end"
  | "stretch self-start"
  | "stretch self-end"
  | "stretch left"
  | "stretch right"
  | "stretch baseline"
  | "stretch first baseline"
  | "stretch last baseline"
  | "stretch stretch"
  | "stretch space-between"
  | "stretch space-evenly"
  | "stretch space-around"
  | "space-between"
  | "space-betwen auto"
  | "space-betwen center"
  | "space-betwen normal"
  | "space-betwen start"
  | "space-betwen end"
  | "space-betwen flex-start"
  | "space-betwen flex-end"
  | "space-betwen self-start"
  | "space-betwen self-end"
  | "space-betwen left"
  | "space-betwen right"
  | "space-betwen baseline"
  | "space-betwen first baseline"
  | "space-betwen last baseline"
  | "space-betwen stretch"
  | "space-betwen space-between"
  | "space-betwen space-evenly"
  | "space-betwen space-around"
  | "space-evenly"
  | "space-evenly auto"
  | "space-evenly center"
  | "space-evenly normal"
  | "space-evenly start"
  | "space-evenly end"
  | "space-evenly flex-start"
  | "space-evenly flex-end"
  | "space-evenly self-start"
  | "space-evenly self-end"
  | "space-evenly left"
  | "space-evenly right"
  | "space-evenly baseline"
  | "space-evenly first baseline"
  | "space-evenly last baseline"
  | "space-evenly stretch"
  | "space-evenly space-between"
  | "space-evenly space-evenly"
  | "space-evenly space-around"
  | "space-around"
  | "space-around auto"
  | "space-around center"
  | "space-around normal"
  | "space-around start"
  | "space-around end"
  | "space-around flex-start"
  | "space-around flex-end"
  | "space-around self-start"
  | "space-around self-end"
  | "space-around left"
  | "space-around right"
  | "space-around baseline"
  | "space-around first baseline"
  | "space-around last baseline"
  | "space-around stretch"
  | "space-around space-between"
  | "space-around space-evenly"
  | "space-around space-around";

type FontFamily =
  | string
  | {
      fontFamily: string;
      src: string;
      fontStyle?: string;
      fontWeight?: string | number;
    };

interface CSSPropertiesComplete {
  /**
   * Aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
   */
  alignContent?:
    | CSSWideKeyword
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";

  /**
   * Sets the default alignment in the cross axis for all of the flex container's items, including anonymous flex items, similarly to how justify-content aligns items along the main axis.
   */
  alignItems?:
    | CSSWideKeyword
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";

  /**
   * Allows the default alignment to be overridden for individual flex items.
   */
  alignSelf?:
    | CSSWideKeyword
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";

  /**
   * This property allows precise alignment of elements, such as graphics, that do not have a baseline-table or lack the desired baseline in their baseline-table. With the alignment-adjust property, the position of the baseline identified by the alignment-baseline can be explicitly determined. It also determines precisely the alignment point for each glyph within a textual element.
   */
  alignmentAdjust?: CSSWideKeyword | string | number;

  alignmentBaseline?:
    | CSSWideKeyword
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "use-script";

  /**
   * Defines a length of time to elapse before an animation starts, allowing an animation to begin execution some time after it is applied.
   */
  animationDelay?: CSSWideKeyword | string | number;

  /**
   * Defines whether an animation should run in reverse on some or all cycles.
   */
  animationDirection?:
    | CSSWideKeyword
    | "normal"
    | "reverse"
    | "alternate"
    | "alternate-reverse";

  /**
   * Specifies how many times an animation cycle should play.
   */
  animationIterationCount?: CSSWideKeyword | "infinite" | number;

  /**
   * Defines the list of animations that apply to the element.
   */
  animationName?: CSSWideKeyword | string | any[] | any;

  /**
   * Defines whether an animation is running or paused.
   */
  animationPlayState?: CSSWideKeyword | "running" | "paused";

  /**
   * Allows changing the style of any element to platform-based interface elements or vice versa.
   */
  appearance?: CSSWideKeyword | "auto" | "none";

  /**
   * Determines whether or not the “back” side of a transformed element is visible when facing the viewer.
   */
  backfaceVisibility?: CSSWideKeyword | "visible" | "hidden";

  /**
   * Shorthand property to set the values for one or more of:
   * background-clip, background-color, background-image,
   * background-origin, background-position, background-repeat,
   * background-size, and background-attachment.
   */
  background?: CSSWideKeyword | string;

  /**
   * If a background-image is specified, this property determines
   * whether that image's position is fixed within the viewport,
   * or scrolls along with its containing block.
   * See CSS 3 background-attachment property https://drafts.csswg.org/css-backgrounds-3/#the-background-attachment
   */
  backgroundAttachment?: CSSWideKeyword | "scroll" | "fixed" | "local";

  /**
   * This property describes how the element's background images should blend with each other and the element's background color.
   * The value is a list of blend modes that corresponds to each background image. Each element in the list will apply to the corresponding element of background-image. If a property doesn’t have enough comma-separated values to match the number of layers, the UA must calculate its used value by repeating the list of values until there are enough.
   */
  backgroundBlendMode?:
    | CSSWideKeyword
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";

  /**
   * Sets the background color of an element.
   */
  backgroundColor?: CSSWideKeyword | string;

  backgroundComposite?: CSSWideKeyword | string;

  /**
   * Applies one or more background images to an element. These can be any valid CSS image, including url() paths to image files or CSS gradients.
   */
  backgroundImage?: CSSWideKeyword | string;

  /**
   * Specifies what the background-position property is relative to.
   */
  backgroundOrigin?:
    | CSSWideKeyword
    | "border-box"
    | "padding-box"
    | "content-box";

  /**
   * Sets the position of a background image.
   */
  backgroundPosition?: CSSWideKeyword | string | number;

  /**
   * Background-repeat defines if and how background images will be repeated after they have been sized and positioned
   */
  backgroundRepeat?: CSSWideKeyword | string;

  /**
   * Obsolete - spec retired, not implemented.
   */
  baselineShift?: CSSWideKeyword | string | number;

  /**
   * Non standard. Sets or retrieves the location of the Dynamic HTML (DHTML) behavior.
   */
  behavior?: CSSWideKeyword | string;

  /**
   * Shorthand property that defines the different properties of all four sides of an element's border in a single declaration. It can be used to set border-width, border-style and border-color, or a subset of these.
   */
  border?: CSSWideKeyword | string | number;

  /**
   * Shorthand that sets the values of border-bottom-color,
   * border-bottom-style, and border-bottom-width.
   */
  borderBottom?: CSSWideKeyword | string | number;

  /**
   * Sets the color of the bottom border of an element.
   */
  borderBottomColor?: CSSWideKeyword | string;

  /**
   * Defines the shape of the border of the bottom-left corner.
   */
  borderBottomLeftRadius?: CSSWideKeyword | string | number;

  /**
   * Defines the shape of the border of the bottom-right corner.
   */
  borderBottomRightRadius?: CSSWideKeyword | string | number;

  /**
   * Sets the line style of the bottom border of a box.
   */
  borderBottomStyle?:
    | CSSWideKeyword
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset";

  /**
   * Sets the width of an element's bottom border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   */
  borderBottomWidth?: CSSWideKeyword | string | number;

  /**
   * Border-collapse can be used for collapsing the borders between table cells
   */
  borderCollapse?: CSSWideKeyword | "collapse" | "separate";

  /**
   * The CSS border-color property sets the color of an element's four borders. This property can have from one to four values, made up of the elementary properties:
   *      •       border-top-color
   *      •       border-right-color
   *      •       border-bottom-color
   *      •       border-left-color The default color is the currentColor of each of these values.
   * If you provide one value, it sets the color for the element. Two values set the horizontal and vertical values, respectively. Providing three values sets the top, vertical, and bottom values, in that order. Four values set all for sides: top, right, bottom, and left, in that order.
   */
  borderColor?: CSSWideKeyword | string;

  /**
   * Specifies different corner clipping effects, such as scoop (inner curves), bevel (straight cuts) or notch (cut-off rectangles). Works along with border-radius to specify the size of each corner effect.
   */
  borderCornerShape?: CSSWideKeyword | string;

  /**
   * The property border-image-source is used to set the image to be used instead of the border style. If this is set to none the border-style is used instead.
   */
  borderImageSource?: CSSWideKeyword | string | number;

  /**
   * The border-image-width CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom, and left edges.
   */
  borderImageWidth?: CSSWideKeyword | string | number;

  /**
   * Shorthand property that defines the border-width, border-style and border-color of an element's left border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the left border — border-left-width, border-left-style and border-left-color.
   */
  borderLeft?: CSSWideKeyword | string | number;

  /**
   * The CSS border-left-color property sets the color of an element's left border. This page explains the border-left-color value, but often you will find it more convenient to fix the border's left color as part of a shorthand set, either border-left or border-color.
   * Colors can be defined several ways. For more information, see Usage.
   */
  borderLeftColor?: CSSWideKeyword | string;

  /**
   * Sets the style of an element's left border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
   */
  borderLeftStyle?:
    | CSSWideKeyword
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset";

  /**
   * Sets the width of an element's left border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   */
  borderLeftWidth?: CSSWideKeyword | string | number;

  /**
   * Sets the width of an element's border radius.
   */
  borderRadius?: CSSWideKeyword | string | number;

  /**
   * Shorthand property that defines the border-width, border-style and border-color of an element's right border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the right border — border-right-width, border-right-style and border-right-color.
   */
  borderRight?: CSSWideKeyword | string | number;

  /**
   * Sets the color of an element's right border. This page explains the border-right-color value, but often you will find it more convenient to fix the border's right color as part of a shorthand set, either border-right or border-color.
   * Colors can be defined several ways. For more information, see Usage.
   */
  borderRightColor?: CSSWideKeyword | string;

  /**
   * Sets the style of an element's right border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
   */
  borderRightStyle?:
    | CSSWideKeyword
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset";

  /**
   * Sets the width of an element's right border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   */
  borderRightWidth?: CSSWideKeyword | string | number;

  /**
   * Specifies the distance between the borders of adjacent cells.
   */
  borderSpacing?: CSSWideKeyword | string | number;

  /**
   * Sets the style of an element's four borders. This property can have from one to four values. With only one value, the value will be applied to all four borders; otherwise, this works as a shorthand property for each of border-top-style, border-right-style, border-bottom-style, border-left-style, where each border style may be assigned a separate value.
   */
  borderStyle?:
    | CSSWideKeyword
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset";

  /**
   * Shorthand property that defines the border-width, border-style and border-color of an element's top border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the top border — border-top-width, border-top-style and border-top-color.
   */
  borderTop?: CSSWideKeyword | string | number;

  /**
   * Sets the color of an element's top border. This page explains the border-top-color value, but often you will find it more convenient to fix the border's top color as part of a shorthand set, either border-top or border-color.
   * Colors can be defined several ways. For more information, see Usage.
   */
  borderTopColor?: CSSWideKeyword | string;

  /**
   * Sets the rounding of the top-left corner of the element.
   */
  borderTopLeftRadius?: CSSWideKeyword | string | number;

  /**
   * Sets the rounding of the top-right corner of the element.
   */
  borderTopRightRadius?: CSSWideKeyword | string | number;

  /**
   * Sets the style of an element's top border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
   */
  borderTopStyle?:
    | CSSWideKeyword
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset";

  /**
   * Sets the width of an element's top border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   */
  borderTopWidth?: CSSWideKeyword | string | number;

  /**
   * Sets the width of an element's four borders. This property can have from one to four values. This is a shorthand property for setting values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   */
  borderWidth?: CSSWideKeyword | string | number;

  /**
   * This property specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's containing block. For relatively positioned boxes, the offset is with respect to the bottom edges of the box itself (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
   */
  bottom?: CSSWideKeyword | string | number;

  /**
   * Obsolete.
   */
  boxAlign?:
    | CSSWideKeyword
    | "start"
    | "center"
    | "end"
    | "baseline"
    | "stretch";

  /**
   * Breaks a box into fragments creating new borders, padding and repeating backgrounds or lets it stay as a continuous box on a page break, column break, or, for inline elements, at a line break.
   */
  boxDecorationBreak?: CSSWideKeyword | "slice" | "clone";

  /**
   * Deprecated
   */
  boxDirection?: CSSWideKeyword | "normal" | "reverse";

  /**
   * Do not use. This property has been replaced by the flex-wrap property.
   * Gets or sets a value that specifies the direction to add successive rows or columns when the value of box-lines is set to multiple.
   */
  boxLineProgression?: CSSWideKeyword | string;

  /**
   * Do not use. This property has been replaced by the flex-wrap property.
   * Gets or sets a value that specifies whether child elements wrap onto multiple lines or columns based on the space available in the object.
   */
  boxLines?: CSSWideKeyword | "single" | "multiple";

  /**
   * Do not use. This property has been replaced by flex-order.
   * Specifies the ordinal group that a child element of the object belongs to. This ordinal value identifies the display order (along the axis defined by the box-orient property) for the group.
   */
  boxOrdinalGroup?: CSSWideKeyword | string | number;

  /**
   * Deprecated.
   */
  boxFlex?: CSSWideKeyword | number;

  /**
   * Deprecated.
   */
  boxFlexGroup?: CSSWideKeyword | number;

  /**
   * Cast a drop shadow from the frame of almost any element.
   * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  boxShadow?: CSSWideKeyword | string | number;

  /*
   * Decides what sizing properties (width and height) should be taken into account when sizing elements relationally.
   * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
   */
  boxSizing?: CSSWideKeyword | "content-box" | "border-box";

  /**
   * The CSS break-after property allows you to force a break on multi-column layouts. More specifically, it allows you to force a break after an element. It allows you to determine if a break should occur, and what type of break it should be. The break-after CSS property describes how the page, column or region break behaves after the generated box. If there is no generated box, the property is ignored.
   */
  breakAfter?:
    | CSSWideKeyword
    | "auto"
    | "avoid"
    | "avoid-page"
    | "page"
    | "left"
    | "right"
    | "recto"
    | "verso"
    | "avoid-column"
    | "column"
    | "avoid-region"
    | "region";

  /**
   * Control page/column/region breaks that fall above a block of content
   */
  breakBefore?:
    | CSSWideKeyword
    | "auto"
    | "avoid"
    | "avoid-page"
    | "page"
    | "left"
    | "right"
    | "recto"
    | "verso"
    | "avoid-column"
    | "column"
    | "avoid-region"
    | "region";

  /**
   * Control page/column/region breaks that fall within a block of content
   */
  breakInside?:
    | CSSWideKeyword
    | "auto"
    | "avoid"
    | "avoid-page"
    | "avoid-column"
    | "avoid-region";

  /**
   * The clear CSS property specifies if an element can be positioned next to or must be positioned below the floating elements that precede it in the markup.
   */
  clear?:
    | CSSWideKeyword
    | "none"
    | "left"
    | "right"
    | "both"
    | "inline-start"
    | "inline-end";

  /**
   * Deprecated; see clip-path.
   * Lets you specify the dimensions of an absolutely positioned element that should be visible, and the element is clipped into this shape, and displayed.
   */
  clip?: CSSWideKeyword | string;

  /**
   * Clipping crops an graphic, so that only a portion of the graphic is rendered, or filled. This clip-rule property, when used with the clip-path property, defines which clip rule, or algorithm, to use when filling the different parts of a graphics.
   */
  clipRule?: CSSWideKeyword | "nonzero" | "evenodd";

  /**
   * The color property sets the color of an element's foreground content (usually text), accepting any standard CSS color from keywords and hex values to RGB(a) and HSL(a).
   */
  color?: CSSWideKeyword | string | number;

  /**
   * Describes the number of columns of the element.
   * See CSS 3 column-count property https://www.w3.org/TR/css3-multicol/#cc
   */
  columnCount?: CSSWideKeyword | number | "auto";

  /**
   * Specifies how to fill columns (balanced or sequential).
   */
  columnFill?: CSSWideKeyword | "auto" | "balance";

  /**
   * The column-gap property controls the width of the gap between columns in multi-column elements.
   */
  columnGap?: CSSWideKeyword | string;

  /**
   * Sets the width, style, and color of the rule between columns.
   */
  columnRule?: CSSWideKeyword | string | number;

  /**
   * Specifies the color of the rule between columns.
   */
  columnRuleColor?: CSSWideKeyword | string;

  /**
   * Specifies the width of the rule between columns.
   */
  columnRuleWidth?: CSSWideKeyword | string | number;

  /**
   * The column-span CSS property makes it possible for an element to span across all columns when its value is set to all. An element that spans more than one column is called a spanning element.
   */
  columnSpan?: CSSWideKeyword | "none" | "all";

  /**
   * Specifies the width of columns in multi-column elements.
   */
  columnWidth?: CSSWideKeyword | string | number;

  /**
   * This property is a shorthand property for setting column-width and/or column-count.
   */
  columns?: CSSWideKeyword | string | number;

  /**
   * The counter-increment property accepts one or more names of counters (identifiers), each one optionally followed by an integer which specifies the value by which the counter should be incremented (e.g. if the value is 2, the counter increases by 2 each time it is invoked).
   */
  counterIncrement?: CSSWideKeyword | string | number;

  /**
   * The counter-reset property contains a list of one or more names of counters, each one optionally followed by an integer (otherwise, the integer defaults to 0.) Each time the given element is invoked, the counters specified by the property are set to the given integer.
   */
  counterReset?: CSSWideKeyword | string | number;

  /**
   * The cue property specifies sound files (known as an "auditory icon") to be played by speech media agents before and after presenting an element's content; if only one file is specified, it is played both before and after. The volume at which the file(s) should be played, relative to the volume of the main element, may also be specified. The icon files may also be set separately with the cue-before and cue-after properties.
   */
  cue?: CSSWideKeyword | string;

  /**
   * The cue-after property specifies a sound file (known as an "auditory icon") to be played by speech media agents after presenting an element's content; the volume at which the file should be played may also be specified. The shorthand property cue sets cue sounds for both before and after the element is presented.
   */
  cueAfter?: CSSWideKeyword | string;

  /**
   * Specifies the mouse cursor displayed when the mouse pointer is over an element.
   */
  cursor?: CSSWideKeyword | string | number;

  /**
   * The direction CSS property specifies the text direction/writing direction. The rtl is used for Hebrew or Arabic text, the ltr is for other languages.
   */
  direction?: CSSWideKeyword | "ltr" | "rtl";

  /**
   * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
   */
  display /** turn off the display of an element and its descendants */?:
    | "none"
    /** <display-outside> values. */
    | "block"
    | "inline"
    | "run-in"
    /** <display-inside> values. */
    | "flow"
    | "flow-root"
    | "table"
    | "flex"
    | "grid"
    | "ruby"
    | "subgrid"
    /** <display-outside> plus <display-inside> values */
    | "block flow"
    | "inline table"
    | "flex run-in"
    /** <display-listitem> values */
    | "list-item"
    | "list-item block"
    | "list-item inline"
    | "list-item flow"
    | "list-item flow-root"
    | "list-item block flow"
    | "list-item block flow-root"
    | "flow list-item block"
    /** <display-internal> values. */
    | "table-row-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row"
    | "table-cell"
    | "table-column-group"
    | "table-column"
    | "table-caption"
    | "ruby-base"
    | "ruby-text"
    | "ruby-base-container"
    | "ruby-text-container"
    /** <display-box> values. */
    | "contents"
    | "none"
    /** <display-legacy> values. */
    | "inline-block"
    | "inline-list-item"
    | "inline-table"
    | "inline-flex"
    | "inline-grid"
    /** global values. */
    | CSSWideKeyword;

  /**
   * The ‘fill’ property paints the interior of the given graphical element. The area to be painted consists of any areas inside the outline of the shape. To determine the inside of the shape, all subpaths are considered, and the interior is determined according to the rules associated with the current value of the ‘fill-rule’ property. The zero-width geometric outline of a shape is included in the area to be painted.
   */
  fill?: CSSWideKeyword | string;

  /**
   * SVG: Specifies the opacity of the color or the content the current object is filled with.
   * See SVG 1.1 https://www.w3.org/TR/SVG/painting.html#FillOpacityProperty
   */
  fillOpacity?: CSSWideKeyword | number;

  /**
   * The ‘fill-rule’ property indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape. For a simple, non-intersecting path, it is intuitively clear what region lies "inside"; however, for a more complex path, such as a path that intersects itself or where one subpath encloses another, the interpretation of "inside" is not so obvious.
   * The ‘fill-rule’ property provides two options for how the inside of a shape is determined:
   */
  fillRule?: CSSWideKeyword | "nonzero" | "evenodd";

  /**
   * Applies various image processing effects. This property is largely unsupported. See Compatibility section for more information.
   */
  filter?: CSSWideKeyword | string | number;

  /**
   * Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   */
  flex?: CSSWideKeyword | number | string;

  /**
   * Obsolete, do not use. This property has been renamed to align-items.
   * Specifies the alignment (perpendicular to the layout axis defined by the flex-direction property) of child elements of the object.
   */
  flexAlign?: CSSWideKeyword | {};

  /**
   * The flex-basis CSS property describes the initial main size of the flex item before any free space is distributed according to the flex factors described in the flex property (flex-grow and flex-shrink).
   */
  flexBasis?: CSSWideKeyword | string | number;

  /**
   * The flex-direction CSS property describes how flex items are placed in the flex container, by setting the direction of the flex container's main axis.
   */
  flexDirection?:
    | CSSWideKeyword
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";

  /**
   * The flex-flow CSS property defines the flex container's main and cross axis. It is a shorthand property for the flex-direction and flex-wrap properties.
   */
  flexFlow?:
    | CSSWideKeyword
    // flex direction
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    // flex wrap
    | "nowrap"
    | "wrap"
    | "wrap-reverse"
    // flex direction + flex wrap
    | "row nowrap"
    | "row wrap"
    | "row wrap-reverse"
    | "row-reverse nowrap"
    | "row-reverse wrap"
    | "row-reverse wrap-reverse"
    | "column nowrap"
    | "column wrap"
    | "column wrap-reverse"
    | "column-reverse nowrap"
    | "column-reverse wrap"
    | "column-reverse wrap-reverse"
    // flex direction + flex wrap (reverse order)
    | "nowrap row"
    | "wrap row"
    | "wrap-reverse row"
    | "nowrap row-reverse"
    | "wrap row-reverse"
    | "wrap-reverse row-reverse"
    | "nowrap column"
    | "wrap column"
    | "wrap-reverse column"
    | "nowrap column-reverse"
    | "wrap column-reverse"
    | "wrap-reverse column-reverse";

  /**
   * Specifies the flex grow factor of a flex item.
   * See CSS flex-grow property https://drafts.csswg.org/css-flexbox-1/#flex-grow-property
   */
  flexGrow?: CSSWideKeyword | number;

  /**
   * Do not use. This property has been renamed to align-self
   * Specifies the alignment (perpendicular to the layout axis defined by flex-direction) of child elements of the object.
   */
  flexItemAlign?: CSSWideKeyword | {};

  /**
   * Do not use. This property has been renamed to align-content.
   * Specifies how a flexbox's lines align within the flexbox when there is extra space along the axis that is perpendicular to the axis defined by the flex-direction property.
   */
  flexLinePack?: CSSWideKeyword | {};

  /**
   * Gets or sets a value that specifies the ordinal group that a flexbox element belongs to. This ordinal value identifies the display order for the group.
   */
  flexOrder?: CSSWideKeyword | {};

  /**
   * Specifies the flex shrink factor of a flex item.
   * See CSS flex-shrink property https://drafts.csswg.org/css-flexbox-1/#flex-shrink-property
   */
  flexShrink?: CSSWideKeyword | number;

  /**
   * Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
   * See CSS flex-wrap property https://drafts.csswg.org/css-flexbox-1/#flex-wrap-property
   */
  flexWrap?: CSSWideKeyword | "nowrap" | "wrap" | "wrap-reverse";

  /**
   * Elements which have the style float are floated horizontally. These elements can move as far to the left or right of the containing element. All elements after the floating element will flow around it, but elements before the floating element are not impacted. If several floating elements are placed after each other, they will float next to each other as long as there is room.
   */
  float?:
    | CSSWideKeyword
    | "left"
    | "right"
    | "none"
    | "inline-start"
    | "inline-end";

  /**
   * Flows content from a named flow (specified by a corresponding flow-into) through selected elements to form a dynamic chain of layout regions.
   */
  flowFrom?: CSSWideKeyword | {};

  /**
   * The font property is shorthand that allows you to do one of two things: you can either set up six of the most mature font properties in one line, or you can set one of a choice of keywords to adopt a system font setting.
   */
  font?: CSSWideKeyword | string;

  /**
   * The font-family property allows one or more font family names and/or generic family names to be specified for usage on the selected element(s)' text. The browser then goes through the list; for each character in the selection it applies the first font family that has an available glyph for that character.
   */
  fontFamily?: CSSWideKeyword | FontFamily | (FontFamily | CSSWideKeyword)[];

  /**
   * The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text. This property controls <bold>metric kerning</bold> - that utilizes adjustment data contained in the font. Optical Kerning is not supported as yet.
   */
  fontKerning?: CSSWideKeyword | "auto" | "normal" | "none";

  /**
   * Specifies the size of the font. Used to compute em and ex units.
   * See CSS 3 font-size property https://www.w3.org/TR/css-fonts-3/#propdef-font-size
   */
  fontSize?: CSSWideKeyword | string | number;

  /**
   * The font-size-adjust property adjusts the font-size of the fallback fonts defined with font-family, so that the x-height is the same no matter what font is used. This preserves the readability of the text when fallback happens.
   * See CSS 3 font-size-adjust property https://www.w3.org/TR/css-fonts-3/#propdef-font-size-adjust
   */
  fontSizeAdjust?: CSSWideKeyword | "none" | number;

  /**
   * Allows you to expand or condense the widths for a normal, condensed, or expanded font face.
   * See CSS 3 font-stretch property https://drafts.csswg.org/css-fonts-3/#propdef-font-stretch
   */
  fontStretch?:
    | CSSWideKeyword
    | "normal"
    | "ultra-condensed"
    | "extra-condensed"
    | "condensed"
    | "semi-condensed"
    | "semi-expanded"
    | "expanded"
    | "extra-expanded"
    | "ultra-expanded";

  /**
   * The font-style property allows normal, italic, or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face. Oblique faces can be simulated by artificially sloping the glyphs of the regular face.
   * See CSS 3 font-style property https://www.w3.org/TR/css-fonts-3/#propdef-font-style
   */
  fontStyle?: CSSWideKeyword | "normal" | "italic" | "oblique";

  /**
   * This value specifies whether the user agent is allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
   */
  fontSynthesis?: CSSWideKeyword | string;

  /**
   * The font-variant property enables you to select the small-caps font within a font family.
   */
  fontVariant?: CSSWideKeyword | string | number;

  /**
   * Fonts can provide alternate glyphs in addition to default glyph for a character. This property provides control over the selection of these alternate glyphs.
   */
  fontVariantAlternates?: CSSWideKeyword | string | number;

  /**
   * Specifies the weight or boldness of the font.
   * See CSS 3 'font-weight' property https://www.w3.org/TR/css-fonts-3/#propdef-font-weight
   */
  fontWeight?:
    | CSSWideKeyword
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;

  /**
   * Lays out one or more grid items bound by 4 grid lines. Shorthand for setting grid-column-start, grid-column-end, grid-row-start, and grid-row-end in a single declaration.
   */
  gridArea?: CSSWideKeyword | string | number;

  /**
   * Controls a grid item's placement in a grid area, particularly grid position and a grid span. Shorthand for setting grid-column-start and grid-column-end in a single declaration.
   */
  gridColumn?: CSSWideKeyword | string | number;

  /**
   * Controls a grid item's placement in a grid area as well as grid position and a grid span. The grid-column-end property (with grid-row-start, grid-row-end, and grid-column-start) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
   */
  gridColumnEnd?: CSSWideKeyword | string | number;

  /**
   * Determines a grid item's placement by specifying the starting grid lines of a grid item's grid area . A grid item's placement in a grid area consists of a grid position and a grid span. See also ( grid-row-start, grid-row-end, and grid-column-end)
   */
  gridColumnStart?: CSSWideKeyword | string | number;

  /**
   * Gets or sets a value that indicates which row an element within a Grid should appear in. Shorthand for setting grid-row-start and grid-row-end in a single declaration.
   */
  gridRow?: CSSWideKeyword | string | number;

  /**
   * Determines a grid item’s placement by specifying the block-end. A grid item's placement in a grid area consists of a grid position and a grid span. The grid-row-end property (with grid-row-start, grid-column-start, and grid-column-end) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
   */
  gridRowEnd?: CSSWideKeyword | string | number;

  /**
   * Specifies a row position based upon an integer location, string value, or desired row size.
   * css/properties/grid-row is used as short-hand for grid-row-position and grid-row-position
   */
  gridRowPosition?: CSSWideKeyword | string | number;

  gridRowSpan?: CSSWideKeyword | number;

  /**
   * Specifies named grid areas which are not associated with any particular grid item, but can be referenced from the grid-placement properties. The syntax of the grid-template-areas property also provides a visualization of the structure of the grid, making the overall layout of the grid container easier to understand.
   */
  gridTemplateAreas?: CSSWideKeyword | string;

  /**
   * Specifies (with grid-template-rows) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
   */
  gridTemplateColumns?: CSSWideKeyword | string | number;

  /**
   * Specifies (with grid-template-columns) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
   */
  gridTemplateRows?: CSSWideKeyword | string | number;

  /**
   * Sets the height of an element. The content area of the element height does not include the padding, border, and margin of the element.
   */
  height?: CSSWideKeyword | string | number;

  /**
   * Specifies the minimum number of characters in a hyphenated word
   */
  hyphenateLimitChars?: CSSWideKeyword | "auto" | number;

  /**
   * Indicates the maximum number of successive hyphenated lines in an element. The ‘no-limit’ value means that there is no limit.
   */
  hyphenateLimitLines?: CSSWideKeyword | "no-limit" | number;

  /**
   * Specifies the maximum amount of trailing whitespace (before justification) that may be left in a line before hyphenation is triggered to pull part of a word from the next line back up into the current one.
   */
  hyphenateLimitZone?: CSSWideKeyword | string | number;

  /**
   * Specifies whether or not words in a sentence can be split by the use of a manual or automatic hyphenation mechanism.
   */
  hyphens?: CSSWideKeyword | "none" | "manual" | "auto";

  imeMode?:
    | CSSWideKeyword
    | "auto"
    | "normal"
    | "active"
    | "inactive"
    | "disabled";

  /**
   * Defines how the browser distributes space between and around flex items
   * along the main-axis of their container.
   * See CSS justify-content property https://www.w3.org/TR/css-flexbox-1/#justify-content-property
   */
  justifyContent?:
    | CSSWideKeyword
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  placeContent?: PlaceContent;

  placeItems?: PlaceContent;

  placeSelf?: PlaceContent;

  gridGap?: CSSWideKeyword | string | number;
  gap?: CSSWideKeyword | string | number;

  layoutGrid?: CSSWideKeyword | string | number;

  layoutGridChar?: CSSWideKeyword | string | number;

  layoutGridLine?: CSSWideKeyword | string | number;

  layoutGridMode?: CSSWideKeyword | string | number;

  layoutGridType?: CSSWideKeyword | "loose" | "strict" | "fixed";

  /**
   * Sets the left edge of an element
   */
  left?: CSSWideKeyword | string | number;

  /**
   * The letter-spacing CSS property specifies the spacing behavior between text characters.
   */
  letterSpacing?: CSSWideKeyword | string | number;

  /**
   * Deprecated. Gets or sets line-breaking rules for text in selected languages such as Japanese, Chinese, and Korean.
   */
  lineBreak?: CSSWideKeyword | "auto" | "loose" | "normal" | "strict";

  lineClamp?: CSSWideKeyword | number;

  /**
   * Specifies the height of an inline block level element.
   * See CSS 2.1 line-height property https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height
   */
  lineHeight?: CSSWideKeyword | string | number;

  /**
   * Shorthand property that sets the list-style-type, list-style-position and list-style-image properties in one declaration.
   */
  listStyle?: CSSWideKeyword | string | number;

  /**
   * This property sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker. That also means that if the image is not available, it will show the style specified by list-style-property
   */
  listStyleImage?: CSSWideKeyword | string;

  /**
   * Specifies if the list-item markers should appear inside or outside the content flow.
   */
  listStylePosition?: CSSWideKeyword | "inside" | "outside";

  /**
   * Specifies the type of list-item marker in a list.
   */
  listStyleType?: CSSWideKeyword | string | number;

  /**
   * The margin property is shorthand to allow you to set all four margins of an element at once. Its equivalent longhand properties are margin-top, margin-right, margin-bottom and margin-left. Negative values are also allowed.
   */
  margin?: CSSWideKeyword | string | number;

  /**
   * margin-bottom sets the bottom margin of an element.
   */
  marginBottom?: CSSWideKeyword | string | number;

  /**
   * margin-left sets the left margin of an element.
   */
  marginLeft?: CSSWideKeyword | string | number;

  /**
   * margin-right sets the right margin of an element.
   */
  marginRight?: CSSWideKeyword | string | number;

  /**
   * margin-top sets the top margin of an element.
   */
  marginTop?: CSSWideKeyword | string | number;

  /**
   * The marquee-direction determines the initial direction in which the marquee content moves.
   */
  marqueeDirection?: CSSWideKeyword | string;

  /**
   * The 'marquee-style' property determines a marquee's scrolling behavior.
   */
  marqueeStyle?: CSSWideKeyword | string;

  /**
   * This property is shorthand for setting mask-image, mask-mode, mask-repeat, mask-position, mask-clip, mask-origin, mask-composite and mask-size. Omitted values are set to their original properties' initial values.
   */
  mask?: CSSWideKeyword | string | number;

  /**
   * This property is shorthand for setting mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, and mask-border-repeat. Omitted values are set to their original properties' initial values.
   */
  maskBorder?: CSSWideKeyword | string | number;

  /**
   * This property specifies how the images for the sides and the middle part of the mask image are scaled and tiled. The first keyword applies to the horizontal sides, the second one applies to the vertical ones. If the second keyword is absent, it is assumed to be the same as the first, similar to the CSS border-image-repeat property.
   */
  maskBorderRepeat?: CSSWideKeyword | string | number;

  /**
   * This property specifies inward offsets from the top, right, bottom, and left edges of the mask image, dividing it into nine regions: four corners, four edges, and a middle. The middle image part is discarded and treated as fully transparent black unless the fill keyword is present. The four values set the top, right, bottom and left offsets in that order, similar to the CSS border-image-slice property.
   */
  maskBorderSlice?: CSSWideKeyword | string | number;

  /**
   * Specifies an image to be used as a mask. An image that is empty, fails to download, is non-existent, or cannot be displayed is ignored and does not mask the element.
   */
  maskBorderSource?: CSSWideKeyword | string | number;

  /**
   * This property sets the width of the mask box image, similar to the CSS border-image-width property.
   */
  maskBorderWidth?: CSSWideKeyword | string | number;

  /**
   * Determines the mask painting area, which defines the area that is affected by the mask. The painted content of an element may be restricted to this area.
   */
  maskClip?: CSSWideKeyword | string | number;

  /**
   * For elements rendered as a single box, specifies the mask positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes box-decoration-break operates on to determine the mask positioning area(s).
   */
  maskOrigin?: CSSWideKeyword | string | number;

  /**
   * This property must not be used. It is no longer included in any standard or standard track specification, nor is it implemented in any browser. It is only used when the text-align-last property is set to size. It controls allowed adjustments of font-size to fit line content.
   */
  maxFontSize?: CSSWideKeyword | string | number;

  /**
   * Sets the maximum height for an element. It prevents the height of the element to exceed the specified value. If min-height is specified and is greater than max-height, max-height is overridden.
   */
  maxHeight?: CSSWideKeyword | string | number;

  /**
   * Sets the maximum width for an element. It limits the width property to be larger than the value specified in max-width.
   */
  maxWidth?: CSSWideKeyword | string | number;

  /**
   * Sets the minimum height for an element. It prevents the height of the element to be smaller than the specified value. The value of min-height overrides both max-height and height.
   */
  minHeight?: CSSWideKeyword | string | number;

  /**
   * Sets the minimum width of an element. It limits the width property to be not smaller than the value specified in min-width.
   */
  minWidth?: CSSWideKeyword | string | number;

  /**
   * Specifies the transparency of an element.
   * See CSS 3 opacity property https://drafts.csswg.org/css-color-3/#opacity
   */
  opacity?: CSSWideKeyword | number;

  /**
   * Specifies the order used to lay out flex items in their flex container.
   * Elements are laid out in the ascending order of the order value.
   * See CSS order property https://drafts.csswg.org/css-flexbox-1/#order-property
   */
  order?: CSSWideKeyword | number;

  /**
   * In paged media, this property defines the minimum number of lines in
   * a block container that must be left at the bottom of the page.
   * See CSS 3 orphans, widows properties https://drafts.csswg.org/css-break-3/#widows-orphans
   */
  orphans?: CSSWideKeyword | number;

  /**
   * The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single rule. In most cases the use of this shortcut is preferable and more convenient.
   * Outlines differ from borders in the following ways:
   *      •       Outlines do not take up space, they are drawn above the content.
   *      •       Outlines may be non-rectangular. They are rectangular in Gecko/Firefox. Internet Explorer attempts to place the smallest contiguous outline around all elements or shapes that are indicated to have an outline. Opera draws a non-rectangular shape around a construct.
   */
  outline?: CSSWideKeyword | string | number;

  /**
   * The outline-color property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
   */
  outlineColor?: CSSWideKeyword | string | number;

  /**
   * The outline-offset property offsets the outline and draw it beyond the border edge.
   */
  outlineOffset?: CSSWideKeyword | string | number;

  /**
   * The overflow property controls how extra content exceeding the bounding box of an element is rendered. It can be used in conjunction with an element that has a fixed width and height, to eliminate text-induced page distortion.
   */
  overflow?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";

  /**
   * Specifies the preferred scrolling methods for elements that overflow.
   */
  overflowStyle?:
    | CSSWideKeyword
    | "auto"
    | "none"
    | "scrollbar"
    | "-ms-autohiding-scrollbar";

  /**
   * Controls how extra content exceeding the x-axis of the bounding box of an element is rendered.
   */
  overflowX?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";

  /**
   * Controls how extra content exceeding the y-axis of the bounding box of an element is rendered.
   */
  overflowY?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";

  /**
   * The padding optional CSS property sets the required padding space on one to four sides of an element. The padding area is the space between an element and its border. Negative values are not allowed but decimal values are permitted. The element size is treated as fixed, and the content of the element shifts toward the center as padding is increased.
   * The padding property is a shorthand to avoid setting each side separately (padding-top, padding-right, padding-bottom, padding-left).
   */
  padding?: CSSWideKeyword | string | number;

  /**
   * The padding-bottom CSS property of an element sets the padding space required on the bottom of an element. The padding area is the space between the content of the element and its border. Contrary to margin-bottom values, negative values of padding-bottom are invalid.
   */
  paddingBottom?: CSSWideKeyword | string | number;

  /**
   * The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and its border. Contrary to margin-left values, negative values of padding-left are invalid.
   */
  paddingLeft?: CSSWideKeyword | string | number;

  /**
   * The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Contrary to margin-right values, negative values of padding-right are invalid.
   */
  paddingRight?: CSSWideKeyword | string | number;

  /**
   * The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid.
   */
  paddingTop?: CSSWideKeyword | string | number;

  /**
   * The page-break-after property is supported in all major browsers. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
   */
  pageBreakAfter?:
    | CSSWideKeyword
    | "auto"
    | "always"
    | "avoid"
    | "left"
    | "right";

  /**
   * The page-break-before property sets the page-breaking behavior before an element. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
   */
  pageBreakBefore?:
    | CSSWideKeyword
    | "auto"
    | "always"
    | "avoid"
    | "left"
    | "right";

  /**
   * Sets the page-breaking behavior inside an element. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
   */
  pageBreakInside?: CSSWideKeyword | "auto" | "avoid";

  /**
   * The pause property determines how long a speech media agent should pause before and after presenting an element. It is a shorthand for the pause-before and pause-after properties.
   */
  pause?: CSSWideKeyword | string | number;

  /**
   * The pause-after property determines how long a speech media agent should pause after presenting an element. It may be replaced by the shorthand property pause, which sets pause time before and after.
   */
  pauseAfter?: CSSWideKeyword | string | number;

  /**
   * The pause-before property determines how long a speech media agent should pause before presenting an element. It may be replaced by the shorthand property pause, which sets pause time before and after.
   */
  pauseBefore?: CSSWideKeyword | string | number;

  /**
   * The perspective property defines how far an element is placed from the view on the z-axis, from the screen to the viewer.
   * Perspective defines how an object is viewed. In graphic arts, perspective is the representation on a flat surface of what the viewer's eye would see in a 3D space. (See Wikipedia for more information about graphical perspective and for related illustrations.)
   * The illusion of perspective on a flat surface, such as a computer screen, is created by projecting points on the flat surface as they would appear if the flat surface were a window through which the viewer was looking at the object. In discussion of virtual environments, this flat surface is called a projection plane.
   */
  perspective?: CSSWideKeyword | string | number;

  /**
   * The perspective-origin property establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
   * When used with perspective, perspective-origin changes the appearance of an object, as if a viewer were looking at it from a different origin. An object appears differently if a viewer is looking directly at it versus looking at it from below, above, or from the side. Thus, the perspective-origin is like a vanishing point.
   * The default value of perspective-origin is 50% 50%. This displays an object as if the viewer's eye were positioned directly at the center of the screen, both top-to-bottom and left-to-right. A value of 0% 0% changes the object as if the viewer was looking toward the top left angle. A value of 100% 100% changes the appearance as if viewed toward the bottom right angle.
   */
  perspectiveOrigin?: CSSWideKeyword | string | number;

  /**
   * The pointer-events property allows you to control whether an element can be the target for the pointing device (e.g, mouse, pen) events.
   */
  pointerEvents?:
    | CSSWideKeyword
    | "auto"
    | "none"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all";

  /**
   * The position property controls the type of positioning used by an element within its parent elements. The effect of the position property depends on a lot of factors, for example the position property of parent elements.
   */
  position?:
    | CSSWideKeyword
    | "static"
    | "relative"
    | "absolute"
    | "sticky"
    | "fixed";

  /**
   * Obsolete: unsupported.
   * This property determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its "ink" lines up with the first glyph in the line above and below.
   */
  punctuationTrim?:
    | CSSWideKeyword
    | "none"
    | "start"
    | "end"
    | "allow-end"
    | "adjacent";

  /**
   * Sets the type of quotation marks for embedded quotations.
   */
  quotes?: CSSWideKeyword | string;

  /**
   * Controls whether the last region in a chain displays additional 'overset' content according its default overflow property, or if it displays a fragment of content as if it were flowing into a subsequent region.
   */
  regionFragment?: CSSWideKeyword | "auto" | "break";

  /**
   * The rest-after property determines how long a speech media agent should pause after presenting an element's main content, before presenting that element's exit cue sound. It may be replaced by the shorthand property rest, which sets rest time before and after.
   */
  restAfter?: CSSWideKeyword | string | number;

  /**
   * The rest-before property determines how long a speech media agent should pause after presenting an intro cue sound for an element, before presenting that element's main content. It may be replaced by the shorthand property rest, which sets rest time before and after.
   */
  restBefore?: CSSWideKeyword | string | number;

  /**
   * Specifies the position an element in relation to the right side of the containing element.
   */
  right?: CSSWideKeyword | string | number;

  rubyAlign?:
    | CSSWideKeyword
    | "start"
    | "center"
    | "space-between"
    | "space-around";

  rubyPosition?: CSSWideKeyword | "over" | "under" | "inter-character";

  /**
   * Defines the alpha channel threshold used to extract a shape from an image. Can be thought of as a "minimum opacity" threshold; that is, a value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
   */
  shapeImageThreshold?: CSSWideKeyword | number;

  /**
   * A future level of CSS Shapes will define a shape-inside property, which will define a shape to wrap content within the element. See Editor's Draft <http://dev.w3.org/csswg/css-shapes/> and CSSWG wiki page on next-level plans <http://wiki.csswg.org/spec/css-shapes>
   */
  shapeInside?: CSSWideKeyword | string | number;

  /**
   * Adds a margin to a shape-outside. In effect, defines a new shape that is the smallest contour around all the points that are the shape-margin distance outward perpendicular to each point on the underlying shape. For points where a perpendicular direction is not defined (e.g., a triangle corner), takes all points on a circle centered at the point and with a radius of the shape-margin distance. This property accepts only non-negative values.
   */
  shapeMargin?: CSSWideKeyword | string | number;

  /**
   * Declares a shape around which text should be wrapped, with possible modifications from the shape-margin property. The shape defined by shape-outside and shape-margin changes the geometry of a float element's float area.
   */
  shapeOutside?: CSSWideKeyword | string | number;

  /**
   * The speak property determines whether or not a speech synthesizer will read aloud the contents of an element.
   */
  speak?: CSSWideKeyword | string | number;

  /**
   * The speak-as property determines how the speech synthesizer interprets the content: words as whole words or as a sequence of letters, numbers as a numerical value or a sequence of digits, punctuation as pauses in speech or named punctuation characters.
   */
  speakAs?: CSSWideKeyword | string | number;

  /**
   * SVG: Specifies the opacity of the outline on the current object.
   * See SVG 1.1 https://www.w3.org/TR/SVG/painting.html#StrokeOpacityProperty
   */
  strokeOpacity?: CSSWideKeyword | number;

  /**
   * SVG: Specifies the width of the outline on the current object.
   * See SVG 1.1 https://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty
   */
  strokeWidth?: CSSWideKeyword | string | number;

  /**
   * The tab-size CSS property is used to customise the width of a tab (U+0009) character.
   */
  tabSize?: CSSWideKeyword | string | number;

  /**
   * The 'table-layout' property controls the algorithm used to lay out the table cells, rows, and columns.
   */
  tableLayout?: CSSWideKeyword | "auto" | "fixed";

  /**
   * The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.
   */
  textAlign?:
    | CSSWideKeyword
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";

  /**
   * The text-align-last CSS property describes how the last line of a block element or a line before line break is aligned in its parent block element.
   */
  textAlignLast?:
    | CSSWideKeyword
    | "auto"
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify";

  /**
   * The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink.
   * underline and overline decorations are positioned under the text, line-through over it.
   */
  textDecoration?: CSSWideKeyword | string | number;

  /**
   * Sets the color of any text decoration, such as underlines, overlines, and strike throughs.
   */
  textDecorationColor?: CSSWideKeyword | string;

  /**
   * Sets what kind of line decorations are added to an element, such as underlines, overlines, etc.
   */
  textDecorationLine?: CSSWideKeyword | string;

  textDecorationLineThrough?: CSSWideKeyword | string;

  textDecorationNone?: CSSWideKeyword | string;

  textDecorationOverline?: CSSWideKeyword | string;

  /**
   * Specifies what parts of an element’s content are skipped over when applying any text decoration.
   */
  textDecorationSkip?: CSSWideKeyword | string;

  /**
   * This property specifies the style of the text decoration line drawn on the specified element. The intended meaning for the values are the same as those of the border-style-properties.
   */
  textDecorationStyle?: CSSWideKeyword | string;

  textDecorationUnderline?: CSSWideKeyword | string;

  /**
   * The text-emphasis property will apply special emphasis marks to the elements text. Slightly similar to the text-decoration property only that this property can have affect on the line-height. It also is noted that this is shorthand for text-emphasis-style and for text-emphasis-color.
   */
  textEmphasis?: CSSWideKeyword | string | number;

  /**
   * The text-emphasis-color property specifies the foreground color of the emphasis marks.
   */
  textEmphasisColor?: CSSWideKeyword | string | number;

  /**
   * The text-emphasis-style property applies special emphasis marks to an element's text.
   */
  textEmphasisStyle?: CSSWideKeyword | string;

  /**
   * This property helps determine an inline box's block-progression dimension, derived from the text-height and font-size properties for non-replaced elements, the height or the width for replaced elements, and the stacked block-progression dimension for inline-block elements. The block-progression dimension determines the position of the padding, border and margin for the element.
   */
  textHeight?: CSSWideKeyword | string | number;

  /**
   * Specifies the amount of space horizontally that should be left on the first line of the text of an element. This horizontal spacing is at the beginning of the first line and is in respect to the left edge of the containing block box.
   */
  textIndent?: CSSWideKeyword | string | number;

  textJustifyTrim?:
    | CSSWideKeyword
    | "auto"
    | "inter-word"
    | "inter-ideograph"
    | "inter-cluster"
    | "distribute"
    | "kashida"
    | "trim";

  textKashidaSpace?: CSSWideKeyword | string | number;

  /**
   * The text-line-through property is a shorthand property for text-line-through-style, text-line-through-color and text-line-through-mode. (Considered obsolete; use text-decoration instead.)
   */
  textLineThrough?: CSSWideKeyword | string;

  /**
   * Specifies the line colors for the line-through text decoration.
   * (Considered obsolete; use text-decoration-color instead.)
   */
  textLineThroughColor?: CSSWideKeyword | string | number;

  /**
   * Sets the mode for the line-through text decoration, determining whether the text decoration affects the space characters or not.
   * (Considered obsolete; use text-decoration-skip instead.)
   */
  textLineThroughMode?: CSSWideKeyword | string | number;

  /**
   * Specifies the line style for line-through text decoration.
   * (Considered obsolete; use text-decoration-style instead.)
   */
  textLineThroughStyle?: CSSWideKeyword | string | number;

  /**
   * Specifies the line width for the line-through text decoration.
   */
  textLineThroughWidth?: CSSWideKeyword | string | number;

  /**
   * The text-overflow shorthand CSS property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string. It covers the two long-hand properties text-overflow-mode and text-overflow-ellipsis
   */
  textOverflow?: CSSWideKeyword | string | number;

  /**
   * The text-overline property is the shorthand for the text-overline-style, text-overline-width, text-overline-color, and text-overline-mode properties.
   */
  textOverline?: CSSWideKeyword | string | number;

  /**
   * Specifies the line color for the overline text decoration.
   */
  textOverlineColor?: CSSWideKeyword | string | number;

  /**
   * Sets the mode for the overline text decoration, determining whether the text decoration affects the space characters or not.
   */
  textOverlineMode?: CSSWideKeyword | string | number;

  /**
   * Specifies the line style for overline text decoration.
   */
  textOverlineStyle?: CSSWideKeyword | string | number;

  /**
   * Specifies the line width for the overline text decoration.
   */
  textOverlineWidth?: CSSWideKeyword | string | number;

  /**
   * The text-rendering CSS property provides information to the browser about how to optimize when rendering text. Options are: legibility, speed or geometric precision.
   */
  textRendering?:
    | CSSWideKeyword
    | "auto"
    | "optimizeSpeed"
    | "optimizeLegibility"
    | "geometricPrecision";

  /**
   * Obsolete: unsupported.
   */
  textScript?: CSSWideKeyword | {};

  /**
   * The CSS text-shadow property applies one or more drop shadows to the text and <text-decorations> of an element. Each shadow is specified as an offset from the text, along with optional color and blur radius values.
   */
  textShadow?: CSSWideKeyword | string | number;

  /**
   * This property transforms text for styling purposes. (It has no effect on the underlying content.)
   */
  textTransform?:
    | CSSWideKeyword
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width";

  /**
   * Unsupported.
   * This property will add a underline position value to the element that has an underline defined.
   */
  textUnderlinePosition?: CSSWideKeyword | string;

  /**
   * After review this should be replaced by text-decoration should it not?
   * This property will set the underline style for text with a line value for underline, overline, and line-through.
   */
  textUnderlineStyle?: CSSWideKeyword | string;

  /**
   * This property specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's containing block. For relatively positioned boxes, the offset is with respect to the top edges of the box itself (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
   */
  top?: CSSWideKeyword | string | number;

  /**
   * Determines whether touch input may trigger default behavior supplied by the user agent, such as panning or zooming.
   */
  touchAction?: CSSWideKeyword | string;

  /**
   * CSS transforms allow elements styled with CSS to be transformed in two-dimensional or three-dimensional space. Using this property, elements can be translated, rotated, scaled, and skewed. The value list may consist of 2D and/or 3D transform values.
   */
  transform?: CSSWideKeyword | string | number;

  /**
   * This property defines the origin of the transformation axes relative to the element to which the transformation is applied.
   */
  transformOrigin?: CSSWideKeyword | string | number;

  /**
   * This property allows you to define the relative position of the origin of the transformation grid along the z-axis.
   */
  transformOriginZ?: CSSWideKeyword | string | number;

  /**
   * This property specifies how nested elements are rendered in 3D space relative to their parent.
   */
  transformStyle?: CSSWideKeyword | "flat" | "preserve-3d";

  /**
   * The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element.
   */
  transition?: CSSWideKeyword | string | number;

  /**
   * Defines when the transition will start. A value of ‘0s’ means the transition will execute as soon as the property is changed. Otherwise, the value specifies an offset from the moment the property is changed, and the transition will delay execution by that offset.
   */
  transitionDelay?: CSSWideKeyword | string | number;

  /**
   * The 'transition-duration' property specifies the length of time a transition animation takes to complete.
   */
  transitionDuration?: CSSWideKeyword | string | number;

  /**
   * The 'transition-property' property specifies the name of the CSS property to which the transition is applied.
   */
  transitionProperty?: CSSWideKeyword | string | number;

  /**
   * Sets the pace of action within a transition
   */
  transitionTimingFunction?: CSSWideKeyword | string | number;

  /**
   * The unicode-bidi CSS property specifies the level of embedding with respect to the bidirectional algorithm.
   */
  unicodeBidi?:
    | CSSWideKeyword
    | "normal"
    | "embed"
    | "isolate"
    | "bidi-override"
    | "isolate-override"
    | "plaintext";

  /**
   * unicode-range allows you to set a specific range of characters to be downloaded from a font (embedded using @font-face) and made available for use on the current page.
   */
  unicodeRange?: CSSWideKeyword | string | number;

  /**
   * This is for all the high level UX stuff.
   */
  userFocus?:
    | CSSWideKeyword
    | "ignore"
    | "normal"
    | "select-after"
    | "select-before"
    | "select-menu"
    | "select-same"
    | "select-all"
    | "none";

  /**
   * For inputing user content
   */
  userInput?: CSSWideKeyword | "none" | "enabled" | "disabled";

  /**
   * The vertical-align property controls how inline elements or text are vertically aligned compared to the baseline. If this property is used on table-cells it controls the vertical alignment of content of the table cell.
   */
  verticalAlign?: CSSWideKeyword | string | number;

  /**
   * The visibility property specifies whether the boxes generated by an element are rendered.
   */
  visibility?: CSSWideKeyword | "visible" | "hidden" | "collapse";

  /**
   * The voice-balance property sets the apparent position (in stereo sound) of the synthesized voice for spoken media.
   */
  voiceBalance?:
    | CSSWideKeyword
    | number
    | "left"
    | "center"
    | "right"
    | "leftwards"
    | "rightwards";

  /**
   * The voice-duration property allows the author to explicitly set the amount of time it should take a speech synthesizer to read an element's content, for example to allow the speech to be synchronized with other media. With a value of auto (the default) the length of time it takes to read the content is determined by the content itself and the voice-rate property.
   */
  voiceDuration?: CSSWideKeyword | string | number;

  /**
   * The voice-family property sets the speaker's voice used by a speech media agent to read an element. The speaker may be specified as a named character (to match a voice option in the speech reading software) or as a generic description of the age and gender of the voice. Similar to the font-family property for visual media, a comma-separated list of fallback options may be given in case the speech reader does not recognize the character name or cannot synthesize the requested combination of generic properties.
   */
  voiceFamily?: CSSWideKeyword | string | number;

  /**
   * The voice-pitch property sets pitch or tone (high or low) for the synthesized speech when reading an element; the pitch may be specified absolutely or relative to the normal pitch for the voice-family used to read the text.
   */
  voicePitch?: CSSWideKeyword | string | number;

  /**
   * The voice-range property determines how much variation in pitch or tone will be created by the speech synthesize when reading an element. Emphasized text, grammatical structures and punctuation may all be rendered as changes in pitch, this property determines how strong or obvious those changes are; large ranges are associated with enthusiastic or emotional speech, while small ranges are associated with flat or mechanical speech.
   */
  voiceRange?: CSSWideKeyword | string | number;

  /**
   * The voice-rate property sets the speed at which the voice synthesized by a speech media agent will read content.
   */
  voiceRate?: CSSWideKeyword | string | number;

  /**
   * The voice-stress property sets the level of vocal emphasis to be used for synthesized speech reading the element.
   */
  voiceStress?: CSSWideKeyword | string | number;

  /**
   * The voice-volume property sets the volume for spoken content in speech media. It replaces the deprecated volume property.
   */
  voiceVolume?: CSSWideKeyword | string | number;

  /**
   * The white-space property controls whether and how white space inside the element is collapsed, and whether lines may wrap at unforced "soft wrap" opportunities.
   */
  whiteSpace?:
    | CSSWideKeyword
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "pre-line";

  /**
   * Obsolete: unsupported.
   */
  whiteSpaceTreatment?: CSSWideKeyword | string | number;

  /**
   * In paged media, this property defines the mimimum number of lines
   * that must be left at the top of the second page.
   * See CSS 3 orphans, widows properties https://drafts.csswg.org/css-break-3/#widows-orphans
   */
  // widows?: CSSWideKeyword | number;

  /**
   * Specifies the width of the content area of an element. The content area of the element width does not include the padding, border, and margin of the element.
   */
  width?: CSSWideKeyword | string | number;

  /**
   * The word-break property is often used when there is long generated content that is strung together without and spaces or hyphens to beak apart. A common case of this is when there is a long URL that does not have any hyphens. This case could potentially cause the breaking of the layout as it could extend past the parent element.
   */
  wordBreak?:
    | CSSWideKeyword
    | "normal"
    | "break-all"
    | "keep-all"
    | "break-word";

  /**
   * The word-spacing CSS property specifies the spacing behavior between "words".
   */
  wordSpacing?: CSSWideKeyword | string | number;

  /**
   * An alias of css/properties/overflow-wrap, word-wrap defines whether to break words when the content exceeds the boundaries of its container.
   */
  wordWrap?: CSSWideKeyword | "normal" | "break-word";

  /**
   * Specifies how exclusions affect inline content within block-level elements. Elements lay out their inline content in their content area but wrap around exclusion areas.
   */
  wrapFlow?:
    | CSSWideKeyword
    | "auto"
    | "both"
    | "start"
    | "end"
    | "maximum"
    | "clear";

  /**
   * Set the value that is used to offset the inner wrap shape from other shapes. Inline content that intersects a shape with this property will be pushed by this shape's margin.
   */
  wrapMargin?: CSSWideKeyword | string | number;

  /**
   * Obsolete and unsupported. Do not use.
   * This CSS property controls the text when it reaches the end of the block in which it is enclosed.
   */
  wrapOption?: CSSWideKeyword | {};

  /**
   * writing-mode specifies if lines of text are laid out horizontally or vertically, and the direction which lines of text and blocks progress.
   */
  writingMode?:
    | CSSWideKeyword
    | "horizontal-tb"
    | "vertical-rl"
    | "vertical-lr"
    | "sideways-rl"
    | "sideways-lr";

  /**
   * The z-index property specifies the z-order of an element and its descendants.
   * When elements overlap, z-order determines which one covers the other.
   * See CSS 2 z-index property https://www.w3.org/TR/CSS2/visuren.html#z-index
   */
  zIndex?: CSSWideKeyword | "auto" | number;

  /**
   * Sets the initial zoom factor of a document defined by @viewport.
   * See CSS zoom descriptor https://drafts.csswg.org/css-device-adapt/#zoom-desc
   */
  zoom?: CSSWideKeyword | string | number;
}

interface CSSPropertiesPseudo {
  ":active"?: CSSProperties;
  ":any-link"?: CSSProperties;
  ":checked"?: CSSProperties;
  ":default"?: CSSProperties;
  ":dir(rtl)"?: CSSProperties;
  ":dir(ltr)"?: CSSProperties;
  ":disabled"?: CSSProperties;
  ":empty"?: CSSProperties;
  ":enabled"?: CSSProperties;
  ":first"?: CSSProperties;
  ":first-child"?: CSSProperties;
  ":first-of-type"?: CSSProperties;
  ":fullscreen"?: CSSProperties;
  ":focus"?: CSSProperties;
  ":focus-within"?: CSSProperties;
  ":hover"?: CSSProperties;
  ":indeterminate"?: CSSProperties;
  ":in-range"?: CSSProperties;
  ":invalid"?: CSSProperties;
  ":lang(en)"?: CSSProperties;
  ":lang(fr)"?: CSSProperties;
  ":lang(de)"?: CSSProperties;
  ":lang(es)"?: CSSProperties;
  ":lang(ru)"?: CSSProperties;
  ":lang(zh)"?: CSSProperties;
  ":last-child"?: CSSProperties;
  ":last-of-type"?: CSSProperties;
  ":left"?: CSSProperties;
  ":link"?: CSSProperties;
  ":nth-child(even)"?: CSSProperties;
  ":nth-child(odd)"?: CSSProperties;
  ":nth-last-child(even)"?: CSSProperties;
  ":nth-last-child(odd)"?: CSSProperties;
  ":only-child"?: CSSProperties;
  ":only-of-type"?: CSSProperties;
  ":optional"?: CSSProperties;
  ":out-of-range"?: CSSProperties;
  ":placeholder-shown"?: CSSProperties;
  ":read-only"?: CSSProperties;
  ":read-write"?: CSSProperties;
  ":required"?: CSSProperties;
  ":right"?: CSSProperties;
  ":root"?: CSSProperties;
  ":scope"?: CSSProperties;
  ":target"?: CSSProperties;
  ":valid"?: CSSProperties;
  ":visited"?: CSSProperties;
  ":after"?: CSSProperties;
  "::after"?: CSSProperties;
  ":before"?: CSSProperties;
  "::before"?: CSSProperties;
  "::backdrop"?: CSSProperties;
  ":first-letter"?: CSSProperties;
  "::first-letter"?: CSSProperties;
  ":first-line"?: CSSProperties;
  "::first-line"?: CSSProperties;
  "::selection"?: CSSProperties;
  "@media (pointer: fine)"?: CSSProperties;
  "@media (min-width: 640px)"?: CSSProperties;
  "@media (min-width: 768px)"?: CSSProperties;
  "@media (min-width: 1024px)"?: CSSProperties;
  "@media (min-width: 1280px)"?: CSSProperties;
  "@media (min-width: 1440px)"?: CSSProperties;
}

interface CSSPropertiesLossy {
  [propertyName: string]:
    | string
    | number
    | CSSPropertiesComplete
    | undefined
    | Array<CSSPropertiesComplete[keyof CSSPropertiesComplete]>
    | CSSPropertiesLossy;
}

interface CSSProperties
  extends CSSPropertiesComplete,
    CSSPropertiesPseudo,
    CSSPropertiesLossy {}

interface IStyle extends CSSProperties {
  className?: string;
  ignoreImportant?: any;
}

declare interface IInputEvnet extends HTMLElementEventMap {
  target: HTMLInputElement;
  preventDefault: any;
  stopPropagation: any;
}

interface HTMLElementCustomeEventMap {
  [key: string]: IInputEvnet;
}

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
  onsecuritypolicyviolation?: (
    ev: HTMLElementEventMap["securitypolicyviolation"]
  ) => any;
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
  ontransitionstart?: (
    ev: HTMLElementCustomeEventMap["transitionstart"]
  ) => any;
  onvolumechange?: (ev: HTMLElementEventMap["volumechange"]) => any;
  onwaiting?: (ev: HTMLElementEventMap["waiting"]) => any;
  onwheel?: (ev: HTMLElementEventMap["wheel"]) => any;
  [key: string]: any;
}

interface AddEventOptions extends EventOptions {
  listenabort?: (ev: HTMLElementEventMap["abort"]) => any;
  listenanimationcancel?: (ev: HTMLElementEventMap["animationcancel"]) => any;
  listenanimationend?: (ev: HTMLElementEventMap["animationend"]) => any;
  listenanimationiteration?: (
    ev: HTMLElementEventMap["animationiteration"]
  ) => any;
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
  listengotpointercapture?: (
    ev: HTMLElementEventMap["gotpointercapture"]
  ) => any;
  listeninput?: (ev: HTMLElementCustomeEventMap["input"]) => any;
  listeninvalid?: (ev: HTMLElementCustomeEventMap["invalid"]) => any;
  listenkeydown?: (ev: HTMLElementEventMap["keydown"]) => any;
  listenkeypress?: (ev: HTMLElementEventMap["keypress"]) => any;
  listenkeyup?: (ev: HTMLElementEventMap["keyup"]) => any;
  listenload?: (ev: HTMLElementEventMap["load"]) => any;
  listenloadeddata?: (ev: HTMLElementEventMap["loadeddata"]) => any;
  listenloadedmetadata?: (ev: HTMLElementEventMap["loadedmetadata"]) => any;
  listenloadstart?: (ev: HTMLElementEventMap["loadstart"]) => any;
  listenlostpointercapture?: (
    ev: HTMLElementEventMap["lostpointercapture"]
  ) => any;
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
  listenpointercancel?: (
    ev: HTMLElementCustomeEventMap["pointercancel"]
  ) => any;
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
  listensecuritypolicyviolation?: (
    ev: HTMLElementEventMap["securitypolicyviolation"]
  ) => any;
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

type ChildOne =
  | Element
  | string
  | number
  | boolean
  | undefined
  | IProps
  | ChildFn
  | ChildJsx;
type ChildJsx = ChildOne[];

type ChildFn = (list: any[], i: number) => ChildOne;

type StyleFn =
  | string
  | (() => string | Promise<string>)
  | (IStyle | (IStyle | any)[])
  | (() => (IStyle | (IStyle | any)[]) | Promise<IStyle | (IStyle | any)[]>);

declare interface IProps extends AddEventOptions {
  tabIndex?: number | ((e: any) => number | Promise<number>);
  tag?:
    | string
    | ((e: any) => string | Promise<string>)
    | HTMLInputElement
    | Function;
  // 当 next 时，重绘整个 children
  // render?: (v?: any) => ChildOne;
  children?: ChildOne[];
  // 拦截更新
  memo?: () => any;
  /** 当元素更新时执行 */
  watch?: () => any;
  /** 当元素 onappend 到文档中时执行 */
  onappend?: RefOne;
  debounce?: string | string[];
  debounceTime?: number;
  throttle?: string | string[];
  throttleTime?: number;
  /** 当元素 create 时回调 */
  oncreate?: RefOne;
  /** 自动 append style 至 body 或 head， 默认为 body */
  global?: boolean | string;
  class?:
    | string
    | any[]
    | ((e: any) => string | any[] | Promise<string | any[]>);
  className?:
    | string
    | (string | boolean)[]
    | ((
        e: any
      ) =>
        | string
        | (string | boolean)[]
        | Promise<string | (string | boolean)[]>);
  href?: string | ((e: any) => string | Promise<string>);
  rel?: string | ((e: any) => string | Promise<string>);
  // cssText?: string | ((e: any) => string);
  id?:
    | string
    | number
    | ((e: any) => (string | number) | Promise<string | number>);
  style?: StyleFn;
  textContent?: any | ((e: any) => any);
  accessKey?: string | ((e: any) => any);
  autocapitalize?: string | ((e: any) => any);
  dir?: string | ((e: any) => any);
  draggable?: boolean | ((e: any) => any);
  hidden?: boolean | ((e: any) => any);
  innerText?: string | ((e: any) => string | Promise<string>);
  innerHTML?: string | ((e: any) => string | Promise<string>);
  lang?: string | ((e: any) => string | Promise<string>);
  spellcheck?: boolean | ((e: any) => boolean | Promise<boolean>);
  title?: string | number | ((e: any) => any);
  translate?: boolean | ((e: any) => boolean | Promise<boolean>);
  accept?: string | ((e: any) => string | Promise<string>);
  align?: string | ((e: any) => string | Promise<string>);
  alt?: string | ((e: any) => string | Promise<string>);
  autocomplete?: string | ((e: any) => string | Promise<string>);
  autofocus?: boolean | ((e: any) => boolean | Promise<boolean>);
  checked?: boolean | ((e: any) => boolean | Promise<boolean>);
  defaultChecked?: boolean | ((e: any) => boolean | Promise<boolean>);
  defaultValue?: string | ((e: any) => string | Promise<string>);
  dirName?: string | ((e: any) => string | Promise<string>);
  disabled?: boolean | ((e: any) => boolean | Promise<boolean>);
  files?: FileList | null;
  formAction?: string | ((e: any) => string | Promise<string>);
  formEnctype?: string | ((e: any) => string | Promise<string>);
  formMethod?: string | ((e: any) => string | Promise<string>);
  formNoValidate?: boolean | ((e: any) => boolean | Promise<boolean>);
  formTarget?: string | ((e: any) => string | Promise<string>);
  indeterminate?: boolean | ((e: any) => boolean | Promise<boolean>);
  max?: string | number | ((e: any) => any);
  maxLength?: number | ((e: any) => number | Promise<number>);
  min?: string | number | ((e: any) => any);
  minLength?: number | ((e: any) => number | Promise<number>);
  multiple?: string | ((e: any) => string | Promise<string>);
  name?: string | ((e: any) => string | Promise<string>);
  pattern?: string | ((e: any) => string | Promise<string>);
  placeholder?: string | ((e: any) => string | Promise<string>);
  readOnly?: boolean | ((e: any) => boolean | Promise<boolean>);
  required?: boolean | ((e: any) => boolean | Promise<boolean>);
  selectionDirection?: string | ((e: any) => string | Promise<string>) | null;
  selectionEnd?: number | ((e: any) => number | Promise<number>) | null;
  selectionStart?: number | ((e: any) => number | Promise<number>) | null;
  size?: number | ((e: any) => number | Promise<number>);
  src?: string | number | ((e: any) => any);
  step?: string | number | ((e: any) => any);
  type?: string | number | ((e: any) => any);
  value?: any;
  label?: any;
  key?: any;
  valueAsDate?: Date | null;
  valueAsNumber?: number | ((e: any) => number | Promise<number>);
  width?: any;
  height?: any;
  [key: string]: any;
  [index: number]: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [key: string]: IProps;
  }
}

declare const aoife: {
  (tag: any, attrs?: ChildOne, ...child: ChildOne[]): HTMLElement;
  // stringToHex(str: string, start?: string): string;
  waitAppend(ele: HTMLElement | string, max?: number): Promise<HTMLElement>;
  subscribe: (fn: any) => () => void;
  next: (
    focusUpdateTargets?: string | undefined,
    ignoreUpdateTargets?: string | any[] | undefined
  ) => HTMLElement[];
  events: Set<Function>;
  registerTag(data: { [key: string]: any }): void;
  propFn(
    target: any,
    fn: (val: any) => IStyle | string | boolean | number | any[] | object
  ): any;
  waitValue<T>(fn: () => T, max?: number): Promise<T>;
  memo: (blocker: () => any) => (fn: any) => Promise<any>;
  deepEqual: (a: any, b: any) => boolean;
  deepMerge: <T, U>(a: T, b: U) => T & U;
  cssSheet: <T extends { [key: string]: IStyle }>(
    sheet: T
  ) => { [P in keyof T]: string };
};
