// types of function in javascript

// 1) function declaration
function addition(a, b) {
    return a + b
}
let sum = addition(2, 5)
console.log(sum)

console.log("****************************")

// 2) function expression
let addition2 = function (x, y) {
    return x + y
}
let sum1 = addition2(5, 10)
console.log(sum1)

console.log("****************************")

// 2) arrow function
let addition3 = (x, y) => {
    return x + y
}
let sum2 = addition3(30, 10)
console.log(sum2)