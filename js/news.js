document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const closeButtons = document.querySelectorAll('.close-full');
  
    readMoreButtons.forEach(button => {
      button.addEventListener('click', event => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.style.display = 'block';
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetElement = button.closest('.news-full');
        if (targetElement) {
          targetElement.style.display = 'none';
        }
      });
    });
  });
  