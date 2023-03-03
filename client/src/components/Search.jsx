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
    setList(list.filter(movie => {return movie.title.toLowerCase().includes(query)}));
  }

  return (
    <div>
      <form className='search-container'>
        <input className="search search-textbox" placeholder='Search...' type="text" onChange={handleInput}/>
        <button className="search search-button" type="submit" onClick={handleSearch}>Find my movie!</button>
      </form>
    </div>
  )
};

export default Search;