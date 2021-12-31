// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     console.log(document.form1.inp1.value);
//     console.log(document.form1.inp2.value);
//     console.log(document.form2.inp1.value);
//     console.log(document.form2.inp2.value);
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['блін', 'сука','ай']
// let inp = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Check';
// document.body.append(inp,btn);
// btn.onclick = function (){
//     for (const el of array){
//         if(inp.value===el){
//             alert('Це нецензурне слово');
//         }
//     }
//
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let array = ['блін', 'сука', 'ай']
// let inp = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Check';
// document.body.append(inp, btn);
// btn.onclick = function () {
//     let inp_arr = inp.value.split(' ')
//     for (const el of inp_arr) {
//         for (const mat of array) {
//             if (el == mat) {
//                 alert('Це нецензурне слово');
//             }
//         }
//
//
//     }
//
// }