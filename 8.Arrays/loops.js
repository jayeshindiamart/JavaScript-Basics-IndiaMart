var names = ["Scott", "Adam", "Tuan"]

// for loop
console.log("********Using For Loop********")
for (var i = 0; i < names.length; i++) {
    //console.log(i, names.length)
    console.log(i, names[i])
}

// forEach
console.log("********Using ForEach Loop********")
names.forEach(function(name, index) {
    console.log(index, name)
})

// Map
console.log("********Using map Loop********")
names.map(function(name, index) {
    console.log(index, name)
})

console.log("********ForEach vs Map********")

var forEachNames = names.forEach(function(name, index) {
    var obj = {
        index: index,
        name: name
    }
    return obj
})

console.log(forEachNames)

var mapNames = names.map(function(name, index) {
    var obj = {
        index: index,
        name: name
    }
    return obj
})

console.log(mapNames)

// for in 
console.log("********Using For..In Loop********")
for (var name in names) {
    console.log(name)
}

// for of 
console.log("********Using For..Of Loop********")
for (var name of names) {
    console.log(name)
}

// for of 
console.log("********Using For..Of and Object.entries********")
for (var [index, name] of Object.entries(names)) {
    console.log(index, name)
}