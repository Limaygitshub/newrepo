//Conditional Statement
//If , else if, switch case
//why needed=> if we want multiple outcome for single input

//1 condition ->  fullfill(1), notfullfied(1)

//if -> 
//syntax

// if (condition) {
//     //statements
// }

if (true) {
    console.log('hello')
}
 
if (100 < 10) {
    console.log('greter number')
}

if (100 > 10) {
    console.log('greater number')
}

console.log("**************************************")

//Program 1
//ticket
// 1 - 5 => 10 % discount
// 6 - 10 => 20 % discount
//     > 10 => 30 % discount

// And => && (mul)
// true && true => true
// true && false => false
// False && true => false
// False && false => false

let ticketCount = 6
if (ticketCount > 0 && ticketCount <= 5) {
    console.log('You got 10 % discount')
}
if (ticketCount > 5 && ticketCount <= 10) {
    console.log('You got 20 % discount')
}
if (ticketCount > 10) { //6>10 //false
    console.log('You got 30 % discount')
}

//if we take only (IF) block then it will check conftion for all if statement but gives output whenevr condition get true

console.log("**************************************")

//else if
let ticketCount1 = 10
if (ticketCount1 > 0 && ticketCount1 <= 5) { //1-5 => true
    console.log('You got 10 % discount...')
}
else if (ticketCount1 > 5 && ticketCount1 <= 10) { //true && true
    console.log('You got 20 % discount')
}
else if (ticketCount1 >= 10) { //6>10 //false
    console.log('You got 30 % discount')
}

console.log("**************************************")

let ticket = 10
if (ticket > 0 && ticket <= 5) { //1-5 => true
    console.log('You got 10 % discount...')
}
if (ticket > 5 && ticket <= 10) { //true && true
    console.log('You got 20 % discount')
}
if (ticket >= 10) { 
    console.log('You got 30 % discount')
}

console.log("**************************************")

let score =90

if(score>80){ //90>80
    console.log('best player')
}
if(score>60){ //90>60
    console.log('better player')
}
if(score>40){ //90>40
    console.log('good player')
}



if(score>80){ //90>80
    console.log('best player')
}
else if(score>60){ //90>60
    console.log('better player')
}
else if(score>40){ //90>40
    console.log('good player')
}

console.log("**************************************")

let age = 15
if (age > 18) {
    console.log('hi')
}
else {
    console.log('bye')
}

console.log("**************************************")

//1 condition => T output , false output

//ternary operator => single condition
//condition ? true : false

age > 18 ? console.log('hi') : console.log('bye')



//conditional statement

//if => true
// if(true){
// //execute
// }

// if(false){
//     //not execute
// }


//multiple condition

// if(condition 1){

// }
// if(condition 2){

// }
// if(condition 3){

// }
//dis => checked all if block i.e. condition

//else if

// if(condition 1){

// }
// else if(condition2){

// }
// else if(condition 3){

// }

//single condition
// if(true){

// }
// else{

// }

//ternary operator
//condition ? true : false