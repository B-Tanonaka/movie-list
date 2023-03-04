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
    <div>
      <div className='movies' key={movie.title}>{movie.title}</div>
      <button onClick={handleSwitch}>Watched</button>
    </div>
  );

  return (
    <div className='listMovies'>{listMovies}</div>
  );
}

export default ListMovies;