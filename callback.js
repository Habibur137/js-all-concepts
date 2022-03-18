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
// console.log(result)
// pass a full function
const result1 = calculator(10, 10, function(a, b){
    return a - b
})
// console.log(result1)

function sample(arr, double){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(double(arr[i], i))
    }
    return newArr;
}

// function double(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i] * 2)
//     }
//     return newArr;
// }



let result2 = sample([1,2,3,4], function (value){
    return value * 4
})
let result3 = sample([1,2,3,4], function (value){
    return value * value
})
console.log(result3)

