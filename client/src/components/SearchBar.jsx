import React from 'react';
import {useState} from 'react';

const SearchBar = ({list, setList, allMovies}) => {

  let query = '';

  const handleTyping = event => {
    query = event.target.value.toLowerCase();
    if (query === '') {
      setList(allMovies);
    }
    console.log(query);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("list: ", list);
    console.log('allMovies: ', allMovies);
    if (list.length < allMovies.length) {
      setList(allMovies);
    }
    // console.log('list: ', list);
    // console.log('allMovies: ', allMovies);
    // console.log('list: ', list);
    setList(list.filter(movie => {return movie.title.toLowerCase().includes(query)}));

  }

  const clearSearch = event => {
    $(".search-textbox").html();
  }

  // const noMovieFound = () => {

  // }


  return (
    <form className='search-container'>
      <input className="search search-textbox" placeholder='Search...' type="text" onClick={clearSearch} onChange={handleTyping}/>
      <button className="search search-button" type="submit" onClick={handleSubmit}>Find my movie!</button>
    </form>
    // <div>No movie found by that name</div>
  )
};

export default SearchBar;