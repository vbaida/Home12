// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(usersElement => usersElement.json())
    .then(usersElement => {
        let div = document.createElement('div')
        div.classList.add('container')

        for (const element of usersElement) {
            let divuser = document.createElement('div')
            divuser.classList.add('user')
            divuser.innerHTML =`
                <h1> Id: ${element.id} </h1>
                    <h2>Name: ${element.name}</h2>
                        <h3>Username: ${element.username} </h3>
                            <h5>Email: ${element.email}</h5>
                            <h5>Street: ${element.address.street}</h5>
                            <h5>Suite: ${element.address.suite}</h5>
                            <h5>City: ${element.address.city}</h5>
                            <h5>Zipcode: ${element.address.zipcode}</h5>
                            <h5>Lat: ${element.address.geo.lat}</h5>
                            <h5>Lng: ${element.address.geo.lng}</h5>
                            <h5>Phone: ${element.phone}</h5>
                            <h5>Website: ${element.website}</h5>
                            <h5>Companyname: ${element.company.name}</h5>
                            <h5>CompanycatchPhrasee: ${element.company.catchPhrase}</h5>
                            <h5>Companybs: ${element.company.bs}</h5>
                              `
            let btn = document.createElement('button')

            btn.style.width = '200px'
            btn.style.height = '50px'
            btn.innerHTML = `<h3>Нажми на  мене</h3>`
            btn.onclick =()=> {
                fetch('https://jsonplaceholder.typicode.com/users/' + element.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        let divposthead = document.createElement('div')
                        for (const post of posts) {
                            if (element.id === post.userId) {
                                let divpost = document.createElement('div');
                                divpost.classList.add('post');
                                divpost.innerHTML = `
                                        <h3>UserID: ${post.userId}</h3>
                                        <h4>Id: ${post.id}</h4>
                                        <h5>Title: ${post.title}</h5>
                                        <h6>Body: ${post.body}</h6>
                                        `
                                let btn1 = document.createElement('button')

                                btn1.style.width = '200px'
                                btn1.style.height = '50px'
                                btn1.innerHTML = `<h3>Нажми на  мене</h3>`
                                btn1.onclick =()=> {
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
                                        `

                                                    divposthead.append(divCardComments)
                                                }
                                                button.disabled = true;

                                            }


                                        })

                            }



                                divposthead.append(divpost)
                                divpost.append(btn1)
                                divuser.append(divposthead)
                            }
                            button.disabled = true;
                        }
                    })
            }
            divuser.append(btn)
            div.append(divuser)
            document.body.append(div)
        }
    })
