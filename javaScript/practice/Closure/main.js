console.log("This about the closure in js");

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log("outerVariable " + outerVariable);
//         console.log("innerVariable "+innerVariable);
//     }
// }

// const newFunction = outerFunction("hahaha");
// newFunction("inside");
// function fist(a) {
//     return function display() {
//         console.log(a);
//     }
// }
// let display = fist(2);
// display();

// const greet = name=> {
//     console.log("hello", name);
// }
// greet("arbin");

// const numbers=[1,2,3,4,5];
// const dnum = [];
// const double = numbers.map(i => {
//     dnum.push(i *2);
// })
// console.log("Number:"+numbers);
// console.log("Double numbers:"+dnum);

// //fillter method in array 
// console.log("This is about the fileter method in js");
// let odd = numbers.filter(i => {
//     return i%2 !== 0;
// })
// console.log(odd);

// console.log("This about the slice method:");
// const half = numbers.slice(2,4);
// console.log(half);

// console.log("\nThis is about the splaice method ");
// const addNew = numbers.splice(2,1,"don","haha");
// console.log(addNew);
// console.log(numbers);


const number = [1, 2, 3, 4, 5];
 //with out destruction array element or value is assign like this
 let x = number[1];
 let y = number[2];
 console.log("This index 1 and 2 element", x, y);


//  using destruction
let [a, b]= number;
console.log("This is about using des", a, b);


// this is about the destructing
const person = {
    name: "Arbin",
    age: 22,
    address: "kirtipur"
}

// with out destruing
console.log(person.name);
// console.log(name, age, address); this line give us a error 

//with destructing
const {name, age, address} = person;
console.log(name, age, address);//now using destructing we na use object variable as a singe element




// function eventHandeler(color) {
//     return function() {
//         document.body.style.backgroundColor= `${color}`;
//     }
// }

// document.getElementById('orange').onclick = eventHandeler("Orange");
// document.getElementById('green').onclick = eventHandeler("Green");





console.log("This is about the function destructuring\n");

const persons = {
    name: "arbin",
    age: 22,
    address: "kirtipur"
}
function greet({name, address}) {
    console.log(`This about the destructring ${name} ${address}`);
}
greet(persons);

console.log("This about the sparea operator in js ")

function sum (...a) {
    let sum = a[0] + a[1] +a[2];
    console.log(...a);
    console.log("This sum of the rest", sum);
}
sum(1,2,3);

//Its allow you to extend the array/ object in another array/ object , function
console.log("this about the spread operator in js\n");
let num = [1, 2, 3];
let nums = [...num, 4, 5];
console.log("This Spread operator", nums);

const people = {
    name: "arbin",
    age: 22,
    addresss: "kirtipur"
}

const peoples = {
    ...people, Educaton: "BCA",
}
console.log(peoples);

let first = [1, 2, 3];
let second = [4, 5, 6];
let merge = [...first, ...second];
let bb= 0;
merge.map((a)=> {
    bb = a += a;
})
console.log(`\n This sum of two array ${first} and ${second} is ${bb}`);