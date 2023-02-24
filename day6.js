//Arrow function
 let a = () => {
    console.log('Shree Ganesh')
 }
 a() //Shree Ganesh

//function expression
let b = function (greeting) {
    console.log(greeting)
}
b('Good Morning all....') //Good Morning all....

//function declaration
function c() {
    console.log(10 + 20)
}
c()

let flower = "Rose"
//console.log(Flower)  //error
console.log(flower) //Rose

console.log(typeof flower)

let value = "@@33%%^^77mayuri"
console.log(typeof value)

let s1 = 'true'
console.log(typeof s1) //string

let s2 = false
console.log(typeof s2)

//Javascript
//Object => property , methods

//Person => Object
//Property => color, name, height, weight,rollnumner,age
//method =>talk(), walk(), sleep(), study()


//car => object
//property => color, model, companyname
//method => start(), stop()

//Javascript
//String => datatype => Object
//property
//method

//method
//action
//return 
//study()
// action => learn something
// return => marks, job

let fruit = "APPLE"
console.log(typeof fruit) //String

console.log("**************************************")

//Methods()
//1. toUpperCase()
//Action => to convert all char of string to capital case
//return => new string

let p1 = fruit.toUpperCase()
console.log(p1) //APPLE
console.log(typeof p1) //string

console.log("**************************************")

//2. toLowerCase()
//action => to convert all char of string ib=nto small case
//return => new string 
let p2 = fruit.toLowerCase()
console.log(p2)
console.log(typeof p2)

 let firstName="Mayuri"
//string store value with the help of index

// // M    a   y   u   r   i
// // 0    1   2   3   4   5 => index

console.log(firstName[0]) //M
console.log(firstName[3]) //u


let w1="Shree Ganesh"
// //S   h   r   e   e       G   a   n   e   s   h
// //0   1   2   3   4   5  6   7   8   9   10   11

console.log(w1[4]) //e
console.log(w1[5]) // space ;
console.log(w1[10]) //s

// //string => indexWise => index start with => 0

console.log("**************************************")

//3. indexOf()
//action => find the index of  given char
//return => if char found number  , if not found -1

let fruit1 = "Apple"
// // A  p  p  l  e
// // 0  1  2  3  4

let d1 = fruit1.indexOf('e')
console.log(d1) //4

let d2 = fruit1.indexOf('p')
console.log(d2) //1

let d3 = fruit1.indexOf('a')
console.log(d3) //-1

//method => toupperCase(), toLowerCase(), indexOF()

console.log("**************************************")

//property = > length

let name1="ram sham"
// r   a  m     s   h   a  m
// 1   2   3  4  5  6   7  8 => length
// 0   1   2  3   4  5  6  7  => index
//length => 1
console.log(name1.length)//8