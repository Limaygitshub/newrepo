//Math.floor
console.log(Math.floor(12.5)) //12
console.log(Math.floor(46.8)) //46
console.log(Math.floor(-36.89)) //-37                              //  -37    -36   -1  0 1 2 3
console.log(Math.floor(-82.2)) //-83                                           max =>   0    <= min
console.log(Math.floor(12)) //12
console.log(Math.floor(15.6))

console.log(`********ceil***********`)

//Math.ceil
console.log(Math.ceil(12.5)) //13
console.log(Math.ceil(45.1)) //46
console.log(Math.ceil(-12.65)) //-12
console.log(Math.ceil(-7.98)) //-7
console.log(Math.ceil(10.6))
console.log(Math.ceil(65.9))

console.log(`********round***********`)

//Math.round
console.log(Math.round(12.65)) //13
console.log(Math.round(5.24)) //5
console.log(Math.round(-6.78)) //-7
console.log(Math.round(25.33))
console.log(Math.round(45.66))
console.log(Math.round(2.84))

console.log(`*******************`)
// Math.floor(number)
// Math.ceil(number)
// Math.round(number) //0.5


console.log(Math.random()) //0.00-0.99

//1-5 => random number
console.log(Math.random() * 5) //0.0-4.95

console.log(Math.floor(4.95)) //4

console.log(Math.floor(Math.random() * 5))//0-4

console.log(Math.floor(Math.random() * 5) + 1)//1-5


//1-5 random  //4 

//user input  //3

//guess is correct
//guess is incorrect

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber) //1-5

let userInput = prompt("Enter any number between 1-5")

if (userInput == randomNumber) {
    console.log('your guess is correct!!!')
}
else {
    console.log('your guess is incorrect!!')
}




//user input => prompt() => browser =>html

//index.html
//shift + !

