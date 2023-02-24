

let ulList = document.querySelector('ul')
console.log(ulList)

let inputBox = document.querySelector('input')
console.log(inputBox)

let btn = document.querySelector('button')
console.log(btn)



btn.addEventListener('click', function () {
    let text = inputBox.value
    let newlist = document.createElement('li')
    newlist.textContent = text
    ulList.appendChild(newlist)
    inputBox.value = " "
})
