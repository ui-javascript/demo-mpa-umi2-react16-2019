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

let co = require('co')
co(r()).then(function(data) {
    console.log(data)
})

// 2.txt => 3.txt => 结束 => undefined
