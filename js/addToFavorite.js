document.addEventListener('DOMContentLoaded', function () {
    let favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const productItem = button.closest('.product-item');
            const productId = productItem.getAttribute('data-product-id');
            const productName = productItem.getAttribute('data-product-name');
            const productPrice = productItem.getAttribute('data-product-price');
            const productImage = productItem.getAttribute('data-product-image');
            const productDiscount = productItem.getAttribute('data-product-discount');
            const productType = productItem.getAttribute('data-product-type');
            
            const favoriteProduct = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                discount:productDiscount,
                type: productType
            };

            saveFavoriteProduct(favoriteProduct);
        });
    });

    function saveFavoriteProduct(product) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Проверка на дубликаты
        if (!favorites.some(fav => fav.id === product.id)) {
            favorites.push(product);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Добавлено в избранные');
        } else {
            alert('Товар уже есть в избранных!');
        }
    }
});