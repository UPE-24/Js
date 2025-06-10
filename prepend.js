/**
 * 
 * @param {Element} container - что вставлять
 * @param {Element} newElement - куда вставлять
 */
function prepend(container, newElement) {
  // container.firstChild возвращает первый  элемент внутри container
  // проверяем если там элементы
  if (container.firstChild) {
    //Если элемент есть то с помощью insertBefore всатвлем его перед newElement
    // Что бы всавить элемент нужен firstChild что бы он достал первый узел
    container.insertBefore(newElement, container.firstChild);
  } else {
    //Если узел пуст то добовляем newElement в конец container
    container.appendChild(newElement);
  }
}

