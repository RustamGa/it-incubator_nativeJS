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
        scores: 90,
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
let copyUser = {...user} ;
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)

//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
console.log(user===deepCopyUser)
console.log(user.friends === deepCopyUser.friends)
//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents= [...students];
console.log(students===copyStudents)
console.log(students.age===copyStudents.age)
//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map( st => {
    return {...st}
});
// let deepCopyStudents = students.map( st => ({...st}));
console.log(students===deepCopyStudents)
console.log(students.name === deepCopyStudents.name)
//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = [...deepCopyStudents].sort((a,b) => a.name > b.name ? 1:-1);
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)

let sortByScores = deepCopyStudents.sort ((a,b)=> b.scores - a.scores);
// let sortByScores = deepCopyStudents.sort ((a,b)=> a.scores < b.scores? 1 : -1);
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(st => st.scores>= 100?st:false);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0,3);// 0 - индекс элемента с которого стартует удаление эелемнтов, 3 -количество удаленных элементов
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents= deepCopyStudents.filter(st => st.isMarried===false);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(st => st.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join('');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(st => (
{...st, isStudent:true}
));

console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(m=> m.name === 'Nick' ? {...m, isMarries:true}:m);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(st => st.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce((best, st) => best.scores > st.scores ? best : st , );
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = students.reduce ( (acc,st) => acc + st.scores, 0);
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
// const friends = students.reduce((acc,el) => )
// console.log(friends)

const addFriends = (students) => {
    // const friends = students.reduce((acc,el) => acc!==el.name?acc:el.name)
    return(
        students.map(m => ({...m, friends:studentsNames.filter(n => m.name!==n)}))
        )
}
console.log(addFriends(students));









