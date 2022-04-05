/**
 *  ? Adds elelemnts using Splice 
 * */
var fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.splice(2, 0, "Kiwi", "Guava")

console.log(fruits)


/**
 *  ? Removes elelemnts using Splice 
 * */

var vegetables = ["Potato", "Tomato", "Brinjal", "Drumstick"]

vegetables.splice(2, 2)

console.log(vegetables)




/**
 * ? The slice() method returns selected elements in an array, as a new array.
 * ? The slice() method selects from a given start, up to a (not inclusive) given end.
 * ? The slice() method does not change the original array.
 * */

var fruitsOne = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Guava"];
var slicedFruits = fruitsOne.slice(2, 5)
console.log(fruitsOne)
console.log(slicedFruits)