document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    const packageName = document.getElementById('package-name').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const participants = document.getElementById('participants').value;

    const bookingDetails = document.getElementById('booking-details');

    if (packageName && startDate && endDate && participants) {
        bookingDetails.innerHTML = `
            <h3>Booking Details</h3>
            <p><strong>Package Name:</strong> ${packageName}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Participants:</strong> ${participants}</p>
            <p>Thank you for your booking!</p>
        `;
    } else {
        bookingDetails.innerHTML = `<p style="color: red;">Please fill in all fields!</p>`;
    }
});
