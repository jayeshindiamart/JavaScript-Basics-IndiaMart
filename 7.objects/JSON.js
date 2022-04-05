var user = {
    "userId": "Scott",
    "id": 1,
    "title": "some title",
    "completed": true
}

// Convert an Object into string
var JSONString = JSON.stringify(user)
console.log(JSONString, typeof JSONString)

// Convert string back to object
var JSONParse = JSON.parse(JSONString)
console.log(JSONParse, typeof JSONParse)