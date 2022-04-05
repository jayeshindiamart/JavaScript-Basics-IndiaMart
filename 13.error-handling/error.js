try {
    // Code that may throw error
} catch (ex) {
    // code to be executed if an error occurs
} finally {
    // Code to be executed regradless of an error occurs or not
    // This is for code cleanup
}

try {
    var output = getMeassage()
} catch (ex) {
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
}

try {
    var num = 1
    num.toPrecision(500)
} catch (ex) {
    console.log(ex)
}

try {
    eval("alert('hello)")
} catch (ex) {
    console.log(ex)
} finally {
    console.log('This code will always be executed')
}

try {
    throw "error occured"
} catch (ex) {
    console.log(ex)
}

try {
    var studentCount = 2
    if (studentCount > 1) {
        var obj = {
            studentId: 101,
            message: 'There are duplicate records for this student'
        }
        throw obj
            //throw Error('There are duplicate records for this student')
    }
} catch (ex) {
    console.log(ex)
}