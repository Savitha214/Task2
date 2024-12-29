

import React, { useState } from 'react';
import './ASeat.css';

const totalSeats = 40; 
const initialSeats = Array(totalSeats).fill(false); 

const ASeat = () => {
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelect = (seatIndex) => {
    if (!seats[seatIndex]) {
      const newSeats = [...seats];
      newSeats[seatIndex] = true; // Mark seat as booked
      setSeats(newSeats);
      setSelectedSeat(seatIndex + 1); // Update selected seat
    } else {
      alert(`Seat number ${seatIndex + 1} is already occupied.`);
    }
  };

  const availableCount = seats.filter(seat => !seat).length;

  return (
    <div className='aseat-container'>
      <h2 style={{ textAlign: 'center' }}>Accessibility Seat</h2>
      <p style={{ textAlign: 'center' }}>Available Seats: {availableCount} / {totalSeats}</p>
      <div className='seat-grid'>
        {seats.map((isBooked, index) => (
          <div
            key={index}
            className={`seat ${isBooked ? 'booked' : (selectedSeat === index + 1 ? 'selected' : '')}`}
            onClick={() => handleSeatSelect(index)}
            role="button"
            aria-pressed={selectedSeat === index + 1}
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleSeatSelect(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <br />
      {selectedSeat && (
        <div className='confirmation'>
          <p style={{ textAlign: 'center' }}>You have selected seat number: <strong>{selectedSeat}</strong></p>
        </div>
      )}
    </div>
  );
};

export default ASeat;
