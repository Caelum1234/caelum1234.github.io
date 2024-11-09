const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) currentIndex = 0;
    if (index < 0) currentIndex = items.length - 1;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showItem(currentIndex);
});
