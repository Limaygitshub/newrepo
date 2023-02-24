let num = [1133, 8669, 7863, 5566, 4432]
console.log(num[1]);
let [a, b, c, d, e] = num
console.log(c);
console.log(e);
console.log(a);
console.log(b);

console.log("-------------------------------------");


let num1 = [[23, 56, 89], [56, 23, 78], [14, 36, 58]]

console.log(num1[0][2]);
console.log(num1[1][0]);

let [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = num1
console.log(b2);
console.log(c3);
console.log(a3);

console.log("-------------------------------------");


let limay={
    sirname:"chaudhari",
    age:22,
    education:"Engineering"
}
console.log(limay.age);
console.log(limay.education);


let {sirname,age,education}=limay
console.log(sirname);
console.log(education);

console.log("-------------------------------------");

let student={
    name1:"limay chaudhari",
    edudetail:{
        edu:"engineering",
        stream:"electrical engineering",
        cgpa:9.1
    }
}

// let {name1,edudetail:{edu,stream,cgpa}}=student
// console.log(name1);
// console.log(stream);
// console.log(cgpa);


let {name1,edudetail:{edu:s1,stream:s2,cgpa:s3}}=student
console.log(name1);
console.log(s1);
console.log(s3);
console.log(s2);

