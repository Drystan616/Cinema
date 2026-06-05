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
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=ru-RU`, 
    options
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?language=ru-RU`, options);
  return await response.json();
};

export const getMoviesByYear = async (year) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?primary_release_year=${year}&language=ru-RU&sort_by=popularity.desc`, 
    options
  );
  const data = await response.json();
  return data.results;
};

export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?with_genres=${genreId}&language=ru-RU&sort_by=popularity.desc`, 
    options
  );
  const data = await response.json();
  return data.results;
};

export const getMovieCredits = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/credits?language=ru-RU`, options);
  const data = await response.json();
  return data.cast;
};