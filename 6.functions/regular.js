function greet() {
    console.log('Hello World')
}

greet()

// Function awlays returns a value 
// Function can return any type
function sample() {
    //return 1
    // return "Scott"
    //return true
    //return null
    // return undefined
    //return function(){}
    // return {}
    // return []
    // return
}

console.log(sample())

function getName(firstName, lastName) {
    return firstName + ' ' + lastName
}

function getName(firstName, lastName, middleName) {
    return firstName + ' ' + lastName + ' ' + middleName
}

function getName() {
    //return firstName + ' ' + lastName + ' ' + middleName
}

// javascript supports Function overriding doesn't support function over loading 

console.log(getName("Scott", "Desatnick"))
console.log(getName("Adam", "Colson"))
console.log(getName("Tuan", "Bui"))
console.log(getName())

console.log(getName("Uma", "Mahesh", "Meka"))