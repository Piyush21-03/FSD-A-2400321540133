const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function() {

    const name = document.getElementById("userName").value;
    const age = Number(document.getElementById("userAge").value);
    const adhaar = document.getElementById("adhaarNum").value;
    const city = document.getElementById("city").value;
    const date = document.getElementById("bookingDate").value;
    const seat = document.getElementById("seat").value;
    const checkedRadio = document.querySelector('input[name="busType"]:checked');
    const busType = checkedRadio ? checkedRadio.value : "Not Selected";

    let ticketPrice = 0;
    if (busType === "ac") {
        ticketPrice = 2000;
    } else if (busType === "non-ac") {
        ticketPrice = 1500;
    }

    console.log("--- Ticket Details ---");
    console.log("Passenger Name: " + name);
    console.log("Passenger Age: " + age);
    console.log("Adhaar Card: " + adhaar);
    console.log("Destination City: " + city);
    console.log("Travel Date: " + date);
    console.log("Bus Comfort Level: " + busType);
    console.log("Assigned Seat: " + seat);
    console.log("Total Price Due: ₹" + ticketPrice);

    alert(`Success! Ticket booked for ${name} to ${city}.\nTotal Price: ₹${ticketPrice}`);
});
