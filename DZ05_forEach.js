//Метод forEach
let arr = [];
// Странный метод я его не понял
const forEach = (arr, callback) => {
  if (arr.length === 0) {
    throw new TypeError("Пустой массив");
  }
  let good;
  for (let i = 0; i < arr.length; i++) {
    good = callback(arr[i]);
  }
  return good;
};
console.log(forEach(arr, (pevoe) => pevoe + pevoe));
