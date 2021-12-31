// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// document.body.append(div);
// div.innerText = 'Hello World';
// div.style.background = 'grey';
// div.style.color = 'red';
// div.style.fontSize = '50px';
// document.body.append(div.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let classname = document.getElementsByClassName('menu')[0];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = arr[i];
//     classname.append(li);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div = document.createElement('div');
//     div.innerText = coursesAndDurationArray[i].title + '\n' + coursesAndDurationArray[i].monthDuration;
//     document.body.append(div);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let maindiv = document.createElement('div');
//     maindiv.classList.add('item');
//     document.body.append(maindiv);
//     let h1 = document.createElement('h1');
//     h1.classList.add('heating');
//     h1.innerText = coursesAndDurationArray[i].title;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText=coursesAndDurationArray[i].monthDuration;
//     maindiv.append(h1,p);
//
// }
