const products = [
    {id:00, name:'phone', brand:'htc', price:7000, color:'blue'},
    {id:11, name:'laptop', brand:'asus', price:15000, color:'gray'},
    {id:22, name:'camera', brand:'canon', price:5000, color:'black'},
    // {id:33, name:'wev cam', brand:'walton', price:2000, color:'red'},
    // {id:44, name:'watch', brand:'rolex', price:1000, color:'blue'},
    // {id:55, name:'sunglass',brand:'gayeb', price:500, color:'red'},
]

const filter = products.filter(product => !product.name.includes('p'))
const filter1 = products.filter(product => !product.name.startsWith('phone'))
const filter2 = products.filter(product => product.name.indexOf('p') !== -1)
const filter3 = products.filter(product => product.name !== 'camera')
// console.log(filter2)


const map = products.map(({name, price}) => {
    return {[name] : price}
})
// console.log(map)
const newMap = map.map(p => p.name)
// console.log(newMap)

const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
// console.log(reformattedArray)
const ob = {id:22, name:'camera', brand:'canon', price:5000, color:'black'}
for(const item in ob){
    // console.log(ob[item])
}



products.forEach(product => {
    for(const pr in product){
        // console.log(pr, product[pr])
        const ob = {pr :product[pr]}
        // console.log(ob)
    }
}) 

const empty = [1, 2, 3, '', undefined, null, NaN, 0, false, 4, 6]
const parse = [1, 2, 3, 4, '5', '6', '7']
const removeFalsyValue = empty.filter(x => x)
const parseStringNumber = parse.map(x => +x)

const handredElement = new Array(100).fill().map( () => Math.floor(Math.random() * 100 + 1))
const removeDuplicateFromhandredElement = new Array(100).fill().map( () => Math.floor(Math.random() * 100 + 1)).filter(element => element == element)
// console.log(removeDuplicateFromhandredElement)
/* const productName = products.map(product => product.name)
const newObj = {id:77, name:'bag', brand:'faltu', price:200, color:'green'}
// console.log(productName)
const currentProducts = [...products, newObj]
// console.log(currentProducts)
const filter1 = products.filter(product => product.name.startsWith('w'))
const filter = products.filter(product => product.name !== 'wev cam')
// console.log(filter)
const cheapProducts = products.find(product => product.price < 7000)
// console.log(cheapProducts) */

// implimentation map method 
function myMap(arr, callback){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let temp = callback(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
// console.log(myMap([1,2,3], function(value){
//     return value * value
// }))

//implimentation filter method
function myFilter(arr, callback){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const evenNumber = myFilter([1,2,3,4,5], function(value){
    return value % 2 == 0
})
// console.log(evenNumber)
//implimentation find method
function find(arr, callback){
    let newItem;
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return newItem = arr[i]
        }
    }
}

console.log(find([{name:'phone', price:400},{name:'laptop', price:600}], function (value, i){
    console.log(value.price)
    return value.price > 500
}))