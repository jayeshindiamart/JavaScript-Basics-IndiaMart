var person = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45
}

person.email = "scott@ef.com" // CREATE a new property
person.firstName = 'Great Scott' // UPDATE an existing property
delete person.age // DELETE an existing property
console.log(person) // READ an existing properties

/**
 *  ? Object.preventExtensions()
 *  ? Can't create new property
 *  ? Update an existing property
 *  ? Delete an existing property
 */

var studentPreventExtensions = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45
}

Object.preventExtensions(studentPreventExtensions)

studentPreventExtensions.email = "scott@ef.com" // CREATE a new property
studentPreventExtensions.firstName = 'Great Scott' // UPDATE an existing property
delete studentPreventExtensions.age // DELETE an existing property
console.log(studentPreventExtensions) // READ an existing properties

/**
 *  ? Object.seal()
 *  ? Can't create new property
 *  ? Update an existing property
 *  ? Can't delete an existing property
 */

var studentSeal = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45
}

Object.seal(studentSeal)

studentSeal.email = "scott@ef.com" // CREATE a new property
studentSeal.firstName = 'Great Scott' // UPDATE an existing property
delete studentSeal.age // DELETE an existing property
console.log(studentSeal) // READ an existing properties

/**
 *  ? Object.freeze()
 *  ? Can't create new property
 *  ? Can't update an existing property
 *  ? Can't delete an existing property
 */

var studentFreeze = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 45,
    address: {
        state: 'massachustes'
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email = "scott@ef.com" // CREATE a new property
studentFreeze.firstName = 'Great Scott' // UPDATE an existing property
delete studentFreeze.age // DELETE an existing property
studentFreeze.address.state = 'Telangana'
console.log(studentFreeze) // READ an existing properties

// We can still modify the object by creating a new copy of it 

var JSONStringyStudent = JSON.stringify(studentFreeze)
console.log(JSONStringyStudent)

var JSONParseStudent = JSON.parse(JSONStringyStudent)
JSONParseStudent.firstName = "Great Scott"
console.log(JSONParseStudent)