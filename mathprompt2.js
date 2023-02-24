//with for loop
// let guess = Math.floor(Math.random() * 5) + 1
// console.log(guess)
// for (let i = 1; i <= 3; i++) {
//     let boxtext = prompt(`enter the number`)
//     if (guess == boxtext) {
//         console.log("guess is correct")
//     }
//     else {
//         console.log("guess is incorrect")
//     }
// }

console.log(`********************`)

//with break statement
let guess = Math.floor(Math.random() * 5) + 1
console.log(guess)
for (let i = 1; i <= 3; i++) {
    let boxtext = prompt(`enter the number`)
    if (guess == boxtext) {
        console.log("guess is correct")
        break;
    }
    else {
        console.log("guess is incorrect")
    }
}