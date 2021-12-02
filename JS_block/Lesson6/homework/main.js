// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// let str_length = [str[0].length, str[1].length, str[2].length];
// console.log(str_length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let toUpperCase = (text) => console.log(text.toUpperCase());
// toUpperCase('hello okten');
// toUpperCase('lorem ipsum');
// toUpperCase('javascript is cool');
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let toLowerCase = (text) => console.log(text.toLowerCase());
// toLowerCase('HELLO OKTEN');
// toLowerCase('LOREM IPSUM');
// toLowerCase('JAVASCRIPT IS COOL');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let trim = (text) => console.log(text.trim());
// trim(' dirty string   ');
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToarray = (str) => {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<p>${arr[i]}</p>`);
//     }
// }
// let str = 'Каждый охотник желает знать';
// stringToarray(str);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, length) => str.substr(0, length);
// let str = 'Каждый охотник желает знать';
// document.write(`<p>${delete_characters(str, 7)}</p>`);
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash = (str) => console.log(str.replaceAll(' ', '-'));
// insert_dash('HTML JavaScript PHP');
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let upper = (str) => str[0].toUpperCase() + str.slice(1);
// let str = 'hello Okten';
// console.log(upper(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     let text = '';
//     for (let i = 0; i < str.split(' ').length; i++) {
//         if (str.split(' ')[i][0] != str.split(' ')[i][0].toUpperCase()) {
//             text += str.split(' ')[i][0].toUpperCase() + str.split(' ')[i].slice(1) + ' ';
//         } else {
//             text += str.split(' ')[i][0].toUpperCase() + str.split(' ')[i].slice(1) + ' ';
//
//         }
//
//
//     }
//     return text;
// }
// console.log(capitalize('hello Okten hi world'));
// document.write(`<p>${capitalize('hello Okten hi world')}</p>`);