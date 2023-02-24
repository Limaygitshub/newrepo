let info = ["Limay","chaudhari",22,21]
console.log(info)

console.log("**********************")

let info1={
    firstname:"Limay",
    lastname:"chaudhari",
    age:22,
    rollnumber:21,
}
console.log(info1)


let fruit=["apple","banana","grapes","cherry"]

//retrive
console.log(fruit[1])

//add
fruit.push("pineapple")
console.log(fruit)

fruit.unshift("watermelon")
console.log(fruit)

//update
fruit[2]="kiwi"
console.log(fruit)

//delete
fruit.pop()
fruit.shift()
fruit.splice(2,1)
console.log(fruit)



let vehicle = {
    color:"red",
    model:"Q4",
    type:"SUV"
}

// retrive  (dot notation and bracket notation)
//console.log(vehcile[0]) 

//dot notation
console.log(vehicle.color)
console.log(vehicle.model)
console.log(vehicle.type)

// bracket notation
console.log(vehicle['color'])
console.log(vehicle['model'])
console.log(vehicle['type'])

// add (dot notation and bracket notation)
vehicle.name  = "audi"
vehicle['regNo'] = "123"
console.log(vehicle)

// udate (dot notation and bracket notation)
vehicle.color = "blue"
vehicle['regNo'] = 789
console.log(vehicle)

// delete (dot notation and bracket notation)
delete vehicle.color
delete vehicle['regNo']
console.log(vehicle)



let info2 = {
    firstName:'chinmay',
    lastName:"deshpande",
    age:33,
    rollNo:44
}

// dot notation
// retrive 
console.log(info2.lastName)
// add
info2.city = "pune"
// update 
info2.rollNo = 55
// delete 
delete info2.firstName


// bracknotation
// retrive
console.log(info2['lastName'])
//add
info2['language'] = "marathi"
//update
info2['rollNo'] = 66
//delete
delete info2.lastName



let fruits = ["apple","mango","banana","grapes"]
for(let i = 0 ; i < fruits.length ; i++){ // 1 //2  // 3 //4
   // console.log(i) //0 // 1 // 2 // 3
    console.log(fruits[i])
}

console.log("----*----*----*----*----*----*----")

let animal = {
    namee:"tiger",
    legs:4
}

// dot notation does not work inside for loop
for(let x in animal){
    console.log(x,animal[x])
}
