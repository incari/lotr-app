import React from 'react';

export const Quotes = ({
  dialog = 'dialog',
  movie = 'movie',
  character = 'hello'
}) => (
  <>
    <h2>{dialog}</h2>
    <h3>{character}</h3>
    <h4>{movie}</h4>
  </>
);
