// 1st way
var array = new Array()

array[0] = "Scott"
array[1] = "Adam"
array[2] = "Tuan"
array[4] = "Uma"
console.log(array)
console.log(array[3])
console.log(array.length)

//2nd way
var students = new Array(3)

students[0] = "Scott"
students[1] = "Adam"
students[2] = "Tuan"
students[3] = "Uma"

console.log(students)

// 3rd way
var people = new Array("Scott", "Adam", "Tuan")
people[3] = "Uma"

console.log(people)
console.log(people[0])
console.log(people[1])
console.log(people[2])
console.log(people[3])