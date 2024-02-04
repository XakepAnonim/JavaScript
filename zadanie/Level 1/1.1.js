// Уровень 1.1 задачника JavaScript

// 1
let a = 5
if (a > 5) {
    console.log('Положительное')
} else {
    console.log('Отрицательное')
}

// 2
let str1 = 'qwerty'
console.log(str1.length)

// 3
let str2 = 'qwerty'
console.log(str2[str1.length - 1])

// 4
let b = 4
if (b % 2 === 0) {
    console.log('Четное')
} else {
    console.log('Нечетное')
}

// 5
let slovo1 = 'lolkek'
let slovo2 = 'lol'
if (slovo1[0] === slovo2[0]) {
    console.log('Совпадают')
} else {
    console.log('Несовпадают')
}

// 6
let ruskiu = 'мячь'
if (ruskiu[ruskiu.length - 1] === 'ь') {
    console.log('Слово заканчивается на мягкий знак')
} else {
    console.log('Слово не заканчивается на мягкий знак')
}