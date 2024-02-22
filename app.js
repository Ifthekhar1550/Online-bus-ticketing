function scrollToSeats() {
  const selectSeatsSection = document.getElementById("select-seats-section");
  selectSeatsSection.scrollIntoView({ behavior: "smooth" });
}
  let selectedSeats = [];

function selectSeat(seat) {
  const index = selectedSeats.indexOf(seat);

  if (index === -1) {
    // Seat not selected, check if there are available seats left
    if (selectedSeats.length < 4) {
      selectedSeats.push(seat);
     
    }
    else {
      alert("You can only select up to 4 seats.");
    }
  } else {
    // Seat already selected, do nothing
  }

  // Update UI
  updateSelectedSeatsUI();
}

  function updateSelectedSeatsUI() {
    // Update seats left button text
    const seatsLeft = 8 - selectedSeats.length;
    document.getElementById(
      "seatsLeftButton"
    ).textContent = `${seatsLeft} Seats Left`;

    // Update selected seats summary
    // const summary = selectedSeats.join(", ");
    // document.getElementById("selectedSeatsSummary").textContent = summary;

    // Update number of booked seats button text
    document.getElementById(
      "bookedSeatsButton"
    ).textContent = `${selectedSeats.length}`;
}
   document.getElementById(seat).classList.add("btn-selected");