// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const salaryMinusTax = (userSalary) => {
    if (Number.isInteger(userSalary)) {
        let userTax = userSalary * 0.13;
        return console.log(`Зарплата: ${userSalary}; Налог(13%): ${userTax}; Зарплата-Налог: ${userSalary - userTax}`);
    } else {
        return console.log(`Введено неверное значение!`);
    }
}

let userSalary = Number(prompt(`Введите вашу зарплату: `));

console.log(userSalary);
salaryMinusTax(userSalary);
