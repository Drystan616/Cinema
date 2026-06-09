import React from 'react';
import { useNavigate } from 'react-router-dom';

const getGenreName = (id) => {
  const genres = {
    28: 'Боевик', 12: 'Приключения', 16: 'Мультфильм',
    35: 'Комедия', 80: 'Криминал', 99: 'Документальный',
    18: 'Драма', 10751: 'Семейный', 14: 'Фэнтези',
    36: 'История', 27: 'Ужасы', 10402: 'Музыка',
    9648: 'Триллер', 10749: 'Мелодрама', 878: 'Фантастика',
    10770: 'Телевизионный', 53: 'Триллер', 10752: 'Военный', 37: 'Вестерн'
  };
  return genres[id] || '';
};

const MovieCard = ({ movie, isFavorite, onAddFavorite, onRemoveFavorite }) => {
  const navigate = useNavigate();
  const { id, title, release_date, vote_average, genre_ids, poster_path } = movie;

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite(id)) {
      onRemoveFavorite(id);
    } else {
      onAddFavorite(movie);
    }
  };

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  const genreNames = genre_ids?.map(id => getGenreName(id)).filter(Boolean).join(', ') || '—';

  return (
    <article className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="movie-poster">
        <img 
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster'} 
          alt={title} 
        />
        <div className="movie-rating">{vote_average?.toFixed(1) || '—'}</div>
        <button 
          className={`favorite-btn ${isFavorite(id) ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <i className={isFavorite(id) ? 'fas fa-heart' : 'far fa-heart'}></i>
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{release_date?.split('-')[0] || '—'} • {genreNames}</p>
      </div>
    </article>
  );
};

export default MovieCard;