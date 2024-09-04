import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => {
        setMovie(response.data);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => {
        setCast(response.data.cast);
      });
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map(member => (
          <div key={member.cast_id}>
            <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} />
            <p>{member.name} as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
