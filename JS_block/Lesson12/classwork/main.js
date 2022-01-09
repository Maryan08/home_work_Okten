fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let div_wrap = document.createElement('div');
        div_wrap.classList.add('div_wrap');
        for (const post of posts) {
            let div_post = document.createElement('div');
            div_post.classList.add('post');
            div_post.innerHTML = `<h3>ID: ${post.id}</h3>
                <h4>Title:${post.title}</h4>
               <h5>Text: ${post.body}</h5>`
            let btn = document.createElement('button');
            btn.innerText = 'Show Comments';
            btn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {

                            if (post.id === comment.postId) {
                                let divCardComments = document.createElement('div');
                                divCardComments.classList.add('cardComments');
                                divCardComments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                div_post.appendChild(divCardComments)
                            }
                            btn.disabled = true;
                        }
                    })
            }

            div_post.appendChild(btn);

            div_wrap.append(div_post);
        }

        document.body.appendChild(div_wrap);


    })
