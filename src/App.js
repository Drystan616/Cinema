import React from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <MovieList />
      <Pagination />
    </div>
  );
}

export default App;
