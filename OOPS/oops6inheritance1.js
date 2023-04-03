
class principle {
    constructor(fn, ag, rn) {
        this.firstname = fn
        this.age = ag
        this.rollNum = rn
    }
    displayprici() {
        console.log(this.firstname + " chaudhari");
    }
}

class prof extends principle {
    constructor(fn, ag, rn, skl) {
        super(fn, ag, rn)
        this.skill = skl
    }
    displayprof() {
        console.log(this.firstname + " chaudhari" + this.skill);
    }
}

class student extends prof {
    constructor(fn, ag, rn, skl, slry, pstn) {
        super(fn, ag, rn, skl)
        this.salary = slry
        this.position = pstn
    }
    displaystudent() {
        console.log(this.firstname + " chaudhari" + this.skill + this.position);
    }

}

let limay = new principle("Limay", 22, 23)
console.log(limay);

let limayA = new prof("Limay", 22, 23, " js & cypress")
console.log(limayA);

let limayB = new student("Limay", 22, 23, " js & cypress", 35000, " as jr Tester")
console.log(limayB);

limay.displayprici()
limayA.displayprof()
limayB.displaystudent()


console.log(limay.firstname);
console.log(limayA.firstname);
console.log(limay.skill);
console.log(limayA.salary);
console.log(limayB.position);
console.log(limayB.salary);