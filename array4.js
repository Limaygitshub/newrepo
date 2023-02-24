//length           1   2   3   4           //length is start from 1
// index           0   1   2   3           //index is stsart from 0
let rollNumber = [12, 45, 67, 90]
console.log(rollNumber)
console.log(typeof rollNumber) //object
console.log(rollNumber[2]) //67
//to print last valve
console.log(rollNumber[rollNumber.length - 1])//90

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

let student = [`limay`, `aniket`, `yash`, `kunal`, `sid`]
for (let i = 0; i < student.length; i++) {
    console.log(student[i])
}

console.log(`***********************`)

//problem 1
//finding age
let birthyear = [1993, 1965, 1977, 1998, 1985, 1978]
let age = []
for (let i = 0; i < birthyear.length; i++) {
    // console.log(2023-birthyear[i])
    let ag = 2023 - birthyear[i]
    age.push(ag)
}
console.log(age)

console.log(`***********************`)

//problem 2
//add 2 extra mark in array every mark
let score = [25, 58, 64, 49, 36, 56]
let newscore = []
for (let i = 0; i < score.length; i++) {
    //console.log(score[i]+2)
    let ns = score[i] + 2
    newscore.push(ns)
}
console.log(newscore)

console.log(`**********************`)
//problem 3
//print the number which greater than 50 in array
let numbers = [20, 12, 84, 67, 11, 09, 78, 99, 15, 92]
let greaterthan50 = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        greaterthan50.push(numbers[i])
    }
}
console.log(greaterthan50)

console.log(`*******************`)

//problem 4
//addition of element which present in array
let marks = [25, 21, 32, 12]
let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)