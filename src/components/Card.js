import React, { useState } from 'react';
//import { useQuote } from '../hooks/useQuote';
import { Quotes } from './Quotes';
import './Card.css';
import { docs } from '../DB/quotes.json';

export const Card = () => {
  const initialState = {
    dialog:
      'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them',
    movie: 'The Fellowship of the Ring',
    character: 'The Ring-inscription'
  };
  const [random, setRandom] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    let randomQuote = Math.floor(Math.random() * 2391);
    setRandom(randomQuote);
  };

  //  const random = useQuote(randomQuote);

  return (
    <>
      <div className='card'>
        <button
          href='/'
          className='card action-button shadow animate color'
          name='button'
          onClick={handleClick}
        >
          Get Random Quote
        </button>
        {random === 0 ? (
          <Quotes {...initialState} />
        ) : (
          <Quotes {...docs[random]} />
        )}
      </div>
    </>
  );
};
