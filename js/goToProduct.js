// Объект с данными о товарах
const products = {
    3: {
        title: 'Гавайская Радость',
        description: 'Куриная ветчина, ананасы и нежная моцарелла на соусе из сливок. Экзотика, которая полюбилась миллионам.',
        price: 700,
        category: '',
        image: './images/product-2.jpg',
        discount: 0
    },
    7: {
        title: 'Сборка 7',
        description: 'Описание сборки 7',
        price: 24499,
        category: 'Компьютеры',
        image: './images/product-8.jpg',
        discount: 0
    },
    2: {
        title: 'Пепперони Феерия',
        description: 'Пикантная пицца с обилием колбасок пепперони, сыром моцарелла и ароматными специями.',
        price: 650,
        category: 'Компьютеры',
        image: './images/product-3.jpg',
        discount: 0
    },
    1: {
        title: 'Маргарита',
        description: 'Традиционная пицца с сочными томатами, свежим базиликом и нежным моцареллой.',
        price: 500,
        category: 'Компьютеры',
        image: './images/product-1.jpg',
        discount: 0
    },
    4: {
        title: 'Мясной Деликатес',
        description: 'Ассорти из копчёного бекона, ветчины, колбасы и сыра чеддер для настоящих мясоедов.',
        price: 800,
        category: 'Компьютеры',
        image: './images/product-4.jpg',
        discount: 0
    },
    6: {
        title: 'Четыре Сыра',
        description: 'Изысканный микс из пармезана, моцареллы, дорблю и чеддера на сливочной основе.',
        price: 750,
        category: 'Компьютеры',
        image: './images/product-6.jpg',
        discount: 0
    },
    8: {
        title: 'Морской Бриз',
        description: 'Аппетитная пицца с креветками, мидиями, кальмарами и свежей зеленью.',
        price: 850,
        category: 'Компьютеры',
        image: './images/product-8.png',
        discount: 0
    },
    5: {
        title: 'Овощной Рай',
        description: 'Лёгкая и полезная пицца с баклажаном, томатами, базиликом и сыром фета.',
        price: 600,
        category: 'Компьютеры',
        image: './images/product-5.jpg',
        discount: 0
    },
    10: {
        title: 'Острая Диабло',
        description: 'Пицца с острым соусом, халапеньо, пепперони и сыром моцарелла.',
        price: 700,
        category: 'Ноутбуки',
        image: './images/product-9.jpg',
        discount: 0
    },
    11: {
        title: 'Трюфельная Классика',
        description: 'Нежная пицца с трюфельным соусом, пармезаном и свежими шампиньонами.',
        price: 950,
        category: 'Ноутбуки',
        image: 'images/product-10.jpg',
        discount: 0
    },
    12: {
        title: 'Сладкая Итальянка',
        description: 'Десертная пицца с кремом маскарпоне, ягодами и мёдом.',
        price: 600,
        category: 'Ноутбуки',
        image: 'images/product-11.jpg',
        discount: 0
    },
    13: {
        title: 'Эвервесс Кола',
        description: '0.5 Л',
        price: 100,
        category: 'Ноутбуки',
        image: 'images/product-12.jpeg',
        discount: 0
    },
    14: {
        title: 'Чай Lipton Лимон',
        description: '0.5 Л',
        price: 100,
        category: 'Мониторы',
        image: 'images/product-13.jpg',
        discount: 0
    },
    15: {
        title: 'Добрый Лимон-Лайм',
        description: '0.5 Л',
        price: 100,
        category: 'Мониторы',
        image: 'images/product-14.jpg',
        discount: 0
    },
    16: {
        title: 'Добрый Апельсин',
        description: '0.5 Л',
        price: 100,
        category: 'Мониторы',
        image: 'images/product-15.jpg',
        discount: 0
    },
    17: {
        title: 'Добрый Кола без сахара',
        description: '0.5 Л',
        price: 100,
        category: 'Мониторы',
        image: 'images/product-16.jpg',
        discount: 0
    },
    18: {
        title: 'Огненная Пепперони',
        description: 'Острая пицца с пикантной пепперони, сыром моцарелла и специальным острым соусом для ценителей ярких вкусов.',
        price: 710,
        category: 'Мониторы',
        image: './images/product-18.jpg',
        discount: 0
    },
    19: {
        title: 'Баварская Классика',
        description: 'Острая пицца с баварскими колбасками, ветчиной, солёными огурчиками и сыром моцарелла с специальным острым соусом.',
        price: 740,
        category: 'Мониторы',
        image: './images/product-19.jpg',
        discount: 0
    }
};

// Функция для получения параметров из URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// Функция для отображения данных о товаре
function displayProductDetails() {
    const queryParams = getQueryParams();
    const productId = queryParams.id;
    const product = products[productId];

    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = String(Math.floor(product.price - (product.price * product.discount / 100))) + " ₽";
        document.getElementById('product-image').src = product.image;
    } else {
        // Обработка случая, когда продукт не найден
        document.querySelector('.product-detail .details').innerHTML = '<p>Продукт не найден</p>';
    }
}

// Вызов функции для отображения данных при загрузке страницы
window.onload = displayProductDetails;