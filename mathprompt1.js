console.log(Math.floor(41.6))
console.log(Math.ceil(36.88))
console.log(Math.round(44.75))
console.log(Math.random()) //0.00-0.99

console.log(`*********************`)

console.log(Math.random())

console.log(Math.random() * 5)

console.log(Math.floor(Math.random() * 5))

console.log(Math.floor(Math.random() * 5) + 1)

console.log(`*********************`)

//let randomnumber=Math.floor(Math.random()*5)+1
//console.log(randomnumber)
// let username = prompt(`Enter the guessing number`)
// if(username==randomnumber){
//     console.log("Guessing is correct")
// }
// else(
//     console.log("Guessing id incorrect")
// )

console.log(`**********************`)

let randomnumber = Math.floor(Math.random() * 5) + 1
console.log(randomnumber)
for (let i = 1; i <= 3; i++) {
    let username = prompt(`Enter the guessing number`)
    if (username == randomnumber) {
        console.log("Guessing is correct")
    }
    else (
        console.log("Guessing is incorrect")
    )
}

console.log(`************************`)
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for(let i=1;i<=3;i++){
// let userinput = prompt("Enter the guessing number")
// if (userinput == randomNumber) {
//     console.log('GUESSING IS CORRECT')
//     break;
// }
// else {
//     console.log('GUESSING IS INCORRECT')
// }
// }























// let randomnumber = Math.random()

