//object literal
// let limay = {
//     firstname: "limay",
//     lastname: "chaudhari",
//     age: 22,
//     rollnum: 23
// }

// let bhushan = {
//     firstname: "bhushan",
//     lastname: "chaudhari",
//     age: 26,
//     rollnum: 48
// }

//************************************************************ */


//function constructor
function person(fn, ln, ag, rollno) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.rollnum = rollno
}
let manish = new person("manish", "chaudhari", 15, 2)
console.log(manish);

let aniket =new person("aniket","tayde",22,45)
console.log(aniket);

//************************************************************ */

//ES6 
class personB{
    constructor(fn,ln,ag,rollno){
        this.firstname=fn
        this.lastname=ln
        this.age=ag
        this.rollnum=rollno
    }
}
let pratik=new personB("pratik","narkhede",22,56)
console.log(pratik);

let sanket =new personB("sanket","sarode",23,26)
console.log(sanket);


//************************************************************ */


//object create
let details=Object.create({})
console.log(details);

details.firstname="yash"
details.lastname="dongare"
details.age=23
details.language="marathi"

console.log(details);

     