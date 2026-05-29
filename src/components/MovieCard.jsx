import React from 'react';

const MovieCard = ({ title, year, rating, genres, poster }) => {
  // Преобразуем ID жанров в названия (если приходят массивом)
  const genreNames = Array.isArray(genres) 
    ? genres.map(id => getGenreName(id)).join(', ')
    : genres;

  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={title} />
        <div className="movie-rating">{rating}</div>
        <button className="favorite-btn">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year} • {genreNames || '—'}</p>
      </div>
    </article>
  );
};

// Функция для цифр ID жанров в названия
const getGenreName = (id) => {
  const genres = {
    28: 'Боевик',
    12: 'Приключения',
    16: 'Мультфильм',
    35: 'Комедия',
    80: 'Криминал',
    99: 'Документальный',
    18: 'Драма',
    10751: 'Семейный',
    14: 'Фэнтези',
    36: 'История',
    27: 'Ужасы',
    10402: 'Музыка',
    9648: 'Триллер',
    10749: 'Мелодрама',
    878: 'Фантастика',
    10770: 'Телевизионный',
    53: 'Триллер',
    10752: 'Военный',
    37: 'Вестерн'
  };
  return genres[id] || '';
};

export default MovieCard;