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

const numbers = [1,2,3,4,5,6]
console.log(numbers.reduce((acc,el)=>))