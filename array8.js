let information = {
    firstname: "limay",
    lastname: "chaudhari",
    age: 23,
    rollnumber: 15
}
console.log(information)

console.log("**************************")

//setting the value outside of the class
class info {
    firstname = undefined
    lastname = undefined
    ages = undefined
    rolln = undefined

}
let info2 = new info()
console.log(info2)

info2.firstname = "limay"
info2.lastname = "chaudhari"
info2.ages = 23
info2.rolln = 33
console.log(info2)

console.log("********************")

//setting the valve at the time on th object creation

class person {
    constructor(A, B, C, D){
    this.firstname = A
    this.lastname = B
    this.age = C
    this.rollnumber = D
}
}
let info3=new person("bhushan","chaudhari",26,56)
console.log(info3)

let info4=new person("jack","sparrow",55,420)
console.log(info4)


info3.city="jalgaon"      //we can add or update
console.log(info3)


console.log("********************")

class personA{
    setfirstname(a){
        this.firstname=a
    }
    setlastname(b){
        this.lastname=b
    }
    setcityname(c){
        this.cityname=c
    }
    setnikname(d){
        this.nikname=d
    }
}
let info5=new personA()
console.log(info5)   //personA{}

info5.setfirstname("tony")
info5.setlastname("stark")
info5.setcityname("hollywod")
info5.setnikname("tonnya")

console.log(info5)




