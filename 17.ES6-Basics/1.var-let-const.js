/**
 *  * var - let - const
 *  ? var is function scoped 
 *  ? let, const are block scoped
 */

// function sample() {
//     var foo = "blue"
//     console.log(foo) // blue
// }

// sample()
// console.log(foo) // ReferenceError: foo is not defined

// function display() {
//     if (true) {
//         var foo = "Hello"
//         let bar = 'How are you ?'
//         const baz = "I am fine"

//         console.log(foo)
//         console.log(bar)
//         console.log(baz)
//     }

//     console.log(foo) // Hello
//         // console.log(bar) //ReferenceError: bar is not defined
//         // console.log(baz) //ReferenceError: baz is not defined
// }

// display()

// for(var count=0; count<3; count++){

//     console.log(count)
// }
// console.log(count)

// for(let count=0; count<3; count++){

//     console.log(count)
// }
//console.log(count) //ReferenceError: count is not defined

// Redefining let and const


function sample() {
    var a = 1
    a = 10

    var a = 101

    // let foo = 1;

    // foo = 10

    // //let foo =101 // can't re-declare block scoped variable

    // const bar = 100

    // bar = 200 //TypeError: Assignment to constant variable

    //const bar = 300  // can't re-declare block scoped variable
}

sample()

const names = ["scott", "adam", "tuan"]

names.push('Uma')

//names = ["scott", "adam", "tuan", "uma"]

console.log(names)