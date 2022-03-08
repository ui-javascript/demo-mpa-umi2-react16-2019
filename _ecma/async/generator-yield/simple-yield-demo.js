function *foo(x) {
    let y = 2 * (yield (x + 1)) // 5 + 1 --> 6
    let z = yield (y / 3) // 12 * 2 /3 --> 8
    return (x + y + z) // 5 + 24 + 13 --> 42
}

let it = foo(5)

// 当执行第一次 next 时，传参会被忽略
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}
