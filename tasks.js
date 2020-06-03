//------------1-я задача-----------------
function sumAverage(arr) {
 try {
  if(!Array.isArray(arr)) throw 'Передайте массив';
  let result = 0;
  arr.forEach(value => {
    if(!Array.isArray(value)) throw 'Массив должен состоять из массивов'
    const sum = value.reduce((counter, val) => {
      if(typeof val !== 'number') throw 'Вложенные массивы должны состоять из чисел'
      return (counter += val);
    }, 0);
    result += sum / value.length;
  });
  return Math.floor(result);
 }
 catch(e) {
   return new Error(e);
 }
}
// console.log(sumAverage([[1, 2, 2, 1],  [2, 2, 2, 1]]));

//---------------2-я задача-------------------
function maxTripletSum(arr) {
  try {
    if(!Array.isArray(arr)) throw 'Передайте массив';
    const result = Array(3).fill(0);
    result.forEach((v, i) => {
      const maxEl = Math.max.apply(null, arr);
      result[i] = maxEl;
      arr = arr.filter(value => {
        if(typeof value !== 'number') throw 'Массив должен состоять из чисел'
        return value !== maxEl
      })
      console.log(arr);
    })
    return result.reduce((acc, v) => acc += v, 0)
  }
  catch(e) {
    return new Error(e);
  }

}
// console.log(maxTripletSum([1, -5, 8, 4 ,18, 11, 56, 5, 56, ]));

// //---------------3-я задача---------------------------
function biggest(nums) {
  try{
    if(!Array.isArray(nums)) throw 'Передайте массив'
    return nums.sort((a,b) => `${b}${a}`.localeCompare(`${a}${b}`)).join('');
  }
  catch(e){
    return new Error(e);
  }
}
const nums = [13, 14, 16, 18, 9, 184.47];
const result = biggest(nums);
console.log(result);

//---------------4-я задача----------------------------
function pattern(amount) {
  if(typeof amount !== 'number') return new Error('Передайте число');
  let arr = Array(amount).fill(0);
  arr = arr.map((v, i) => i + 1);
  //формируем массив паттернов
  const res = arr.map(el => {
    arr.unshift(arr.pop());
    return arr.join('');
  });
  return res.reverse();
}
//  console.log(pattern(10));
//---------------5-я задача----------------------------
function arithmeticSequenceSum(a, r, n) {
  if(typeof a !== 'number' || typeof r !== 'number' || typeof n !== 'number') return new Error('Все аргументы должы быть типа "number"')
  const arr = new Array(n).fill(0);
  return arr.map((elem, i) => a + r * i);
 // return arr.reduce((acc, elem, i) => acc + a + r * i, 0)
}
// console.log(arithmeticSequenceSum(2, 3, 5));

//---------------6-я задача----------------------------
function diagonalSum(array) {
  try {
    if(!Array.isArray(array)) throw 'Передайте массив';
    let result = 0;
    array.forEach((value, index) => {
      if(!Array.isArray(value)) throw 'Массив должен состоять из массивов'
      value.forEach((val, ind) => {
        if(typeof val !== 'number') throw 'Вложенные массивы должны состоять из чисел'
        if (index === ind) result += val;
      });
    });
    return result;
  }
  catch(e) {
    return new Error(e);
  }
}
// const array = [
//     [5, 9, 1, 0],
//     [8, 7, 2, 3],
//     [1, 4, 1, 9],
//     [2, 3, 8, 2],
//     ];
// console.log(diagonalSum(array));

//-----------------------------------------------------Strings---------------
//-------------------1-е задание----------------
function toMachineName(name, separator) {
  if(typeof name !== 'string' || typeof separator !== 'string') return new Error('name и separator должны быть типа string')
  //если первый эл-т строки - число, то просто его срезаем
  const firstPoisiotn = +name.split('')[0];
  if (!isNaN(firstPoisiotn))
    name = name.slice(String(firstPoisiotn).length + 1, name.length);
  // режем строку по пробелам и лишним символам
  const re = /[_\W\s*]/;
  return name
    .split(re)
    //преобразуем в строку kebab-case с нужным separator
    .map(n => n)
    .join(separator)
    .toLowerCase();
}
 console.log(toMachineName('3 basics and 1 advance', '-'));
