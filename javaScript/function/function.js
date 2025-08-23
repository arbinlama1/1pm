function addTwoNumber(a, b) {
    let sum = a + b;
    console.log(sum);
}
addTwoNumber(2, 5);
// the function can be hoisted= before function initialization we can call the function



// function expressioin can't call before declaration
const gretting = function(msg) {
    console.log(msg);
}
gretting("hello");


const message = () => console.log("Good Morning i am from arrow function");

message();

// this is about the call back function

function message1() {
    return "hello Good morning";
}

function user(name, fun) {
    console.log(fun() + name);
}

user("arbin", message1);
