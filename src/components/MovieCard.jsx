import React from 'react';

const MovieCard = ({ title, year, rating, genres, poster }) => {
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
        <p className="movie-year">{year} • {genres}</p>
      </div>
    </article>
  );
};

export default MovieCard;