//-------------------2-е задание----------------
function formatCurrency(amount) {
  //проверка на ошибку ввода
  if (isNaN(+amount))
    return 'Ошибка, введите число или строковое представление числа';
  let result = '';
  //получаем дробную часть
  let fractPart = String(Math.trunc(amount * 100) / 100).split('.')[1];
  //Получаем перевернутую целую часть
  const reversewholePart = String(amount).split('.')[0]
    .split('')
    .reverse()
    .join('');
  //пробегаемся по ней и формируем итоговую строку целой части
  for (let i = 0; i < reversewholePart.length; i++) {
    if (i !== 0 && i % 3 === 0) result += ',' + reversewholePart[i];
    else result += reversewholePart[i];
  }
  //переворачиваем обратно строку
  result = result.split('').reverse().join('');
  //прибавляем дробную часть, если она есть и возвращаем результат
  if (fractPart === undefined) return result;
  else return `${result}.${fractPart}`;
}
//  console.log( formatCurrency(3.00795301226894));
//------------------3-е задание-----------------
function alphabetized(text) {
  if(typeof text !== 'string') return new Error('Ожидаемый ередаваемый тип - string')
  const result = text
    .split('')
    .filter(
      symb => (symb >= 'a' && symb <= 'z') || (symb >= 'A' && symb <= 'Z')
    );
  return result
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    .join('');
}
// console.log(alphabetized('The Holy    Bible'));

//------------------4-е задание-----------------?????????
function romanToNumber(number) {
  try{
    if(typeof number !== 'string') throw 'Ожидаемый тип - "string"'
    const re = /[^IVXLCDM]/;
    if(re.exec(number) !== null) throw 'Введите Римское число'
    const obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    //const objKeys = Object.keys(obj);
    return number.split('').map(v => obj[v]).reduce((acc, val, i, arr) => acc + ((arr[i+1] > val) ? -val: val), 0);
  }
  catch(e){
    return new Error(e);
  }

}
console.log(romanToNumber('XXI'));
//------------------5-е задание-----------------
function countDuplicates(text) {
  if (typeof text !== 'string') return new Error('Введите строку');
  const uniqValues = [],
    repeatValues = [];
  text
    .toLowerCase()
    .split('')
    .map(v =>
      !uniqValues.includes(v)
        ? uniqValues.push(v)
        : !repeatValues.includes(v)
        ? repeatValues.push(v)
        : ''
    );
  return repeatValues.length;
}
// console.log(countDuplicates('55`777`43'));
//------------------6-е задание-----------------
function replaceWithAlphPositions(text) {
  if (typeof text !== 'string') return new Error('Введите строку');
  //убираем пробелы
  return (
    text
      .split(' ')
      .join('')
      //заменяем символы верхнего регистра
      .toLowerCase()
      .split('')
      //оставляем символы латинского алфавита
      .filter(
        symb => (symb >= 'a' && symb <= 'z') || (symb >= 'A' && symb <= 'Z')
      )
      //получаем их позицию в алфавите
      .map(v => v.charCodeAt() - 96)
      //возвращаем строку с проеблами между числами
      .join(' ')
  );
}
// console.log(replaceWithAlphPositions('The sunset sets at twelve o’clock.'));

//-----------Algorithms and functional programming----------------

//-------------1-е задание----------------
function flattenAndSort(arr) {
  try {
    if(!Array.isArray(arr)) throw 'Передайте массив';
    //все записываем в один массив и сортируем по возрастанию
    return arr
      .reduce((total, amount) => {
        if (!Array.isArray(arr)) throw 'Нужно передать двумерный массив';
        if (amount.some(v => typeof v !== 'number'))
          throw 'Двумерный массив должен состоять из чисел';
        return total.concat(amount);
      }, [])
      .sort((a, b) => a - b);
  } catch (e) {
    return new Error(e);
  }
  //------------------------2-й вариант решения
  //     const resultArr = [];
  // }
  // try{
  //     arr.map(arr => {
  //         if(Array.isArray(arr)) arr.map(val => {
  //             if(typeof val !== 'number') throw new Error('Двумерный массив должен состоять из чисел');
  //             resultArr.push(val)
  //         })
  //         else throw new Error('Нужно передать двумерный массив');
  //         });
  //     return resultArr.sort((a, b) => a - b);
  // }
  // catch(e){
  //     return e;
  // }
}
//console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [ 1, 2],  [12], [9, 7, 8]] ));

//-------------2-е задание----------------
function add(n) {
  return function (num) {
    try {
      if (typeof num !== 'number')
        throw new Error('Прибавлять можно только число');
      return num + n;
    } catch (e) {
      return e;
    }
  };
}
//  const addOne = add(1);
//  const addThree = add(3);
//  console.log(addThree(10));
//  const addH = add('h');
//  console.log(addH(10));

