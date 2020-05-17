import React, { useState } from 'react';
import './Newsletter.css';
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
      <div className='newsletter'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='epicfont' for='email'>
              Lord of the Ring Newsletter
            </label>
            <input
              className='inline '
              type='text'
              name='email'
              id=''
              value={value}
              onChange={handleChange}
              placeholder='One email to rule them all'
            />
            <button className='action-button shadow animate color news-button'>
              Subscribe!!
            </button>
          </div>
        </form>
        <p className='epicfont'>Receive an EPIC QUOTE every day</p>
      </div>
    </>
  );
};
