import React from 'react';
import MovieCard from './MovieCard';

const Favorites = ({ favorites, onRemove, onMovieClick }) => {
  if (favorites.length === 0) {
    return (
      <div className="loading" style={{ minHeight: '50vh' }}>
        <i className="far fa-heart" style={{ fontSize: '48px', marginBottom: '20px' }}></i>
        <p>В избранном пока ничего нет</p>
      </div>
    );
  }

  return (
    <main className="movie-grid">
      {favorites.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={() => true}
          onAddFavorite={() => {}}
          onRemoveFavorite={onRemove}
          onClick={onMovieClick}
        />
      ))}
    </main>
  );
};

export default Favorites;