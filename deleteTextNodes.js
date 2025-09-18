//nodeType

const deleteTextNodes = (elements) => {
  // Нужно пребрать весь элемент и каждой его узел и записать в elemenrdoch
  for (const element of elem) { // это зачем?
    const elemenrdoch = Array.from(elements.childNodes); // это излишне

    // Нужно найти тестовый узел среди массива и удалить его блэд
    for (const element of elements.childNodes) {
      if (element.nodeType === Node.TEXT_NODE) {
        element.remove();
      }
    }
  }
};

export default deleteTextNodes;
