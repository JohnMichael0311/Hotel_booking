import React, { useState } from "react";

const BookingForm = ({ selectedHotel }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    date: "",
  });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${bookingDetails.name} on ${bookingDetails.date}`);
  };

  if (!selectedHotel) return <p>Select a hotel to proceed with booking.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book {selectedHotel.title}</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={bookingDetails.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={bookingDetails.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
