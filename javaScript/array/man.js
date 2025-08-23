let students = ['arbin', "bibash", "sara", 'ajaya', 'rajib'];
students.map((a) => {
    console.log(a);
})

let num = [2, 3, 4, 5];
let event = [];
num.map((a) => {
    event.push(a*a);
})
console.log(event);

let array = [1, 2,['ram', 'hari', 'laxman'],['sita', 'gita']];

console.log(array[3][1]);