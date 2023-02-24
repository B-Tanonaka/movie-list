import React from 'react';

const ListMovies = ({list, setList}) => {

  const listMovies = list.map((movie) =>
    <div key={movie.title}>{movie.title}</div>
    );

  return (
    <div >{listMovies}</div>
  );
}

export default ListMovies;