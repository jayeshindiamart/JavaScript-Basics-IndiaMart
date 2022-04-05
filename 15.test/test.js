console.log(multiply(2)(3)(4)) // 24

function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z
        }
    }
}

var a = 10
var b = a
a = 20
console.log(a)
console.log(b)

var a = [1, 2]
var b = a
a.push(3)
console.log(a)
console.log(b)

var a = [1, 2]
var b = a
a = [1, 2, 3]
console.log(a)
console.log(b)

var name = 1 + 2 + "scott" + 3 + 4

console.log(name)

//12scott34
//3scott34

var output = (function(x) {
    delete x
    return x
})(1)

console.log(output)

var output = (function(x) {
    delete x
    return x
})({ a: 1 })

console.log(output)

var output = (function(x) {
    delete x.a
    return x
})({ a: 1 })

console.log(output)

// How to make an array empty

var array = ['a', 'b', 'c', 'd', 'e', 'f']


//1st way 

// var length = array.length
// for(var i=0; i<length; i++){
//     array.pop()
// }

//2nd way 
//array.splice(0, array.length)

//3rd way 
//array.length = 0

//4th way 
//array =[]

// 5th way 
while (array.length) {
    array.pop()
}
console.log(array)

// Even or Odd

console.log(isEven(3)) //  false
console.log(isEven(6)) //  true
console.log(isEven(7)) //  false


function isEven(value) {
    return value % 2 == 0
}

// get Extension

console.log(getExtnesion("resume.doc")) // doc
console.log(getExtnesion("bangalore.txt")) // txt
console.log(getExtnesion("customer.xlsx")) // txt
console.log(getExtnesion("notepad")) // false

// function getExtnesion(filename){
//     var data = filename.split('.')
//     return data.length > 1 ? data[1] : false
// }

function getExtnesion(filename) {
    return filename.split('.').length > 1 ? filename.split('.')[1] : false
}

/**
 *  * == vs ===
 *  ? == checks for only value
 *  ? === check for both value and data type
 */

console.log(1 == 1)
console.log(1 == '1')
console.log(1 === '1')

/**
 *  * != vs !==
 */

console.log(1 != 1)
console.log(1 != '1')
console.log(1 !== '1')

// ternary operator 
var data = 20

var message = data > 10 ? "Number is greater than 10" // truthy 
    :
    "number is smaller than 10" // falsy

console.log(message)