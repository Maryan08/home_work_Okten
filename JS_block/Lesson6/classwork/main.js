// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
// let edit = (text, symbol) => {
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == symbol) {
//             text = text.replace(symbol, ' ');
//             if (text[i-1] === ' ') {
//                 text = text.replace(' ','');
//             }
//         }
//     }
//
//     return text.split(' ').join(' ');
// }
// console.log(edit('Hary..Potter', '.'));


//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr = [];
// let randomize = (number)=>{
//     for (let i = 0; i < number; i++) {
//        arr[i]= Math.round(Math.random()*100);
//     }
//    return arr;
// }
// console.log(randomize(20));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arr = [];
// let randomize = (number)=>{
//     for (let i = 0; i < number; i++) {
//         arr[i]= Math.round(Math.random()*100);
//     }
//     arr.sort(function (a,b){return a-b});
//     return arr;
// }
// console.log(randomize(20));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arr = [];
// let randomize = (number)=>{
//     for (let i = 0; i < number; i++) {
//         arr[i]= Math.round(Math.random()*100);
//     }
//     let arrfilter = arr.filter((item)=>item%2===0)
//     return arrfilter;
// }
// console.log(randomize(20));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [];
// let randomize = (number) => {
//     for (let i = 0; i < number; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     let map = arr.map((value) => value + '');
//     return map;
// }
// console.log(randomize(20));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let arr = [11, 21, 3];
// let sortNums = (arr, direction) => {
//     if (direction === '+') {
//         arr.sort((a, b) => b-a);
//         console.log(arr);
//     } else if (direction === '-') {
//         arr.sort((a, b) => a - b);
//         console.log(arr);
//     } else {
//         console.log('error');
//     }
// }
// sortNums(arr, '+');


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let filter= coursesAndDurationArray.filter((value)=>value.monthDuration>5);
// console.log(filter);
