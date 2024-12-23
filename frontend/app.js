document.addEventListener("DOMContentLoaded", () => {
    const restaurantDropdown = document.getElementById('restaurantDropdown');
    const viewDetailsButton = document.getElementById('viewDetailsButton');
    const restaurantDetails = document.getElementById('restaurant-details');
    const availabilityElement = document.getElementById('availability');
    const bookingForm = document.getElementById('booking-form');
    const customerNameInput = document.getElementById('customerName');
    const reservationTimeInput = document.getElementById('reservationTime');
    const seatsGrid = document.getElementById('seats-grid');

    // Simulated restaurant data without images
    const restaurants =[{ id: 1, name: 'Pista House', location: 'Hitech City', cuisine: 'Hyderabadi Biryani', totalSeats: 20 },
    { id: 2, name: 'Paradise', location: 'Hitech City', cuisine: 'Indian Multicuisine', totalSeats: 30 },
    { id: 3, name: 'Cafe Coffee Day', location: 'Hitech City', cuisine: 'Cafe', totalSeats: 25 },
    { id: 4, name: 'Barbeque Nation', location: 'Hitech City', cuisine: 'Buffet and Grills', totalSeats: 40 },
    { id: 5, name: 'Domino\'s Pizza', location: 'Hitech City', cuisine: 'Pizza', totalSeats: 15 },
    { id: 6, name: 'Bikanervala', location: 'Banjara Hills', cuisine: 'Indian Sweets and Snacks', totalSeats: 35 },
    { id: 7, name: 'Sahib\'s Barbecue', location: 'Hitech City', cuisine: 'Barbecue', totalSeats: 50 },
    { id: 8, name: 'The Fisherman\'s Wharf', location: 'Kondapur', cuisine: 'Seafood', totalSeats: 60 },
    { id: 9, name: 'The Indian Kitchen', location: 'Banjara Hills', cuisine: 'Indian Cuisine', totalSeats: 45 },
    { id: 10, name: 'La Pino\'z Pizza', location: 'Kukatpally', cuisine: 'Pizza', totalSeats: 25 },
    { id: 11, name: 'Ohri\'s', location: 'Banjara Hills', cuisine: 'Indian Multicuisine', totalSeats: 40 },
    { id: 12, name: 'Chutneys', location: 'Hitech City', cuisine: 'South Indian', totalSeats: 30 },
    { id: 13, name: 'The Royal Thai', location: 'Banjara Hills', cuisine: 'Thai', totalSeats: 50 },
    { id: 14, name: 'Sanjeev Kapoor Khazana', location: 'Hitech City', cuisine: 'Indian Multicuisine', totalSeats: 30 },
    { id: 15, name: 'Jewel of Nizam', location: 'Charminar', cuisine: 'Hyderabadi', totalSeats: 25 },
    { id: 16, name: 'Zafran Exotica', location: 'Kondapur', cuisine: 'Middle Eastern', totalSeats: 20 },
    { id: 17, name: 'Pind Balluchi', location: 'Hitech City', cuisine: 'North Indian', totalSeats: 35 },
    { id: 18, name: 'Viva Hyderabad', location: 'Hitech City', cuisine: 'Hyderabadi', totalSeats: 45 },
    { id: 19, name: 'Kangan', location: 'Banjara Hills', cuisine: 'Indian', totalSeats: 25 },
    { id: 20, name: 'The Park', location: 'Somajiguda', cuisine: 'International', totalSeats: 50 }
];

    // Populate restaurant dropdown
    restaurants.forEach(restaurant => {
        let option = document.createElement('option');
        option.value = restaurant.id;
        option.textContent = restaurant.name;
        restaurantDropdown.appendChild(option);
    });

    // Show restaurant details and availability
    viewDetailsButton.addEventListener('click', () => {
        const selectedRestaurantId = restaurantDropdown.value;
        if (selectedRestaurantId) {
            const selectedRestaurant = restaurants.find(restaurant => restaurant.id == selectedRestaurantId);
            document.getElementById('restaurant-info').innerHTML = `
                <p><strong>Restaurant Name:</strong> ${selectedRestaurant.name}</p>
                <p><strong>Location:</strong> ${selectedRestaurant.location}</p>
                <p><strong>Cuisine:</strong> ${selectedRestaurant.cuisine}</p>
            `;
            restaurantDetails.style.display = 'block';
            displaySeatAvailability(selectedRestaurant);
        }
    });

    // Display seat availability as grid
    function displaySeatAvailability(restaurant) {
        seatsGrid.innerHTML = ''; // Clear existing seats

        // Simulate seat availability with random booked/available seats
        for (let i = 0; i < restaurant.totalSeats; i++) {
            const seatBox = document.createElement('div');
            seatBox.classList.add('seat-box');
            seatBox.classList.add(Math.random() > 0.5 ? 'available' : 'booked'); // Randomly set seats as available or booked

            seatBox.addEventListener('click', () => {
                if (seatBox.classList.contains('available')) {
                    const confirmBooking = confirm("Do you want to book this seat?");
                    if (confirmBooking) {
                        seatBox.classList.remove('available');
                        seatBox.classList.add('booked');
                        alert("Seat booked successfully!");
                    }
                } else {
                    alert("This seat is already booked.");
                }
            });

            seatsGrid.appendChild(seatBox);
        }
    }

    // Handle booking submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const customerName = customerNameInput.value;
        const reservationTime = reservationTimeInput.value;
        alert(`Booking confirmed for ${customerName} at ${reservationTime}`);
    });
});
