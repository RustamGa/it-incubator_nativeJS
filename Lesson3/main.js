const sml = document.getElementById("small")

function onClickHandler(e) {
    console.log(e.target.id)
}

sml.onclick = onClickHandler

export function getTriangleType(a: number,b: number,c: number): string {
    let num = [3,2,3]
   let newNum = num.filter(function (n) {
        if (n = n){
            return true;}
        else {
            return false;}
    })
    console.log(newNum)