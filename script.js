document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;

    function nextSlide() {
        slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000); 
});
