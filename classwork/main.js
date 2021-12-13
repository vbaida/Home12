// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(postsElement => postsElement.json())
    .then(postsElement => {
        let div = document.createElement('div')
        div.classList.add('container')

        for (const element of postsElement) {
            let divpost = document.createElement('div')
            divpost.classList.add('user')
             divpost.innerHTML =`
                <h1> UserId: ${element.userId} </h1>
                    <h2>Id: ${element.id}</h2>
                        <h3>Title: ${element.title} </h3>
                            <h4>Body: ${element.body}</h4>`;
            let btn = document.createElement('button')
                btn.style.width = '200px'
                btn.style.height = '50px'
                btn.innerHTML = `<h3>Нажми на  мене</h3>`
                btn.onclick =()=> {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + element.id + '/comments')
                        .then(response => response.json())
                        .then(comments => {
                            for (const comment of comments) {
                                if (element.id === comment.postId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                    divpost.appendChild(divCardComments)
                                }
                                button.disabled = true;
                            }
                        })
                }
            divpost.append(btn)
            div.append(divpost)
            document.body.append(div)
        }
        })

