let ullist = document.querySelector('ul')
console.log(ullist);

let lilist = document.querySelector('li')
console.log(lilist);

let li = document.querySelector('.flw')
console.log(li);

let newli = document.querySelectorAll('.flw')
console.log(newli);



for (let i = 0; i < newli.length; i++) {
    if (i % 2 == 0) {
        newli[i].style.color="Red"
    }
    else{
        newli[i].style.color="green"
    }
}

//Html Collection // Node List
let A1=document.getElementsByClassName('flw')
console.log(A1);
console.log(A1.length);
