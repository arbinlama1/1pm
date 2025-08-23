let pin = 111;
let balance = 30000;
let rem = 0;
var user_pin = +prompt("Enter your pin");

if (user_pin == pin) {
    alert("login successfully");
    let menu = "1.Balance check \n 2. Withdraw";
    alert(menu);
    let op = +prompt("Enter your option");
    if (op == 1) {
        alert("Your balance is "+balance);
    }
    else if (op == 2) {
        let withdraw = +prompt("Enter your withdraw amount");
        if (withdraw < 500) {
            alert(`You can't with draw ${withdraw} \n With draw amout option \n please put the multiple of the 500`)
        }
        else if (withdraw > balance) {
            alert("Balance insufficent");
        } else {
            alert(`With draw amount is ${withdraw}`);
            rem = balance - withdraw;
            alert(rem);
        }
    } else {
        alert("Invalid option");
    }
}
else {
    alert("Invalid pin ");
}