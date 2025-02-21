document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
  
    // Получаем товары из localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Функция для расчета итоговой цены
    function calculateTotalPrice() {
      let totalPrice = 0;
      cart.forEach(product => {
        const quantity = document.querySelector(`input[data-product-id="${product.id}"]`).value;
        const priceAfterDiscount = product.price - (product.price * (product.discount / 100));
        totalPrice += priceAfterDiscount * quantity;
      });
      totalPriceElement.textContent = `${totalPrice.toFixed(2)} ₽`;
    }
  
    // Функция для удаления товара из корзины
    function removeItem(productId) {
      const updatedCart = cart.filter(product => product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      location.reload(); // Перезагружаем страницу для обновления корзины
    }
  
    // Проходимся по товарам и создаем HTML для каждого товара
    cart.forEach(product => {
      const productElement = document.createElement('tr');
      const priceAfterDiscount = product.price - (product.price * (product.discount / 100));
      productElement.innerHTML = `
        <td>
          <div class="cart-info">
            <img src="${product.image}" alt="${product.name}">
            <div>
              <p>${product.name}</p>
              <span>Цена: ${priceAfterDiscount.toFixed(2)} ₽</span> <br />
              <a href="#" class="remove-btn" data-product-id="${product.id}">Убрать</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="1" min="1" data-product-id="${product.id}"></td>
        <td class="total-item-price">${priceAfterDiscount.toFixed(2)} ₽</td>
      `;
      
      cartItemsContainer.appendChild(productElement);
    });
  
    // Обновляем итоговую цену при изменении количества
    cartItemsContainer.addEventListener('input', (e) => {
      if (e.target.type === 'number') {
        const productId = e.target.getAttribute('data-product-id');
        const product = cart.find(p => p.id === productId);
        const priceAfterDiscount = product.price - (product.price * (product.discount / 100));
        const totalItemPriceElement = e.target.closest('tr').querySelector('.total-item-price');
        totalItemPriceElement.textContent = `${(priceAfterDiscount * e.target.value).toFixed(2)} ₽`;
        calculateTotalPrice();
      }
    });
  
    // Добавляем обработчики кликов на кнопки "Убрать"
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = button.getAttribute('data-product-id');
        removeItem(productId);
      });
    });
  
    // Инициализируем итоговую цену
    calculateTotalPrice();
  });
  