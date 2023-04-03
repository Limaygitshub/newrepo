// //closure

// function addition() {
//     console.log("hello"); //hello
//     return 6 + 5   //11
//     console.log("bye");  //after return command we cannot write code, its last commend of every code /project
// }
// let A = addition()
// console.log(A);


// function additionA() {
//     let a = 25
//     let b = 10
//     return function () {
//         console.log(a + b);
//     }
// }
// let B = additionA()

// //let B=function(){
// //console.log(a+b);
// //}

// console.log(B);
// B() //35



// // actual difference between arrow function and function expression

// //function  declaration--------------------------------------
// function add(a, b) {
//     return a + b
// }
// let plus = add(25, 20)
// console.log(plus);


// //function expression-------------------------------------------
// add1 = function (a, b) {
//     return a + b
// }
// let plus1 = add1(12, 12)
// console.log(plus1);


// //Arow function --------------------------------------------------
// let add2 = (a, b) => {
//     return a + b
// }
// let plus2 = add2(15, 5)
// console.log(plus2);

// //if single command in arrow function we can write
// let add3 = (a, b) => a + b
// let plus4 = add3(30, 30)
// console.log(plus4);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//window /global data
var FullName = "Bhushan Chaudhari "
var Age = 26

// let information = {
//     FullName: "limay Chaudhari ",
//     Age: 22,
//     display: function () {             //it use data which declare in object
//         console.log(this); // information
//         console.log(this.FullName + this.Age);

//         function addNameAge() {            //if we use function into function it use globally (window) declare data
//             console.log(this); //window
//             console.log(this.FullName + this.Age);
//         }
//         addNameAge()
//     }
// }
// information.display()


// let information = {
//     FullName: "limay Chaudhari ",
//     Age: 22,
//     display: function () {         //it use data which declare in object
//         console.log(this); // information
//         console.log(this.FullName + this.Age);

//         let addNameAge = () => {
//             console.log(this); //information
//             console.log(this.FullName + this.Age);  //if we use arrow function in function, it use data which declare in object
//         }
//         addNameAge()
//     }
// }
// information.display()


let information = {
    FullName: "limay Chaudhari ",
    Age: 22,
    display: () => {                     //it use data which declare globally (window)   
        console.log(this); // window
        console.log(this.FullName + this.Age);

        let addNameAge = () => {        //if we use arrow function in arrow function ,it use globallay (window) declare data /parent function data
            console.log(this); //window
            console.log(this.FullName + this.Age);
        }
        addNameAge()
    }
}
information.display()



 var Num=10000
 console.log(window.Num);





















