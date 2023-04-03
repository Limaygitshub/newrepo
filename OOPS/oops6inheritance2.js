class personA {

    firstname = "limay "
    lastname = "chaudhari"

    displayPersonA() {
        console.log(this.firstname + this.lastname);
    }
}
let limay = new personA()

console.log(limay);
console.log(limay.firstname);
console.log(limay.lastname);
limay.displayPersonA()

class personB extends personA {
    age = " 22"
    displayPersonB() {
        console.log(this.firstname + this.lastname + this.age);
    }
}
let limay2 = new personB
console.log(limay2);
console.log(limay.firstname);
console.log(limay.lastname);
console.log(limay.age);

limay.displayPersonA()
limay2.displayPersonB()


//===================================================================================

class grandfather {
    constructor(fn, ln) {
        this.grandfather = fn
        this.lastname = ln
    }
    displayGrandFather() {
        console.log(this.grandfather + this.lastname);
    }
}
class Father extends grandfather {
    constructor(fn, ln, fname) {
        super(fn, ln)
        this.FatherName = fname
    }
    displayFather() {
        console.log(this.FatherName + this.lastname);
    }
}
class Son extends Father {
    constructor(fn, ln, fname, Sname) {
        super(fn, ln, fname,)
        this.SonName = Sname
    }
    displaySon() {
        console.log(this.SonName + this.lastname);
    }
}

let Bhushan = new Son("Digambar", "Chaudhari", "Pradip", "Bhushan")
console.log(Bhushan);

let Bhushan1 = new Father("Digambar", "Chaudhari", "Pradip")
console.log(Bhushan1);

let Bhushan2 = new grandfather("Digambar", "Chaudhari")
console.log(Bhushan2);


console.log(Bhushan.grandfather);
console.log(Bhushan1.FatherName);
console.log(Bhushan2.lastname);
console.log(Bhushan.lastname);
console.log(Bhushan1.grandfather);


