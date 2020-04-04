import React, { useState, useEffect } from 'react';
import './search.css';

const Search = (props) => {
  const {filter} = props;
  const [filteredList, setFilteredList] = useState('');
  useEffect(() => {
    const query = filteredList.length === 0 ? '' : `?orderBy="title"&startAt="${filteredList}"&endAt="${filteredList}\uf8ff"`
    fetch("https://my-todo-app-587fe.firebaseio.com/todo.json" + query)
    .then(response => response.json())
    .then(responseData => {
      const filteredList = [];
      for(const key in responseData){
        filteredList.push({
          id: key,
          title: responseData[key].title
        })
      }
     
      filter(filteredList);
      })
    }, [filteredList, filter]);

  return(
    <div className="searchContainer">
      <p className="searchContainer__para">Please search your task here by name!</p>
      <input 
        className="searchInput"
        type="text"
        value={filteredList}
        onChange={event => setFilteredList(event.target.value)}
      />
    </div>

  )

}

export default Search;