document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.querySelector('.form-container').innerHTML = `
        <div class="thank-you-message">
            <h2>Thank You!</h2>
            <p>Your feedback has been received.</p>
        </div>
    `;
});
