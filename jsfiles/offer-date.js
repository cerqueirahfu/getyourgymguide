document.addEventListener('DOMContentLoaded', function() {
    const expiryDateElement = document.getElementById('offer-expiry-date');
    if (expiryDateElement) {
        // 1. Get the current date
        const currentDate = new Date();
        
        // 2. Set the expiration date (2 months from now)
        const expiryDate = new Date(currentDate);
        expiryDate.setMonth(currentDate.getMonth() + 2);
        
        // 3. Format the date (e.g., "November 18, 2025")
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = expiryDate.toLocaleDateString('en-US', options);
        
        // 4. Display the date in the HTML
        expiryDateElement.textContent = formattedDate;
    }
});