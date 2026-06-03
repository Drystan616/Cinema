import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites(prev => {
      if (prev.find(m => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(m => m.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some(m => m.id === movieId);
  };

  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};