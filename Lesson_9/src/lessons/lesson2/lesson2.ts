import {log} from "util";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01

// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum1(arg: number) { // функция sum1 принимает какой-то аргумент и возвращает анонимную функцию которая принимает
    // другой аргумент
    return function (arg2: number) { // поскольку у нас возвращается анонимная функция и похер что она анонимная она будет
        // в момент объявления создавать внутри себя объект лексического окружения, которое в свою очередь будет замыкаться
        // на объекте лексического окружения функции sum 1 в момент ее вызова
        return arg + arg2; //
    }
}

console.log(sum1(3)(6)) //


// Теперь создадим функцию у кторой не будет замыкания

var a = 500;


function someFunc(callBack: Function) { // передали callBack в другую функцию
    let a = 10 // нигде не используется
    return callBack
}

const call = (arg: number) => { // объявляем callBack и этот callBack замкнулся на глобальной зоне видимости
    console.log(a) // будет искать а в глобальной области так как замыкание образуется только в момент определения функции
    // и следовательно если функция call объявляется здесь то она замыкается на глобальной области видимости.
    console.log(arg)
}
console.log(someFunc(call)(8)) // назывется композиция функции


// Рекурсия
// создадим функцию с помощью цикла for
function sumTo(num: number) {
    let result = 0
    for (let i = 1; i <= num; i++) {
        result += i
    }
    return result
}

console.log(sumTo(100))

// теперь решим эту задачу с помощью рекурсии

function sumTo1(num: number) {
    if (num == 1) {
        return 1
    }
    return num + sumTo(num - 1)
}

console.log(sumTo(100))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
let count = 0

function makeCounter(count: number) {
    return count++
}


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
let num = 1

function makeCounter1(num: number) {

    return {
        increase: function () {
            return num++
        },
        decrease: function () {
            return num--
        },
        reset: function () {
            return num = 0
        },
        set: function (num: number) {
            return num
        }

    }
}

let counter = makeCounter1(num)
alert(counter.increase())
alert(counter.increase())
alert(counter.decrease())
alert(counter.decrease())
alert(counter.set(4))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number) {
    if (n <= 0) return 0;

    if (n === 1) return (num: number) => num;

    let outerParams: number[] = []

    function inner(...arg: number[]) {
        outerParams = [...outerParams, ...arg];
        if (outerParams.length >= n) {
            outerParams.length=n
            return outerParams.reduce((acc, el) => acc + el);
        } else {
            return inner;
        }
    }
    return inner
}
// @ts-ignore
superSum(0) //0
// @ts-ignore
superSum(3)(2)(5)(3) //10
// @ts-ignore
superSum(3)(2)(5,3) //10
// @ts-ignore
superSum(3)(2,5,3) //10
// @ts-ignore
superSum(3)(2,5)(3) //10
// @ts-ignore
superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
function flat (arg:number[]) {

}

function flatAlike(arr: any): any {
    let result: any = []
    for (let i=0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = [...result, ...flatAlike(arr[i])]
        } else {
            result = [...result, arr[i]]
        }
    }
    return result
}
console.log(flatAlike([2,3,[3,4,55,4,[4,5,6,[4,0]]]]))
    // just a plug
export default () => {
};