document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('help-popup');
    
    if (!popup) {
        return; // Exit if the popup element doesn't exist
    }

    const SHOW_DELAY = 60000; // 60 seconds in milliseconds
    const HIDE_DELAY = 60000; // 60 seconds duration for display

    // 1. Set a timeout to show the pop-up
    setTimeout(function() {
        // Show the pop-up by adding the 'visible' class
        popup.classList.add('visible');
        
        // 2. Set a second timeout to hide the pop-up
        setTimeout(function() {
            // Hide the pop-up by removing the 'visible' class
            popup.classList.remove('visible');
            
            
        }, HIDE_DELAY);

    }, SHOW_DELAY);
});