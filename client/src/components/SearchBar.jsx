import React from 'react';

const SearchBar = ({list, setList, query, setQuery}) => {

  const handleSubmit = event => {
    event.preventDefault();
    setList(list.filter(movie => {return movie.title.toLowerCase().includes(query)}));
  }

  const noMovieFound = () => {

  }


  return (
    <form onSubmit={handleSubmit} value={query}>
      <input type="text" onChange={event => {setQuery(event.target.value.toLowerCase())}}/>
      <input type="submit" value="Find my movie!" />
    </form>
    <div>No movie found by that name</div>
  )
};

export default SearchBar;