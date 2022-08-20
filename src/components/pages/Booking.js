import {useState} from 'react';
import React, { Component }  from 'react';

const Booking = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log('form submitted ✅');
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="first"
          name="first"
          value={first}
          onChange={event => setFirst(event.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          id="last"
          name="last"
          value={last}
          onChange={event => setLast(event.target.value)}
          autoComplete="off"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;