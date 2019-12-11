const es6Promise = require("./es6Promise")

let p1 = new es6Promise((resolve, reject) => {
    reject('hello error');

    // 不应该执行到这里
    setTimeout(() => {
        resolve('hello promise')
    }, 1000)

})

p1.then((data) => console.log(data), (err) => console.log(err))