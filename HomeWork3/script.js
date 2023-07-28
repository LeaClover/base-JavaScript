// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubeDegree = (userNumber) => {
    return Math.pow(userNumber, 3) + Math.pow(userNumber + 1, 3);
}

let userNumber = Number(prompt(`Введите число: `));
console.log(`Результат: ${cubeDegree(userNumber)}`);