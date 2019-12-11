function * fetchDemo() {
    yield fetch('/mock/user.json', () => {})
    yield fetch('/mock/users.json', () => {})
}

let it = fetchDemo()
let result1 = it.next()
console.log(result1)

let result2 = it.next()
console.log(result2)

