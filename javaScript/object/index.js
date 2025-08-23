// let student={
//     id: 1,
//     name: "Arbin Tamang",
//     address: "kirtipur",
//     age: 20
// }

// console.log(student.age);
// console.log(student.name);

// let users = [
//     {
//         id: 1,
//         name: 'ram',
//         age: 20,
//         gender: "male"
//     },
//     {
//         id: 1,
//         name: 'sita',
//         age: 19,
//         gender: "female"
//     },
//     {
//         id: 3,
//         name: 'shiva',
//         age: 10,
//         gender:{
//             m: "male",
//             f: "female",
//             o: "other"
//         }
//     },
// ]

// console.log("M =",users[2].gender.m)
// users.map((item)=> {
//     console.log(item.name);
// })
let tbody = document.getElementById('tbody');
let product = [
    {
        id: 1,
        name: "shirt",
        price: 5000,
        quantity: 10,
        category: ["Clothing", "Men"]
    },
    {
        id: 2,
        name: "Jacket",
        price: 3000,
        quantity: 20,
        category: ["Clothing", "Men", "women"]
    },
    {
        id: 3,
        name: "Keyboards",
        price: 900,
        quantity: 20,
        category: ["Electronics", "Accessories"]
    },
     {
        id: 4,
        name: "Headphones",
        price: 2300,
        quantity: 10,
        category: ["Elecronics", "Accessories"]
    },
     {
        id: 5,
        name: "Dell Laptop",
        price: 23000,
        quantity: 10,
        category: ["Electronics", "computer ","laptop"]
    },
    {
        id: 6,
        name: "Ps5",
        price: 230000,
        quantity: 10,
        category: ["Electronics", "Gamming "]
    },
]

// console.log(product[4].category[2]);

// product.map((items)=> {
//     console.log(items.name);
// })

// let product_name = product.map((items)=> {
//     return items.name;
// })

let tbody_data = product.map((items) => (
    `<tr>
    <td>${items.id}</td>
    <td>${items.name}</td>
    <td>${items.price}</td>
    <td>${items.quantity}</td>
    <td>${items.category}</td>
    </tr>`
)).join(" ")

tbody.innerHTML = tbody_data;