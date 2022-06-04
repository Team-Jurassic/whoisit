export const makeElement = (tagName, className, innerText = null) => {
  const $element = document.createElement(tagName);
  $element.className = className;
  $element.innerText = innerText;
  return $element;
};
