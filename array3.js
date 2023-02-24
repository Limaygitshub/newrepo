//array method       

console.log("**********push()************")

//1.push()    //add the alement at last.
let city = ["jalgaon", "nashik", "dhule", "yavatmal", "amravati"]
a1 = city.push("Nagpur")
console.log(a1)
console.log(city)

console.log("**********unshift()************")

//2.unshift()    //add the eleent at start.
let city1 = ["jalgaon", "nashik", "dhule", "yavatmal", "amravati"]
a2 = city1.unshift("bhusawal")
console.log(a2)
console.log(city1)

console.log("***********pop()***********")

//3.pop()     //remove the last element. 
let city3 = ["jalgaon", "nashik", "dhule", "yavatmal", "amravati"]
a3 = city3.pop()
console.log(a3)
console.log(city3)

console.log("************shift()**********")

//4.shift()     //remove  the first element.
let city4 = ["jalgaon", "nashik", "dhule", "yavatmal", "amravati"]
a4 = city4.shift()
console.log(a4)
console.log(city4)

console.log("**********indexof()***********")

//5.indesxof()     //get the index number >>index is start from 0  & length is start from 1
let city5 = ["jalgaon", "nashik", "dhule", "yavatmal", "amravati"]
a5 = city5.indexOf("nashik")
console.log(a5)
console.log(city5)

console.log("*********include()***********")

//6. include()      //its find the element in array end get boolen reaction true or false.
let city6 = ["jalgaon", "nashik", "dhule", "yavatmal", "amravati"]
console.log(city6.includes("nashik"))

console.log(`***********flat()***********`)

//7.flat()    //its join the two separate array.
//                      0          1          2
let numbergroups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numbergroups[0][1])
console.log(numbergroups.flat())

console.log(`************join()***********`)

//8.join()    //its join the string, which present in one array with specific which we give in bracket of join().
let detail = ["limay", "P", "chaudhari"]
console.log(detail.join(" ~ "))

console.log(`***********reverse()***********`)

//9. reverse()    //we get reverse array.
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(n.reverse(n))

console.log(`***********foreach()***********`)

//10.foreach()    //perform operation with each element.
let namelist = ["limay", "bhushan", "aniket", "yash", "manish"]
namelist.forEach(function (el) {
    console.log("Hello " + el)
})

console.log(`************some()***********`)

//11.some()    //check conditon and get boolean reaction.
let numbera = [2, 3, 4, 5, 6, 7, 8, 9]
let result = numbera.some(function (element, index, array) {
    return element > 5
})
console.log(result)

console.log(`************every()**********`)

//12.every()    //check conditon and get boolean reaction.
let numberb = [2, 3, 4, 5, 6, 7, 8, 9]
let num = numberb.every(function (element, index, array) {
    return element > 1
})
console.log(num)

console.log("***********find()***********")

//13.find()    //find the element on condition.
let numberc = [2, 3, 4, 5, 6, 7, 8, 9]
let nnn = numberc.find(function (element, index, array) {
    return element > 5
})
console.log(nnn)

console.log("***********findindex()***********")

//14.findindex()    
//              0   1   2   3   4   5   6   7 
let numberd = [21, 31, 41, 51, 61, 71, 81, 91]
let nn = numberd.findIndex(function (element, index, array) {
    return element > 61  //we can use >,>=
})
console.log(nn)

console.log("***********slice()***********")

//15.slice()      //we can cut the array.

// -         -9  -8  -7  -6  -5  -4  -3  -2  -1                   
let marks = [12, 45, 78, 90, 30, 35, 67, 89, 99]
//+           0   1   2   3   4   5   6   7   8

//left to right
//arrayName.slice(startposition,endposition)
//endposition optional
//endposition is always less than 1

let a = marks.slice(5)
console.log(a)

let b = marks.slice(2, 6)
console.log(b)

let c = marks.slice(3, -1)
console.log(c)

let d = marks.slice(-1, 2)
console.log(d) //get blank arrray 

console.log(marks.slice(2, 6))


console.log("***********splice()***********")

//16.splice()       
//return => removed element array
let marks1 = [11, 22, 33, 44, 55, 66, 77, 88]
//            0    1   2   3   4   5   6   7
//arrayName.splice(startindex, no of delet element, replace1, replace2)

// let m=marks1.splice(3, 2, 300, 300)
// console.log(m)
// console.log(marks1)

// let p = marks1.splice(2, 2, 1000, 1000)
// console.log(p)
// console.log(marks1)

console.log(marks1.splice(3, 2, 700, 700))
console.log(marks1)


console.log("**********fill()***********")

//17.fill()

let mark = [11, 22, 33, 44, 55, 66, 77, 88]
//           0   1   2   3   4   5   6   7
//arrayName.fill(replaceValue, startposition, endposition)

o = mark.fill(500, 3, 6)
console.log(o)

//console.log(mark.fill(600,5,7))


console.log("*************at()***********")

//18.at()      //give element which present on given index number in at().

let mark2 = [11, 22, 33, 44, 55, 66, 77, 88]
//            0  1   2    3   4   5   6   7
j = mark2.at(6)
console.log(j)

console.log(mark2.at(4))

console.log(mark2.at(7))


console.log("************concat()***********")

//19.concat()      //join the two separate array.       //we can join multiple array also.  
let e = [2, 3, 4]
let f = [10, 20, 30]
let g = [99, 90, 98]
let h = [100, 200, 300]

let result1 = e.concat(f)
console.log(result1)

let result2 = e.concat(f).concat(g).concat(h)
console.log(result2)


