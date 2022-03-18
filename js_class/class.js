/* const rect = {
    width: 100,
    height: 50,
    draw: function(){
        this.output()
    },
    output: function(){
        console.log(this.height)
        console.log(this.width)
    }
    
}

rect.draw() */
// factory pattern to create object
var createRect = function (width, height){
    return {
        width,
        height,
        draw: function(){
            this.output()
        },
        output: function(){
            console.log(this.height)
            console.log(this.width)
        }
    }
}

/* var rect1 = createRect(5 ,2)
rect1.draw()
var rect2 = createRect(5 ,7)
rect2.draw() */

// constructor pattern to create object

var RectAngle = function (width, height){
        this.width = width,
        this.height = height,

        this.draw = function(){
            this.output()
        }

        this.output = function(){
            console.log(this.height)
            console.log(this.width)
        }
}

var rect3 = new RectAngle(5, 7)
rect3.draw()