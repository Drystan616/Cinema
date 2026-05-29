const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWFhNmRiZmZiNDYxZWIwMzIxMGFiMzQ0NzZhYTM0MSIsIm5iZiI6MTc4MDA3MDMwNC45NzUwMDAxLCJzdWIiOiI2YTE5YjdhMGZjYmM2Mzg2ZTRiYWI4ZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OTRokAIUKfal55KyTl7-tqSgxR_tm4MltuA2_U4VzBE'
  }
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=ru-RU`, options);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}&language=ru-RU`, options);
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?language=ru-RU`, options);
  return await response.json();
};