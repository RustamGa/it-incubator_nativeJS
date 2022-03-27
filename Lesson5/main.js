// console.log("dd")
// let a=1
// let b=2
//
// a=a+b
// b=a-b
// a=a-b
// console.log("b=", b )
// // buble sort

const arr = [12, 34, 777, 0, 42, 56, 10]// классический метод
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i + 1]
            arr [i + 1] = arr[i]
            arr [i] = temp
        }
    }
}
console.log(arr)

const immutableSort = (arr) => {
    const copy = [...arr]
    const result =[]
    for (let i = 0; i < arr.lengh; i++) {
        const max = Math.max(...copy)
        const index = copy.indexOf(max)
            copy.splice(index,1)
        result.unshift(max)
    }
    return result
}
console.log(immutableSort(arr))