let ullist = document.querySelector('ul')
let input = document.querySelector('input')
let buttonone = document.querySelector('#click')

ullist, addEventListener('click', function (event) {

    if (event.targe.tagname === "BUTTON") {

        if (event.target.classname === "remove") {

        }

        else if (event.target.classname === "up") {

        }

        else if (event.target.classname === "down") {

        }
    }
})








buttonone.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    createButton(newLi)
    ullist.appendChild(newLi)
    input.value = ""

})





function createButton(li) {

    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.classList.add("remove")
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add("up")
    li.appendChild(up)


    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add("down")
    li.appendChild(down)


}