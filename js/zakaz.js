function showModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
  }
  
  const checkoutBtn = document.querySelector('.checkout-btn');
  checkoutBtn.addEventListener('click', showModal);
  
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
      closeModal();
    }
  });
  
  const orderForm = document.getElementById('order-form');
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    closeModal();
  });
  