var person1 = { firstName: 'Scott', lastName: 'Desatnick' }
var person2 = { firstName: 'Adam', lastName: 'Colson' }
var person3 = { firstName: 'Tuan', lastName: 'Bui' }

function display(message, city) {
    // console.log(this)
    return message + ' to ' + city + ' ' + this.firstName + ' ' + this.lastName
}

//var displayUsingBindOne = display.bind(person2)()

var displayUsingBind = display.bind(person3)
console.log(displayUsingBind("Welcome", "Vietnam"))

var displayUsingBind = display.bind(person3, "Welcome", "Vietnam")
console.log(displayUsingBind())


var displayUsingCall = display.call(person1, "Welcome", "Boston")
console.log(displayUsingCall)

var displayUsingCall = display.apply(person2, ["Welcome", "Vietnam"])
console.log(displayUsingCall)