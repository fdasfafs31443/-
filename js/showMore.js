document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.show-more-btn').addEventListener('click', function () {
      document.querySelectorAll('.product-item.hidden').forEach(function (item) {
        item.classList.remove('hidden');
      });
      this.style.display = 'none'; // Скрыть кнопку после показа продуктов
      document.querySelector('.go-more-container').style.display = 'block';
    });
  });