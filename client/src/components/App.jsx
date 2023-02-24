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
  const [allMovies, setAllMovies] = useState(movies);
  const [list, setList] = useState(movies);

  return (
  <div>
    <div>
      <h1>MovieList</h1>
    </div>
    <div>
      <SearchBar list={list} setList={setList} allMovies={allMovies}/>
    </div>
    <div><ListMovies list={list} setList={setList} movie={movies}/></div>
  </div>
  );
}
export default App;