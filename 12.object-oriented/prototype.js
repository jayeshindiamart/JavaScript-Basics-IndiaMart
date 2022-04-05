function Student() {
    this.name = 'Scott'
    this.gender = 'Male'
}

var studObj1 = new Student()
studObj1.age = 45
console.log(studObj1.age)

var studObj2 = new Student()
console.log(studObj2.age)

/* 
 * This can be handled using Prototype
 */

function Student() {
    this.name = 'Scott'
    this.gender = 'Male'
}

Student.prototype.age = 45

var studObj1 = new Student()
console.log(studObj1.age)

var studObj2 = new Student()
console.log(studObj2.age)


function Student(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
        // this.getFullName = function(){
        //     return this.firstName + ' ' + this.lastName
        // }
}

Student.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

var student1 = new Student("Scott", "Desatnick")
console.log(student1)

var student2 = new Student("Scott", "Desatnick")
console.log(student2)

var student3 = new Student("Scott", "Desatnick")
console.log(student3)