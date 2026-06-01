import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getPopularMovies, searchMovies } from '../api/tmdb';

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        let data;
        if (searchQuery) {
          data = await searchMovies(searchQuery);
        } else {
          data = await getPopularMovies();
        }
        setMovies(data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [searchQuery]);

  if (loading) return <div className="loading">Загрузка...</div>;

  if (movies.length === 0) return <div className="loading">Ничего не найдено</div>;

  return (
    <main className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date?.split('-')[0] || '—'}
          rating={movie.vote_average?.toFixed(1) || '—'}
          genres={movie.genre_ids || []}
          poster={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : 'https://via.placeholder.com/500x750?text=No+Poster'
          }
        />
      ))}
    </main>
  );
};

export default MovieList;