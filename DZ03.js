/* # ДЗ - 2
Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
'source' - массив
'filterFn' - фильтрующая функция
Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'

Всё должно быть реализовано с использованием чистого js (не используя сторонние библиотеки).
Так же, нельзя использовать функции для работы с массивами.

пример:
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
*/
let allNumbers = [1, 2, 4, 5, 6, 7, 8],
  someNumbers = [1, 2, "привет", 4, 5, "loftschool", 6, 7, 8],
  noNumbers = ["это", "массив", "без", "чисел"],
  bled = [1];

const filterFn = (source) => {
  for (i = 0; i < source.length; i++) {
    if (typeof source[i] === "number") {
      return true;
    }
  }
  return false;
};

const isAllTrue = (source) => {
  if (source.length === 0) {
    throw new Error("Массив пустой");
  } else {
    return filterFn(source);
  }
};

console.log(isAllTrue(allNumbers));
console.log(isAllTrue(someNumbers));
console.log(isAllTrue(noNumbers));
console.log(isAllTrue(bled));
