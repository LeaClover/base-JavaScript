// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

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
        return console.log(`Максимальное число равно ${max}`);
    } else {
        console.log(`Введено неверное значение!!!`);
    }
}

let firstNumber = Number(prompt(`Введите первое число: `));
let secondNumber = Number(prompt(`Введите второе число: `));
let thirdNumber = Number(prompt(`Введите третье число: `));
findMaxNumber(firstNumber, secondNumber, thirdNumber);
