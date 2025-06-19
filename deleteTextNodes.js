//nodeType

const deleteTextNodes = (elements) => {
  // Нужно пребрать весь элемент и каждой его узел и записать в elemenrdoch
  for (const element of elem) {
    const elemenrdoch = Array.from(element.childNodes);
    // Нужно найти тестовый узел среди массива и удалить его блэд
    for (const element of elemenrdoch) {
      if (element.nodeType === Node.TEXT_NODE) {
        element.remove();
      }
    }
  }
};
export default deleteTextNodes;
