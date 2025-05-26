//reduce
let pop = [];

//arr - массив, callback - функция коррое заадет правило объединенеия массива initialValue - значение с котрого может начаться функция
function reduce1(arr, callback, initialValue) {
  //Проверяем не пустой ли массив
  if (arr.length === 0) {
    throw new TypeError("Пустой массив");
  }
  // В accumulator будет записываться значения при каждой итерации
  let accumulator;
  // с кокого место в массиве начентся итерация
  let index;
  // Проверка что initialValue пришло значение, если значение пришло то значит оно сразу же запишется в accumulator и итерация начентся с accumulator
  if (initialValue !== undefined) {
    accumulator = initialValue;
    index = 0;
    // Ессли же там пусто, accumulator будет равен певрому значению массива , а занчит нужно стартовать со втсрого элмента массива
  } else {
    accumulator = arr[0];
    index = 1;
  }

  // Перебираем массив зависимости чему равен index
  for (let i = index; i < arr.length; i++) {
    //   Создаем функцию где callback определяет что делать дальше с массивом,
    // index, arr нужен для более сложных вучеслений хз каких пошли они в жопу
    accumulator = callback(accumulator, arr[i], index, arr);
  }
  // ну тут мы просто вернули ответ
  return accumulator;
}
// тут мы вызываем reduce1, тут pop пердаем массив,  в (pervoe, vtoroe) => pervoe - vtoroe)) создаем стрелочную функцию для callback что бы показать что нужно делать после перебора массива

console.log(reduce1(pop, (pervoe, vtoroe) => pervoe + vtoroe, 100));
