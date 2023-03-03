import React from 'react';

const AddMovie = ({list, setList, setAllMovies}) => {
  let query = '';

  const handleInput = event => {
    query = event.target.value.toLowerCase();
  }

  const handleAdd = event => {
    event.preventDefault();
    let newList = [...list];
    newList.push({title: query});
    setAllMovies(newList);
    setList(newList);
  }

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