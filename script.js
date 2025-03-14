// Handle booking form submission
document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('date', document.getElementById('date').value);
    formData.append('guests', document.getElementById('guests').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('email', 'xj0059@gmail.com'); // Add recipient email

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxIB1hzBZH4g-jM45imFscjBUrfuekM7qsYKgjn8O9wdi8jW3g_cXlxOHzpfTWOA6GcYw/exec', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Booking submitted successfully! We will contact you soon.');
            e.target.reset();
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit booking. Please try again later.');
    }
});

// Initialize reviews
function displayReviews() {
    // ... existing review display logic ...
}

displayReviews();