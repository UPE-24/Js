//Метод slice
/**
 * Array.slice принимает два необязательных аргумента:

   - индекс начала, позиция элемента, начиная с которого будут копироваться элементы;
   - индекс конца, позиция элемента следующего за последним копируемым элементом в исходном массиве.
 */
const slice = (
  arr,
  a, // a = 0 можно параметры по-умолчанию сразу делать
  b // b = arr.length;
) => {
  const callback = [];

  // Определяем отрицательное ли значение a
  if (a < 0) {
    //Если да то минусуем его из arr.length
    a = arr.length + a;
    //Если a = undefined, null, 0, false то присвоем ему значение 0
  } else if (typeof a !== "number") {
    a = 0;
  } else if (a >= arr.length) {
    return (a = []);
  }

  //Определяем пришел ли нам аргумент b
  if (b === undefined) {
    // Если нет то присваевыем ему обще значение arr.length
    b = arr.length;
    // Определяем отрицательное ли значение b
  } else if (b < 0) {
    b = arr.length + b;
  }
  // Начинаем делать перебор
  for (let i = a; i < b; i++) {
    callback[callback.length] = arr[i];
  }

  return callback;
};

const popa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("без аргументов:", slice(popa));
console.log("скопировать 3 элемента от начала:", slice(popa, 0, 3));
console.log("скопировать с 3 элемента:", slice(popa, 3));
console.log("скопировать 3 последних:", slice(popa, -3));
console.log("скопировать 3, 2 элементы с конца:", slice(popa, -3, -2));
console.log("индекс начала больше или равен длине массива:", slice(popa, 100)); // не работает Fix

// Эт решение я подсмотрел когда захотел сократить свой код (За одно повторил азы), нуу епт читается очень больно работать с if приятнее
const slice2 = (arr, a, b) => {
  const callback2 = [];
  // ? : Если 1 аргуметн "а" меньше 0 то мы будет вычитать его из arr.length что будет означть что с этого индекса будет начинаться цикл for
  // || Если a = true то значит отсовляем его как есть
  // || Если a = undefined, null, 0, false то оператор присвавает значение 0
  a = a < 0 ? arr.length + a : a || 0;

  // Проверяе пришел ли нам 2 аргумент b === undefined, если он не пришел то берем все значения массива arr.length
  // Если он пришел узнаем отрицательный лин он b < 0
  // Если он отрицательный то вычитаем его из arr.length + b с этого начентся цикл
  //Если он положительный то остовляем его как есть b
  b = b === undefined ? arr.length : b < 0 ? arr.length + b : b;
  for (let i = a; i < b; i++) {
    callback2[callback2.length] = arr[i];
  }
  return callback2;
};
// console.log(slice2(popa, 0, 3));
// console.log(slice2(popa, 3));
// console.log(slice2(popa, -3));
// console.log(slice2(popa, -3, -1));
