let ullist = document.querySelector('ul')
let inputbox = document.querySelector('input')
let AddMeBtn = document.querySelector('#Addmebtn')


AddMeBtn.addEventListener('click',function(){
    let text=inputbox.value
    let NewLI=document.createElement('li')
    NewLI.textContent=text
    createbutton(NewLI)
    ullist.appendChild(NewLI)

})




function createbutton(li){
    let remove=document.createElement('button')  // <button></button>
    remove.textContent="Remove"                 // <button>Remove</button>
    remove.classList='remove'                  //<button class = "remove">Remove</button>
    li.appendChild(remove)


    let up=document.createElement('button')
    up.textContent="Up"   
    up.classList='up'
    li.appendChild(up)


    let down=document.createElement('button')
    down.textContent="Down"
    down.classList='down'
    li.appendChild(down)

}