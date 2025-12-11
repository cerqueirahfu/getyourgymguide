const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Show selected slide
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

// Click on dots
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    let next = (currentIndex + 1) % slides.length;
    showSlide(next);
}, 5000);

