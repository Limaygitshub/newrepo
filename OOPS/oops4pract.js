//class==> Es6 class
//1.without constructor
//2.with constructor
//3.by using function/method
//4.set and key keyword


//1.without constructor
// class human {
//     firstname = "limay"
//     lastname = "chaudhari"
//     age = 23
//     display = function () {
//         console.log(this.firstname + this.lastname);

//     }
// }
// let person1=new human()
// console.log(person1);

// let person2=new human()
// console.log(person2);

//___________________________________________________________________

//Setting object property outside of class
class human1 {
    firstname = undefined
    lastname = undefined
    age = undefined
    display = function () {
        console.log(this.firstname + this.lastname);
    }
}
//1
let person3 = new human1()
console.log(person3);

person3.firstname = "limay "
person3.lastname = "chaudhari"
person3.age = 22
person3.display()
console.log(person3);

//2
let person4 = new human1()
console.log(person4);

person4.firstname = "Lucifer "
person4.lastname = "Morningstar"
person4.age = 36
person4.display()
console.log(person4);

//________________________________________________________________

//2.with constructor
class person {
    constructor(fn, ln) {
        this.FirstName = fn
        this.LastName = ln
    }
    display() {
        console.log(this.FirstName + this.LastName);
    }
}
let detail1 = new person("limay ", "Chaudhari")
console.log(detail1);
detail1.display()

let detail2=new person("arjit ","Singh")
console.log(detail2);
detail2.display()

//______________________________________________________________
//3.By USing Function

class persons{
   
    setFirstName(){
       this. firstname=fn
    }
    setLastName(){
        this.lastname=ln
    }


    getFirstName(){
        return this.firstname
    }
    getLastName(){
        return this.lastname
    }
}
let limay=new persons()
console.log(limay);

limay.firstname="limay"
limay.lastname="Chaudhari"
console.log(limay);

console.log(limay.getFirstName());
console.log(limay.getLastName());

//______________________________________________________________

//4.By Using Set And Get Keyword
class PersonD {

    set firstN(fn){
        this.firstName = fn
    }
    set lastN(ln){
        this.lastName = ln
    }
    set Age(ag){
        this.age = ag
    }
    set rollN(rn){
        this.rollNo = rn
    }

}

let aniket = new PersonD()
aniket.rollN = 45
aniket.lastN = "Tayade"
aniket.Age = 22
aniket.firstN = "aniket"
