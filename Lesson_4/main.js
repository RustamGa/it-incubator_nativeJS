const todoListID_1="93hfg-fg"
const todoListID_2="93htg-fg"
const todoListID_3="93hhg-fg"
const todoListID_4="93hyg-fg"

const todoLists = [
    {
        id: "93hfg-fg",
        title: "What to learn",
        filter: "all",
    },
    {
        id: "93htg-fg",
        title: "What to buy",
        filter: "all",
    },
    {
        id: "93hhg-fg",
        title: "What to read",
        filter: "all",
    },
    {
        id: "93hyg-fg",
        title: "What to learn",
        filter: "all",
    }

]
// почитать!!!
// вычесляемые свойства объекта
// ассоциативный массив

const tasks = {
    [todoListID_1]: [
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "Redux", isDone: false},
        {id: "99ue", title: "HTML", isDone: false},
        {id: "99ue", title: "CSS", isDone: false},
    ],
    [todoListID_2]: [
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
    ],
    [todoListID_3]: [
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
    ],
    [todoListID_4]: [
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
        {id: "99ue", title: "React", isDone: false},
    ],
}

// reduce
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const numbers = [9,9,8]
// console.log(numbers.reduce((acc, n) => acc===n?acc+1:n));
//
// let number=2345
//
// let numbers= "" + number
// let sum = numbers.split('').map(Number)
// let summ = sum.reduce((acc, el)=>acc+el)
// console.log(summ)

//
// let arr =[1,3,4,5,6,7]
// let arr2= arr.for((value, index) => {
//     if(index%2===0) {
//         return value
//
//     }
//     else 0})
//
// console.log(arr2)

function getSum () {
    let arr = [10, 200, 3, 7, 500, 6];
    let add = arr.filter((item, index) => index % 2 === 0)
    let even = arr.filter((item, index) => index % 2 !== 0)
    let sumAdd = add.reduce((acc, el) => acc + el)
    let sumEven = even.reduce((acc, el) => acc + el)
    if (add.reduce((acc, el) => acc + el)> even.reduce((acc, el) => acc + el))
        return true
    else return fals
//         return true
}
function calculateCircumference(squer) {
    return 2 * Math.sqrt(squer/3.14) ;
}

console.log(calculateCircumference(3.14))
//
// let arr = [ 10, 200, 3, 7, 500, 6];
// let add = arr.filter((item, index)=> index%2===0)
// let even = arr.filter((item, index)=> index%2!==0)
// let sumAdd= add.reduce((acc, el)=> acc+el)
// let sumEven= even.reduce((acc, el)=>acc+el)
// function summ (sumAdd, sumEven){
//     if (summAdd>sumEven?true:false)
//         return true
// }

// for (var i = 0; i < arr.length; i++) {
//     arr[i] % 2 ? add.push(arr[i]):even.push(arr[i])
// }
// let sumAdd = add.reduce((acc, el)=>acc+el)
// let sumEven = even.reduce((acc, el)=>acc+el)



console.log(getSum());
//
// (function() {
//     var arr = [9, 0, 0, 1, 0, 5, 1, 3, 1];
//
//     var _temp = arr.map(function(item, index) {
//         return {
//             index: index,
//             value: item
//         }
//     });
//
//     console.log(_temp)
//
//     _temp.sort(function(a, b) {
//         if (a.value < b.value) return -1;
//         if (a.value > b.value) return 1;
//         return 0;
//     });
//
//     console.log(_temp)
//
//     console.log(_temp.map(function(item) {
//         return item.value
//     }))
//     console.log(_temp.map(function(item) {
//         return item.index
//     }))
// })()
function getBanknoteList(amountOfMoney) {
    let banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = []
    for (let i =0; i <banknotes.length; i++ ) {
        let note = banknotes[i];
        while (amountOfMoney- note >= 0) {
            amountOfMoney -=note;
            result.push(note);
        }

    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}

console.log(getBanknoteList(3000))