document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            id: 3,
            name: 'Гавайская Радость',
            price: 700,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-2.jpg'
        },
        {
            id: 2,
            name: 'Пепперони Феерия',
            price: 650,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-3.jpg'
        },
        {
            id: 4,
            name: 'Мясной Деликатес',
            price: 800,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-4.jpg'
        },
        {
            id: 5,
            name: 'Овощной Рай',
            price: 600,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-5.jpg'
        },
        {
            id: 6,
            name: 'Четыре Сыра',
            price: 750,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-6.jpg'
        },
        {
            id: 1,
            name: 'Маргарита',
            price: 500,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-1.jpg'
        },
        {
            id: 8,
            name: 'Морской Бриз',
            price: 850,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-8.png'
        },
        {
            id: 10,
            name: 'Острая Диабло',
            price: 700,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-9.jpg'
        },
        {
            id: 11,
            name: 'Трюфельная Классика',
            price: 950,
            discount: 0,
            type: 'Компьютеры',
            image: 'images/product-10.jpg'
        },
        {
            id: 12,
            name: 'Сладкая Итальянка',
            price: 600,
            discount: 0,
            type: 'Компьютеры',
            image: 'images/product-11.jpg'
        },
        {
            id: 13,
            name: 'Эвервесс Кола',
            price: 100,
            discount: 0,
            type: 'Мониторы',
            image: 'images/product-12.jpeg'
        },
        {
            id: 14,
            name: 'Чай Lipton Лимон',
            price: 100,
            discount: 0,
            type: 'Мониторы',
            image: 'images/product-13.jpg'
        },
        {
            id: 15,
            name: 'Добрый Лимон-Лайм',
            price: 100,
            discount: 0,
            type: 'Мониторы',
            image: 'images/product-14.jpg'
        },
        {
            id: 16,
            name: 'Добрый Апельсин',
            price: 100,
            discount: 0,
            type: 'Мониторы',
            image: 'images/product-15.jpg'
        },
        {
            id: 17,
            name: 'Добрый Кола без сахара',
            price: 100,
            discount: 0,
            type: 'Мониторы',
            image: 'images/product-16.jpg'
        },
        // Доп пиццы
        {
            id: 18,
            name: 'Огненная Пепперони',
            price: 710,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-18.jpg'
            //Описание: Острая пицца с пикантной пепперони, сыром моцарелла и специальным острым соусом для ценителей ярких вкусов.
        },
        {
            id: 19,
            name: 'Баварская Классика',
            price: 740,
            discount: 0,
            type: 'Компьютеры',
            image: './images/product-19.jpg'
            //Описание: Нежные баварские колбаски, томатный соус, маринованный лук и сыр моцарелла на румяной корочке.
        }
        // Добавьте больше продуктов при необходимости
    ];
    // сброс сортировки
    document.getElementById('sort-select').value = '1';

    const itemsPerPage = 8;
    let currentPage = 1;
    let currentProducts = [...products];

    function displayProducts(products, page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const paginatedProducts = products.slice(startIndex, endIndex);

        const productContainer = document.getElementById('product-list');
        productContainer.innerHTML = '';

        paginatedProducts.forEach(product => {
            const productHTML = `
                <div class="product-item" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}" data-product-discount="${product.discount}" data-product-type="${product.type}" data-product-image="${product.image}">
                    <div class="overlay">
                        <a href="productDetails.html" class="product-thumb">
                            <img src="${product.image}" alt="" />
                        </a>
                        ${product.discount ? `<span class="discount">${product.discount}%</span>` : ''}
                    </div>
                    <div class="product-info">
                        <a href="productDetails.html?id=${product.id}">${product.name}</a>
                        <h4>${product.price.toLocaleString('ru-RU')} ₽</h4>
                    </div>
                    <ul class="icons">
                        <li class="favorite-btn"><i class="bx bx-heart"></i></li>
                        <li><a href="productDetails.html?id=${product.id}"><i class="bx bx-search"></i></a></li>
                        <li><i class="bx bx-cart"></i></li>
                    </ul>
                </div>
            `;
            productContainer.innerHTML += productHTML;
            //-------------------------------------------------------------------------------
            // здесь добавлен код из файла addToFavorite.js так как товары заново генерируются и прослушивателей событий соотвественно на них нет.
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
                        discount: productDiscount,
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

            //-------------------------------------------------------------------------------

            // Сдесь код из addToCart по той же причине
            const cartButtons = document.querySelectorAll('.bx-cart');

            cartButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const productElement = e.target.closest('.product-item');
                    const product = {
                        id: productElement.getAttribute('data-product-id'),
                        name: productElement.getAttribute('data-product-name'),
                        price: parseFloat(productElement.getAttribute('data-product-price')),
                        discount: parseFloat(productElement.getAttribute('data-product-discount')),
                        image: productElement.getAttribute('data-product-image')
                    };

                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const existingProductIndex = cart.findIndex(item => item.id === product.id);

                    if (existingProductIndex > -1) {
                        cart[existingProductIndex].quantity++;
                    } else {
                        product.quantity = 1;
                        cart.push(product);
                    }

                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert('Товар добавлен в корзину');
                });
            });
            // ----------------------------------------------------------------------------------
        });
    }

    function setupPagination(products) {
        const pageCount = Math.ceil(products.length / itemsPerPage);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= pageCount; i++) {
            const pageSpan = document.createElement('span');
            pageSpan.textContent = i;
            if (i === currentPage) {
                pageSpan.classList.add('active');
            }
            pageSpan.addEventListener('click', function () {
                currentPage = i;
                displayProducts(products, currentPage);
                setupPagination(products);
            });
            paginationContainer.appendChild(pageSpan);
        }

        const nextArrow = document.createElement('i');
        nextArrow.classList.add('bx', 'bx-right-arrow-alt');
        nextArrow.addEventListener('click', function () {
            if (currentPage < pageCount) {
                currentPage++;
                displayProducts(products, currentPage);
                setupPagination(products);
            }
        });
        paginationContainer.appendChild(nextArrow);
    }

    displayProducts(products, currentPage);
    setupPagination(products);

    // Логика фильтрации продуктов
    function filterProducts(type) {
        if (type === 'all') {
            return products;
        } else {
            return products.filter(product => product.type === type);
        }
    }

    document.getElementById('filter-select').addEventListener('change', function () {
        const type = this.value;
        currentProducts = filterProducts(type);
        currentPage = 1;
        displayProducts(currentProducts, currentPage);
        setupPagination(currentProducts);
        // Сбрасываем значение поля выбора сортировки
        document.getElementById('sort-select').value = '1';
    });

    // сортировка
    function sortProducts(products, sortBy) {
        if (sortBy === 'price-asc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name-asc') {
            return products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'name-desc') {
            return products.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            return products;
        }
    }

    document.getElementById('sort-select').addEventListener('change', function () {
        const sortBy = this.value;
        currentProducts = sortProducts(currentProducts, sortBy);
        displayProducts(currentProducts, currentPage);
    });

});