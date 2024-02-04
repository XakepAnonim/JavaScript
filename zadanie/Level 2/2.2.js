// Уровень 2.2 задачника JavaScript

// 1
let chisla = [-1, 3, -10, 6, 5, -4, 9, 2]
let count = 0;
for (let i of chisla) {
    if (i < 0) {
        count++
    }
}
console.log(count)

// 2
let posChisla = [];
for (let j = 0; j < chisla.length; j++) {
    if (chisla[j] > 0) {
        posChisla.push(chisla[j]);
    }
}
console.log(posChisla)

// 3
let stroka = 'qwetyuiop';
let newStroka = stroka.slice(0, -2) + stroka.slice(-1);
console.log(newStroka)

// 4
let nums = [1, 2, 3, 4, 5, 6]
let oneNums = nums.slice(0, nums.length / 2)

let twoNums = 0
for (let i = 0; i < oneNums.length; i++) {
    twoNums += oneNums[i];
}

let result = twoNums / oneNums.length
console.log(result);