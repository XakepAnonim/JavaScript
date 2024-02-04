// Уровень 10.10 задачника JavaScript

// 1
let drob = '12/16'
let [num, denNum] = drob.split('/')

let result = `${num}/${denNum}`;

while (num % 2 === 0 && denNum % 2 === 0) {
    num /= 2
    denNum /= 2
    result += ` = ${num}/${denNum}`
}
console.log(result)

// 2 (Уровень 10.8 задачника JavaScript)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const arcWidth = 10;
let radius = 8 * arcWidth;

const canvas = document.getElementById("rgbCanvas");
const context = canvas.getContext("2d");

canvas.width = (radius + (colors.length - 0.5) * arcWidth) * 2;
canvas.height = radius + (colors.length - 1) * arcWidth;

colors.reverse().forEach(color => {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height + arcWidth / 2, radius, Math.PI, 2 * Math.PI);
    context.lineWidth = arcWidth;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    radius += arcWidth;
});

// 3
function drawClock() {
    const canvas = document.getElementById('clockCanvas');
    const context = canvas.getContext('2d');
    const radius = canvas.width / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(context, radius - 10, '#000', 2);

    context.font = '16px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    drawClockNumbers(context, radius);

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    drawHand(context, hours * 30 + (minutes / 60) * 30, 50, 6, '#000');
    drawHand(context, minutes * 6 + (seconds / 60) * 6, 80, 4, '#000');
    drawHand(context, seconds * 6, 90, 2, '#FF0000');

    setTimeout(drawClock, 1000);
}

function drawCircle(context, radius, color, lineWidth) {
    context.beginPath();
    context.arc(context.canvas.width / 2, context.canvas.height / 2, radius, 0, 2 * Math.PI);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.stroke();
}

function drawClockNumbers(context, radius) {
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI * 2) / 12;
        const x = context.canvas.width / 2 + Math.cos(angle) * (radius - 30);
        const y = context.canvas.height / 2 + Math.sin(angle) * (radius - 30);
        context.fillText(i.toString(), x, y);
    }
}

function drawHand(context, angle, length, width, color) {
    const radians = (angle - 90) * Math.PI / 180;
    const x = context.canvas.width / 2 + length * Math.cos(radians);
    const y = context.canvas.height / 2 + length * Math.sin(radians);

    context.beginPath();
    context.lineWidth = width;
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.moveTo(context.canvas.width / 2, context.canvas.height / 2);
    context.lineTo(x, y);
    context.stroke();
}

drawClock();


// 4
function Center() {
    let table = document.getElementById("centerTable");
    let rowCount = table.rows.length;
    let colCount = table.rows[0].cells.length;

    if (rowCount % 2 === 0 && colCount % 2 === 0) {
        let startRow = rowCount / 2 - 1;
        let endRow = rowCount / 2;
        let startCol = colCount / 2 - 1;
        let endCol = colCount / 2;

        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                table.rows[i].cells[j].innerHTML = "+";
                table.style.textAlign = "center";
            }
        }
    } else {
        alert("Число рядов и колонок должно быть четным");
    }
}
