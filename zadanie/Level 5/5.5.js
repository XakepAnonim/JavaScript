// Уровень 5.5 задачника JavaScript

// 1
function parseDate() {
    let dateString = document.getElementById('dateInput').value;
    let dateObject = new Date(dateString);

    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();

    document.getElementById('year').innerText = 'Год: ' + year;
    document.getElementById('month').innerText = 'Месяц: ' + month;
    document.getElementById('day').innerText = 'День: ' + day;
}

// 2
function nums() {
    let startNumber = parseInt(document.getElementById('numInput').value);
    let endNumber = parseInt(document.getElementById('numInput1').value);
    if (!isNaN(startNumber) && !isNaN(endNumber)) {
        let resultArray = [];
        for (let i = startNumber; i <= endNumber; i++) {
            resultArray.push(i);
        }
        document.getElementById('result').innerText = resultArray.join(', ');
    } else {
        document.getElementById('result').innerText = 'Пожалуйста, введите целые числа';
    }
}

// 3
function word() {
    let stroka = document.getElementById('word').value;
    if (stroka.length > 0) {
        let obza4 = stroka.slice(-1)

        document.getElementById('obza4').innerText = 'Последний символ строки: ' + obza4
    } else {
        document.getElementById('obza4').innerText = 'Введите строку'
    }
}

// 4
function count() {
    let num = parseInt(document.getElementById('cnt').innerText)
    let newNum = num + 1
    document.getElementById('cnt').innerText = newNum
}

// 5
const wordCount = () => {document.getElementById('wordN').innerText = document.getElementById('num').value.split(' ').length}
