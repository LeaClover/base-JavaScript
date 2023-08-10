// -- Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

function checkNumbersValues() {

    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }

    for (const key in numbers) {
        if (numbers[key] >= 3) {
            console.log(key + ' : ' + numbers[key]);
        }
    }
}

// -- Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

function findPostValues() {

    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };

    const findKeysValues = (path, index) => {
        const array1 = Object.values(path);
        const array2 = Object.keys(path);
        console.log(array2[index] + " : " + array1[index]);
    }

    findKeysValues(post, 0);
    findKeysValues(post.comments[0].rating, 1);
    findKeysValues(post.comments[1], 0);
    findKeysValues(post.comments[1], 2);


    console.log("Второй вариант: ");
    const arrayAuthor = Object.entries(post);
    console.log(arrayAuthor[0][0] + " : " + post.author);
    const arrayCommK = Object.keys(post.comments[0].rating);
    console.log(arrayCommK[1] + " : " + post.comments[0].rating.dislikes);
    const arrayComm2V = Object.values(post.comments[1]);
    const arrayComm2K = Object.keys(post.comments[1]);
    console.log(arrayComm2K[0] + " : " + arrayComm2V[0]);
    console.log(arrayComm2K[2] + " : " + arrayComm2V[2]);
}

// -- Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

function changePrice() {

    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach((item) => {
        item.salePrice = item.price * 0.85;
    });

    const forTable = products.map((product) => {
        return {
            id: product.id,
            price: product.price,
            salePrice: product.salePrice,
        };
    });

    console.table(forTable);
}

// -- Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

function filterProducts() {

    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
    ];

    const filterProduct = products.filter((product) => {
        if (product.photos && product.photos.length !== 0) {
            return true;
        }
        return false;
    });


    console.log(filterProduct);

    products.sort(function (a, b) {
        return a.price - b.price;
    });

    // Второй вариант метода сорт (для строк)
    // products.sort(function (a, b) {
    //     if (a.price > b.price) {
    //         return 1;
    //     }
    //     if (a.price < b.price) {
    //         return -1;
    //     }
    //     return 0;
    // });

    console.log(products);
}

// Задание 5 **
// Дано 2 массива
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function uniteArrays() {

    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    console.log("Первый вариант -- объекты");

    const uniteArraysObj = (arrayKey, arrayValue) => {
        const prompt = {};
        for (let i = 0; i < arrayKey.length; i++) {
            let key = arrayKey[i];
            prompt[key] = arrayValue[i];
        }
        return prompt;
    }

    console.log(uniteArraysObj(en, ru));
    console.log("Второй вариант -- Map");

    const uniteArraysMap = (arrayKey, arrayValue) => {
        const arrayPrompt = new Map();
        for (let i = 0; i < arrayKey.length; i++) {
            arrayPrompt.set(arrayKey[i], arrayValue[i]);
        }
        return arrayPrompt;
    }

    console.log(uniteArraysMap(en, ru));

}