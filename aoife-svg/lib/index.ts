const style = document.createElement("style");
style.textContent = `
.aoife-svg {
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`;
document.head.append(style);

const aoifeSvg = (html: string, width = "1em", height = "1em") => {
  const ele = document.createElement("div");
  ele.innerHTML = html;
  const svg = ele.querySelector("svg");
  if (!svg) {
    throw "传入的 html 不是一个svg";
  }
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  const paths = svg.querySelectorAll("path");
  paths.forEach((path) => {
    path.setAttribute("fill", "currentColor");
    path.setAttribute("width", width);
    path.setAttribute("height", height);
  });

  html = ele.innerHTML;

  return (props: IProps) => aoife("span", { className: "aoife-svg", ...props, innerHTML: html });
};

export default aoifeSvg;
