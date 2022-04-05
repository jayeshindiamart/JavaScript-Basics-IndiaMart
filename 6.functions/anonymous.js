// var getMessage = 1
//     getMessage = "Scott"
//console.log(getMessage)
//getMessage = undefined


var getMessage = function() {
    return "Welcome to functions"
}

console.log(getMessage())

var getFullName = function(firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log(getFullName("Scott", "Desatnick"))
console.log(getFullName("Adam", "Colson"))
console.log(getFullName("Tuan", "Bui"))
console.log(getFullName())
console.log(getFullName("Uma", "Mahesh", "Meka"))


var display = function test() {

}

//console.log(test) // ReferenceError: test is not defined