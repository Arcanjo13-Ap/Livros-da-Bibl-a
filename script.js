document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ler-mais');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const target = document.getElementById(targetId);
        
        if (button.textContent === 'Leia mais') {
          target.style.maxHeight = 'none';
          button.textContent = 'Leia menos';
        } else {
          target.style.maxHeight = '100px';
          button.textContent = 'Leia mais';
        }
      });
    });
  });
  