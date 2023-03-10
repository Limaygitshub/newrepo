
// let ac=[1,2,3,4]
// console.log(typeof ac) //object

//function

// function add(a,b){
//     console.log(a+b)
//     console.log(a-b)
// }
// add(20,3)
// add(200,300)
// add(10,3)
// add(20,3)

////1.function declaration

// function add(a, b) {
//     return a + b
// }
// let y1 = add(10, 2)
// console.log(y1)


function add(a,b){
    return a+b
}
let add1 =add(20,30)
console.log(add1);


//// 2.function expression

// let add1 = function (a, b) {
//     return a + b
// }
// console.log(add1) //print the function
// let y2 = add1(2, 1)
// console.log(y2)

let addition =function(a,b){
    return a+b
}
let a1=addition(5,3)
console.log(a1);

//// 3.arrow function

// let add2 = (x, y) => {
//     return x + y
// }
// let y4 = add2(30, 2)
// console.log(y4)
// let add3=(x,y)=>x+y

let addition1=(m,n)=>{
    return m+n
}
let a2=addition1(55,5)
console.log(a2);
 

//call by value
// let a=10
// console.log(a) //10
// let b=a
// console.log(b) //10

// a=34
// console.log(a) //34
// console.log(b) //10



// //call by reference

// let arr=[2,3,4,5,6,7]
// console.log(arr) //[2,3,4,5,6,7]

// let arr2=arr
// console.log(arr2) ///[2,3,4,5,6,7]

// arr[0]=200
// console.log(arr) //[200,3,4,5,6,7]
// console.log(arr2) //[200,3,4,5,6,7]

let array=[11,22,33,44,55,66]
console.log(array);

let array1=array
console.log(array1);

array[1]=1000
console.log(array);
console.log(array1);

//1. string as a parameter and string as return type
// function greeting(a){
//     return a
// }
// console.log(greeting('Welcome to minskole!!!'))

function greeting(b){
    return b
}
console.log(greeting('Good Morning..!'));

//2. array as parameter and array as return type

// let rollNo=[11,22,33,44]
// function arraPara(arr){
//     //let arr=rollNo
//     arr[0]=500
//     return arr
// }
// console.log(rollNo)  //[11,22,33,44]
// let u11=arraPara(rollNo)
// console.log(u11) //[500,22,33,44]
// console.log(rollNo)//[500,22,33,44]

let num=[25,35,65,95]
function a(arr){
    arr[0]=300
    return arr
}
console.log(num);
let p=a(num)
console.log(p);
console.log(num);

//3. object as parameter and object as return type

// let person = {
//     fn: "mayuri",
//     ln: "katwe"
// }
// function objPara(obj) {
//     //let obj=person
//     obj.fn = "vaibhav"
//     return obj
// }
// console.log(person) //mayuri katwe
// let result=objPara(person)
// console.log(result)//vaibhav katwe
// console.log(person) //vaibhav katwe

let detail={
    Fname:"Limay",
    Lname:"Chaudhari",
    rollnum:"23"
}
function object(obj){
    obj.Fname="Bhushan"
    return obj
}
console.log(detail);
let q=object(detail)
console.log(q);
console.log(detail);