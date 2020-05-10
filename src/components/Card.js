import React, { useState } from 'react';
import { Quotes } from './Quotes';

import { docs } from '../DB/quotes.json';

export const Card = () => {
  const initialState = {
    dialog:
      'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them',
    movie: 'The Fellowship of the Ring',
    character: 'The Ring-inscription'
  };
  const [random, useRandom] = useState(31);

  const handleClick = () => {
    let randomQuote = Math.floor(Math.random() * 101);
    return randomQuote;
  };

  return (
    <>
      <button name='button' onClick={handleClick}>
        Get Random Quote
      </button>
      <Quotes {...initialState} />
    </>
  );
};
