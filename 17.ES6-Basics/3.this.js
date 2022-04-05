// // var employee = {
// //     id: 1,
// //     greet: function() {
// //         console.log(this.id)
// //     }
// // }

// // employee.greet() // output: 1

// // useSettimeOut - issue 

// var employee = {
//     id: 1,
//     greet: function() {
//         console.log(this)
//         setTimeout(function() {
//             console.log(this)
//             console.log(this.id)
//         }, 1000)
//     }
// }

// employee.greet()

// using 'self variable
// var employee = {
//     id: 1,
//     greet: function() {
//         var self = this
//         setTimeout(function() {
//             console.log(self)
//             console.log(self.id)
//         }, 1000)
//     }
// }

// employee.greet()


// using bind

var employee = {
    id: 1,
    greet: function() {
        console.log(this)
        setTimeout(function() {
            console.log(this)
            console.log(this.id)
        }.bind(this), 1000)
    }
}

employee.greet()