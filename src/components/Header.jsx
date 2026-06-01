import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-film"></i>
        <span>MovieCatalog</span>
      </div>
      <form className="search-box" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Поиск фильмов..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
      <nav className="nav">
        <a href="#" className="active">Главная</a>
        <a href="#">Избранное</a>
      </nav>
    </header>
  );
};

export default Header;