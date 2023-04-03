//IMP Note0:-uses of 1.call  2.bind  3.apply       //to set ref of this  //to use one method in multiple object

let info = {
    firstName: "Limay ",
    LastName: "Chaudhari",
    Age: 22,
    Display: function () {
        console.log(this.firstName + this.LastName);
    }
}
console.log(info.firstName) //Limay
console.log(info.Display); //function print
info.Display()  //Limay Chaudhari

let person = info.Display
console.log(person);//function print
person() //NaN   //because if we store the object function in variable it required window rquired value //means undefi + undefi =NaN  

//call
//bind
//apply

//1.call
let S1 = info.Display.call(info) //Limay Chaudhari

//2.bind
let S2 = info.Display.bind(info)
console.log(S2); //[Function: bound Display]
S2()  //Limay Chaudhari

//3.apply
let S3 = info.Display.apply(info)  //Limay Chaudhari


//=========================================================
console.log("*********************************************");

let person1 = {
    firstName: "Limay ",
    LastName: "Chaudhari",
    Display: function () {
        console.log(this.firstName + this.LastName);
    }
}

let person2 = {
    firstName: "manish ",
    LastName: "Chaudhari",
}
let A1 = person1.Display.bind(person2)
A1()

console.log("*********************************************");

let aniket = {
    firstname: "Aniket",
    LastName: " Tayde"
}
let yash = {
    firstname: "yash",
    LastName: " Dongare"

}
let vrushabh = {
    firstname: "vrushabh",
    LastName: " tayde"

}
let sid = {
    firstname: "sid",
    LastName: " Ganjare"
}
let displayName = function () {
    console.log(this.firstname + this.LastName);
}

let A2 = displayName.bind(aniket)
A2()

displayName.bind(vrushabh)()   //we can call directly with  ==> ()
displayName.call(yash)
displayName.apply(sid)

console.log("*********************************************");

let pratik = {
    firstname: "pratik",
    LastName: " Narkhede"
}
let sanket = {
    firstname: "sanket",
    LastName: " sarode"

}
let suyog = {
    firstname: "suyog",
    LastName: " mahajan"

}
let saurabh = {
    firstname: "saurabh",
    LastName: " maahajan"
}
let displayFullName = function (greet1, greet2) {
    console.log(greet1 + this.firstname + this.LastName + greet2);
}

//bind
let A3 = displayFullName.bind(sanket, "Good Morning ", " Have A Nice Day..!")
A3()

displayFullName.bind(sanket, "congratulation ", " For Buy New Car..!")()

//call
displayFullName.call(suyog, "hello ", " Good AfterNoon")

//apply()
displayFullName.apply(saurabh, ["Congratulation ", " For Getting Placed In Infosys"])  //here required [] sqaure Brackets


//IMP Note :-
// main purpose uses of
// 1.call
// 2.bind
// 3.apply
//to set ref of this
//to use one method in multiple object