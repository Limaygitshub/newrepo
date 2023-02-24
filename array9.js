// // Array , String , Objects , Userdefind 
// // Maps , Set
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:47
// }
// // retrive 
// console.log(info.firstName)
// // udpdate 
// info.firstName = "tanmay"
// // add 
// info.city = "pune"
// // delete
// delete info.age
// console.log(info)

// for(let key in info){
//     console.log(key,info[key])
// }

// . notation does not work inside for loop

// program 1
// let vehicle = {
//     color:"red",
//     type:"SUV"
// }

// for(let k in vehicle){
//     console.log(k,vehicle[k])
// }

// for(let prop of Object.keys(vehicle)){
//     console.log(prop)
// }

// for(let val of Object.values(vehicle)){
//     console.log(val)
// }

// for(let [k,v] of Object.entries(vehicle)){
//     console.log(k,v)
// }

// program2
let  human = {
    fullName:"mayuri rao",
    age:23,
    city:"pune",
    skills:["python","css","html","css"]
}

for(let prop in human){
    console.log(prop)
}

// console.log(Object.keys(human))
// console.log(Object.values(human))
// console.log(Object.entries(human))

for(let prop of Object.keys(human)){
    console.log(prop)
}
for(let values of Object.values(human)){
    console.log(values)
}
for(let [k,v] of Object.entries(human)){
    console.log(k,v)
}

// Difference between Map and Object


let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:23
}


// Map keys can be different data types 

let mapA = new Map() 
console.log(mapA)

// Property
let i = mapA.size
console.log(i)

// set a property
mapA.set(1,"admin")
mapA.set(2,"customer")
mapA.set(3,"support")

console.log(mapA)
console.log(mapA.size)

// get()
let q1 = mapA.get(2)
console.log(q1)

//has()
let q2 = mapA.has(4)
console.log(q2)


// mapA.clear()
// console.log(mapA)

// delelte
//mapA.delete(1)
//console.log(mapA)


// set() , get() , has() , size , clear() , delete

mapA.forEach(function(v,k){
    console.log(v,k)
})

for(let key of mapA.keys()){
    console.log(key)
}

for(let val of mapA.values()){
    console.log(val)
}

for(let [key,val] of mapA.entries()){
    console.log(key ,val)
}