/**
 *  ? Call back function is a function which is being 
 *  ? passed as a parameter to another function
 */

function sample(value) {
    var message = value()
    return message
}

var display = function() {
    return "here is your callback function"
}

console.log(sample(display))