var person = {} // Object Literal Syntax

// 1st way of adding properties
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"
var cityName = "city"

// 2nd way
person[cityName] = "Boston"

// 3rd way
person.email = "scott@ef.com"

person.address = {}
person.address.street = "1st Main"
person.address.state = "massacchusets"

// 4th way
Object.defineProperty(person, 'skill', { value: 'Great Boss' })

console.log(person)


console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])
console.log(person[cityName])

console.log(person.address)
console.log(person.address.state)
console.log(person["address"]["state"])


var student = {
    id: 1,
    name: 'Scott Desatnick',
    isAdmin: true,
    subjects: null,
    grade: undefined,
    details: {},
    getDetails: function() {
        return "Here are the details for you"
    },
    departments: []
}

student.email = "scott@ef.com"

console.log(student)
console.log(student.getDetails())