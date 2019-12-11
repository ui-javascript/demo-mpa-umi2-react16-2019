const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
})
    .then(result => result)
    .catch(e => e);

// 调用的是Promise.all()的catch!!
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log('catch里的' + e));