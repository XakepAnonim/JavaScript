// Уровень 9.9 задачника JavaScript

// 1
const cells = document.querySelectorAll('#countTable td');

cells.forEach((cell) => {
    let clickCount = 0;

    cell.addEventListener('click', () => {
        clickCount++;
        cell.innerText = clickCount;
    });
});


// 2
function randomNumber() {
    let table = document.getElementById('numTable');
    let rows = table.rows.length;
    let nums = [];

    for (let n = 1; n <= rows * rows; n++) {
        nums.push(n);
    }

    for (let i = nums.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            table.rows[i].cells[j].innerText = nums[i * rows + j];
        }
    }
}

// 3
function findChar() {
    let textarea = document.getElementById('Textarea');
    let text = textarea.value.toLowerCase();

    let charCount = new Map();

    for (let char of text) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let mostChar = '';
    let maxCount = 0;

    charCount.forEach((count, char) => {
        if (count > maxCount) {
            maxCount = count;
            mostChar = char;
        }
    });

    let result = document.getElementById('result');
    result.textContent = mostChar;
}

// 4
let inputs = document.querySelectorAll('input');
let currentIndex = 0;
let counter = 1;

function updateValue() {
    inputs[currentIndex].value = counter;
    currentIndex = (currentIndex + 1) % inputs.length;
    counter++
}

let interval = setInterval(updateValue, 1000);

setTimeout(function () {
    clearInterval(interval);
}, 100000);

// 5
function nums_words(num) {

    const words = {
        units: ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        teens: ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
        tens: ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        hundreds: ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
    };

    let result = '';

    if (num >= 100) {
        result += words.hundreds[Math.floor(num / 100)];
        num %= 100;
    }

    if (num >= 11 && num <= 19) {
        result += ' ' + words.teens[num - 11];
    } else {
        result += ' ' + words.tens[Math.floor(num / 10)];
        num %= 10;

        if (num > 0) {
            result += ' ' + words.units[num];
        }
    }

    return result;
}

console.log(nums_words(123));