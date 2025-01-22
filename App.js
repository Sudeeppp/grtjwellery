//close the playstore div
const playStore = document.querySelector(".play-store");
const closePlayStore = document.querySelector(".close-div");

console.log(closePlayStore);

closePlayStore.addEventListener("click", () => {
    playStore.style.display = "none";
});

// carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");

let currentIndex = 0;

// Function to update the classes and styles for active slides
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("center");
        slide.querySelector("img").style.transform = "scale(1)";
        slide.querySelector("img").style.opacity = "0.7";
    });

    // Set the center slide to be larger
    slides[currentIndex + 1].classList.add("center");
    slides[currentIndex + 1].querySelector("img").style.transform = "scale(1.1)";
    slides[currentIndex + 1].querySelector("img").style.opacity = "1";
}

// Function to move to the next slide
function moveToSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Move the track by -1 slide width for each scroll
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    // Update the center image and surrounding images
    updateSlides();
}

// Button to move to the previous slide
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length - 2) % (slides.length - 2);
    moveToSlide(currentIndex);
});

// Button to move to the next slide
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % (slides.length - 2);
    moveToSlide(currentIndex);
});

// Automatic scrolling every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % (slides.length - 2);
    moveToSlide(currentIndex);
}, 3000); // 3 seconds interval

// Initialize the carousel
updateSlides();
