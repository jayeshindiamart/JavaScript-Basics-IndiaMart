// var add = function(x, y){
//     return x+y
// }

// var add = (x, y) => {
//     return x+y
// }

/** 
 * ? both are same
 * () => x+y
 * () => { return x + y}
 */

//var add = (x, y) => { return x+y }

// var add = (x, y) => x+y 

// console.log(add(10,20))

// let multiply = (a,b) => {
//     return a*b
// }

// let multiply = (a,b) => a*b


// console.log(multiply(20,40))

// let numbers = [4,2,6]

// numbers.sort((a,b) => b-a) // Descending order

// console.log(numbers)

/**
 *  ? Single Parameter
 *  (p1) => expression
 *   p1  => expression
 */

// let names = ["Scott", "Adam", "Tuan", "Uma"]

// // let lengths = names.map(function(name){
// //     return name.length
// // })

// let lengths = names.map(name =>name.length)

// console.log(lengths)


// With no paremeters

// let logDocument = () => console.log(window.document)
// logDocument()

// line Breaks

// let multiply = (x,y)  //SyntaxError: Unexpected token '=>'
// => x*y

// let multiply = (x,y) => 
// x*y

// console.log(multiply(20,30))

// let setColor = (color) =>{return {value:color}}
let setColor = (color) => ({ value: color })
let backGroundColor = setColor('Green')
console.log(backGroundColor)