const defineHTML = (tagName, attributes, ...args) => {
  let children = args.length ? [].concat(...args) : null;
  return { tagName, attributes, children };
};

const element = htmlElement => defineCSS(defineHTML(htmlElement));

const render = element => {
  if (typeof node === "string") return document.createTextNode(vnode);

  let node = document.createElement(element.elementName);
  let attributes = element.attributes || {};

  Object.keys(attributes).forEach(key =>
    node.setAttribute(key, attributes[key])
  );

  return element;
};

export { element, render };