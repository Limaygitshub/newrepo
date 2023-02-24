//Set => datatype

// //collection of unique value

let mySet = new Set()
console.log(mySet)

//value add
//1. add()
mySet.add("mayuri")
console.log(mySet)

mySet.add('gaurav') 
console.log(mySet)

mySet.add('mayuri')
console.log(mySet)

mySet.add('sathish')
console.log(mySet)

mySet.add("nitesh")
console.log(mySet);
   
mySet.add("yash")
console.log(mySet);


// //add value with the help of set constructor
// let newSet=new Set(["a","b","c","d",'a'])
// console.log(newSet)

// // //2. delete()
// // let y1=newSet.delete('b')
// // console.log(y1) //true
// // console.log(newSet)

// // let A=newSet.delete("c")
// // console.log(A);
// // console.log(newSet);

// //3. has()
// let y2=newSet.has('a')
// console.log(y2)//T

// let y3=newSet.has('z')
// console.log(y3)//F

// let b= newSet.has("d")
// console.log(b);

// let c=newSet.has("p")
// console.log(c);

// //4. forEach()
// newSet.forEach((el)=>{
//     console.log(el)
// })


// newSet.forEach((a)=>{
//     console.log(a);
// })


// console.log("***************");
// //=========================
// //for
// // for(let val of mySet){
// //     console.log(val)
// // }

// // for(let val of newSet){
// //     console.log(val)
// // }
// for(let val of newSet){
//     console.log(val);
// }

// for(let a of newSet){
//     console.log(a);
// }

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
//=========================
//keys()

// let newSet = new Set(["a", "b", "c", "d", 'a'])
// let r1=newSet.keys()
// console.log(r1.next().value)
// console.log(r1.next().value)
// console.log(r1.next().value)
// console.log(r1.next().value)

// let setone = new Set(["l","m","n","o","l"])
// let q =setone.keys()
// console.log(q.next().value);
// console.log(q.next().value);
// console.log(q.next().value);
// console.log(q.next().value);


// //values()
// let r2 = newSet.values()
// console.log(r2)
// console.log(r2.next().value)
// console.log(r2.next().value)
// console.log(r2.next().value)
// console.log(r2.next().value)

let secset=new Set(["p","q","r","s","t"])
let r =secset.values()
console.log(r);

console.log(r.next().value);
console.log(r.next().value);
console.log(r.next().value);
console.log(r.next().value);
console.log(r.next().value);


// //entries()
// let r3 = newSet.entries()
// console.log(r3) //[value , value]

let rr=secset.entries()
console.log(rr);


rrr=secset.entries()
console.log(rrr);

//=========================

let rollNumber = [11, 22, 33, 44, 55,65,66,74]
// console.log(rollNumber[4])
// let a1 = rollNumber[0]
// let a2 = rollNumber[1]
// let a3 = rollNumber[2]
// let a4 = rollNumber[3]
// let a5 = rollNumber[4]
//et a6 = rollNumber[5]

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
//console.log(a6);


//Destructoring

//1. destructure of array
// let [e1, e2, e3, e4, e5] = rollNumber
// console.log(e1) //11
// console.log(e2) //22
// console.log(e3) //33
// console.log(e5) //55

numberr=[22,33,44,55,66,77]
let[a1,a2,a3,a4,a5,a6]=numberr
console.log(a3); 
console.log(a5);
console.log(a6);


//2. nested array

// //          0  1  2    0   1   2      0    1     2
// let num = [[6, 7, 9], [77, 66, 99], [100, 200, 300]]
// //             0           1                2   

// console.log(num[1][1]) //66

// let [[a, b, c], [d, e, f], [g, h, i]] = num
// console.log(e) //66
// console.log(h) //200


let num=[[2,22,222],[3,33,333],[4,44,444]]
console.log(num[0][2]);
console.log(num[2][1]);

let [[j,k,l],[m,n,o],[p,q,s]]=num
console.log(m);
console.log(q);
console.log(l);











