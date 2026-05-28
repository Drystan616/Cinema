import React from 'react';

const Filters = () => {
  return (
    <section className="filters">
      <select className="filter-select">
        <option value="">Все жанры</option>
        <option value="action">Боевик</option>
        <option value="comedy">Комедия</option>
        <option value="drama">Драма</option>
        <option value="horror">Ужасы</option>
      </select>
      <select className="filter-select">
        <option value="">Любой год</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      <select className="filter-select">
        <option value="">Рейтинг</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
      </select>
    </section>
  );
};

export default Filters;