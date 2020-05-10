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

export default function getQuote() {
  const url = 'https://the-one-api.herokuapp.com/v1/quote';

  return fetch(url, { headers: apiKey }).then(res => res.json());
  //.then(fromApiResponse);
}
