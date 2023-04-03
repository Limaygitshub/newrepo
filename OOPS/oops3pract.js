// Object literal
// function constructor
// es6 class
// Object.create()


function person(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    // this.display = function () {
    //     console.log(this.firstName + this.lastName);
    // }
}
let detail = new person("limay", "chaudhari", 22)
console.log(detail);

let detail2 = new person("bhushan", "chaudhari", 26)
console.log(detail2);

//first way
console.log(detail.__proto__ === person.prototype);
//second way
console.log(detail instanceof person);

//first way
console.log(detail2.__proto__ === person.prototype);
//second way
console.log(detail2 instanceof person);


person.prototype.display = function () {
    console.log(this.firstName + this.lastName);
}

person.prototype.country = "India"

detail.display()
detail2.display()

console.log(detail);
console.log(detail2);



//ES6 with display function
class personB {
    constructor(Fn, Ln, Ag) {
        this.firstName = Fn
        this.lastName = Ln
        this.age = Ag
        // this.display = function () {
        //     console.log(this.firstName + this.lastName);
        // }
    }
    display() {
        console.log(this.firstName + this.lastName);
    }
}
let detail3 = new personB("Manish", "Chaudhari", 16)
console.log(detail3);

let detail4 = new personB("Arjit", "Singh", 39)
console.log(detail4);

detail3.display()
detail4.display()



// Object.create({})
let detail5 = Object.create({})
console.log(detail5);

// detail5.firstName="Limay"
// detail5.lastName="chaudhari"
// detail5.age="22"
// detail5.display = function () {
//         console.log(this.firstName + this.lastName);
//     }
// detail5.display()


let obj = {
    init: function (fn, ln) {
        this.firstName = "Limay"
        this.lastName = "chaudhari"
    },
    display: function () {
        console.log(this.firstName + this.lastName);
    }
}

let detail6 = Object.create(obj)
console.log(detail6);
detail6.init("shree", "Ganesh")
detail6.display()
console.log(detail6);