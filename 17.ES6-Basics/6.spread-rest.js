// /**
//  * ? (...) spread operator - unpacks all the elements from array
//  * ? (...) rest operator - packs elements into array
//  */

// // spread operator 
// const odd = [1, 3, 5]
// const combined = [2, 4, 6, ...odd]
// console.log(combined)

// // rest operator 
// function display(a, b, c, ...args) {
//     console.log(args)
// }

// display(1, 2, 3, 4, 5)

// // constructing array literal
// let initialChars = ['A', 'B']
// let chars = [...initialChars, 'C', 'D']

// console.log(chars)

// // concat array
// let numbers = [1, 2]
// let moreNumbers = [3, 4]
// let allNumbers = [...numbers, ...moreNumbers]
// console.log(allNumbers)

// // copying an array
// let scores = [80, 70, 90]
// let copiedScores = [...scores]
// console.log(copiedScores)

// // spread operator using string

// let charsNew = ['A', ...
//     'BCD', 'E'
// ]

// console.log(charsNew)

// // spread oprator using Object 

// let circle = {
//     radius: 10
// };

// let colordCircle = {
//     ...circle,
//     color: 'blue'
// }

// console.log(colordCircle)

// //  Merging objects
// const square = {
//     radius: 10
// };

// const style = {
//     backgroundColor: 'red'
// };

// const solidSquare = {
//     ...square,
//     ...style
// };

// console.log(solidSquare);

var studentObj = {}
Object.assign(studentObj, { name: 'Scott', city: 'Boston' })
console.log(studentObj)

// var customerObj = {}
// options = { ...customerObj, ...studentObj }

// console.log(customerObj)