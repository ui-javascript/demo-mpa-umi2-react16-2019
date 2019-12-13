// 测试
const myPromise = require("./libs/myPromise")

let p1 = new myPromise((resolve, reject) => {
    // reject('hello error');

    // if reject --> 不应该执行到这里
    setTimeout(() => {
        resolve('hello promise')
    }, 1000)
})

let p2 = new myPromise((resolve, reject) => {
    resolve('数据');

    setTimeout(() => {
        console.log('hello promise')
    }, 1000)
})

p1.then((data) => console.log(data), (err) => console.log(err))
p2.then((data) => console.log(data), (err) => console.log(err))

