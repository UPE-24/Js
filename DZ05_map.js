// Метод map
popa = [5, 6, 7];
// функция примающая 2 аргумента, array = масссив, callback = функкция по каким правилам будеи заполнятся новый массив
const filter = (array, callback) => {
  if (array.length === 0) {
    throw new TypeError("Пустой массив");
  }
  // создания нового массива
  let element = [];
  // перебор полученного массива
  for (let i = 0; i < array.length; i++) {
    //фильтрация каждого значения полученного массива
    element[i] = callback(array[i]);
  }
  //Возврощаем новый массив
  return element;
};
//передем 2 аргумета, popa массив и функцию фильтрации маасива
console.log(filter(popa, (pervoe) => pervoe * pervoe));
