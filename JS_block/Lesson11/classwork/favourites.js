const key = 'user';
let favourites = JSON.parse(localStorage.getItem(key));

for (const favorite of favourites){
    let info_div = document.createElement('div');
    info_div.innerText = `Name: ${favorite.name}\nAge: ${favorite.age}\nStatus: ${favorite.status}`;
    info_div.style.border = '1px solid red';
    info_div.style.margin = '20px';
    info_div.style.width = '150px';
    info_div.style.textAlign = 'center';
    document.body.appendChild(info_div);
}
