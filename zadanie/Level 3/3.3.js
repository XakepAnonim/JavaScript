// Уровень 3.3 задачника JavaScript

// 1
let qwerty = ['text', 'lol', 'javascript', 'python', 'net', 'kek']
let newQwerty = []
for (let item of qwerty) {
    if (item.length < 4) {
        newQwerty.push(item);
    }
}
console.log(newQwerty)

// 2
let nums = 1357
let numString = nums.toString();
let odd = true;

for (let l of numString) {
    if (parseInt(l) % 2 === 0) {
        odd = false;
        break;
    }
}

if (odd) {
    console.log('Все цифры числа нечетные');
} else {
    console.log('Есть хотя бы одна четная цифра в числе');
}

// 3
let word = 'abcba';
let palind = true;

for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        palind = false;
        break;
    }
}

if (palind) {
    console.log('Слово является палиндромом');
} else {
    console.log('Слово не является палиндромом');
}

// 4
matrix = [
    [
        [11, 12, 13],
        [14, 15, 16],
        [17, 17, 19],
    ],
    [
        [21, 22, 23],
        [24, 25, 26],
        [27, 27, 29],
    ],
    [
        [31, 32, 33],
        [34, 35, 36],
        [37, 37, 39],
    ],
]

let totalSum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        for (let k = 0; k < matrix[i][j].length; k++) {
            totalSum += matrix[i][j][k];
        }
    }
}
console.log(totalSum)

