import React, { useState, useEffect } from 'react';
//import { useQuote } from '../hooks/useQuote';
import { Quotes } from './Quotes';
import { getQuote, getCharacter, getMovie } from '../services/getData';
import './Card.css';
import { docs } from '../DB/quotes.json';

export const Card = () => {
  const [dialog, setDialog] = useState(
    'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them'
  );
  const [character, setCharacter] = useState('The Fellowship of the Ring');
  const [movie, setMovie] = useState('The Ring-inscription');
  const [isLoading, setIsLoading] = useState(true);

  const [random, setRandom] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    let randomQuote = Math.floor(Math.random() * 2391);
    setRandom(randomQuote);
  };

  useEffect(() => {
    getQuote().then(response => {
      getCharacter(response.docs[random].character).then(res => {
        setCharacter(res.name);
      });
      getMovie(response.docs[random].movie).then(res => {
        setMovie(res.name);
      });
      setDialog(response.docs[random].dialog);
      setIsLoading(false);
    });
  }, [random]);

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
        <Quotes dialog={dialog} character={character} movie={movie} />
      </div>
    </>
  );
};
