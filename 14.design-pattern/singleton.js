// function Database(){
//     console.log('Connection is created')
// }

// var dbConnection1 = new Database()
// console.log(dbConnection1)

// var dbConnection2 = new Database()
// console.log(dbConnection2)

// var dbConnection3 = new Database()
// console.log(dbConnection3)

var Database = (function() {

    var connection = null

    var createConnection = function() {
        var obj = new Object() //{}, object.create(null)
        console.log('Database Connection is created')
        return obj
    }

    var getConnection = function() {
        if (!connection) {
            connection = createConnection()
        }
        return connection
    }
    var obj = {
        getConnection: getConnection
    }
    return obj
        //return getConnection
})()


var dbCon1 = Database.getConnection()
console.log(dbCon1)

var dbCon2 = Database.getConnection()
console.log(dbCon2)

var dbCon3 = Database.getConnection()
console.log(dbCon3)

var dbCon4 = Database.getConnection()
console.log(dbCon4)

// var dbCon1 = Database()
// console.log(dbCon1)

// var dbCon2 = Database()
// console.log(dbCon2)