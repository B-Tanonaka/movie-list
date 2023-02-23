import React from 'react';
// import ReactDOM from 'react-dom';

const ListMovies = () => {
  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const listMovies = movies.map((movie) =>
    <div>{movie.title}</div>
    );
  // return (<ul>{listMovies}</ul>);
  return (
    <ul>{listMovies}</ul>
  );
}

export default ListMovies;