setTimeout(function () {
    console.log(1);
});

new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)

    // return resolve(3) // --> return 之后就无法打印后边的语句
    console.log('能插队吗??')
}).then(function(val){
    console.log(val);
})

console.log(4);

// 2 -> 我应该能被打印吧?? --> 4 -> 3 -> 1