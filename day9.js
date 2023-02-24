//conditional statement
//if //else//if else//swich cases

if (true) {
    console.log("hello")
}

//program 1
//ticket
//1-5 then 20% discount
//5-10 then 40% dicount
//>10 then 60 % discount
ticket = 11
if (ticket > 1 && ticket <= 5) {
    console.log("you got 20% discount")
}
if (ticket > 6 && ticket <= 10) {
    console.log("you got 40% discount")
}
if (ticket > 10) {
    console.log("you got 60% discount")
}

//problem 2
//1-5 10% discount
//5-10 20% dicount
//>10 30 % discount
ticket = 8
if (ticket > 1 && ticket <= 5) {
    console.log("you got 10% discount")
}
else if (ticket > 6 && ticket <= 10) {
    console.log("you got 20% discount")
}
else if (ticket > 10) {
    console.log("you got 30% discount")
}

//problem 3
percentage = 85
if (percentage > 80) {
    console.log("first class with distinction")
}
else if (percentage > 60) {
    console.log("first class")
}
else if (percentage > 40) {
    console.log("second class")
}

//problem 4
if (30 < 10) {
    console.log("right")
}
else {
    console.log("not right")
}


//problem 5
age = 20
if (age > 18) {
    console.log("adult")
}
else if (age < 18) {
    console.log("child")
}

//problem 6
wordlength = 5
if (wordlength > 10) {
    console.log("its sentence")
}
else {
    console.log("its word")
}

// problem 7
marks = 70
if (marks > 80) {
    console.log("best guy")
}
else if (marks > 60) {
    console.log("better guy")
}
else if (marks > 40) {
    console.log("good guy")
}
