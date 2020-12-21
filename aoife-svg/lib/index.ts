const aoifeSvg = (html: string) => {
  const ele = document.createElement("div");
  ele.innerHTML = html;
  const svg = ele.querySelector("svg");
  if (!svg) {
    throw "传入的 html 不是一个svg";
  }
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("width", "1em");
  svg.setAttribute("height", "1em");
  const paths = svg.querySelectorAll("path");
  paths.forEach((path) => {
    path.setAttribute("fill", "currentColor");
    path.setAttribute("width", "1em");
    path.setAttribute("height", "1em");
  });

  html = ele.innerHTML;

  return (props: IProps) => aoife("span", { ...props, innerHTML: html });
};

export default aoifeSvg;
