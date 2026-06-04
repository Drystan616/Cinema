import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import MovieDetail from './pages/MovieDetail';
import Pagination from './components/Pagination';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ genre: '', year: '', rating: '' });
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowFavorites(false);
    setSelectedMovieId(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowFavorites(false);
    setSelectedMovieId(null);
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setSelectedMovieId(null);
  };

  const handleShowHome = () => {
    setShowFavorites(false);
    setSelectedMovieId(null);
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleBack = () => {
    setSelectedMovieId(null);
  };

  return (
    <div className="App">
      <Header 
        onSearch={handleSearch} 
        onShowFavorites={handleShowFavorites}
        onShowHome={handleShowHome}
      />
      
      {selectedMovieId ? (
        <MovieDetail movieId={selectedMovieId} onBack={handleBack} />
      ) : showFavorites ? (
        <Favorites 
          favorites={favorites}
          onRemove={removeFromFavorites}
          onMovieClick={handleMovieClick}
        />
      ) : (
        <>
          <Filters onFilterChange={handleFilterChange} />
          <MovieList 
            searchQuery={searchQuery} 
            filters={filters}
            onAddFavorite={addToFavorites}
            onRemoveFavorite={removeFromFavorites}
            isFavorite={isFavorite}
            onMovieClick={handleMovieClick}
          />
          <Pagination />
        </>
      )}
    </div>
  );
}

export default App;