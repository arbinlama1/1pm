// window.alert("hellow this is from js external");
let btn = document.getElementById("btn");
let light = true;
let mode = document.body;

btn.addEventListener('click', () => {

    if(light) {
        light = false;
        mode.classList.add('dark');
        btn.classList.add('btn-light');
        mode.classList.remove('light');
    }
    else {
        light = true;
        mode.classList.remove('dark');
    }
} )


let user_name = "arbin";
let user_last_name = 'lama';
let user_address = "kirtipur";
let user_age = 20;
// console.log("Use name ", user_name, " user Address ", user_address, "user age" , + user_age);

console.log(`my name is ${user_name} and last name is ${user_last_name}`);

