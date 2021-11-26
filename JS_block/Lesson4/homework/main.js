// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a,b) {
//     let s = a*b;
//     console.log(s);
//
// }
//
// s(2,3);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function kolo(r){
//     const PI = 3.14;
//      let k= PI * Math.pow(r,2);
//     console.log(k);
// }
// kolo(5);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function skc(h,r){
//         const  PI=3.14;
//         let s = 2*PI*Math.pow(r,2)+2*PI*r*h;
//     console.log(s);
// }
// skc(10,5);
// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayf(){
//     let arr = [1,2,3,4,5,6,`hglka`,true,78];
//     for (let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// arrayf();
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function txt(text){
//     document.write(`<p>${text}</p>`);
// }
// txt('hello okten');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul_li(li){
//     document.write(`<ul>
//         <li>${li}</li>
//         <li>${li}</li>
//         <li>${li}</li>
//     </ul>`)
// }
// ul_li(123);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul_li(text,number){
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ul_li('hi',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let arr = [1,2,3,'jhgfhsdfljk',true,false,743,4564,477];
//
// function list(arr){
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// list(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     object1 = {
//         name: 'Maryan',
//         id: 'hg38759',
//         age: 19
//     },
//     object1 = {
//         name: 'Vasya',
//         id: 'hgkrj53465',
//         age: 21
//     }, object1 = {
//         name: 'Bogdan',
//         id: 'jkrhgw0385056',
//         age: 35
//     }
//
// ]
// function mass_arr(array){
//     for (let i = 0; i < array.length; i++){
//         document.write(`<p>`)
//             document.write(`<p>${array[i].name}</p>`)
//             document.write(`<p>${array[i].id}</p>`)
//             document.write(`<p>${array[i].age}</p>`)
//         document.write(`</p>`)
//     }
// }
// mass_arr(arr);