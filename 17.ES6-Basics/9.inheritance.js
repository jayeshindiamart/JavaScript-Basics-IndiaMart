class Shape {
    constructor() {

    }

    draw() {
        return "I am genric shape"
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }

    draw() {
        return "I am Circle"
    }

    getData() {
        return {
            name: 'Scott',
            email: 'scott@ef.com',
            city: 'Boston'
        }
    }
}

var circleObj = new Circle()
console.log(circleObj.draw())
console.log(circleObj.getData())