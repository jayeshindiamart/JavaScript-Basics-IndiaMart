console.log('one')
console.log('two')
console.log('three')


// Asynchronous

console.log('one')
setTimeout(function() {
    console.log('two')
}, 3000)
console.log('three')