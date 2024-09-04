// src/pages/Search.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    if (query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`)
        .then(response => {
          setMovies(response.data.results);
        });
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Search;
