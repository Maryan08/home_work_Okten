fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let div_wrap = document.createElement('div');
        div_wrap.classList.add('div_wrap');
        for (const user of users) {
            let div_user = document.createElement('div');
            div_user.classList.add('div_user');
            div_user.innerHTML = `<h3>ID: ${user.id}</h3>
        <h4>Name: ${user.name}</h4>`
            let btn = document.createElement('button');
            btn.innerText = 'User Details';
            btn.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user));
                location.href = 'user-details.html';
            }

            div_user.appendChild(btn);
            div_wrap.appendChild(div_user);
        }

        document.body.appendChild(div_wrap);
    })