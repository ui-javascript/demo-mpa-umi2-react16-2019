let sym = Symbol();
console.log(Boolean(sym)) // true
console.log(!sym)  // false


console.log(Number(sym)) // TypeError
console.log(sym + 2) // TypeError


