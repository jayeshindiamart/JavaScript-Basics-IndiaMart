// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         some : someMethod,
//         another: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing Private Method
var Module = (function() {
    var privateMethod = function(message) {
        console.log(message)
    }

    var publicMethod = function(text) {
        privateMethod(text)
    }


    return {
        publicMethod: publicMethod
    }
})()

console.log(Module.publicMethod("Calling private method"))