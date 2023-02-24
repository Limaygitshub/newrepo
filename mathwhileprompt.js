let randomNumber = Math.floor(Math.random() * 5) + 1        //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
console.log(randomNumber)     //3
let userInput        //undefined
while (userInput != randomNumber) {   //2!=3  //3!=3
    userInput = Number(prompt('Enter any number between 1-5'))   //2 //3
    if (userInput === randomNumber) {   //2===3 //3===3
        console.log('Guess correct')
    }
    else {
        console.log('Guess incorrect')
    }
}