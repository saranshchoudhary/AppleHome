const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;

    // Prevent overflow
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Center the current slide
    const offset = -currentIndex * (slides[0].clientWidth + 20); // Including margin between slides
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`;
  

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}
slides.forEach((slide, idx) => {
    if (idx === currentIndex) {
        slide.classList.add('active'); // Apply the active class for the current slide
    } else {
        slide.classList.remove('active'); // Remove active class for other slides
    }
});

// Dots event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto play (Optional)
let autoPlay = setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Stop auto play on hover (Optional)
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoPlay);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
