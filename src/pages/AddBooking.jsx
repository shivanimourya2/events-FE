import React, { useState } from "react";
import axios from "axios";
import "./AddBooking.css";

const AddBooking = () => {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/add", { name, event, time, phone })
      .then(() => {
        alert("Booking successful!");
        setName("");
        setEvent("");
        setTime("");
        setPhone("");
      })
      .catch(() => {
        alert("Error booking event.");
      });
  };

  return (
    <div className="form-container">
      <h2>Register for Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Event Name"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default AddBooking;
