// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let x = document.getElementById('main_header');
// x.classList.add('Java-Complex');

// let w400 = document.getElementsByTagName('ul');
// console.log(w400);
// for(let i = 0;i<3;i++){
//     w400[i].style.width='400px';
//     w400[i].style.border='1px solid red';
// }
//

// let elementsByClassName = document.getElementsByClassName('linkList');
// console.log(elementsByClassName);
// for(const el of elementsByClassName){
//  el.style.width='50%';
//  el.style.border='1px solid red';
// }

// let text = prompt();
// let elementsByClassName = document.getElementsByClassName('listElement2');
// elementsByClassName[0].innerHTML = '<a href="#">' + text + '</a>';

// let elementsByTagName = document.getElementsByTagName('li');
// for(const el of elementsByTagName){
//     el.style.background = 'grey';
// }

// let elementsByTagName = document.getElementsByTagName('a');
// for(const el of elementsByTagName){
//     el.classList.add('anchor');
// }

// let elementsByTagName = document.getElementsByTagName('a');
// for( const el of elementsByTagName){
//    if( el.innerText === 'link3'){
//        el.style.width='40px';
//        el.style.border='1px solid red';
//    }
//
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementsByTagName = document.getElementsByTagName('a');
// for(const el of elementsByTagName){
//     el.classList.add('element_'+el.innerText);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const el of elementsByClassName){
//     el.style.background = prompt();
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const el of elementsByClassName){
//     if(el.innerText== 'content 2 segment'){
//         el.style.color = prompt();
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const el of elementsByClassName) {
//     el.innerText = prompt();
// }

// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p');
// for(const el of elementsByTagName){
//     el.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// for(const el of elementsByClassName){
//     el.innerText = 'sep-2021';
// }




