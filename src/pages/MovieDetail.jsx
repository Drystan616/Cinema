import React, { useState, useEffect } from 'react';
import { getMovieDetails, getMovieCredits } from '../api/tmdb';

const MovieDetail = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const [movieData, castData] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId)
        ]);
        setMovie(movieData);
        setCast(castData.slice(0, 10)); // Первые 10 актёров
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (!movie) return <div className="loading">Фильм не найден</div>;

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <div className="movie-detail">
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Назад
      </button>
      
      <div className="detail-content">
        <div className="detail-poster">
          <img 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster'} 
            alt={movie.title} 
          />
        </div>
        
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <div className="detail-meta">
            <span className="detail-rating">{movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date}</span>
            <span>{hours}ч {minutes}мин</span>
          </div>
          
          <div className="detail-genres">
            {movie.genres?.map(g => (
              <span key={g.id} className="genre-tag">{g.name}</span>
            ))}
          </div>
          
          <p className="detail-overview">{movie.overview || 'Описание отсутствует'}</p>
          
          <div className="detail-cast">
            <h3>В ролях:</h3>
            {cast.length > 0 ? (
              <div className="cast-list">
                {cast.map(actor => (
                  <div key={actor.id} className="cast-item">
                    <img 
                      src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://via.placeholder.com/100x150?text=No+Photo'} 
                      alt={actor.name}
                      className="cast-photo"
                    />
                    <p className="cast-name">{actor.name}</p>
                    <p className="cast-character">{actor.character}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Информация недоступна</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;