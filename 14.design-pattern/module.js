// var Module = (function() {

// })()

// // Private Methods

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }
// })()

// // Undestanding the return
// // Anonymous object Literal
// var Module = (function() {
//     return {
//         privateMethod: function() {

//         },
//         publicMethod: function() {

//         }
//     }
// })()

// console.log(Module)

// Locally Scoped Object literal

// var Module = (function() {

//     var myObj = {}

//     var privateMethod = function() {

//     }

//     myObj.publicMethod = function() {

//     }

//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Object literal

// var Module = (function() {

//     var privateMethod = function() {

//     }

//     var myObj = {
//         someMethod: function() {

//         },
//         anotherMethod: function() {

//         }
//     }

//     return myObj
// })()

// console.log(Module)