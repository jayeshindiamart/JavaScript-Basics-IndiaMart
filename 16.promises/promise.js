// console.log('one')
// setTimeout(function(){
//     console.log('two')
// }, 3000)
// console.log('three')

// Promise - deals with asynchronous calls
// we can make our code synchronous


// function getData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('two')
//         }, 3000)
//     })
// }

// console.log('one')

// getData().then(function(data) {
//     console.log(data)
//     console.log('three')
// })

function display() {
    return new Promise(function(resolve, reject) {
        if (1 == 1) {
            resolve('Here is your data')
        } else {
            reject('Sorry there is no data')
        }
    })
}

display()
    .then(function(data) {
        return data + " returned by then"
    }).then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })

display()
    .then(function(data) {
        return new Promise(function(resolve, reject) {
            resolve(data + " returned by then using promise")
        })
    }).then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })