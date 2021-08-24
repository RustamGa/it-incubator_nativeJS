//
//
// let students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },{
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
// const getName = st => st.name
// console.log (students.map(getName))
//
//
// function map(arr, callback) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = callback(arr[i])
//     }
//     // ..........
//     return newArr
// }
//
// const getMarriedSt = st => st.isMarried
// function filter (arr,callback) {
//     const newArr =[]
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr [i])) {
//         //0, -0, "", null, undefined, NaN - false
//         //23,"str",{},[], ""
//         newArr.push(arr[i])
//     }
// }
// return newArr
// }
//
// console.log(student.filter(getMarriedSt))
// console.log(filter(students,getMarriedSt))

export function getTriangleType(a: -8,b: 2,c: 3): string {
    let num = [a,b,c]
    let newNum = num.filter(function (n) {
        if (n > 0){
            return true;}
        else {
            return false;}
    })

        console.log(newNum)


    let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

    let result = numbers.filter(function(elem) {
        if (elem >= 0) {
            return true;
        } else {
            return false;
        }
    });

    console.log(result);