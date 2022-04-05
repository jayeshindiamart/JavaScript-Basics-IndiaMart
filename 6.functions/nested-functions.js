function one() {
    return function two() {
        return function three() {
            return 1
        }
    }
}

// 1st Way
var functionOne = one()
var functionTwo = functionOne()
var functionThree = functionTwo()
console.log(functionThree)

//2nd Way
console.log(one()()())

function sample() {

    var display = function() {
        return "Display method is called"
    }

    var message = display()

    return message
}

console.log(sample())

// function with inner function with same name as outer function
function test() {
    return function test() {

    }
}

console.log(test())