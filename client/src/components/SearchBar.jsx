import React from 'react';

const SearchBar = ({list, setList, query, setQuery}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    console.log('query: ', query);
    setList(query);
  }


  return (
    <form onSubmit={handleSubmit} value={query}>
      <input type="text" onChange={(event) => {setQuery(event.target.value)}}/>
      <input type="submit" value="Find my movie!" />
    </form>
  )
};

export default SearchBar;