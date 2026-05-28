import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-film"></i>
        <span>MovieCatalog</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Поиск фильмов..." />
        <button><i className="fas fa-search"></i></button>
      </div>
      <nav className="nav">
        <a href="#" className="active">Главная</a>
        <a href="#">Избранное</a>
      </nav>
    </header>
  );
};

export default Header;