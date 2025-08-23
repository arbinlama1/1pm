var num = 40;
var num2 = 20;
var sum = num + num2;
var sub = num - num2;
var multi = num * num2;
var div = num / num2;
var mod = num % num2;
console.log(`The addition fo ${num} and ${num2} is ${sum}`);
console.log(`The subtraction of ${num} and ${num2} is ${sub}`);
console.log(`The multiple of ${num} and ${num2} is ${multi}`);
console.log(`The division of ${num} and ${num2} is ${div}`);
console.log(`The modulo of ${num} and ${num2} is ${mod}`);

let num3 = 4;
if(num3 % 2 == 0) {
    console.log("Given number is even", num3);
}
else {
    console.log("The given number is odd");
}


let amount = 1000;
if(amount % 500 ==0) {
    console.log("You can Withdraw amount", amount);
}else {
    console.log("You can't Withdraw amount must be multiple of the 500");
}

let c_num = 50;
let c_num1 = 0;

if(c_num1 == 0) {
    console.log("Can't divided by 0");
}else {
    let div = c_num / c_num1;
    console.log(`${c_num} divided by ${c_num1} is ${div}`);
}


// check the greater number
let x = 80;
let y= 60;
let z = 40;
if(x > y && x > z ) {
    console.log(`${x} is the greater number`);
}else if (y > z) {
    console.log(`${y} is the greater number`);
}else {
    console.log(`${z} is greater number`);
}

// lowest number
let x1 = 10;
let y2 = 5;
let z2 = 30;
if(x1 < y2 && x1 < z2) {
    console.log(`${x1} is lowest number`);
}
else if(y2 < x1 && y2 < z2) {
    console.log(`${y2} is lowest number`);
}
else {
    console.log(`${z2} is lowest number`);
}