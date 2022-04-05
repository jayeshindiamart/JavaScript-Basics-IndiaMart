function greet(message) {
    var city = 'Boston'
    return function welcome(name) {
        return message + ' to ' + city + '. ' + name
    }

}

var sayHello = greet("Welcome")
console.log(sayHello)
var wishMe = sayHello("Scott")

console.log(wishMe)