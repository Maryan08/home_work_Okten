// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let idText = document.getElementById('text');
// idText.onclick = function () {
//     idText.style.display = 'none';
// }
//
//
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     btn.hidden = true;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form1 = document.form1;
// document.form1.onsubmit= function (e) {
//     e.preventDefault();
//     if (form1.age.value< 18) {
//         console.log('less then 18');
//     } else {
//         console.log('everything is Okey');
//     }
//
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('btn2');
// let hdn = document.getElementById('ol');
// menu.onclick = function () {
//     console.log(hdn);
//     hdn.classList.toggle('hidden');
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {name: 'Максим', body: 'Вчи English'},
//     {name: 'Іван', body: 'Досить сидіти, вже пізно'},
//     {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
//     {name: 'Іра', body: 'Воно, тобі треба?'},
// ];
//
// for (const el of comments){
//     let div=document.createElement('div');
//     let name = document.createElement('h2');
//     let body = document.createElement('p');
//     let btn = document.createElement('button');
//
//     name.innerText=el.name;
//     body.innerText=el.body;
//     btn.innerText='Click';
//     div.append(name,body,btn);
//
//     btn.onclick = function (){
//         div.classList.add('hidden');
//     }
//
//     document.body.appendChild(div);
// }
