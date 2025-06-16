//Метод forEach
let arr = [1, 2, 3, 4, 5];
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
};

forEach(["что", "здесь", "происходит"], (i) => console.log("i", i));

console.log(arr.slice(4));

var objA = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  prop4: {
    subProp1: "sub value1",
    subProp2: {
      subSubProp1: "sub sub value1",
      subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
    },
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10),
};
var objB = {
  prop5: 1000,
  prop3: "value3",
  prop1: "value1",
  prop2: "value2",
  prop6: new Date("2016/03/10"),
  prop4: {
    subProp2: {
      subSubProp1: "sub sub value1",
      subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
    },
    subProp1: "sub value1",
  },
};

const deepEqual = (objA, objB) => {
  // Мне нужно сравнить 2 обьекта, в обьекте может лижать кроме ключенй и значений еще и другие обьекты, а также массивы
  // В начле нужно проврить ключи Object.keys очень удобно
};
const a = Object.keys(objA) === Object.keys(objB);
console.log(Object.keys(objA));
console.log(Object.keys(objB));
console.log(a);

/* Тут используется 3 метода 
1.JSON.stringify приобразовывает массив вс троку
2.Метод sort()  сортирует элементы массива и возвращает отсортированный массив
3.Статический метод keys(), возвращает массив ключей объекта.
Тут мы сравниваем ключи 2 обьектов
*/
const b =
  JSON.stringify(Object.keys(objA).sort()) ===
  JSON.stringify(Object.keys(objB).sort());
console.log(b);

/*console.log(Object.values(objA));
console.log(Object.values(objB));
const с = Object.values(objA) === Object.values(objB);
console.log(с);


const deepEqual1 = (u) => {
    const ob =[]
for(i=0;i<u.lenght;i++){
    if (Array.isArray(u[i])){
ob + u[i]
    }
}
}
*/
