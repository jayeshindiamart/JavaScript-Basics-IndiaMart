// Class
class Student {

}

console.log(Student)

// Instance
var studentObj1 = new Student() // studentObj1 is an instance
var studentObj2 = new Student() // studentObj2 is an instance

console.log(studentObj1)
console.log(studentObj2)

// constructor

class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullname() {
        return this.firstName + ' ' + this.lastName
    }

    getMessage() {
        return "This is welcome message"
    }
}

var customer1 = new Customer("Scott", "Desatnick") // Customer() constructor
console.log(customer1)
console.log(customer1.getFullname())
console.log(customer1.getMessage())