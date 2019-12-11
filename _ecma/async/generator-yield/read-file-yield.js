let fs = require('fs')

function read(file) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) reject(err)

            resolve(data)
        })
    })
}

function* r() {
    let r1 = yield read('./1.txt')
    let r2 = yield read(r1)
    let r3 = yield read(r2)
    console.log(r1)
    console.log(r2)
    console.log(r3)
}
let it = r()
let { value, done } = it.next()
value.then(function(data) { // value是个promise
    console.log(data) //data=>2.txt
    let { value, done } = it.next(data)
    value.then(function(data) {
        console.log(data) //data=>3.txt
        let { value, done } = it.next(data)
        value.then(function(data) {
            console.log(data) //data=>结束
        })
    })
})
// 2.txt=>3.txt=>结束
