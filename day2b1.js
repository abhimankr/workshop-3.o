// carton-facts.js

document.addEventListener('DOMContentLoaded', function() {
    const getFactBtn = document.getElementById('getFactBtn');
    const factDisplay = document.getElementById('factDisplay');

    getFactBtn.addEventListener('click', function() {
        // Define the API URL (replace with your actual API endpoint)
        const apiUrl = 'https://api.example.com/carton-facts/random';

        // Make a GET request
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display the carton fact on the webpage
                factDisplay.textContent = data.fact;
            })
            .catch(error => {
                // Handle errors
                factDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching carton fact:', error);
            });
    });
});
