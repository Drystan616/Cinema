import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getPopularMovies } from '../api/tmdb';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <main className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date?.split('-')[0] || '—'}
          rating={movie.vote_average.toFixed(1)}
          genres={movie.genre_ids || []}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </main>
  );
};

export default MovieList;