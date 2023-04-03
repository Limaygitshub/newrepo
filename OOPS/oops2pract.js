//object literal
let student = {
    firstname: "limay",
    lastname: "chaudhari",
    age: 22,
    rollnum: 55,
    display: function () {
        console.log(this.firstname + this.lastname);
    }
}
console.log(student);

let studentA = {
    firstname: "manish",
    lastname: "chaudhari",
    age: 15,
    rollnum: 25,
    display: function () {
        console.log(this.lastname + this.firstname);
    }
}
console.log(studentA);

//function constructor
function StudentC(fn, ln, ag, lang) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.language = lang
}

let Limay = new StudentC("limay", "chaudhari", 22, "marathi")
console.log(Limay);

let manish = new StudentC("manish", "chaudhari", 23, "hindi")
console.log(manish);


//every object have one _proto_
//object._proto_ === Parent.Prototype

console.log(Limay._proto_ === StudentC.prototype);
console.log(manish._roto_ === StudentC.prototype);

StudentC.prototype.display = function () {
    console.log(this.firstname + this.lastname);
}
StudentC.prototype.country = "india"
Limay.display()
manish.display()
console.log(Limay.country);
console.log(manish.country);
console.log(manish.hasOwnProperty('country'));



let names = ["Limay", "Kunal", "aniket", "Vivek"]
console.log(names._proto_ === Array.prototype);
names.push("English")
console.log(names);

Array.prototype.greet = function () {
    console.log("HEllo");
}
names.greet()