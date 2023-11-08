var currentSlide = 0;
var slides = document.querySelectorAll('.slider img');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', function() {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', function() {
  showSlide(currentSlide + 1);
});

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);
