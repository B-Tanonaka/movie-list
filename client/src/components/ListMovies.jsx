import React from 'react';
import { useState } from 'react';

const ListMovies = ({list, setList}) => {

  const [watched, setWatched] = useState(false);

  let handleSwitch = (event) => {
    event.preventDefault();
    if (watched === false) {
      setWatched(true);
    } else {
      setWatched(false);
    }
  }

  const listMovies = list.map((movie) =>
    <div className="movie-container">
      <div className="movie" key={movie.movie}>{movie.movie}</div>
      <div className="watched-button"><button onClick={handleSwitch}>Watched</button></div>
    </div>
  );

  return (
    <div className="listMovies">{listMovies}</div>
  );
}

export default ListMovies;