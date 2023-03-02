let ullist = document.querySelector('ul')
let addMebtn = document.querySelector('#btn')
let inputBox = document.querySelector('input')

//step 1
addMebtn.addEventListener('click', function () {
    let text = inputBox.value
    let newLi = document.createElement('li')
    newLi.textContent = text

    //step 3
    createButton(newLi)

    ullist.appendChild(newLi)
    inputBox.value = ""
})






//step 4
ullist.addEventListener('click', function (event) {
    if (event.target.tagName === "BUTTON") {

        if (event.target.className == "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }

        else if (event.target.className == "up") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevLi = li.previousElementSibling

            if (prevLi) {
                ul.insertBefore(li, prevLi)
            }
        }

        else if (event.target.className == "down") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let NextLi = li.nextElementSibling

            if (NextLi) {
                ul.insertBefore(NextLi, li)
            }

        }

    }

})






//step 2
function createButton(element) {
    let remove = document.createElement('Button')
    remove.textContent = "Remove"
    remove.className = 'remove'
    element.appendChild(remove)

    let up = document.createElement('Button')
    up.textContent = "Up"
    up.className = 'up'
    element.appendChild(up)

    let down = document.createElement('Button')
    down.textContent = "Down"
    down.className = 'down'
    element.appendChild(down)
}
