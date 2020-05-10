import React, { useState } from 'react';

export const Newsletter = () => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(value);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for='email'>Lord of the Ring Newsletter</label>
        <input
          type='text'
          name='email'
          id=''
          value={value}
          onChange={handleChange}
          placeholder='One email to rule them all'
        />
        <button>Subscribe!!</button>
        <p>Receive an EPIC QUOTE every day</p>
      </form>
    </>
  );
};
