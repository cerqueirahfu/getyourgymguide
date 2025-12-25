document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category-select");
    const locationSelect = document.getElementById("location-select");
    const priceSelect = document.getElementById("price-select");
    const timeSelect = document.getElementById("time-select");

    const cards = document.querySelectorAll(".box");

    function filterClasses() {
        const category = categorySelect.value;
        const location = locationSelect.value;
        const price = priceSelect.value;
        const time = timeSelect.value;

        cards.forEach(card => {
            const matchCategory =
                category === "all" || card.dataset.category === category;

            const matchLocation =
                location === "all" || card.dataset.location === location;

            const matchPrice =
                price === "any" || card.dataset.priceTier === price;

            const matchTime =
                time === "any" || card.dataset.time === time;

            if (matchCategory && matchLocation && matchPrice && matchTime) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }

    categorySelect.addEventListener("change", filterClasses);
    locationSelect.addEventListener("change", filterClasses);
    priceSelect.addEventListener("change", filterClasses);
    timeSelect.addEventListener("change", filterClasses);
});
