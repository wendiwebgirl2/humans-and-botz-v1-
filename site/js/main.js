(() => {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const sign = item.querySelector('.faq-sign');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-sign').textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        sign.textContent = '–';
      }
    });
  });
})();
