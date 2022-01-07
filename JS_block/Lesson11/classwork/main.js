// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.


let favourites = [];
for (const user of users) {
    let wrap = document.createElement('div');
    wrap.style.border = '1px solid red';
    wrap.style.margin = '20px';
    wrap.style.width = '150px';
    wrap.style.textAlign = 'center';

    let info_div = document.createElement('div');
    info_div.innerText = `${user.name}\n${user.age}\n${user.status}`;
    let btn = document.createElement('button');
    btn.innerText = 'Add to favourites';
    wrap.append(info_div, btn);

    document.body.appendChild(wrap);


    btn.onclick = function (e){
        e.preventDefault();
        favourites.push(user);
        localStorage.setItem('user',JSON.stringify(favourites));
        btn.disabled = true;
    }

}

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

