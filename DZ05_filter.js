//filter
// Массив
popa = [1, 2, 3, 4, 5, 6, 7];
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
    if (callback(array[i])) {
      //заполеннеия нвого масива параметрами котрые прошли отбор
      element[i] = array[i];
    }
  }
  //Возврощаем новый массив
  return element;
};
//передем 2 аргумета, popa массив и функцию фильтрации маасива
console.log(filter(popa, (pervoe) => pervoe > 3));

/** ver.2 */
const _filter = (arr, cb) => {
  if (!arr.length) return [];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

console.log(_filter([1, 2, 3, 4, 5, 6, 7], (i) => i > 4));