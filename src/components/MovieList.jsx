import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  // Пока тестовые данные, позже заменим на API
  const movies = [
    {
      id: 1,
      title: 'Начало',
      year: 2010,
      rating: 8.8,
      genres: 'Боевик, Sci-Fi',
      poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    },
    {
      id: 2,
      title: 'Тёмный рыцарь',
      year: 2008,
      rating: 9.0,
      genres: 'Боевик, Драма',
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      id: 3,
      title: 'Матрица',
      year: 1999,
      rating: 8.7,
      genres: 'Sci-Fi, Боевик',
      poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLIfj2MMAW6fwgT7.jpg'
    },
    {
      id: 4,
      title: 'Интерстеллар',
      year: 2014,
      rating: 8.6,
      genres: 'Sci-Fi, Драма',
      poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'
    },
    {
      id: 5,
      title: 'Мстители: Финал',
      year: 2019,
      rating: 8.4,
      genres: 'Боевик, Sci-Fi',
      poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
    },
    {
      id: 6,
      title: 'Форсаж 9',
      year: 2021,
      rating: 6.8,
      genres: 'Боевик',
      poster: 'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg'
    }
  ];

  return (
    <main className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          genres={movie.genres}
          poster={movie.poster}
        />
      ))}
    </main>
  );
};

export default MovieList;