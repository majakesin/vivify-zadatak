import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies,handleDelete) => 
{
  console.log(handleDelete);
  return (
    <div className="card-deck">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} handleDelete={handleDelete}/>
      ))}
    </div>);
}
const MovieList = ({ movies,handleDelete }) => <div>{getMovies(movies,handleDelete)}</div>;

MovieList.defaultProps = {
  movies: [],
  
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
