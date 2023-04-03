//Types of Function

//function declaration
// function add(a, b) {
//     console.log(a + b)
// }


//function expresion
// let add2=function(){
//     console.log('bye')
// }



//arrow function
// let add1=()=>{
//     console.log('hello')
// }


//let ==> Local Variable

//Window ==> Global variable
//var y=20 //global
// console.log(y) //20
// console.log(window.y)

console.log("***********************************************");

let info = {
    firstname: "Limay",
    lastname: " Chaudhari",

    display: function () {
        console.log(this == info);
        console.log(this.firstname + this.lastname);

        let add = function () {
            console.log(this == window)  //true
            console.log(this.firstname + this.lastname); //NaN (because, undefined + undefined = NaN) 
            //second function required globallay declare value ,here is not declare
        }
        add()  //call the second function
    }
}

console.log(info.display); //Print
info.display(); //call

//console.log(undefined+undefined)//NaN

console.log("***********************************************");

var firstname = "Bhushan"
var lastname = "Chaudhari"
//this var values is extract in Let add function  (function expression)
// in display function we use (Function expression)  ,function into function
let info1 = {
    firstname: "Limay",
    lastname: " Chaudhari",

    display: function () {
        console.log(this == info1);
        console.log(this.firstname + this.lastname);

        let add = function () {
            console.log(this == window)  //true
            console.log(this.firstname + this.lastname); //Bhushan chaudhari
            //second function required globallay declare value
        }
        add()  //call the second function
    }
}

console.log(info1.display); //Print
info1.display(); //call

console.log("***********************************************");

var firstname = "Bhushan"
var lastname = " Chaudhari"
//this var values is extract in  add function    (function declaration)
// in display function we use (function declaration)) ,function into function
let info2 = {
    firstname: "Limay",
    lastname: " Chaudhari",

    display: function () {
        console.log(this == info2);
        console.log(this.firstname + this.lastname);

        function add() {
            console.log(this == window)  //true
            console.log(this.firstname + this.lastname); //Bhushan Chaudhari
            //second function required globallay declare value
        }
        add()  //call the second function
    }
}

console.log(info2.display); //Print
info2.display(); //call

console.log("***********************************************");


// in display function we use (Arrow function))  ,function into function
let info3 = {
    firstname: "Limay",
    lastname: " Chaudhari",

    display: function () {
        console.log(this == info3);
        console.log(this.firstname + this.lastname);

        let add = () => {
            console.log(this == info3)  //true
            console.log(this.firstname + this.lastname); //Limay Chaudhari
            //if we use arrow function in function then it access data / value, which declare in object
        }
        add()  //call the second function
    }
}

console.log(info3.display); //Print
info3.display(); //call

console.log("***********************************************");

