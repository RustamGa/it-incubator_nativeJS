// function pow(x, n) {
//     let result = 1;
// debugger
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result = x*result;
//     }
//     return result;
// }
//
// pow(2,3);

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     debugger
//     if (Array.isArray(department)) { // случай (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         return sum;
//     }
// }
// sumSalaries(company)

// метод for
// function sum (n) {
//     debugger
//     let a = 0
//     for (i=0; i<=n; i++) {
//         a+= i
//     }
//     return a
// }
// sum (3)

//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//
// function sumTo (n) {
//     debugger
//     if (n==1) {
//         return 1
//     }
//
//     return n = n+sumTo(n-1)
// }
// sumTo (5)

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// let a = 1
//
//
// function makeCounter(a) {
//     debugger
//     return a++
// }
// const counter = makeCounter()
// counter()

// function makeCounter() {
//     var currentCount = 1;
// debugger
//     return function() { // (*x*)
//         return currentCount++;
//     };
// }
// var counter = makeCounter(); // (*)
// // каждый вызов увеличивает счётчик и возвращает результат
// alert( counter() ); // 1
// alert( counter() ); // 2
// const counter2 = makeCounter();
// alert(counter())
// alert(counter2())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// let num = 1
// function makeCounter(num) {
//
//     return {
//         increase: function () {
//             return num++
//         },
//         decrease:function () {
//           return num--
//         },
//         reset: function () {
//            return  num=0
//         },
//         set: function (num) {
//            return num
//         }
//
//     }
//     }
// let counter = makeCounter(num)
// alert(counter.increase())
// alert(counter.increase())
// alert(counter.decrease())
// alert(counter.decrease())
// alert(counter.set(4))

// function flatAlike(arr) {
//     let result = []
//     debugger
//     for (let i=0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = [...result, ...flatAlike(arr[i])]
//         } else {
//             result = [...result, arr[i]]
//         }
//     }
//     return result
// }
//
// console.log(flatAlike([2,3,[3,4,55,4,[4,5,6,[4,0]]]]))


const arr = [1, 2, [3, 4,[5,6]]];
//
function flatDeep(arr, d = 1) {
    debugger
    return d > 0 ? arr.reduce((acc, val) => acc.concat (Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr;
};
// console.log(arr1.reduce((acc, val) => acc.concat(val),[]))
console.log(flatDeep(arr, Infinity));