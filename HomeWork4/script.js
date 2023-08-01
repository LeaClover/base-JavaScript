// -- Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function checkNumberCycleClick() {
    const checkNumberCycle = (arrNumbers) => {
        for (let i = 0; i < arrNumbers.length; i++) {
            if (arrNumbers[i] % 2 === 0 && arrNumbers[i] !== 0) {
                console.log(`${arrNumbers[i]} -- четное число`);
            } else if (arrNumbers[i] === 0) {
                console.log(`${arrNumbers[i]} -- это ноль`);
            } else {
                console.log(`${arrNumbers[i]} -- нечетное число`);
            }
        }
    }

    const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    checkNumberCycle(arrNumbers);
}

// -- Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function actionArrayClick() {
    const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
    alert(`Изначальный массив: ${arrNumbers}`);
    const newArray = arrNumbers.slice(0, 3).concat(arrNumbers.slice(5, 7));
    alert(`Итоговый массив: ${newArray}`);
    console.log(newArray);
}

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function actionArrayRandomClick() {
    const getRandomArray = () => {
        const arrayLength = 5;
        const arrayNumbers = [];
        for (let i = 0; i < arrayLength; i++) {
            arrayNumbers.push(Math.floor(Math.random() * 10));
        }
        return arrayNumbers;
    }

    const getSumArrayNumbers = (arrayNum) => {
        let sumResult = 0;
        for (let i = 0; i < arrayNum.length; i++) {
            sumResult = sumResult + arrayNum[i];
        }
        return sumResult;
    }

    const findMinNumber = (arrayNum) => {
        let min = arrayNum[0];
        for (let i = 1; i < arrayNum.length; i++) {
            if (arrayNum[i] < min) {
                min = arrayNum[i];
            } else {
                continue;
            }
        }
        return min;
    }

    const findNumber = (arrayNum, number) => {
        let count = 0;
        for (let i = 0; i < arrayNum.length; i++) {
            if (arrayNum[i] === number) {
                count++;
            } else {
                continue;
            }
        }
        if (count > 0) {
            console.log(`В массиве есть число ${number}! -- встречается ${count} раз(а)`);
            alert(`В массиве есть число ${number} -- встречается ${count} раз(а)`);
        } else {
            console.log(`В массиве нет числа ${number}!`);
            alert(`В массиве нет числа ${number}`);
        }
    }

    const arrayNumbers = getRandomArray();
    const sumArrayNum = getSumArrayNumbers(arrayNumbers);
    const minNumber = findMinNumber(arrayNumbers);
    console.log(`Сгенерирован массив: ${arrayNumbers};
    Сумма элементов массива: ${sumArrayNum};
    Минимальный элемент массива: ${minNumber}`);
    alert(`Сгенерирован массив: ${arrayNumbers};
    Сумма элементов массива: ${sumArrayNum};
    Минимальный элемент массива: ${minNumber};`);
    findNumber(arrayNumbers, 3);
}

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

function actionXHillClick() {
    let xSymbol = 'x';
    let str = '';
    for (let i = 0; i < 20; i++) {
        str = str + xSymbol;
        console.log(str);
    }
}