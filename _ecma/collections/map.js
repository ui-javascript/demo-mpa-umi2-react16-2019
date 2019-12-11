const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
console.log(m.get(o)) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false



