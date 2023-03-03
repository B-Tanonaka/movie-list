import React from 'react';
import ListMovies from './ListMovies.jsx';
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import { useState } from 'react';

const App = () => {


  const [allMovies, setAllMovies] = useState([]);
  const [list, setList] = useState([]);

  return (
  <div>
      <h1>MovieList</h1>
      <Search list={list} setList={setList} allMovies={allMovies}/>
      <AddMovie list={list} setList={setList} setAllMovies={setAllMovies}/>
      <ListMovies list={list} setList={setList}/>
  </div>
  );
}
export default App;