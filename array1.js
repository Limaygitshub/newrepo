//               0         1         2        3       4
let names = ["chinmay", "poorva", "mayuri", "amol", "ram"]
console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[3])
console.log(names[4])

//              0       1          2          3          4
let cities = ["pune", "mumbai", "nagpur", "wardha", "amarvati"]
console.log(cities[4])
console.log(cities[1])


for (let i = 0; i <= 4; i++) { // 1 // 2 // 3 // 4 // 5
    // console.log(i)  // 0 // 1 // 2 // 3 // 4
    console.log(cities[i])
    // 1st i = 0
    // 2nd i = 1
    // 3rd i = 2
    // 4th i = 3
    // 5th i = 4
}

//                0           1         2          3
let country = ["india", "srilanka", "pakistan", "bangladesh"]
for (let i = 0; i <= 3; i++) {
    console.log(i)
    console.log(country[i])
}

let i1 = 0
while (i1 <= 3) {
    console.log(country[i1])
    i1++
}

// Object - Human
// Property  - age , color ,gender , height
// Method - talk() , walk()


// Object - Vehicle
// Property - model , type , color
// Method - start() , stop()

// Object - Bank account
// Property = accNo , accHolder ,type
// Method - withdrawl() , deposit()


// Gym()
// action -- excercise
// return --- health

// Sleep()
// action -  go to bed and close eye
// return rest

//              0        1      2        3
let fruits = ["apple", "mango", "banana", "grapes"]
let q1 = fruits.length
console.log(q1)

// methods
// push()
// action - adds the element at last 
// return  - new length of array

let q2 = fruits.push("papaya")
console.log(fruits)
console.log(q2)


// unshift()
// action - add the element at start
// return new length of array
let q3 = fruits.unshift("berry")
console.log(fruits)
console.log(q3)

