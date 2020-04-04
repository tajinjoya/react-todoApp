import React from 'react';
import './todoList.css';

const TodoList = (props) => {
console.log(typeof(props.ingredients));
 return( <div className="todoListContainer">
    <h2>Todo List</h2>
    <ul>
          {props.ingredients.map(ig => (
          <li key={ig.id} onClick={() => props.delete(ig.id)}>
            {ig.title}
          </li>
        ))}
    </ul>
  </div>)
}

export default TodoList;
  