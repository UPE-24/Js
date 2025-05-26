//Метод slice
let popa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slice = (arr, a, b) => {
  if (arr.length === 0) {
    throw new TypeError("Пустой массив");
  }
  let callback = [];
  for (i = a; i < b; i++) {
    // Тут должен быть push, без него чет не идет
    callback[i] = arr[i];
  }
  return callback;
};
console.log(slice(popa, 3, 6));
