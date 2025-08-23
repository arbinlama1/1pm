let tbody = document.getElementById('tbody');
let container = document.getElementById("container");
let btn = document.getElementById("btn");
let box = document.getElementById("box");
let input = document.getElementById("input");
const product = [
    {
        id: 1,
        name: "Tshirt",
        price: 300,
        quantity: 20,
        catagory: "Cloth"
    },
    {
        id: 2,
        name: "Tshirt",
        price: 300,
        quantity: 20,
        catagory: "Cloth"
    }
]

let tbody_data = product.map((item) => (
    `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>${item.catagory}</td>
    `
)).join(" ");
tbody.innerHTML = tbody_data;
tbody.style.background = "green";
let el = document.createElement("p");
let el1 = document.createElement('p');
container.append(el);
container.append(el1);
el.textContent = "hello i am form js added new elemet";
el1.textContent = "This is another new element";

container.removeChild(el1);
container.classList.add('para');
container.classList.add("para1");
container.classList.remove("para1")
btn.addEventListener('dblclick', () => {
    alert("hello");
})
box.addEventListener("mouseenter", () => {
    box.classList.add("back");
    console.log("enter");
})
box.addEventListener("mouseleave", () => {
    box.classList.remove('back');
    console.log("leave");
})
input.addEventListener("keydown", (e) => {
    console.log("key down");
})
input.addEventListener("keyup", (e) => {
    console.log("key up");
})

document.addEventListener("mousemove", (e) => {
    const offsetX = box.offsetWidth / 2;
    const offsetY = box.offsetHeight / 2;

    box.style.left = (e.pageX - offsetX) + "px";
    box.style.top = (e.pageY - offsetY) + "px";
});

