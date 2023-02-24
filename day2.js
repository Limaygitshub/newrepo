let x = 100
console.log(x)

console.log("**********************************");

let firstname = "minskole"
console.log(firstname)

console.log("**********************************");

// not save time.
let p = 30
let q = 20
console.log(p + q)
console.log(p - q)
console.log(p / q)
console.log(p * q)
console.log(p % q)

console.log("**********************************");

// function = calculator save tine and avoid retetation.
function operation(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a / b)
    console.log(a * b)
    console.log(a % b)

}
operation(2, 5)
operation(60, 40)

// new one.
function A(m, n) {
    console.log(m + n)
    console.log(m - n)
    console.log(m / n)
    console.log(m * n)
    console.log(m % n)
}
A(5, 8)

console.log("**************************************")

// 1 function without parameter and without return type.

function add() {
    console.log(10 + 20)
}
add()
add()

// output cannot be change 
// we cannot be reused output value

// example 2
function sub() {
    console.log(30 - 10)
}
sub()
sub()

console.log("**************************************")

// 2 function with parameter and without return type.
function sum(o, p) {
    console.log(o + p)
}
sum(20, 30)
sum(30, 60)
// we cannot reuse the output value.

// example 2
function mul(m, n) {
    console.log(m * n)
}
mul(2, 6)
mul(5, 3)

console.log("**************************************")

// 3 function with parameter and with return type.
function add(x, y) {
    return x + y
}
let result = add(30, 40)
console.log(result)
console.log(result + 20)
console.log(result + 30)
// output can be change and we can reused the output value.

// example 2
function sub(a, b) {
    return a - b
}
let ab = sub(25, 10)
console.log(ab)
console.log("**************************************")

