import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleChange = (type, value) => {
    const newFilters = { genre, year, rating, [type]: value };
    if (type === 'genre') setGenre(value);
    if (type === 'year') setYear(value);
    if (type === 'rating') setRating(value);
    onFilterChange(newFilters);
  };

  return (
    <section className="filters">
      <select 
        className="filter-select" 
        value={genre}
        onChange={(e) => handleChange('genre', e.target.value)}
      >
        <option value="">Все жанры</option>
        <option value="28">Боевик</option>
        <option value="12">Приключения</option>
        <option value="16">Мультфильм</option>
        <option value="35">Комедия</option>
        <option value="18">Драма</option>
        <option value="27">Ужасы</option>
        <option value="878">Фантастика</option>
        <option value="53">Триллер</option>
      </select>
      
      <select 
        className="filter-select"
        value={year}
        onChange={(e) => handleChange('year', e.target.value)}
      >
        <option value="">Любой год</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
      
      <select 
        className="filter-select"
        value={rating}
        onChange={(e) => handleChange('rating', e.target.value)}
      >
        <option value="">Рейтинг</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
      </select>
    </section>
  );
};

export default Filters;