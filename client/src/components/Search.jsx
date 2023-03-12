import React from 'react';
import {useState} from 'react';

const Search = ({list, setList, allMovies}) => {

  let query = '';

  const handleInput = event => {
    query = event.target.value.toLowerCase();
    if (query === '') {
      setList(allMovies);
    }
  }

  const handleSearch = event => {
    event.preventDefault();
    setList(list.filter(movie => {return movie.movie.toLowerCase().includes(query)}));
  }

  return (
      <form className='search-container'>
        <input className="query query-textbox" placeholder='Search...' type="text" onChange={handleInput}/>
        <button className="query query-button" type="submit" onClick={handleSearch}>Find my movie!</button>
      </form>
  )
};

export default Search;