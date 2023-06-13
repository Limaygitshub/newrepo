//sync
function add1() {
    console.log("A is executed");
}
function add2() {
    console.log("B is executed");
}

add1()
add2()

console.log("*****************************");

function add3() {
    console.log("c is executed");
}
function add4() {
    console.log("d is executed");
}

add3()
add4()

console.log("*****************************");
//setTimeout()  function
function add5() {
    setTimeout(function () {
        console.log("c is executed");
    }, 3000)
}

function add6() {
    console.log("d is executed");
}

// add5()
// add6()

console.log("*****************************");

function PrintSmallForm() {
    setTimeout(function () {
        console.log('Enter First Name');
    }, 3000)

    setTimeout(function () {
        console.log('Enter Last Name');
    }, 2000)

    setTimeout(function () {
        console.log("Submit");
    }, 1000)
}

// PrintSmallForm()  

console.log("*****************************");

function PrintSmallForm() {
    setTimeout(function () {
        console.log('Enter First Name');

        setTimeout(function () {
            console.log('Enter Last Name');

            setTimeout(function () {
                console.log("Submit");
            }, 1000)

        }, 2000)

    }, 3000)

}

PrintSmallForm()
