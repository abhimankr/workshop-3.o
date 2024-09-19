// Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    alert('Book added to cart!');
});

// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="