//-------------3-е задание----------------
function multiplyAll(arr) {
  if (!Array.isArray(arr))
    return function () {
     throw 'Передайте массив в качестве аргумента'
    };
  return function (mult) {
    try {
      if (typeof mult !== 'number')
        throw 'Множитель должен быть числом'
      return arr.map(v => v * mult);
    } catch (e) {
      return new Error(e);
    }
  };
}
// console.log(multiplyAll({a:1})(2));
// const mult = multiplyAll(1);
// console.log(mult(5));

//-------------4-е задание----------------
function uniqueSum(arr) {
  try {
    if(!Array.isArray(arr)) throw 'Введите массив'
      const uniqueArr = [];
      arr.map(v => {
          if(typeof v !== 'number') throw 'Введите массив ЧИСЕЛ!'
          !uniqueArr.includes(v) ? uniqueArr.push(v) : ''}
          );
      return uniqueArr.reduce((acc,v) => acc + v, 0);
  }
  catch(e) {
      return new Error(e);
  }
}
// console.log(uniqueSum([-1,-1,5,2,-7]));
// console.log(uniqueSum([1, 3, 8, 1, 8, 'H']));
// console.log(uniqueSum([1, 3, 8, 1, 8]));

//-------------5-е задание----------------

function reduce(arr, callback, initialValue) {
  for (let i = 0; i < arr.length; i++) {
    initialValue = callback(initialValue, arr[i], i, arr);
  }
  return initialValue;
}
//  console.log(reduce([1,2,3,4], (acc, value) =>  acc * value, 1));

//-------------6-е задание----------------
function f(x) {
  return x + 1;
}
function g(x) {
  return x + 2;
}
function h(x) {
  return x * 3;
}
function compose(...args) {
  return function (a) {
    return args.reduceRight((acc, fn) => fn(acc), a);
  };
}
// console.log(compose(f, g, h)(10));

//-----------Функции высшего порядка-------------


//-------------1-е задание----------------
function spread(callback, arr) {
  return callback.apply(this, arr);
  // or
  //return callback(...arr);
}
// console.log(spread((a, b) => a + b, [1,3]));

//-------------2-е задание----------------
function zipWith(fn, a0, a1) {
   const smallerLengthArr = a0.length > a1.length ? a1 : a0;
   return smallerLengthArr.map((v, i) => fn(a0[i], a1[i]))
}
// zipWith(Math.pow, [10,10,10,10], [0,1,2,3]);   
// const plus = (a,b) => a+b ;
// console.log(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2 ]))

//-----------Рекурсия------------------
//-------------1-е задание----------------
function sequenceSum(begin, end, step) {
  if (
    typeof begin !== 'number' ||
    typeof end !== 'number' ||
    typeof step !== 'number'
  )
    return NaN;
  if (begin > end) return 0;
  else if (begin === end) return begin;
  return begin + sequenceSum((begin += step), end, step);
}
// console.log(sequenceSum(1,5,1));
//-------------2-е задание----------------
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Node2 {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
function stringify(list) {
  try {
    if (!(list instanceof Node)) throw 'Передайте объект класса Node';
    if (list.next === null) return `${list.data} -> ${list.next}`;
    return `${list.data} -> ${stringify(list.next)}`;
  } catch (e) {
    return new Error(e);
  }
}
// function stringify(list) {
//   return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
// }
 //console.log(stringify(new Node(1, new Node2(2, new Node(3)))))
 //console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))))

//-----------Классы и паттерны-------------
//-------------1-е задание---------------- ???
class Singleton {
  constructor() {
    if(!Singleton.instance) Singleton.instance = this
    return Singleton.instance;
  }
}
// const o1 = new Singleton();
// const o2 = new Singleton();
// console.log(o1 === o2); // true
// o1.name = 'Singleto';
// console.log(o2.name); // ‘Singleton’;
// console.log(o1._instance);

//-------------2-е задание----------------
String.prototype.customUpperCase = function () {
  return this.toUpperCase();
};
// console.log('Hello, world'.customUpperCase());


//----------------------Сортировка-------------------
function sortArr(list, sortBy) {
  try {
    if(!Array.isArray(arr)) throw 'Передайте массив';
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
  }
  catch(e) {
    return new Error(e);
  }
}

// const mas = [
//     {"a": 1, "b": 3},
//     {"a": 3, "b": 2},
//     {"a": 2, "b": 40},
//     {"a": 4, "b": 12}
//   ]
//   console.log(sortArr(mas, 'a'));
  