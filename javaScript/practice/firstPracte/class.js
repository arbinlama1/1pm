class myClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    play() {
        console.log("I love to play video games");
    }
    detail() {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }
}
class person extends myClass {
    constructor(fname, lname,address) {
        super(fname,lname);
        this.address = address;
    }
    detail() {
        console.log(`My name is ${this.firstName} ${this.lastName} 
        and my Address is ${this.address}`)
    }
    sound() {
        console.log("Arbin make sound when he sleep");
    }
}
const m = new myClass("arbin", 'lama');
const p = new person("Binod", "lama", "kirtipur");
console.log("This is from Parent class");
m.play();
m.detail();
console.log("\nThis is form the clid class");
p.sound();
p.play();
p.detail();