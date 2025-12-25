function filterArticles(searchTerm) {
    const blogCards = document.querySelectorAll('.blog-card');
    const filter = searchTerm.toLowerCase().trim();

    blogCards.forEach(card => {
        const titleElement = card.querySelector('h2');
        const contentElement = card.querySelector('p');

        if (titleElement && contentElement) {
            const titleText = titleElement.textContent.toLowerCase();
            const contentText = contentElement.textContent.toLowerCase();

            if (titleText.includes(filter) || contentText.includes(filter)) {
                card.style.display = ''; // Empty string preserves CSS display value
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Add event listener to search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    filterArticles(e.target.value);
});

    