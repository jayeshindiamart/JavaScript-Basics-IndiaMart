// Concat
var fruits = ["Oranges", "Apple", "Banana", "Guava"]
var vegetables = ["Potato", "Tomato", "Brinjal", "Drumstick"]

var mix1 = fruits.concat(vegetables)
console.log(mix1)

var mix2 = vegetables.concat(fruits)
console.log(mix2)

// Split - Convert string into an array

var fullName = "Scott Desatnick Boston"

var names = fullName.split(' ')
console.log(names)

// Join - Convert Array into String

var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "Mars"]

var moviesString = movies.join(',')
console.log(moviesString, typeof moviesString)