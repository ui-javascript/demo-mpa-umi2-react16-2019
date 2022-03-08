const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function() {
    return someOtherAsyncThing();
}).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2; // --> oh no ReferenceError: x is not defined
}).catch(function(error) {
   // catch方法之中，还能再抛出错误!!
    console.log('carry on', error); // --> carry on ReferenceError: y is not defined
});