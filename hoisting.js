
// var keyword hoisting
// var a;
// a = undefined;

// console.log(a)
// var a = 'bangladesh'

// //let hoisting
// // let b; b = undefiend;
// console.log(b)
// let b = 'bangladesh'

let LANGUAGE = 'JAVA'
let language = 'javascript'

function getLanguage(){
    if(!language){
        let language = LANGUAGE
    }
    return language
}

console.log(`I Love ${getLanguage()}`)

function myFunc(){
    language = 'javascript'
    var language;
    console.log(language)
}

myFunc()

myFunc1()
const myFunc1 = function(){
    let language;
    language = 'javascript'
    console.log(language)
}






