//array ===>//map()   //filter()   //reduce()

// //to add 5 with each array number
// let rollNumber = [20, 10, 56, 78, 34, 89, 98, 78]
// //+5                                                                                   
// //[25,15..]                                                                            
// let newRollNo = []                                                                     
// for (let i = 0; i < rollNumber.length; i++) {
//     let newRN = rollNumber[i] + 5
//     newRollNo.push(newRN)
// }
// console.log(newRollNo)

//==========================================================
//map()
//action => perform operator with each and every element of array
//return => new array

// let rollNumber = [20, 10, 56, 78, 34, 89, 98, 78]
// let newRollNo = rollNumber.map(function (element, index, array) {
//     return element + 5
// })
// console.log(newRollNo)


// let birthYear=[1995,1998,1890,2003,2000]
// //current age
// let age=birthYear.map(function(el){
//     return 2023-el
// })
// console.log(age)

// let scores = [23, 12, 78, 90, 45, 67, 09, 11, 65]

// //score greater than 50[78,90,67]

// // let greater50 = []
// // for (let i = 0; i < scores.length; i++) {
// //     if (scores[i] > 50) {
// //         greater50.push(scores[i])
// //     }
// // }
// // console.log(greater50)

//=====================================================

// //filter()
// //action => filter out the element based on condition
// //return  => new array

// let greater50 = scores.filter(function (element, index, array) {
//     return element > 50
// })
// console.log(greater50)


// let marks = [12, 45, 67, 10]
// let val = 0                        //12 //57 //124 //134
// for (let i = 0; i < marks.length; i++) {
//     val = val + marks[i]
// }
// console.log(val)

// 0+12 => 12
// 12+45=> 57
// 57+67=>124
// 124+10=>134

//=============================================================

//reduce()
// let sum = marks.reduce(function (accumulator, element, index, array) {
//     return accumulator + element
// }, 0)
// console.log(sum)

// let sum = marks.reduce(function (accumulator, element, index, array) {
//     return accumulator + element
// }, 10)
// console.log(sum)


// let marks = [12, 45, 67, 10]
// let a1=marks.reduce(function (accumulator, element, index, array) {
//     return accumulator + element
// }, 0)

// console.log(a1)

let number = [12, 21, 23, 32, 24,]
let newnumber = []
for (let i = 0; i < number.length; i++) {
    let ab = number[i] + 5
    newnumber.push(ab)
}
console.log(newnumber)

//=============================================
//map()
//action => perform operator with each and every element of array
//return => new array

let grade = [23, 21, 25, 65, 42, 35]
let newgrade = grade.map(function (element, index, array) {
    return element + 5
})
console.log(newgrade)

//=============================================
let birthyear = [1989, 1978, 1963, 2000, 1965]
let age = birthyear.map(function (element, index, array) {
    return 2023 - element
})
console.log(age)

//============================================

//filter()
// //action => filter out the element based on condition
// //return  => new array


let scores = [23, 12, 78, 90, 45, 67, 09, 11, 65]
//score greater than 50[78,90,67]

let greater50 = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
        greater50.push(scores[i])
    }
}
console.log(greater50)

//with filter()
let above50 = scores.filter(function (element, index, array) {
    return element > 50
})
console.log(above50)


// let add = [25, 26, 41, 23, 23]
// val = 0
// for (let i = 0; i < add.length; i++) {
//     val= val + add[i]
// }
// console.log(val)

//=========================================

//reduce()

num=[23,62,75,89,78,26]
let a1=num.reduce(function(accumullator,element,index,array){
    return accumullator+element
},0)
console.log(a1)

//=========================================

let a2=num.reduce(function(accumullator,element,index,array){
    return accumullator+element
},10)
console.log(a2)
//========================================

// forEach() 
let city = ["pune","mumbai","banglore","kolkata","chennai"]
city.forEach(function(el){
    console.log('welcome '+ el)
})

//==========================================
//find()

let a0 = [44,66,33,66,55,77] 
let qq = a0.filter(function(el){
    return el > 50
})
console.log(qq)


let qqa = a0.find(function(el){
    return el < 50
})
console.log(qqa)

//=================================

// findIndex()

let qqaa = a0.findIndex(function(el){
    return el > 50
})
console.log(qqaa)

//========================================

// some()
let marks = [33,55,66,77,44,55,66]
let w1 = marks.some(function(el){
    return el > 700
})
console.log(w1)

//=========================================

// every()
let w2 = marks.every(function(el){
    return el > 10
})
console.log(w2)  
