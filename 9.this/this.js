console.log(this)

function sample() {
    console.log(this)
}

sample()

// Prolem is `this` is not consistent
var studentObj = {
    studentName: 'Scott',
    setStudentName: function() {
        console.log(this) // Pointing to StudentObj
        this.studentName = 'Desatnick'
        console.log(this)

        var updateStudentName = function() {
            this.studentName = 'Great Boss'
            console.log(this) // Pointing to Global Window Object

        }

        updateStudentName()
    }
}

studentObj.setStudentName()

// Solving the above problem by assigning this to a variable
var studentObj = {
    studentName: 'Scott',
    setStudentName: function() {
        var self = this
        console.log(self) // Pointing to StudentObj
        self.studentName = 'Desatnick'
        console.log(self)

        var updateStudentName = function() {
            self.studentName = 'Great Boss'
            console.log(self) // Pointing to Global Window Object

        }

        updateStudentName()
    }
}

studentObj.setStudentName()

// Solving the above problem by using bind/ call / apply methods
var studentObj = {
    studentName: 'Scott',
    setStudentName: function() {
        console.log(this) // Pointing to StudentObj
        this.studentName = 'Desatnick'
        console.log(this)

        var updateStudentName = function() {
            this.studentName = 'Great Boss'
            console.log(this) // Pointing to Global Window Object
        }

        // updateStudentName.bind(this)()
        // updateStudentName.call(this)
        updateStudentName.apply(this)
    }
}

studentObj.setStudentName()

// Solving the above problem by calling bind on anonymous function
var studentObj = {
    studentName: 'Scott',
    setStudentName: function() {
        console.log(this) // Pointing to StudentObj
        this.studentName = 'Desatnick'
        console.log(this)

        var updateStudentName = function() {
            this.studentName = 'Great Boss'
            console.log(this) // Pointing to Global Window Object
        }.bind(this)

        updateStudentName()
    }
}

studentObj.setStudentName()