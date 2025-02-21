document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        displayFavorites(user.favorites);
        displayOrders(user.orders);
    } else {
        // Перенаправление на страницу входа, если пользователь не авторизован
        window.location.href = 'login.html';
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Перенаправление на страницу входа
}

function displayFavorites(favorites) {
    const favList = document.getElementById('favList');
    favList.innerHTML = '';

    if (favorites.length === 0) {
        favList.innerHTML = '<li>No favorite items</li>';
    } else {
        favorites.forEach(favorite => {
            const li = document.createElement('li');
            li.textContent = favorite;
            favList.appendChild(li);
        });
    }
}

function displayOrders(orders) {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    if (orders.length === 0) {
        orderList.innerHTML = '<li>No orders</li>';
    } else {
        orders.forEach(order => {
            const li = document.createElement('li');
            li.textContent = order;
            orderList.appendChild(li);
        });
    }
}
