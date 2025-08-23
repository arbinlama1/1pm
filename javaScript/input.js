// let num1 = prompt("Enter your first number");
// let num2 = prompt("Enter your second number");

// let sum = +num1 + +num2;
// alert(sum);

let num1 = +prompt("Enter your first number");
let opr = prompt("Enter the operators");
let num2 = +prompt("Enter your second number");
let result = 0;
if(opr == '+') {
    result = num1 + num2;
}
else if(opr == '-') {
    result = num1 - num2;
}
else if(opr == '/') {
    result = num1 / num2;
}
else if (opr == '%') {
    result = num1 % num2;
}
else if(opr == '*'){
    result = num1 * num2;
}
else {
    alert("invalid operators");
}
alert(result);