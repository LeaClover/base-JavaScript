const c = 10;
const d = 2;

let sum = c + d;
let diff = c - d;
let mult = c * d;
let div = c / d;

console.log(`Действия с числами ${c} и ${d}`)
console.log(`Сложение: ${sum}`);
console.log(`Вычитание: ${diff}`);
console.log(`Умножение: ${mult}`);
console.log(`Деление: ${div}`);

let allSum = c + d + sum + diff + mult + div;
console.log(`Сумма всех переменных ${allSum}`);