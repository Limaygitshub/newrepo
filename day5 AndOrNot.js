let a = 20
console.log(a) //20
console.log(typeof a) //Number


let student = "Mayuri"
console.log(typeof student) //string

let p = 'm'
console.log(typeof p) //string

let a1 = `20`
console.log(typeof a1) //string

//typeOf => datatype 

//comparison operators => < , > , <=, >=, ==, != ,===, !== : Boolean => true , false

console.log(5 != '5') //false

console.log(5 !== '5') //true

console.log(20 > 10) //true

console.log(5 < '-2') //false

console.log(10 >= -9) //true

console.log(10 >= 10) //true

console.log(5 <= 3) //false

console.log(100 <= 200) //true

// -2 -1 0 1 2 3

// 1. arithmatic + - / * %
// 2. comparison < , > , <=, >=, ==, != ,===, !== 

// 3. Logical operator
// 1. AND  => &&
// 2. OR => ||
// 3. NOT => !

console.log("=========================================")

// 1. AND (&&) => multiplication

// true && true => true
// true && false => false
// false && true => false
// false && false => false

console.log(6 === 6 && 6 !== '6') //true
//           true    &&   true 

console.log(5 > 2 && 10 >= 20) //false
//          true  &&    false 

console.log(6 > 7 && 8 == '8') // false
//          false &&  true 

console.log(20 == 21 && 7 === '7')
//          false &&   false => false

console.log("=========================================")

// 2. OR (||) => addition
// true || true => true
// true || false => true 
// false || true => true
// false || false => false 

console.log(7 == '0' || 80 >= 70) //true
//         false || true => true

console.log(50 > 24 || 5 != 4) //true
//           true  ||  true 

console.log(29 < 12 || 6 !== '6') //true
//           false ||  true

console.log(-2 > -1 || 5 > 10)

//          false   || false => false

//  -5    -3   -2   -1  0   1  2  3

// (3> 2) //T
// (-1 >-2) //T

console.log("=========================================")

// NOT (!)
// !true  => false
// !false =>true

console.log(!(10 === 10)) //false

console.log(!(20 > 10)) //false

console.log(!(-1 > -2)) //false

console.log(!(3 === '3'))//!false => true

console.log(!(30 > 50)) //true