function calculator(a, b, callback){
    const add = a + b
    const sub = a - b
    return callback(add, sub)
}

function add(a, b){
    return a + b
}
// pass a function name
const result = calculator(5, 5, add)
console.log(result)
// pass a full function
const result1 = calculator(10, 10, function(a, b){
    return a - b
})
console.log(result1)