let car={
    name:"swift",
    colour:"white",
    type:"commertial",
    model:"2015"
}
for(let k in car){
    console.log(k,car[k]);
}

console.log("*********keys()***********");     // in keys we get only kys

for(let key of Object.keys(car)){
    console.log(key);
}


console.log("**********values(***********");     //in values we grt only values 

for(let val of Object.values(car)){
    console.log(val);
}


console.log("***********entries()**********");    //in entries we get keys and values also

for(let [k,v]of Object.entries(car)){
    console.log(k,v);
}


console.log("***********************");

let info ={
    fname:"limay",
    lname:"chaudhari",
    rollnum:23
}
for(let k in info){
console.log(k,info[k]);
}

let mapA=new Map()
console.log(mapA);

//property
let i=mapA.size
console.log(i);

//set property
mapA.set(1,"person1")
mapA.set(2,"person2")
mapA.set(3,"person3")

console.log(mapA);

// //size
// console.log(mapA.size);


// //get()      
// q1=mapA.get(1)
// console.log(q1);

// q2=mapA.get(3)
// console.log(q2);


// //has()      //its check the  given is present or not and get boolean reaction
// q3=mapA.has(2)
// console.log(q3);

// q4 = mapA.has(4)
// console.log(q4);

// //clear()     
// mapA.clear()
// console.log(mapA)   

// //delete()
// mapA.delete(2)
// console.log(mapA);

 

mapA.forEach(function(k,v){
    console.log(k,v)
})

for(let key of mapA.keys()){
    console.log(key);
}

for(let key of mapA.keys()){
    console.log(key)
}

for(let val of mapA.values()){
    console.log(val)
}

for(let [key,val] of mapA.entries()){
    console.log(key ,val)
} 

for(let[key,val]of mapA.entries()){
    console.log(key,val);
}
