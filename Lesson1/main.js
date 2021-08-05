// примитивы
let first = 33
let second = first
second = 55
console.log(first,second)

// обьекты
const studentBob = {
    name:"Bob",
    age: 33,
    friends: ["Alex", "Ivan"]
}

const studentAnn = studentBob
studentAnn.name = "Ann"
console.log(studentBob, studentAnn)

const copyStudentBob = {
    ...studentBob
} // new object
console.log(studentBob, copyStudentBob)
studentBob.name = "Bob"
console.log(studentBob, copyStudentBob)
console.log(studentBob === copyStudentBob)
studentBob.friends.push("Helga")

const deepCopyStudentBob = {
    ...studentBob,
    friends: [...studentBob.friends]
}
deepCopyStudentBob.friends.push("Vika")
console.log(deepCopyStudentBob, studentBob)

//

function MyFunc(num) {
    const logger =()=> console.log(num)
return (num,logger)
}
const [twentyTwo,logTwentyTwo] = MyFunc(22)

// Использование с индексами не удобно
// result[0]();
// alert (result[1])

// const twentyTwo= result[0]
// const logTwentyTwo= result[1]

logTwentyTwo()
alert (twentyTwo)

const student = [
    {name="Bob", age: 22}
    {name:"Den", age: 32}
    {name:"John", age: 20}
]

// 1.Новый массив
// 2.Длина МАссива
// 3.Связь с исходным массивом

const name =student.map(st=> st.name)

const stWithScores = student.map(st=> ({...st, score:0 }))
console.log(stWithScores)

const greeting = student.map(st => `Hello, my name is ${st.name}`)