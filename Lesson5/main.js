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

    const arr = [12, 34, 777, 0, 42, 56, 10]
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[1], arr [i + 1]] = [arr [i + 1], arr [i]]/// Деструктурирующее присваивание https://tproger.ru/s3/uploads/2017/09/BubbleSort.gif
            }

        console.log(arr)


        // sort

        const names = ["Camilla", "Bob", "Donald", "Alex"]
        console.log(names.sort())

        const numbers = [1, 1000, 3, 9]
        const compareFn = (a, b) => {
        }

    console.log(numbers.sort())

            const students = [
                {
                    name: "Bob",
                    age: 22,
                    isMarried: true,
                    scores: 95
                },
                {
                    name: "Alex",
                    age: 23,
                    isMarried: true,
                    scores: 89
                },
                {
                    name: "alex",
                    age: 23,
                    isMarried: true,
                    scores: 89
                },
                {
                    name: "Helge",
                    age: 21,
                    isMarried: true,
                    scores: 89
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
                    scores: 121
                },
            ];
