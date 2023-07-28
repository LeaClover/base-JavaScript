// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const getSum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const getDiff = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber;
    } else {
        return secondNumber - firstNumber;
    }
}

const getMult = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const getDiv = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        return console.log(`На ноль делить нельзя!!!`);
    } else {
        return firstNumber / secondNumber;
    }
}

let firstNumber = Number(prompt(`Введите первое число: `));
let secondNumber = Number(prompt(`Введите второе число: `));

console.log(`Действия с числами ${firstNumber} и ${secondNumber}`);
console.log(`Сложение: ${getSum(firstNumber, secondNumber)}`);
console.log(`Разность (из большего вычесть меньшее): ${getDiff(firstNumber, secondNumber)}`);
console.log(`Умножение: ${getMult(firstNumber, secondNumber)}`);
console.log(`Деление: ${getDiv(firstNumber, secondNumber)}`);
