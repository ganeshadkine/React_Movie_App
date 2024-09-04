import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`)
      .then(response => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRated;
