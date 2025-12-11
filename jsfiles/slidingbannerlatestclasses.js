const classSlides = document.querySelectorAll(".class-slide");
const classDots = document.querySelectorAll(".classes-dot");

let classIndex = 0;

function showClassSlide(n) {
    classSlides.forEach(slide => slide.classList.remove("active"));
    classDots.forEach(dot => dot.classList.remove("active"));

    classSlides[n].classList.add("active");
    classDots[n].classList.add("active");
}

classDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        classIndex = index;
        showClassSlide(classIndex);
    });
});

// Auto-slide every 5 seconds (optional)
setInterval(() => {
    classIndex = (classIndex + 1) % classSlides.length;
    showClassSlide(classIndex);
}, 5000);
