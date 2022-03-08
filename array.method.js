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
console.log(filter2)


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



/* products.forEach(product => {
    // console.log(Object.keys(product))
    // console.log(Object.values(product[3]))
    const array1 = Object.values(product)
    const obj = {}
    obj.name = array1
   console.log(obj)
}) */

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