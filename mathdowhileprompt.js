// let randomnumber = Math.floor(Math.random() * 5) + 1
// console.log(randomnumber) 
// let userinput            
// do {
//     let userinput = Number(prompt("enter the number betn 1-5"))
//     if (userinput === randomnumber) {
//         console.log("guessing is correct")
//         break;
//     } 
//     else {
//         console.log("guessing is incorrect")
//     }

// } 
// while (userinput != randomnumber);


let guessing = Math.floor(Math.random() * 5) + 1
console.log(guessing)
let usernumber
do {
    let usernumber = Number (prompt("ENTER THE GUESSING NUMBER"))
    if (guessing === usernumber) {
        console.log("ENTERED GUESSING NUMBER IS CORRECT")
        break;
    }
    else {
        console.log("ENTERED GUESSING NUMBER IS INCORRECT")
    }
} 
while (guessing != usernumber);