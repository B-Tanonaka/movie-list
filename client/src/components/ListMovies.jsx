import React from 'react';

const ListMovies = ({list, setList}) => {

  const listMovies = list.map((movie) =>
    <div className='movies' key={movie.title}>{movie.title}</div>
    );

  return (
    <div className='listMovies'>{listMovies}</div>
  );
}

export default ListMovies;