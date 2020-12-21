function AppendChild(this: any, ...args: any[]) {
  args.forEach((item) => {
    this.prototype.appendChild(item);
  });
}

if (typeof HTMLElement.prototype.append === "undefined") {
  Element.prototype.append = AppendChild;
}

function Remove(this: any, ...args: any[]) {
  if (this.prototype.parentNode) {
    this.prototype.parentNode.removeChild(this);
  }
}
if (typeof HTMLElement.prototype.remove === "undefined") {
  Element.prototype.remove = Remove;
}

function ReplaceWithPolyfill(this: any) {
  "use-strict"; // For safari, and IE > 10
  var parent = this.parentNode,
    i = arguments.length,
    currentNode;
  if (!parent) return;
  if (!i)
    // if there are no arguments
    parent.removeChild(this);
  while (i--) {
    // i-- decrements i and returns the value of i before the decrement
    currentNode = arguments[i];
    if (typeof currentNode !== "object") {
      currentNode = this.ownerDocument.createTextNode(currentNode);
    } else if (currentNode.parentNode) {
      currentNode.parentNode.removeChild(currentNode);
    }
    // the value of "i" below is after the decrement
    if (!i)
      // if currentNode is the first argument (currentNode === arguments[0])
      parent.replaceChild(currentNode, this);
    // if currentNode isn't the first
    else parent.insertBefore(currentNode, this.nextSibling);
  }
}
if (!Element.prototype.replaceWith) Element.prototype.replaceWith = ReplaceWithPolyfill;
if (!CharacterData.prototype.replaceWith) CharacterData.prototype.replaceWith = ReplaceWithPolyfill;
if (!DocumentType.prototype.replaceWith) DocumentType.prototype.replaceWith = ReplaceWithPolyfill;

export const a = 0;
