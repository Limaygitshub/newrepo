let ullist = document.querySelector('ul')
let inputbox = document.querySelector('input')
let AddMeBtn = document.querySelector('#Addmebtn')


AddMeBtn.addEventListener('click',function(){
    // let text = inputBox.value
    // let newLI = document.createElement('li') //<li></li>
    // newLI.textContent = text //<li>userEnterText</li>
    // ulList.appendChild(newLI)

    let text=inputbox.value
    let NewLI=document.createElement('li')
    NewLI.textContent=text
    ullist.appendChild(NewLI)

})