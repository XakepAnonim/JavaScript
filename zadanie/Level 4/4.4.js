// Уровень 4.4 задачника JavaScript

// 1 (Уровень 4.5 задачника JavaScript)
function string_number(strN) {
    return /^\d+$/.test(strN);
}

let String = "12345";
if (string_number(String)) {
    console.log(`Строка "${String}" состоит только из цифр`);
} else {
    console.log(`Строка "${String}" НЕ состоит только из цифр`);
}


// 2
function getZodiac(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Овен";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Телец";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Близнецы";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Рак";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Лев";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Дева";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Весы";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Скорпион";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Стрелец";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Козерог";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Водолей";
    } else {
        return "Рыбы";
    }
}

let inputDate = new Date("2077-12-21");
let zodiac = getZodiac(inputDate);
console.log(`Знак зодиака для ${inputDate.toDateString()}: ${zodiac}`);


// 3
function divisors(num) {
    let divisors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

let inputNumber = 777;
let divisorsArray = divisors(inputNumber);
console.log(`${inputNumber}: ${divisorsArray}`);

// 4
function isNumber(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let number = 18;
if (isNumber(number)) {
    console.log(`${number} - простое число.`);
} else {
    console.log(`${number} - не простое число.`);
}


// 5
function removeEvenNum(number) {
    let numberStr = number.toString();

    let filteredDigits = numberStr.split('').filter(digit => digit % 2 !== 0);

    let result = parseInt(filteredDigits.join(''), 10);

    return result;
}

let inputNumb = 1234567890;
let result = removeEvenNum(inputNumb);
console.log(`Число после удаления четных цифр: ${result}`);

// 6
function generateArray(N, min, max) {
    let randomArray = [];

    for (let i = 0; i < N; i++) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomValue);
    }

    return randomArray;
}

let Size = 5;
let minVal = 10;
let maxVal = 20;

let randomNumbers = generateArray(Size, minVal, maxVal);
console.log(`Случайные числа: ${randomNumbers}`);