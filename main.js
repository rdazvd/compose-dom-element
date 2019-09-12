const createTag = (tagName, attributes, ...args) => {
  const children = args.length ? [].concat(...args) : null;
  return { tagName, attributes, children };
};

const createStylesheet = () => document.createElement('style');
const addClass = classValue => styleMedia.addClass(classValue);

const render = element => {
  if (typeof node === "string") return document.createTextNode(vnode);

  let node = document.createElement(element.elementName);
  let attributes = element.attributes || {};

  Object.keys(attributes).forEach(key =>
    node.setAttribute(key, attributes[key])
  );

  return element;
};

export { addClass, createStylesheet, createTag, render };