// function b(){
//     console.log('b is called')
// }

// b()

// console.log(a)

// var a ='Hello World'

// console.log(a)

// // b is called
// // undefined
// // hello world 

// function b(){
//     var x
// }

// function a (){
//     var x =2
//     b()
// }

// var x =1
// a()
// console.log(x)

function b() {
    var myvar
    console.log(myvar)
}

function a() {
    var myvar = 2
    console.log(myvar)
    b()
}

var myvar = 1
console.log(myvar)
a()
console.log(myvar)