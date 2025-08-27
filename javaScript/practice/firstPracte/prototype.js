const student = {
    student(firstName, lastName, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.marks = marks;
    },
    
    printMarks: function() {
        console.log(this.marks);
    
    },
};
const Employee = {
    tax(a){
        let tax = (a * 10) /100;
        console.log("Employee should pay tax 10% of there income");
        console.log(`Your Tax amount is Rs ${tax}`)
    }
}

student.__proto__= Employee;
console.log(student);
console.log(student.tax(5000))
student.__proto__.nationallity = "Nepali";
console.log(student.nationallity);


student.__proto__.detail = function(firstName, lastName, marks) {
    console.log(`Full Name ${firstName} ${lastName} Makrs ${marks}`);
}
console.log(student.detail("arbin", "lama", 50))