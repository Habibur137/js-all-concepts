

// higher order function is a function that is recieved a function as a peramiter or return a function 


function cow(callback){
    console.log('hamba hamba hyamba');
    if(callback instanceof Function){
        callback()
    }
    else{
        console.log('hey callback looking for u')
    }
    
}

cow(function (){
    console.log('bag mama halum kore')
})

// callback function is a function thai is ionvoked after other function where from called

// function multiply(x){
//     return function (y){
//         return x * y
//     }
// }

const multiply = x => y => x * y

const double = multiply(5)
console.log(double(5))




