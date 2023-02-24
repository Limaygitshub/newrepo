{/* <h1 class="abcd">colour</h1>
        <input type="text">
        <button>click To Change</button> */}

let heading = document.querySelector('.abcd')
console.log(heading);

let input = document.querySelector('input[type="text"]')
console.log(input);

let button = document.querySelector('button')
console.log(button);

button.addEventListener('click', function () {
    let userEnteredValues = input.value
    heading.textcontent = userEnteredValues
    heading.style.color = userEnteredValues
    input.value = '' 


})