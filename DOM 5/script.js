let ulList = document.querySelector('ul')
console.log(ulList)
let inputTextbox = document.querySelector('input')
console.log(inputTextbox)
let button = document.querySelector('button')
console.log(button)



button.addEventListener('click', function () {
    let text = inputTextbox.value //Telgu
    //console.log(text)
    let newLi = document.createElement('li') //<li></li>    this create blank li
    //console.log(newLi)
    newLi.textContent = text //<li>Telgu</li>      this add containt in balnk li
    ulList.appendChild(newLi)
    inputTextbox.value=""
})