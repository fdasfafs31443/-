// Рейтинг отзывы комментарии

// Получение параметров из URL
function getQueryParamsR() {
    const paramsR = new URLSearchParams(window.location.search);
    const queryParamsR = {};
    paramsR.forEach((value, key) => {
        queryParamsR[key] = value;
    });
    return queryParamsR;
}

// Пример данных о товарах
const productsR = [
    { id: '1', name: 'Cборка 1', price: '50000', category: 'Компьютеры', image: './images/product-1.jpg', description: 'Описание для сборки 1' },
    { id: '2', name: 'Cборка 2', price: '72000', category: 'Компьютеры', image: './images/product-3.jpg', description: 'Описание для сборки 2' },
    // Добавьте остальные товары
];

// Пример данных для отзывов
const reviewsDataR = {
    '1': [{ text: 'Отличный продукт!', rating: 5 }],
    '2': [{ text: 'Хорошее качество.', rating: 4 }],
    // Добавьте отзывы для остальных товаров
};

// Функция для отображения деталей товара
function displayProductDetailsR() {
    const queryParamsR = getQueryParamsR();
    const productIdR = queryParamsR.id;
    const productR = productsR.find(item => item.id === productIdR);

    if (productR) {
        document.getElementById('product-image').src = productR.image;
        document.getElementById('product-category').innerText = productR.category;
        document.getElementById('product-name').innerText = productR.name;
        document.getElementById('product-price').innerText = `${productR.price} ₽`;
        document.getElementById('product-description').innerText = productR.description;
    }
}

// Функция для отображения отзывов
function displayReviewsR(productId) {
    const reviewsContainerR = document.getElementById('reviews');
    reviewsContainerR.innerHTML = '';

    const productReviewsR = reviewsDataR[productId] || [];

    if (productReviewsR.length > 0) {
        productReviewsR.forEach(review => {
            const reviewElementR = document.createElement('div');
            reviewElementR.classList.add('review');
            reviewElementR.innerHTML = `
                <p>${review.text}</p>
                <div class="rating">Рейтинг: ${review.rating} из 5</div>
            `;
            reviewsContainerR.appendChild(reviewElementR);
        });
    } else {
        reviewsContainerR.innerHTML = '<p>Пока нет отзывов. Будьте первым, кто оставит отзыв!</p>';
    }
}

// Функция для добавления нового отзыва
function addReviewR(event) {
    event.preventDefault();
    const reviewTextR = document.getElementById('review-text').value;
    const reviewRatingR = document.getElementById('review-rating').value;
    const queryParamsR = getQueryParamsR();
    const productIdR = queryParamsR.id;

    if (!reviewsDataR[productIdR]) {
        reviewsDataR[productIdR] = [];
    }

    reviewsDataR[productIdR].push({ text: reviewTextR, rating: parseInt(reviewRatingR) });

    // Очистка формы
    document.getElementById('review-text').value = '';
    document.getElementById('review-rating').value = '5';

    // Обновление списка отзывов
    displayReviewsR(productIdR);
}

// Установка обработчика для формы добавления отзыва
document.getElementById('review-form').addEventListener('submit', addReviewR);

// Вызов функций для отображения данных о товаре и отзывов при загрузке страницы
displayProductDetailsR();
const queryParamsR = getQueryParamsR();
const productIdR = queryParamsR.id;
displayReviewsR(productIdR);