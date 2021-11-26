// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a,b) => a*b;
// console.log(s(3,5));
// - створити функцію яка обчислює та повертає площу кола
// let s = (r)=>{
//     const PI =3.14;
//     return PI*Math.pow(r,2);
//
// }
// console.log(s(3));
// - створити функцію яка обчислює та повертає площу циліндру
// let s = (r,h)=>{
//     const PI=3.14;
//     return 2*PI*Math.pow(r,2)+2*PI*r*h;
// }
// console.log(s(3,5));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3,4,5,6];
// let f = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// console.log(f(arr));
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let txt=(text)=>document.write(`<p>${text}</p>`);
// txt('hello');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul_li=(text)=>{
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// ul_li('Hello');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul_li  = (text,number)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul_li('Hello',10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,2,3,4,'Hello', true,false,'Okten',132];
// let f_arr = (arr)=>{
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// f_arr(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let persons  = [
//     {id:1,name:'Vasya',age:31},
//     {id:2,name:'Mykola',age:11},
//     {id:3,name:'Petro',age:33},
//     {id:4,name:'Bogdan',age:74},
//     {id:5,name:'Maryan',age:21}
// ]
// let f_person = (person)=>{
//     for (let i = 0; i < person.length; i++) {
//         document.write(`<div>${person[i].id+' '}${person[i].name+' '}${person[i].age}</div>`)
//     }
// }
// f_person(persons);
