// function saySomething(message){
//     message = typeof message !== 'undefined' ? message : 'hi'
//     console.log(message)
// }

// saySomething('Hello') // 

// deafult param

function saySomething(message = "hi") {
    console.log(message)
}

saySomething('Hello') // 

function saySomething(city, message = "hi") {
    console.log(message, city)
}

saySomething('Boston')