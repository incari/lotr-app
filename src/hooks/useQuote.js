import { useState } from 'react';
import { docs } from '../DB/quotes.json';

export function useQuote(number) {
  const initialState = {
    dialog:
      'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them',
    movie: 'The Fellowship of the Ring',
    character: 'The Ring-inscription'
  };
  const [random, setRandom] = useState(initialState);

  const handleClick = () => {
    let randomQuote = Math.floor(Math.random() * 2391);
    setRandom(randomQuote);
  };

  return random;
}
