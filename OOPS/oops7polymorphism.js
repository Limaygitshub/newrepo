//polymorphism
//poly--> Many
//morphism--> form

//polymorphism ==> 1) overriding     2) Overloading


//1.overriding  => different class, same method name, same signature

//pg 1
class Square {
    draw() {
        console.log("Square shape");
    }
}

class Circle extends Square {
    draw() {
        console.log("circle shape");
    }
}

class Triangle extends Circle {
    draw() {
        console.log("Triangle shape");
    }
}
let a1 = new Square()
a1.draw()

let a2 = new Circle()
a2.draw()

let a3 = new Triangle()
a3.draw()


console.log("******************************************");

//Program :- 2   (extend the class)

class Square1 {
    draw() {
        console.log("Square shape 1");
    }
}

class Circle1 extends Square1 {
    draw() {
        super.draw()
        console.log("circle shape 2");
    }
}

class Triangle1 extends Circle1 {
    draw() {
        super.draw()
        console.log("Triangle shape 3");
    }
}
let b1 = new Square1
let b2 = new Circle1
let b3 = new Triangle1

b1.draw()
b2.draw()
b3.draw()

console.log("******************************************");

//program 3 ( example of overriding  )
class BMW {
    luxuary() {
        console.log("BMW have Luxuary Cars");
    }
}

class mercedes extends BMW {
    luxuary() {
        super.luxuary()
        console.log("Mercedes also have Luxuary Cars");
    }
}

class Skoda extends BMW {
    luxuary() {
        super.luxuary()
        console.log("Skoda also have Luxuary Cars");
    }
}

let c1 = new BMW()
let c2 = new mercedes()
let c3 = new Skoda()

//c1.luxuary()
//c2.luxuary()
c3.luxuary()



//___________________________________________________________________________________________

//overloading ==> same class, same method name, different signature(parameter)

// class calculator {
//     addition(a, b) {
//         console.log(a + b);
//     }
//     addition(a, b, c) {
//         console.log(a + b + c);
//     }
//     addition(a, b, c, d) {
//         console.log(a + b + c + d);
//     }
// }
// let calci = new calculator

// calci.addition(2, 3)   //NaN -->Not a Number
// calci.addition(2, 4, 5)  //NaN
// calci.addition(3, 6, 9, 5)  //NaN



class calculator {
    addition(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d);
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c);
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b);
        }
    }
}

let cal = new calculator()
cal.addition(2, 6, 4, 9) // 21
cal.addition(2, 9, 6) // 17
cal.addition(6, 6) // 12  