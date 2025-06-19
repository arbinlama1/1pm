// let str = 'javascriptloops';
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let vowelChars = '';
// let consonantChars = '';

// function processString() {
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             vowelChars += str[i];
//         } else {
//             consonantChars += str[i];
//         }
//     }
// }

// function displayCharacters() {
//     let finalStr = vowelChars + consonantChars;
//     for (let char of finalStr) {
//         console.log(char);
//     }
// }

// processString();
// displayCharacters();

function fact(num) {
    if (num == 0) {
        return 0;
    }
    else if(num == 1) {
        return 1;
    }
    return num * fact((num - 1));

}
let print = fact(4);
console.log(print);
let num = p