import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import App from './App';
import MovieDetail from './pages/MovieDetail';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetailWrapper />} />
      </Routes>
    </Router>
  );
};

const MovieDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <MovieDetail 
      movieId={id} 
      onBack={() => navigate(-1)} 
    />
  );
};

export default AppRouter;