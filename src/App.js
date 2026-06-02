import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ genre: '', year: '', rating: '' });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      <MovieList searchQuery={searchQuery} filters={filters} />
      <Pagination />
    </div>
  );
}

export default App;