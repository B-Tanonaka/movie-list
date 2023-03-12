import React from 'react';
import axios from 'axios';

const AddMovie = ({list, setList, setAllMovies, serverURL}) => {
  let query = '';

  const handleInput = event => {
    query = event.target.value.toLowerCase();
  }

  const handleAdd = event => {
    event.preventDefault();

    axios.post(serverURL, {
      movie: query
    }).then((response) => {
      let newList = [...list];
      newList.push(response.data);
      setAllMovies(newList);
      setList(newList);
    })
  }

  return (
      <form class="addMovie-container">
        <input class="query query-textbox" placeholder="What's good..." type="text" onChange={handleInput}/>
        <button class="query query-button" type="submit" onClick={handleAdd}>Add movie</button>
      </form>
  )
};

export default AddMovie;