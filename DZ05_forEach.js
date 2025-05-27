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

/** ver.2 */
const _forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

forEach(['что', 'здесь', 'происходит'], (i) => console.log('i',i))