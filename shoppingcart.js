// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateTotal();
  
    // Handle quantity increase and decrease
    const plusBtns = document.querySelectorAll('.fa-plus-circle');
    const minusBtns = document.querySelectorAll('.fa-minus-circle');
    const deleteBtns = document.querySelectorAll('.fa-trash-alt');
    const heartBtns = document.querySelectorAll('.fa-heart');
  
    plusBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const quantitySpan = btn.nextElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = ++quantity;
        updateTotal();
      });
    });
  
    minusBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const quantitySpan = btn.previousElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
          quantitySpan.textContent = --quantity;
          updateTotal();
        }
      });
    });
  
    // Handle deletion
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.unit-price');
        card.remove();
        updateTotal();
      });
    });
  
    // Handle like (heart)
    heartBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
      });
    });
  });
  
  // Function to update total price
  function updateTotal() {
    let total = 0;
    const productCards = document.querySelectorAll('.card-body > .card');
  
    productCards.forEach((card) => {
      const priceText = card.querySelector('.unit-price').textContent;
      const price = parseFloat(priceText.replace('$', '').trim());
      const quantity = parseInt(card.querySelector('.quantity').textContent);
      total += price * quantity;
    });
  
    document.querySelector('.total').textContent = `${total} $`;
  }
  