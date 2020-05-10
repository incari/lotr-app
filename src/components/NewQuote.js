import React, { useState } from 'react';

export const NewQuote = () => {
  const [click, onClick] = useState();
  const handleClick = e => {
    let randomQuote = Math.floor(Math.random() * 101);
    return randomQuote;
  };
  return (
    <button name='button' onClick={handleClick}>
      Get Random Quote
    </button>
  );
};
