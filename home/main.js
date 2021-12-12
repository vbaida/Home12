// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
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
            div.append(divpost)
            document.body.append(div)

        }
    })

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments