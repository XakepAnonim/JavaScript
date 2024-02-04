let users = [
    {id: 1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id: 2, name: 'Ronaldo', surname: 'Ivanov', grade: '7A'},
    {id: 3, name: 'Sasha', surname: 'Petrov', grade: '5B'},
    {id: 4, name: 'Solidarity', surname: 'Pumpkin', grade: 'childhouse'},
    {id: 5, name: 'Ilya', surname: 'Yakovlevich', grade: '1kurs'},
    {id: 6, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id: 7, name: 'Ronaldo', surname: 'Ivanov', grade: '7A'},
    {id: 8, name: 'Sasha', surname: 'Petrov', grade: '5B'},
    {id: 9, name: 'Solidarity', surname: 'Pumpkin', grade: 'childhouse'},
    {id: 10, name: 'Ilya', surname: 'Yakovlevich', grade: '1kurs'},
];

let wins = [2, 6]
let elem = document.querySelector('.list')
for (let user of users) {
    elem.insertAdjacentHTML('beforeend',
        `
        <div class="card" id="${user.id}" onclick="hello(${user.id})">
            <h4 class="name">${user.name}</h4>
            <p class="surname">${user.surname}</p>
            <p class="grade">${user.grade}</p>
        </div>
    `)
}

// function hello(id) {
//     console.log(id)
//     for (let win of wins) {
//         if (id == win) {
//             alert('Победаа')
//             console.log('Победаа')
//         } else {
//             document.getElementById(id).hidden = true;
//         }
//     }
// }


function hello(id) {
    console.log(id);

    const timer = setTimeout(() => {
        console.log('Время вышло');
        alert('Время вышло, Вы проиграли');
    }, 3000);

    if (wins.includes(id)) {
        clearTimeout(timer);

        alert('Победаа');
        console.log('Победаа');
    } else {
        document.getElementById(id).hidden = true;
    }

}
