//Services call to API
const apiKey = { Authorization: 'Bearer Ns6Ev8bwjJGetNumoQbR' };

// const fromApiResponse = apiResponse => {
//   const { data = [] } = apiResponse;
//   if (Array.isArray(data)) {
//     const quote = data.map(res => {
//       const { dialog, movie, character } = res;
//       return { dialog, movie, character };
//     });
//     return quote;
//   }
//   return [];
// };

export function getQuote() {
  const url = 'https://the-one-api.herokuapp.com/v1/quote';

  return fetch(url, { headers: apiKey }).then(res => res.json());
  //.then(r => console.log(r));

  //.then(fromApiResponse);
}

export function getCharacter(charId) {
  const url = `https://the-one-api.herokuapp.com/v1/character/${charId}`;

  return fetch(url, { headers: apiKey }).then(res => res.json());
}

export function getMovie(movieId) {
  const url = `https://the-one-api.herokuapp.com/v1/movie/${movieId}`;

  return fetch(url, { headers: apiKey }).then(res => res.json());
}
