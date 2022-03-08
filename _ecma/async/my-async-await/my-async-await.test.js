const _asyncToGenerator = require('./libs/MyAsyncAwait')

const asyncFunc = _asyncToGenerator(function* () {
    const e = yield new Promise(resolve => {
        setTimeout(() => {
            resolve('e');
        }, 1000);
    });

    const a = yield Promise.resolve('a');
    const d = yield 'd';
    const b = yield Promise.resolve('b');
    const c = yield Promise.resolve('c');
    return [a, b, c, d, e];
});

asyncFunc().then(res => {
    console.log(res); // --> ['a', 'b', 'c', 'd', 'e']
});
