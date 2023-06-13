//              0         1       2      3        4
let names = ["chinmay", "sarika", "ram", "poorva", "satish"]
let numbers = [22, 33, 44, 55, 66, 77, 88, 99, 10]
let info = ["chinmay", "deshpande", 7709192441, true]

console.log(names[0])
console.log(names[1])
console.log(info)

// ----------- Looping  to print element of array 

//               0      1        2        3
let cities = ["pune", "mumbai", "nagpur", "wardha"]
console.log(cities[0])

for (let i = 0; i <= 3; i++) { // 1 // 2 // 3
    // console.log(i) // 0 , 1 , 2 , 3
    console.log(cities[i])
    // 1st i = 0 
    // 2nd i = 1
    // 3rd i = 2
    // 4th i = 3
}


// Javascript object 
// Array - Object 
// Object Property and Method


// Property Lenngth 
//               0         1          2          3
let country = ["India", "Pakistan", "Srilanka", "Bangladesh"]
console.log(country.length)
console.log(country.length - 1)
for (let i = 0; i < country.length; i++) {
    //console.log(i)
    console.log(country[i])
}

// Methods 
// Action
// Return type


// push()
// action - adds the element the last 
// return - new length of array
//                   0          1          2           3
let vegetables = ["cabbage", "brinjal", "cauliflower", "tomato"]
console.log(vegetables)
let q1 = vegetables.push("ladyfinger")
console.log(q1)
console.log(vegetables)

// unshift()
// action -- add the element at start of array
// return - new length of array 

let q2 = vegetables.unshift('carrot')
console.log(q2)
console.log(vegetables)

// pop()
// action - removes the last element 
// return - returns the same
//              0       1        2        3
let fruits = ["apple", "mango", "banana", "grapes"]
console.log(fruits)
let q3 = fruits.pop()
console.log(fruits)
console.log(q3)

// shift()
// action - removes the first element 
// return -first element 

let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

//  4 method
// push() - new length
// unshift() - new length
// pop() - returns last element
// shift() - returns first element

// includes()
// action - search for element 
// return - boolean value
let animals = ["tiger", "lion", "panthar", "rabbit"]
let q5 = animals.includes("Tiger")
let q6 = animals.includes("tiger")
console.log(q6)

// reverse()
let q7 = animals.reverse()
console.log(q7)

// indexOf()
//               0    1   2   3   4    5
let numberss = [555, 666, 777, 8888, 9999, 8888]
console.log(numberss)
let q8 = numberss.indexOf(666)
let q9 = numberss.indexOf(10000)
console.log(q8)
console.log(q9)

//7. flat()
// convert all element into single array
//new array
//                   0         1          2
let numbers1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numbers1[0]) //[1,2,3]

console.log(numbers1[0][1])//2

console.log(numbers1.flat())

// join()
let infoB = ["chinmay", "deshpande", 7709192441]
let q10 = infoB.join(' ') // "chinmay-deshpande-7709192441"
console.log(q10)
console.log(typeof q10)

let information = ["limay", "chaudhari", "7709206594"]
let a = information.join("~")
console.log(a)
