function calc(a, b) {
    console.log(a + b)
}
calc(5, 25)

//switch cases
//switch case without break

let day1 = 5
switch (day1) {
    case 1:
        console.log("Monday")
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('WednesDay')
    case 4:
        console.log('Thrusday')
    case 5:
        console.log('Friday')
    case 6:
        console.log('Saturday')
    case 7:
        console.log('Sunday')
}

console.log("******************************")
//switch cases with break
let day2 = 1
switch (day2) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('WednesDay')
        break
    case 4:
        console.log('Thrusday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
}

console.log("******************************")

let city1 = "Nashik"
switch (city1) {
    case "Pune":
        console.log('MH')
        break
    case "Ujjan":
        console.log('MP')
        break
    case "jaypur":
        console.log('Rj')
        break
    default:
        console.log('Invalid city')
}

console.log("******************************")

let city2 = "Indore"
switch (city2) {
    case "Pune":
    case "Nashik":
        console.log('MH')
        break
    case "Ujjan":
    case "Indore":      
        console.log('MP')
        break
    case "jaypur":
        console.log('Rj')
        break
    default:
        console.log('Invalid city')
}

console.log("******************************")

let coutry = "India"
switch (coutry) {
    case "France":
    case "Spain":
    case "Netherland":
    case "Italy":
        console.log('This country is in Europe')
        break
    case "United States":
    default:
        console.log('This country is not in Europe')
}

console.log("******************************")
