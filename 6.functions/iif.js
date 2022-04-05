(function() {
    console.log('Addition is completed')
})();

// (function(){
//     console.log('Addition is completed') 
// }())

var total = (function(a, b) {
    return a + b
})(10, 20)

console.log(total)

// function confirm(message){
//     return "Here is the confirmation"
// }

var data = (function confirm(message) {
    return message
})("Here is the confirmation")

console.log(data)