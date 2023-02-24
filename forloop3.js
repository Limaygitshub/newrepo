//for loop 1-10 addition

let sum = 0 //1 //3 //6
for (let i = 1; i <= 10; i++) {
    //console.log(i)
    sum = sum + i
}
console.log(sum)

//sum+i => 0+1
//sum+i => 1+2
//sum+i=> 3+3
console.log("*********************")
//============================while loop==========================
//for loop => duration          
//while => dont duration

//syntax(while loop)

// initialization
// while(condition){
//     statements
//     increment/decrement
// }

//1-5 print (forward loop)
let a = 1
while (a <= 5) {  //1<=5 2<=5 3<=5 4<=5 5<=5 6<=5
    console.log(a) //1 2 3 4 5
    a++  //2 3 4 5 6
}

console.log("*********************")

//2 table 
let b = 2
while (b <= 20) {
    console.log(b)
    b = b + 2
}

console.log("*********************")

//8 table
let j = 8
while (j <= 80) {
    console.log(j)
    j = j + 8
}

//reverse
//10-1
// let i = 10
// while (i > 0) {
//     console.log(i)
//     i--
// }

console.log("*********************")

//break
//continue

//1- 5  after 3 break
let x = 1
while (x < 6) { //1<6  2<6  3<6
    if (x == 3) { //1==3 2==3 3==3
        break
    }
    console.log(x)  //1 2
    x++ //2 3
}

console.log("*********************")

let y = 1
while (y <= 5) { //1<=5 2<=5 3<=5
    console.log(y) //1 2 3
    if (y == 3) {  //1==3 2==3 3==3
        break
    }
    y++ //2 3
}

console.log("*********************")

//1-5
let i = 1
while (i <= 5) { //1<=5 2<=5 3<=5 3
    if (i == 3) { //1==3  2==3 3==3
        i++
        continue
    }
    console.log(i) //1 2
    i++ //2 3
}

console.log(`********************`)
//table of 9
let t = 9
while (t <= 90) {
    console.log(t)
    t = t + 9
}

console.log(`********************`)
//print 1 to 15
let l = 1
while (l <= 15) {
    console.log(l)
    l++
}

console.log(`********************`)
//print 11 to 20 and break at 15
let s = 11
while (s <= 20) {
    if (s == 15) {
        break
    }
    console.log(s)
    s++
}

console.log(`********************`)
//print 11 to 20 and continue at 15
let e = 11
while (e <= 20) {
    if (e == 15) {
        e++
        continue
    }
    console.log(e)
    e++
}
