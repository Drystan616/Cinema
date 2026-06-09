import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { getPopularMovies, searchMovies, getMoviesByYear, getMoviesByGenre } from '../api/tmdb';

const MovieList = ({ searchQuery, filters, onAddFavorite, onRemoveFavorite, isFavorite, onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        let data;
        if (searchQuery) {
          data = await searchMovies(searchQuery, currentPage);
        } else if (filters.year) {
          data = await getMoviesByYear(filters.year, currentPage);
        } else if (filters.genre) {
          data = await getMoviesByGenre(filters.genre, currentPage);
        } else {
          data = await getPopularMovies(currentPage);
        }
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [searchQuery, filters.year, filters.genre, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredMovies = movies.filter(movie => {
    const matchRating = !filters.rating || movie.vote_average >= Number(filters.rating);
    return matchRating;
  });

  if (loading) return <div className="loading">Загрузка...</div>;
  if (filteredMovies.length === 0) return <div className="loading">Ничего не найдено</div>;

  return (
    <>
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
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MovieList;