let lim1 = new Promise(function (resolve, reject) {
    FName = "lima"
    if (FName.length >= 5) {
        resolve("Long Name");
    }
    else {
        reject("Short Name");
    }
})
lim1.then(function (res) {
    console.log(res);
}, function (res) {
    console.log(res);
})



let lim2 = new Promise(function (resolve, reject) {
    FstName = "TonyStark"
    if (FstName.length >= 5) {
        resolve("Long Name");
    }
    else {
        reject("Short Name");
    }
})
lim2.then(function (res) {
    console.log(res);
}).catch(function (res) {
    console.log(res);
})


let lim3 = new Promise(function (resolve, reject) {
    FstName = "Tony"
    if (FstName.length >= 5) {
        resolve("Long Name");
    }
    else {
        reject("Short Name");
    }
})
lim3.then(function (res) {
    console.log(res);
}).catch(function (res) {
    console.log(res);
}).finally(function (res) {
    console.log("I Always Be Executed");
})
