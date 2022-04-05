/**
 *  ? Class
 */

function Student() {

}

/**
 *  ? Instance
 */

function Person() {

}

var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance


/**
 *  ? Constructor
 */

function Order() {
    console.log('Order is initiaized')
}

var order = new Order() // Order() is a constructor

/**
 *  ? Property
 */

function Customer(gender) {
    this.gender = gender
}

var customer1 = new Customer('Male')
var customer2 = new Customer('Female')

console.log(customer1)
console.log(customer2)