/*
Разобраться со всплытием
написать рекурсивную функцию, которая выводит все значения массива на экран (ниже описание)
Напишите модуль, который экспортирует функцию с именем `consoleRec`. Функция должна **рекурсивно** выводить элементы массива на экран. Запрещено использовать циклы и методы для работы с массивами. Функция должна принимать два аргумента: массив и… что-то еще. Что именно - остается на ваше усмотрение. Пример вызова:

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], ???);
должна вывести на экран:
я
умею
писать
рекурсивные
функции
*/

// Сам массив
let sours = ["я", "умею", "писать", "рекурсивные", "функции"];

// функция принмающаяя 2 параметра
const consoleRec = (sours1, a1) => {
  // вызываю функцию пока не переберу все значния массива
  if (sours1.length > a1) {
    console.log(sours1[a1]);
    a1++;
    consoleRec(sours1, a1);
  }
  return;
};
consoleRec(sours, 0);
