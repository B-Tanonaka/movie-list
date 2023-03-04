import React from 'react';
import axios from 'axios';
import ListMovies from './ListMovies.jsx';
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import { useState, useEffect } from 'react';

const serverURL = 'http://localhost:3000/movies'

const App = () => {

  const [allMovies, setAllMovies] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(serverURL).then((response) => {
      setList(response.data);
    })
  }, []);

  return (
  <div>
      <h1>MovieList</h1>
      <Search list={list} setList={setList} allMovies={allMovies}/>
      <AddMovie list={list} setList={setList} setAllMovies={setAllMovies} serverURL={serverURL}/>
      <ListMovies list={list} setList={setList}/>
  </div>
  );
}
export default App;