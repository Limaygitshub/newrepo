let a=document.getElementById('luxury')
console.log(a)

let b=document.getElementsByClassName('car')
console.log(b) //htmlcollection

let c=document.getElementsByTagName('li')
console.log(c)

//***************************************************

//<p class="para" id="luxury">Paragraph</p>
let pElement=document.querySelector('.para')

console.log(pElement)
console.log(pElement.classList)

//to add new class
pElement.classList.add('info_para')

console.log(pElement.classList)

//to remove class
pElement.classList.remove('info_para')
console.log(pElement.classList)

//toggle 

pElement.classList.toggle('detail_of_para')
console.log(pElement.classList)

pElement.classList.toggle('detail_of_para')
console.log(pElement.classList)

