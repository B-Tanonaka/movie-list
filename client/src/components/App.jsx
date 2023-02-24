import React from 'react';
import ListMovies from './ListMovies.jsx';
import SearchBar from './SearchBar.jsx'
import { useState } from 'react';

const App = () => {

  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const [list, setList] = useState(movies);
  const [query, setQuery] = useState('');
  // console.log("movies: ", movies);
  // console.log("list: ", list);

  return (
  <div>
    <div><h1>MovieList</h1></div>
    <div><SearchBar list={list} setList={setList} query={query} setQuery={setQuery}/></div>
    <div className='movies'><ListMovies list={list} setList={setList} movie={movies}/></div>
  </div>
  );
}
export default App;