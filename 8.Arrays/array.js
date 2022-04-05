var data = [
    1,
    "scott",
    true,
    null,
    undefined,
    { name: "Scott" },
    function(name) {
        return name
    },
    ["Red", "Green", "Blue"]
]

// Call the function 
// pass the value of object to function
// print scott finally in broswer

console.log(data[6](data[5].name))

// Call the function 
// pass the value of object to function
// print 'Scott likes Blue' finally in broswer

console.log(data[6](data[5].name) + ' Likes ' + data[7][2])