console.log(a) // undefined , error
console.log(c)

var a = 10
var c = 30

console.log(a)
console.log(c)

b()

function b(x, y) {
    console.log(x)
    console.log(y)
    console.log(20)
}

// a = 10
// c = 30

// function b(){
//   console.log(20)
//}

// Hoisting 
// Cycle 1 - memory - lexical environment

// a= undefined
// c = undefined

// function b(){
//     console.log(20)
// }

// Cycle 2
// undefined
// undefined
// a =10
// c=30