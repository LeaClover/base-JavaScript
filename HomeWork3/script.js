// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cubeDegreeClick() {
    const cubeDegree = (userNumber) => {
        return Math.pow(userNumber, 3) + Math.pow(userNumber + 1, 3);
    }

    let userNumber = Number(prompt(`Введите число: `));
    alert(`Результат ${userNumber}^3 + ${userNumber}+1^3: ${cubeDegree(userNumber)}`)
}

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salaryMinusTaxClick() {
    const salaryMinusTax = (userSalary) => {
        if (Number.isInteger(userSalary)) {
            let userTax = userSalary * 0.13;
            return alert(`Зарплата: ${userSalary}; Налог(13%): ${userTax}; Зарплата-Налог: ${userSalary - userTax}`);
        } else {
            return alert(`Введено неверное значение!`);
        }
    }

    let userSalary = Number(prompt(`Введите вашу зарплату: `));
    salaryMinusTax(userSalary);
}

// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function findMaxNumberClick() {
    const findMaxNumber = (firstNumber, secondNumber, thirdNumber) => {
        if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && Number.isInteger(thirdNumber)) {
            let max;
            if (firstNumber >= secondNumber) {
                max = firstNumber;
            } else {
                max = secondNumber;
            }
            if (thirdNumber > max) {
                max = thirdNumber;
            }
            return alert(`Максимальное число равно ${max}`);
        } else {
            alert(`Введено неверное значение!!!`);
        }
    }

    let firstNumber = Number(prompt(`Введите первое число: `));
    let secondNumber = Number(prompt(`Введите второе число: `));
    let thirdNumber = Number(prompt(`Введите третье число: `));
    findMaxNumber(firstNumber, secondNumber, thirdNumber);
}

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function calculateClick() {
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
            return alert(`На ноль делить нельзя!!!`);
        } else {
            return firstNumber / secondNumber;
        }
    }

    let firstNumber = Number(prompt(`Введите первое число: `));
    let secondNumber = Number(prompt(`Введите второе число: `));

    alert(`Действия с числами ${firstNumber} и ${secondNumber}:
    1. Сложение: ${getSum(firstNumber, secondNumber)}
    2. Разность (из большего вычесть меньшее): ${getDiff(firstNumber, secondNumber)}
    3. Умножение: ${getMult(firstNumber, secondNumber)}
    4. Деление: ${getDiv(firstNumber, secondNumber)}`);
}
