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

const deepEqual = (obj1, obj2) => {
  // Если obj1 === obj2 один и тот же объект товрент true (тип проверкв что оба оьекта ссылаются на одно итоже)
  if (obj1 === obj2) return true;

  // Проверка дат (Date) - спиздил из инета но она работает так что збс
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  // Проверка массива
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    //Сравниваем что оба массива равны
    if (obj1.length !== obj2.length) return false;
    // Перебираем масив и вьбываем рекурсив до талово
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  // В начле нужно проврить ключи (Object.keys) очень удобно
  // Получаем ключи объектов в массиве
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Перебираем каждый ключ по очереди испильзуя includes свереря каждый элемент
  for (let key of keys1) {
    // Если во втором объекте нет такого ключа — объекты разные
    if (!keys2.includes(key)) return false;
    // Рекурсивно сравниваем значения по ключу
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  // Все ключи и значения совпадают
  return true;
};
console.log(deepEqual(objA, objB));
