import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getPopularMovies, searchMovies, getMoviesByYear, getMoviesByGenre } from '../api/tmdb';

const MovieList = ({ searchQuery, filters }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        let data;
        
        if (searchQuery) {
          // Поиск по названию
          data = await searchMovies(searchQuery);
        } else if (filters.year) {
          // Фильтр по году
          data = await getMoviesByYear(filters.year);
        } else if (filters.genre) {
          // Фильтр по жанру
          data = await getMoviesByGenre(filters.genre);
        } else {
          // Популярные фильмы
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
  }, [searchQuery, filters.year, filters.genre]);

  // Фильтрация по рейтингу (локально)
  const filteredMovies = movies.filter(movie => {
    const matchRating = !filters.rating || movie.vote_average >= Number(filters.rating);
    return matchRating;
  });

  if (loading) return <div className="loading">Загрузка...</div>;

  if (filteredMovies.length === 0) return <div className="loading">Ничего не найдено</div>;

  return (
    <main className="movie-grid">
      {filteredMovies.map(movie => (
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