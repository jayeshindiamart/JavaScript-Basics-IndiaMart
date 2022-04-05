function Shape() {

}

Shape.prototype.draw = function() {
    return "I am generic Shape"
}

// Circle

function Circle() {

}

//Inheritance
Circle.prototype = new Shape()

Circle.prototype.draw = function() {
    return "I am a Circle"
}

// Square

function Square() {

}

//Inheritance
Square.prototype = new Shape()

Square.prototype.draw = function() {
    return "I am a Square"
}

// Triangle

function Triangle() {

}

//Inheritance
Triangle.prototype = new Shape()

// Triangle.prototype.draw = function(){
//     return "I am a Triangle"
// }

// var shape = new Shape()
// console.log(shape.draw())

// var circle = new Circle()
// console.log(circle.draw())

// var square = new Square()
// console.log(square.draw())

// var triangle = new Triangle()
// console.log(triangle.draw())

var shapes = [new Shape(), new Circle(), new Square(), new Triangle()]
shapes.forEach(function(shape) {
    console.log(shape.draw())
})