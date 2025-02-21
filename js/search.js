
  function searchProduct() {
    const input = document.getElementById('search-input').value;
    const products = document.querySelectorAll('.product-item');
    let found = false;
  
    products.forEach(product => {
      if (product.dataset.productId === input) {
        product.scrollIntoView({ behavior: 'smooth' });
        product.style.border = '2px solid red'; // выделяем найденный товар
        found = true;
        window.location.href = `productDetails.html?id=${input}`
      } else {
        product.style.border = 'none'; // убираем выделение с других товаров
      }
    });
  
    if (!found) {
      alert('Товар с данным ID не найден.');
    }
  }