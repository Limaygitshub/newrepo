//loop
//for loop

// for(initialization; condtioncheck; incre/decre){
//     //statemenets
// }
//===============================================================

//break
//continue


//1 - 5 number  number==3 

for (let i = 1; i <= 5; i++) {  //2  3
    if (i == 3) {
        break
    }
    console.log(i) //1
}

//i=1  1<=5  true  1==3  false  ===>1
//i=2  2<=5   true 2==3  false  ====> 2
//i=3  3<=5  true  3==3 true => break

console.log("******************")

for (let i = 1; i <= 10; i++) {
    if (i > 3) {
        break
    }
    console.log(i)
}

console.log("******************")

for (let i = 0; i < 5; i++) { //1  2  3
    console.log(i) //0  1 2 3
    if (i == 3) {
        break
    }
}

//0 1 2 3

console.log("******************")

//=================================================

// //continue ==> loop  => perticular value escape

// //1-5  3  => 1 2 4 5

for (let i = 1; i <= 5; i++) { //2 3  4 5 6
    if (i == 3) {
        continue
    }
    console.log(i) //1
}

//i=1 1<=5 1==3  =>1
//i=2 2<=5  2==3  => 2
//i=3 3<=5  3==3
//i=4  4<=5  4==3  => 4
//i=5 5<=5  5==3  => 5
//i=6 6<=5

console.log("******************")

for (let i = 0; i <= 5; i++) { //1  3
    console.log(i) //0 1 2 3
    if (i == 3) { //0==3 3==3
        continue
    }
}

console.log("************************( practice )*************************")

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("******************")

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("******************")

for (let i = 9; i <= 90; i = i + 9) {
    console.log(i)
}

console.log("********break key**********")

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        break
    }
    console.log(i)
}

console.log("******************")

for (let i = 11; i <= 20; i++) {
    if (i > 15) {
        break
    }
    console.log(i)
}
console.log("******************")

for (let i = 1; i <= 15; i++) {
    if (i == 8) {
        break
    }
    console.log(i)
}

console.log("********continue key**********")

for (i = 1; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(i)
}

console.log("******************")

for (i = 41; i <= 50; i++) {
    if (i == 43) {
        continue
    }
    console.log(i)
}

console.log("******************")

for (i = 21; i <= 30; i++) {
    if (i == 26) {
        continue
    }
    console.log(i)
}

console.log("******************")

for (let i = 0; i <= 4; i++) {
    if (i == 2) {
        continue
    }
    console.log(i)
}

console.log("******************")

