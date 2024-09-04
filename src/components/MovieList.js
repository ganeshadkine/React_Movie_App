/*
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Link>
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Row className="justify-content-center">
      {movies.map(movie => (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={movie.id}>
          <Card>
            <Link to={`/movie/${movie.id}`}>
              <Card.Img 
                variant="top" 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
            </Link>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Rating: {movie.vote_average}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
