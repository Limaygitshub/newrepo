{/* <h1 class="one">Student</h1>
        <button id="btn" class="perform">click</button> */}


let a1 = document.querySelector('.one')
console.log(a1);

let a2 = document.querySelector('#btn')
console.log(a2);


//Problem 1
//click on button and change text color, bg color , height width

a2.addEventListener('click',function() {
    a1.textContent='Limay'
    a1.style.color='red'
    a1.style.background='yellow'
    a1.style.width='100px'
    a1.style.height='50px'
})