// let names = '8 j 8   mBliB8g  imjB8B8  jl  B';
// let arr = names.split('').filter((n) => n !== " " ).join('')
//
// function Delete (x) {
//     return (
//      x.split('').filter((n) => n !== " " ).join('')
//     )
// }
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
//   function numberToString(num) {
//     return num.toString();
// }
// console.log(typeof numberToString(345))

function binToDec(bin) {
    return parseInt(bin, 2)
}

console.log(binToDec('10100'))

function sumTwoSmallestNumbers(numbers) {
   return numbers.sort((a, b)=>a - b).slice(0,2).reduce((a,b)=>a+b);
    // let sort = array.sort()
    // let sum = sort.forEach()
    // for (let i = 0; i < 2; i++) {
    //    i[0]+i[1]
    // }
        //Code here
        }
// function sumThree(array) {
//     return array.slice().sort((a, b) => a - b).slice(0, 3).reduce((a, b) => a + b);
// }

// (acc, val) => {
//     acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]

console.log(sumTwoSmallestNumbers([343,9,1,52]))