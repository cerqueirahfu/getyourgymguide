document.addEventListener("DOMContentLoaded", () => {
    const locationSelect = document.getElementById("location-select");
    const priceSelect = document.getElementById("price-select");
    const typeSelect = document.getElementById("type-select");
    const amenitiesSelect = document.getElementById("amenities-select");


    const cards = document.querySelectorAll(".box");

    function filterGyms() {
        const location = locationSelect.value;
        const price = priceSelect.value;
        const type = typeSelect.value;

        cards.forEach(card => {
            const matchLocation =
                location === "all" || card.dataset.location === location;

            const matchPrice =
                price === "any" || card.dataset.priceTier === price;

            const matchType =
                type === "all" || card.dataset.type === type;

            if (matchLocation && matchPrice && matchType) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

            const amenity = amenitiesSelect.value;
            const amenitiesList = card.dataset.amenities?.split(",") || [];

            const matchAmenity =
                amenity === "any" || amenitiesList.includes(amenity);

            if (matchLocation && matchPrice && matchType && matchAmenity) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

        });
    }

    locationSelect.addEventListener("change", filterGyms);
    priceSelect.addEventListener("change", filterGyms);
    typeSelect.addEventListener("change", filterGyms);
    amenitiesSelect.addEventListener("change", filterGyms);

});
