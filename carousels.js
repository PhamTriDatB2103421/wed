const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = carousel.clientWidth;

let slideIndex = 0;

// move to next slide
const moveToNextSlide = () => {
    if (slideIndex >= slides.children.length - 1) {
        return;
    }
    slideIndex++;
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    updateButtonState();
};

// move to previous slide
const moveToPrevSlide = () => {
    if (slideIndex <= 0) {
        return;
    }
    slideIndex--;
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    updateButtonState();
};

// update state of previous and next buttons
const updateButtonState = () => {
    if (slideIndex === 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    if (slideIndex === slides.children.length - 1) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
};

// add event listeners for previous and next buttons
prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);

// initial state of previous and next buttons
updateButtonState();
