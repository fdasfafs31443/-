document.addEventListener('DOMContentLoaded', () => {
    // Функция для извлечения данных из localStorage
    const getDataFromLocalStorage = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    };

    // Функция для отображения избранных товаров
    const displayFavorites = () => {
        const favoritesList = document.querySelector('.favorites-list');
        const favorites = getDataFromLocalStorage('favorites');
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p>У вас нет избранных товаров.</p>';
        } else {
            favorites.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('favorite-item');
                div.innerHTML = `
                    <a href="productDetails.html?id=${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    </a>
                    <h4>${item.name}</h4>
                `;
                favoritesList.appendChild(div);
            });
        }
    };

    // Функция для отображения заказов
    const displayOrders = () => {
        const ordersList = document.querySelector('.orders-list');
        const orders = getDataFromLocalStorage('cart');
        if (orders.length === 0) {
            ordersList.innerHTML = '<p>У вас нет заказов.</p>';
        } else {
            orders.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('order-item');
                div.innerHTML = `
                    <h4>${item.name}</h4>
                    <p>Количество: ${item.quantity}</p>
                    <p>Сумма: ${item.price} ₽</p>
                `;
                ordersList.appendChild(div);
            });
        }
    };

    // Функция для выхода из аккаунта
    const handleLogout = () => {
        // Логика выхода из аккаунта (например, очистка данных сессии и перенаправление на страницу авторизации)
        localStorage.removeItem('user');  // Предположим, что данные пользователя хранятся под ключом 'user'
        window.location.href = 'login.html';
    };

    // Отображение избранных товаров и заказов при загрузке страницы
    displayFavorites();
    displayOrders();

    // Добавление обработчика события для кнопки "Выйти"
    document.querySelector('.logout-btn').addEventListener('click', handleLogout);


    document.addEventListener("DOMContentLoaded", function () {
        const productItems = document.querySelectorAll(".product-item");
      
        productItems.forEach(function (product) {
          const productId = product.dataset.productId;
          const productLink = product.querySelector(".product-link");
          productLink.href = `productDetails.html?id=${productId}`;
        });
      });
      
});
