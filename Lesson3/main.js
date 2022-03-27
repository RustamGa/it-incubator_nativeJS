// const sml = document.getElementById("small")
//
// function onClickHandler(e) {
//     console.log(e.target.id)
// }
//
// sml.onclick = onClickHandler
//
// export function getTriangleType(a: number,b: number,c: number): string {
//     let num = [3,2,3]
//    let newNum = num.filter(function (n) {
//         if (n = n){
//             return true;}
//         else {
//             return false;}
//     })
//     console.log(newNum)
// const str = "fffgt"
//     console.log([...str])


let str = 'abcde';
console.log(str.length);

function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6)
        return false
    for (let i = pin.length - 1; i >= 0; i--) {
        const d = pin.charCodeAt(i);
        if (d < 48 || d > 57)
            return false
        }
         return true
}

console.log(validatePIN("1f566"))

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
