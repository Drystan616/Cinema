import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Filters />
      <MovieList searchQuery={searchQuery} />
      <Pagination />
    </div>
  );
}

export default App;