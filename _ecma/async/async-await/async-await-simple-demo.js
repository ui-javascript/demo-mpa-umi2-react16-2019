let fs = require('fs')
function read(file) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function read1() {
    let r = await read('1.txt','utf8')
    console.log(r)
}
async function read2() {
    let r = await read('2.txt','utf8')
    console.log(r)
}

function readAll() {
    read1()
    read2() //这个函数同步执行
}

readAll()
// 2.txt 3.txt
