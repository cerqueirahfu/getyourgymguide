        document.addEventListener('DOMContentLoaded', () => {
            const filters = document.querySelectorAll('.filter-bar select');
            const classBoxes = document.querySelectorAll('.box');


            // --- Central Filtering Function ---
            function filterClasses() {
                // 1. Get current values from all filters
                const selectedCategory = document.getElementById('category-select').value;
                const selectedLocation = document.getElementById('location-select').value;
                const selectedPrice = document.getElementById('price-select').value;
                const selectedTime = document.getElementById('time-select').value;

                // 2. Iterate over each content box
                classBoxes.forEach(box => {
                    const boxCategory = box.getAttribute('data-category');
                    const boxLocation = box.getAttribute('data-location');
                    const boxPrice = box.getAttribute('data-price-tier');
                    const boxTime = box.getAttribute('data-time');

                    // 3. Check for matches against ALL active filters

                    // Check Category: Match if filter is 'all' or attribute matches
                    const isCategoryMatch = selectedCategory === 'all' || selectedCategory === boxCategory;
                    
                    // Check Location: Match if filter is 'all' or attribute matches
                    const isLocationMatch = selectedLocation === 'all' || selectedLocation === boxLocation;

                    // Check Price: Match if filter is 'any' or attribute matches
                    const isPriceMatch = selectedPrice === 'any' || selectedPrice === boxPrice;

                    // Check Time: Match if filter is 'any' or attribute matches
                    const isTimeMatch = selectedTime === 'any' || selectedTime === boxTime;

                    // 4. Determine final visibility
                    const shouldShow = isCategoryMatch && isLocationMatch && isPriceMatch && isTimeMatch;

                    // 5. Apply visibility using the 'hidden' class
                    if (shouldShow) {
                        box.classList.remove('hidden');
                    } else {
                        box.classList.add('hidden');
                    }
                });
            }

            // 6. Attach the filter function to all select elements' 'change' event
            filters.forEach(select => {
                select.addEventListener('change', filterClasses);
            });

        });