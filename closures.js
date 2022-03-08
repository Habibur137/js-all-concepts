/* let name1 = 'habib'
let name2 = 'rahman'
const addName = function(){
    return name1 + name2;
}
console.log(addName)
 */

// closure function carrys other scope values refrences what his need.
var num = 5;
const sum = function(){
    var num1 = 10;
    function name(){
        return 10;
    }
    return function (){
        return num + num1 + name();
    }
}
const result = sum()
console.dir(result)

//protected variable by closure
function bankBalance(salary){
    const balane = salary
    return function(){
        return balane
    }
}
const balane = bankBalance(100000)
console.dir(balane)