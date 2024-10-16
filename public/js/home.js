console.log("Hola Amigo")

// SLIDER 
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides > div');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Show the next slide
    slides[currentSlide].style.opacity = 1;

    // Move the slides container to show the current slide
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slides > div')[0].style.opacity = 1;
    setInterval(() => changeSlide(1), 3000); 
});




