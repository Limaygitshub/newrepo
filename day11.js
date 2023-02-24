//switch cases
let month = 3
switch (month) {
    case 1:
        console.log("first week")
    case 2:
        console.log("second week")
    case 3:
        console.log("third week")
    case 4:
        console.log("fourth week")

}

console.log("*******************")

let month1 = 3
switch (month1) {
    case 1:
        console.log("first week")
        break
    case 2:
        console.log("second week")
        break
    case 3:
        console.log("third week")
        break
    case 4:
        console.log("fourth week")
}

console.log("*******************")

let maharashtra = "jalgaon"
switch (maharashtra) {
    case "jalgaon":
        console.log("khandesh")
    case "amravati":
        console.log("vidarbha")
    case "raigad":
        console.log("kokan")
    case "thane":
        console.log("mumbai")
}

console.log("*****************")

let maharashtra1 = "indore"
switch (maharashtra1) {
    case "jalgaon":
        console.log("khandesh")
        break
    case "amravati":
        console.log("vidarbha")
        break
    case "raigad":
        console.log("kokan")
        break
    case "thane":
        console.log("mumbai")
    default:
        console.log("This city is out of Maharshtra....!")
}

console.log("*****************")

let language = "marathi"
switch (language) {
    case "marathi":
    case "hindi":
    case "gujrathi":
    case "tamil":
    case "malayalam":
        console.log("This language is uses in india")
        break
    default:
        console.log("This language is uses out of India")
}
