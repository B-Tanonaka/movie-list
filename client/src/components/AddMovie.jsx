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

  // const handleAdd = event => {
  //   event.preventDefault();
  //   let newList = [...list];
  //   newList.push({title: query});
  //   setAllMovies(newList);
  //   setList(newList);
  // }

  return (
    <div>
      <form>
        <input placeholder='Add movie...' type="text" onChange={handleInput}/>
        <button type="submit" onClick={handleAdd}>Add movie</button>
      </form>
    </div>
  )
};

export default AddMovie;