const students = [
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
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user, friends: [...user.friends]
}

//Проверка:
console.log(user===deepCopyUser)// - что должно быть в консоли?
console.log(user[0]===deepCopyUser[0])// - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [
    ...students
]

//Проверка:
console.log(students===copyStudents) //- что должно быть в консоли?
console.log(students.name===copyStudents.name) //- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents=students.map(st => {
    return {...st}
})

//Проверка:
console.log(deepCopyStudents===students) // - что должно быть в консоли?
console.log(deepCopyStudents[1]===students[1]) //- что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = deepCopyStudents.sort((a, b) => a.name > b.name ? 1 : 0)
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores= deepCopyStudents.sort(function (a, b){
    if (a.scores<b.scores) {
        return 1;
    }
    if (a.scores>b.scores) {
        return -1;
    }
    return  0;
})
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(function (s) {
    if (s.scores>= 100) {
        return true;
    } else {
            return false;
        }
    }

);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// let topStudents=sortByScores.splice(0,3);
// console.log(topStudents)
//console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор )
// let arr1 = [0, 1, 2]
// let arr2 = [3, 4, 5];
// arr1 = [...arr1, ...arr2];
// console.log(arr1)
//
// let newDeepCopyStudents = [...deepCopyStudents,...topStudents];
// console.log(newDeepCopyStudents)
//
// //7. Сформируйте массив холостых студентов (filter)
// let notMarriedStudents= deepCopyStudents.filter((s) => !s.isMarried);
// console.log(notMarriedStudents)
//
// //8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(s=> s.name);
console.log(studentsNames)
//
// //8a. Сформируйте строку из имён студентов, разделённых
// // - запятой (join)
// // - пробелом (join)
// let nameWithSpace;
// console.log(nameWithSpace)
// let namesWithComma;
// console.log(namesWithComma)
//
// //9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// let trueStudents=deepCopyStudents.map(s => ({...s, isStudent:true}));
// console.log(trueStudents)
//
// //10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
 let studentsWithMarriedNick=deepCopyStudents.map(s => {
     if (s.name==="Nick") {
         return {...s, isMarried:true}
}
     else return s
 })


console.log(studentsWithMarriedNick)
//
// //11. Найдите студента по имени Ann (find)
// let ann;
// console.log(ann)
//
// //12. Найдите студента с самым высоким баллом (reduce)
let bestStudent= deepCopyStudents.reduce((acc, el)=> acc.scores > el.scores?acc:el)
console.log(bestStudent)
//
// //13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = deepCopyStudents.reduce((acc,el)=> acc+el.scores,0)
console.log(scoresSum)
//
// // 14.Напишите функцию addFriends, которая принимает параметром массив students
// // и добавляет в каждому студенту свойство "friends",
// // значением которого является массив имён всех остальных студентов из массива,
// // за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    return students.map(s => ({...s, friends: studentsNames.filter(n => s.name !== n)}))
}
console.log(addFriends(students))
     // if (st.name === s.name) {
//          return {}
// }
//      else return s
//  })
// //
// // }
// const friends = students.map(s => s.name)
// const newStudenta=students.map(s=> ({...s, friends}))
//
// // addFriends()

//








