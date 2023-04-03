class PersonA {

    set firstN(fn) {
        this.firstname = fn
    }

    set lastN(ln) {
        this.lastname = ln
    }

    set Age(ag) {
        this.age = ag
    }
}

let limay = new PersonA()
limay.firstname = "limay"
limay.lastN = "chaudhari"
limay.Age = "22"



//___________________________________________________


// program 2

class PersonB {
    constructor(fn, ln, age, rollNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    }
}

// let limay = new PersonB("limay","chaudhari",23,55)
// console.log(limay)
// let manish = new PersonB("manish","chsudhari",15,54)
// console.log(manish)

let students = [
    new PersonB("limay", "chaudhari", 13, 5),
    new PersonB("limay1", "chaudhari1", 11, 51),
    new PersonB("limay2", "chaudhari2", 14, 57),
    new PersonB("limay3", "chaudhari3", 130, 8),
    new PersonB("limay4", "chaudhari4", 17, 58)
]
students.forEach(function (el) {
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})

//___________________________________________________

let studentA = {
    studentOne: new PersonB("manish", "chaudhari", 23, 5),
    studenTwo: new PersonB("manish", "chaudhari", 24, 6),
    studentThree: new PersonB("manish", "chaudhari", 25, 7),
    studentFour: new PersonB("manish", "chaudhari", 25, 8)

}
for (let [k, v] of Object.entries(studentA.studentThree)) {
    console.log(k, v)
}
