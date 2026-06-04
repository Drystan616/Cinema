import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getPopularMovies, searchMovies, getMoviesByYear, getMoviesByGenre } from '../api/tmdb';

const MovieList = ({ searchQuery, filters, onAddFavorite, onRemoveFavorite, isFavorite, onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        let data;
        if (searchQuery) {
          data = await searchMovies(searchQuery);
        } else if (filters.year) {
          data = await getMoviesByYear(filters.year);
        } else if (filters.genre) {
          data = await getMoviesByGenre(filters.genre);
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
  }, [searchQuery, filters.year, filters.genre]);

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
          movie={movie}
          isFavorite={isFavorite}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          onClick={onMovieClick}
        />
      ))}
    </main>
  );
};

export default MovieList;