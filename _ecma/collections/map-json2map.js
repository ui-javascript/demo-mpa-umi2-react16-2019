function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'))