const ES6Promise = require("./libs/es6Promise")

let p1 = new ES6Promise((resolve, reject) => {
    reject('hello error');

    // reject --> 不应该执行到这里
    setTimeout(() => {
        resolve('hello promise')
    }, 1000)

})


let p2 = new ES6Promise((resolve, reject) => {
    resolve("这里是数据")
    console.log('HAHA')

    // 这里不会执行
    setTimeout(() => {
        console.log("hello promise")
        // resolve('hello promise')
    }, 1000)

})

p1.then((data) => console.log('输出数据: ' + data), (err) => console.log(err))
p2.then((data) => console.log('输出数据: ' + data), (err) => console.log(err))