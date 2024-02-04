// Уровень 6.6 задачника JavaScript

// 1
const myArray = ['Index 0', 'Index 1', 'Index 2', 'Index 3'];

function showArrayElement() {
    const index = document.getElementById('index').value;
    const resultObza4 = document.getElementById('result');

    if (index >= 0 && index < myArray.length) {
        resultObza4.innerText = myArray[index];
    } else {
        resultObza4.innerText = 'Неверный индекс';
    }
}

// 2
const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white']
const colored = document.getElementById('colored');

function setColor() {
    const randomColor= colors[Math.floor(Math.random() * colors.length)]
    colored.style.backgroundColor = randomColor
}

// 3
function changeColor(cell) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    cell.style.backgroundColor = randomColor;
}

function randomizeColors() {
    const cells = document.querySelectorAll('#colorTable td');
    cells.forEach(changeColor);
}

// 4
const textarea = document.getElementById('textarea');
const div = document.getElementById('div');

textarea.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        addToDiv();
    }

    function addToDiv() {
        const newText = textarea.value;
        div.innerHTML += `<p>${newText}</p>`;
        textarea.value = '';
    }
});