// Array Destructuring

let names = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = names

console.log(name1) // names[0]
console.log(name2) // names[1]
console.log(name3) // names[2]

// split

let [firstname, lastName] = "Scott Desatnick".split(" ")

console.log(firstname)
console.log(lastName)

let [fname, , city] = ["Scott", "scott@ef.com", "Boston"]

console.log(fname)
    //console.log(email)
console.log(city)

// Object Destructuring
let user = {
    name: 'Scott',
    skill: 'Great Boss'
}

let { name, skill } = user

console.log(name)
console.log(skill)

let options = {
    title: "menu",
    width: 100,
    height: 200
}

let { title, width, height } = options

console.log(title)
console.log(width)
console.log(height)