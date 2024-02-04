// Уровень 7.7 задачника JavaScript

// 1
const threeArray = [1, 3, 4, 5, 3, 12, 6, 3, 7]
let count = 0

for (let i of threeArray) {
    if (i === 3) {
        count++;
    }
}
console.log('Общее количество цифр 3: ' + count)

// 2
let array = [];

for (let i = 1; i <= 5; i++) {
    let item = '';
    for (let j = 1; j <= i; j++) {
        item += j;
    }
    array.push(item);
}
console.log(array);

// 3
let affairs = [
    {
        date: '2019-12-29',
        event: 'name1',
    },
    {
        date: '2019-12-31',
        event: 'name2',
    },
    {
        date: '2019-12-29',
        event: 'name3',
    },
    {
        date: '2019-12-30',
        event: 'name4',
    },
    {
        date: '2019-12-29',
        event: 'name5',
    },
    {
        date: '2019-12-31',
        event: 'name6',
    },
    {
        date: '2019-12-29',
        event: 'name7',
    },
    {
        date: '2019-12-30',
        event: 'name8',
    },
    {
        date: '2019-12-30',
        event: 'name9',
    },
]
let dates = [];

for (let affair of affairs) {
    if (!dates.includes(affair.date)) {
        dates.push(affair.date)
    }
}
console.log(dates)