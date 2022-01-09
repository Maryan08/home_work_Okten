// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(
//         posts => {
//             console.log(posts);
//             let div_wrap = document.createElement('div');
//             div_wrap.classList.add('div_wrap');
//             for (const post of posts) {
//                 let div_post = document.createElement('div');
//                 div_post.classList.add('post');
//                 div_post.innerHTML = `<h3>ID: ${post.id}</h3>
//                 <h4>Title:${post.title}</h4>
//                 <h5>Text: ${post.body}</h5>`
//                 div_wrap.appendChild(div_post);
//             }
//             document.body.appendChild(div_wrap);
//         }
//     )


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(coments => {
        let div_wrap = document.createElement('div');
        div_wrap.classList.add('div_wrap');
        for (const coment of coments) {
            let div_post = document.createElement('div');
            div_post.classList.add('comment');
            div_post.innerHTML = `<h3>ID: ${coment.id}</h3>
                <h4>Name:${coment.name}</h4>
                <h5>Email: ${coment.email}</h5>
                <h6>Text: ${coment.body}</h6>`
            div_wrap.appendChild(div_post);
        }
        document.body.appendChild(div_wrap);
    })



