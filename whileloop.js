//1-10 even number or odd 
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
        console.log('this is even number')
    }
    else {
        console.log(i)
        console.log('this is odd number')
    }
}

console.log(`******************`)

//while
//1-10

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}


//10-5
// let i = 10
// while (i >= 5) {
//     console.log(i)
//     i--
// }

//7 table
// let i = 7
// while (i <= 70) {
//     console.log(i)
//     i = i + 7
// }


// let i = 7
// while (i <= 70) {
//     if (i == 42) {
//         break
//     }
//     console.log(i)
//     i = i + 7
// }

// let i = 7
// while (i <= 70) {
//     if (i == 49) {
//         break
//     }
//     console.log(i)
//     i = i + 7
// }

//1-10
// let i = 1
// while (i <= 10) {
//     if (i == 5) {
//         i++
//         continue
//     }
//     console.log(i) //1 2 3 4
//     i++
// }

console.log(`******************`)
//5 continue 7 break

for (let i = 1; i <= 10; i++) {
    if (i == 5) { //5==5 10
        continue
    }
    if (i == 9) {  //9==9
        break
    }
    console.log(i) //1 2 3 4 6 7 8 
}
console.log(`*********************`)

for (m = 111; m <= 120; m++) {
    if (m == 116) {
        break
    }
    console.log(m)
}

console.log(`*********************`)
let y = 0
while (y <= 10) {
    console.log(y)
    y++
}

console.log(`*********************`)

let z = 11
while (z <= 20) {
    if (z == 15) {
        z++
        continue
    }
    console.log(z)
    z++
}

console.log(`********************`)

let x = 10
while (x >= 1) {
    console.log(x)
    x--
}

console.log(`********************`)

let x1 = 10
while (x1 >= 1) {
    if(x1==6){
        x1--
        continue
    }
    console.log(x1)
    x1--
}