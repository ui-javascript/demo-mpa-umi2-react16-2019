// 测试
const myPromise = require("./myPromise")

let p1 = new myPromise((resolve, reject) => {
    reject('hello error');

    // 不应该执行到这里
    setTimeout(() => {
        resolve('hello promise')
    }, 1000)

})

p1.then((data) => console.log(data), (err) => console.log(err))