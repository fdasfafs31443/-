document.addEventListener('DOMContentLoaded', () => {
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
});
