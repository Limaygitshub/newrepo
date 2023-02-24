//<h1 class="person" id="one" name="textOnly">Mayuri</h1>         == mayuri

//<h1 class="name" id="one" name="textonly">Limay</h1>            == Limay

//element find out 


//by tagname
// let byTagname = document.querySelector('h1')
// console.log(byTagname)
let bytagname = document.querySelector(`h1`)
console.log(bytagname);


// //by classname (.)
// let byclassName = document.querySelector('.person')
// console.log(byclassName)
let byclassname = document.querySelector(`.name`)
console.log(byclassname);


// //by id(#)
// let byID = document.querySelector('#one')
// console.log(byID)
let byid = document.querySelector(`#one`)
console.log(byid);


// //common formula
// //tagname[attribute="value"]
// let byCommonFormula = document.querySelector("h1[name='textOnly']")
// console.log(byCommonFormula)
let bycommonformula = document.querySelector(`h1[name="textonly"]`)
console.log(bycommonformula);


// let a1 = document.querySelector('h1[class="person"]')
// console.log(a1)

let a2 = document.querySelector('h1[class="name"]')
console.log(a2);

// let text = document.querySelector('h1').textContent
// console.log(text)

let text1 = document.querySelector('h1').textContent
console.log(text1);

//program1
// byTagname.addEventListener('click', function () {
//     byTagname.textContent = "Vaibhav"

// })

bytagname.addEventListener('click', function () {
    bytagname.textContent = "Chaudhari"
})

//program 2

// byclassName.addEventListener('click', function () {
//     byclassName.textContent = byclassName.textContent.toUpperCase()
//     byTagname.style.color="red"
// })

 
byclassname.addEventListener("click", function () {
    byclassname.textContent = byclassname.textContent.toUpperCase()
    bytagname.style.color = "red"
})


