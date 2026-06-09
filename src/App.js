import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ genre: '', year: '', rating: '' });
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowFavorites(false);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowFavorites(false);
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleShowHome = () => {
    setShowFavorites(false);
  };

  return (
    <div className="App">
      <Header 
        onSearch={handleSearch} 
        onShowFavorites={handleShowFavorites}
        onShowHome={handleShowHome}
      />
      
      {showFavorites ? (
        <Favorites 
          favorites={favorites}
          onRemove={removeFromFavorites}
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
          />
        </>
      )}
    </div>
  );
}

export default App;