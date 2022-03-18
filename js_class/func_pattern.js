// Factory Pattern
const Book = function (author, name, price) {
    return {
        author,
        name,
        price,
        authorSay: function(){
            console.log(this.author + ' says that is a motivational book')
        },
        canDo: function(){
            console.log(this.name + ' has huge concepts')
        }
    }
}

// const book1 = Book('habib','js book', 500)
// book1.authorSay()


//Constructor pattern
const Car = function (name, company){
    this.name = name;
    this.company = company;
    
    this.drive = function (name){
        console.log(`i can drive ${name}`)
    };

    this.stop = function (){
        console.log(this.name + ' stop the car')
        console.log(this)
    }
}

const car = new Car('audi', 'audi')
const car1 = new Car('bmw', 'bmw')
// console.log(car)
// console.log(car1)
// car1.stop('bmw')


function func (c, d) {
    console.log(this.a + this.b +c+d)
    console.log(this)
}
// func.call({a:5,b:3}, 1,2)
// func.apply({a:5,b:3}, [2,2])
const b= func.bind({a:5,b:3})
// console.log(b(5,5))

var n = 10
function a(n){
    var n = n + 100
    console.log(n)
}
a(n)
console.log(n)