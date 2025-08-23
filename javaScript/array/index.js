let students = ['ram', 'hari', 'madan','shyam','gita'];
students.push("arbin");
students.pop();

students.splice(3, 2, "hanok","aman", "arjun");
// console.log(students);
for(let i =0; i < students.length; i++) {
    console.log(students[i]);
}