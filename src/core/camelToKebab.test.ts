import { CamelToKebab } from "./camelToKebab";

const testProps = [
  ["alignContent", "align-content"],
  ["alignItems", "align-items"],
  ["alignmentBaseline", "alignment-baseline"],
  ["alignSelf", "align-self"],
  ["animation", "animation"],
  ["animationDelay", "animation-delay"],
  ["animationDirection", "animation-direction"],
  ["animationDuration", "animation-duration"],
  ["animationFillMode", "animation-fill-mode"],
  ["animationIterationCount", "animation-iteration-count"],
  ["animationName", "animation-name"],
  ["animationPlayState", "animation-play-state"],
  ["animationTimingFunction", "animation-timing-function"],
  ["background", "background"],
  ["backgroundAttachment", "background-attachment"],
  ["backgroundColor", "background-color"],
  ["backgroundImage", "background-image"],
  ["backgroundPosition", "background-position"],
  ["backgroundRepeat", "background-repeat"],
  ["border", "border"],
  ["borderBottom", "border-bottom"],
  ["borderBottomColor", "border-bottom-color"],
  ["borderBottomStyle", "border-bottom-style"],
  ["borderBottomWidth", "border-bottom-width"],
  ["borderColor", "border-color"],
  ["borderLeft", "border-left"],
  ["borderLeftColor", "border-left-color"],
  ["borderLeftStyle", "border-left-style"],
  ["borderLeftWidth", "border-left-width"],
  ["borderRight", "border-right"],
  ["borderRightColor", "border-right-color"],
  ["borderRightStyle", "border-right-style"],
  ["borderRightWidth", "border-right-width"],
  ["borderStyle", "border-style"],
  ["borderTop", "border-top"],
  ["borderTopColor", "border-top-color"],
  ["borderTopStyle", "border-top-style"],
  ["borderTopWidth", "border-top-width"],
  ["borderWidth", "border-width"],
  ["captionSide", "caption-side"],
  ["clear", "clear"],
  ["clip", "clip"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["color", "color"],
  ["columnCount", "column-count"],
  ["columnFill", "column-fill"],
  ["columnGap", "column-gap"],
  ["columnRule", "column-rule"],
  ["columnRuleColor", "column-rule-color"],
  ["columnRuleStyle", "column-rule-style"],
  ["columnRuleWidth", "column-rule-width"],
  ["columns", "columns"],
  ["columnSpan", "column-span"],
  ["columnWidth", "column-width"],
  ["content", "content"],
  ["counterIncrement", "counter-increment"],
  ["countAlignContent", "count-align-content"],
  ["clear", "clear"],
  ["clip", "clip"],
  ["color", "color"],
  ["cursor", "cursor"],
  ["display", "display"],
  ["filter", "filter"],
  ["float", "float"],
  ["font", "font"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["height", "height"],
  ["left", "left"],
  ["letterSpacing", "letter-spacing"],
  ["lineHeight", "line-height"],
  ["listStyle", "list-style"],
  ["listStyleImage", "list-style-image"],
  ["listStylePosition", "list-style-position"],
  ["listStyleType", "list-style-type"],
  ["margin", "margin"],
  ["marginBottom", "margin-bottom"],
  ["marginLeft", "margin-left"],
  ["marginRight", "margin-right"],
  ["marginTop", "margin-top"],
  ["overflow", "overflow"],
  ["padding", "padding"],
  ["paddingBottom", "padding-bottom"],
  ["paddingLeft", "padding-left"],
  ["paddingRight", "padding-right"],
  ["paddingTop", "padding-top"],
  ["pageBreakAfter", "page-break-after"],
  ["pageBreakBefore", "page-break-before"],
  ["position", "position"],
  ["resize", "resize"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeWidth", "stroke-width"],
  ["textAlign", "text-align"],
  ["textDecoration", "text-decoration"],
  ["textIndent", "text-indent"],
  ["textTransform", "text-transform"],
  ["top", "top"],
  ["userSelect", "user-select"],
  ["verticalAlign", "vertical-align"],
  ["visibility", "visibility"],
  ["webkitAlignItems", "-webkit-align-items"],
  ["webkitAlignSelf", "-webkit-align-self"],
  ["webkitAnimation", "-webkit-animation"],
  ["webkitAnimationDelay", "-webkit-animation-delay"],
  ["webkitAnimationDirection", "-webkit-animation-direction"],
  ["webkitAnimationDuration", "-webkit-animation-duration"],
  ["webkitAnimationFillMode", "-webkit-animation-fill-mode"],
  ["webkitAnimationIterationCount", "-webkit-animation-iteration-count"],
  ["webkitAnimationName", "-webkit-animation-name"],
  ["webkitAnimationPlayState", "-webkit-animation-play-state"],
  ["webkitAnimationTimingFunction", "-webkit-animation-timing-function"],
  ["webkitAppearance", "-webkit-appearance"],
  ["webkitBackfaceVisibility", "-webkit-backface-visibility"],
  ["webkitBackgroundClip", "-webkit-background-clip"],
  ["webkitBackgroundOrigin", "-webkit-background-origin"],
  ["webkitBackgroundSize", "-webkit-background-size"],
  ["webkitBorderBottomLeftRadius", "-webkit-border-bottom-left-radius"],
  ["webkitBorderBottomRightRadius", "-webkit-border-bottom-right-radius"],
  ["webkitBorderImage", "-webkit-border-image"],
  ["webkitBorderRadius", "-webkit-border-radius"],
  ["webkitBorderTopLeftRadius", "-webkit-border-top-left-radius"],
  ["webkitBorderTopRightRadius", "-webkit-border-top-right-radius"],
  ["webkitBoxAlign", "-webkit-box-align"],
  ["webkitBoxDirection", "-webkit-box-direction"],
  ["webkitBoxFlex", "-webkit-box-flex"],
  ["webkitBoxOrdinalGroup", "-webkit-box-ordinal-group"],
  ["webkitBoxOrient", "-webkit-box-orient"],
  ["webkitBoxPack", "-webkit-box-pack"],
  ["webkitBoxSizing", "-webkit-box-sizing"],
  ["webkitColumnBreakAfter", "-webkit-column-break-after"],
  ["webkitColumnBreakBefore", "-webkit-column-break-before"],
  ["webkitColumnBreakInside", "-webkit-column-break-inside"],
  ["webkitColumnCount", "-webkit-column-count"],
  ["webkitColumnGap", "-webkit-column-gap"],
  ["webkitColumnRule", "-webkit-column-rule"],
  ["webkitColumnRuleColor", "-webkit-column-rule-color"],
  ["webkitColumnRuleStyle", "-webkit-column-rule-style"],
  ["webkitColumnRuleWidth", "-webkit-column-rule-width"],
  ["webkitColumns", "-webkit-columns"],
  ["webkitColumnSpan", "-webkit-column-span"],
  ["webkitColumnWidth", "-webkit-column-width"],
  ["webkitFilter", "-webkit-filter"],
  ["webkitFlex", "-webkit-flex"],
  ["webkitFlexBasis", "-webkit-flex-basis"],
  ["webkitFlexDirection", "-webkit-flex-direction"],
  ["webkitFlexFlow", "-webkit-flex-flow"],
  ["webkitFlexGrow", "-webkit-flex-grow"],
  ["webkitFlexShrink", "-webkit-flex-shrink"],
  ["webkitFlexWrap", "-webkit-flex-wrap"],
  ["webkitJustifyContent", "-webkit-justify-content"],
  ["webkitOrder", "-webkit-order"],
  ["webkitPerspective", "-webkit-perspective"],
  ["webkitPerspectiveOrigin", "-webkit-perspective-origin"],
  ["webkitTapHighlightColor", "-webkit-tap-highlight-color"],
  ["webkitTextFillColor", "-webkit-text-fill-color"],
  ["webkitTextSizeAdjust", "-webkit-text-size-adjust"],
  ["webkitTextStroke", "-webkit-text-stroke"],
  ["webkitTextStrokeColor", "-webkit-text-stroke-color"],
  ["webkitTextStrokeWidth", "-webkit-text-stroke-width"],
  ["webkitTransform", "-webkit-transform"],
  ["webkitTransformOrigin", "-webkit-transform-origin"],
  ["webkitTransformStyle", "-webkit-transform-style"],
  ["webkitTransition", "-webkit-transition"],
  ["webkitTransitionDelay", "-webkit-transition-delay"],
  ["webkitTransitionDuration", "-webkit-transition-duration"],
  ["webkitTransitionProperty", "-webkit-transition-property"],
  ["webkitTransitionTimingFunction", "-webkit-transition-timing-function"],
  ["webkitUserModify", "-webkit-user-modify"],
  ["webkitUserSelect", "-webkit-user-select"],
  ["webkitWritingMode", "-webkit-writing-mode"],
  ["whiteSpace", "white-space"],
  ["widows", "widows"],
  ["width", "width"],
  ["wordBreak", "word-break"],
  ["wordSpacing", "word-spacing"],
  ["wordWrap", "word-wrap"],
  ["writingMode", "writing-mode"],
  ["zIndex", "z-index"],
  ["zoom", "zoom"],
];

describe("CamelToKebab", () => {
  it("should transform properties correctly", async () => {
    let len = testProps.length;
    let js, css;

    for (let i = 0; i < len; i++) {
      [js, css] = testProps[i];
      expect(CamelToKebab(js)).toEqual(css);
    }
  });
});
