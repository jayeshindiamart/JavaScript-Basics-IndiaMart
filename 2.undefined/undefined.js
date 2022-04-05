var a;
console.log(a, typeof a)

if (a === undefined) {
    console.log('a is undefined')
} else {
    console.log('a is defined')
}

var b = undefined; // never use this syntax

console.log(b)

function c() {
    // return 1
}

b = c()
console.log(b)