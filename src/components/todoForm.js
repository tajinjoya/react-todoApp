import React, {useState, useCallback} from 'react';
import './todoForm.css';
import TodoList from './todoList';
import Search from './search';

const TodoForm = ()=> {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [errorPara, setErrorPara] = useState('');



const submitHandlar = (event) => {
  event.preventDefault();
  if (todoName.length !== 0) {
  addTodoHandlar({title: todoName});
   setTodoName('')
   setErrorPara('')
  } else {
   setErrorPara(<p style={{color: 'red', fontWeight:700}}>Please enter a value!</p>);
   event.currentTarget.reset();
  }
 
}

const filterTodoHandlar = useCallback(filterTodos => {
  setTodoList(filterTodos);
}, [setTodoList]);

const addTodoHandlar = ingredient => {
  fetch("https://my-todo-app-587fe.firebaseio.com/todo.json", {
    method: 'POST',
    body: JSON.stringify(ingredient),
    header: {'Content-type': 'application/json'}
  }).then(response => {
    return response.json();
  }).then(responseData =>   
    setTodoList(todoList => [
    ...todoList, 
    {id : responseData.name, ...ingredient} 
  ])
  );

}

const removeTodo = (id) => {
  fetch(`https://my-todo-app-587fe.firebaseio.com/todo/${id}.json`,{
    method: 'DELETE',
  })
    .then(response => {
      const newList = todoList.filter(item => item.id !== id);
      setTodoList(newList);
    })

}



 console.log(todoList);
  return (<section>
    <form action="" className="container" onSubmit={submitHandlar} >
      <div className="inputContainer">
    <label className="label" htmlFor="">Add task name:
    </label>
    {errorPara}
    <input 
      className="todoInput" 
      type="text" 
      id="title"
      value={todoName}
      onChange={event => 
      setTodoName(event.target.value)}/>
    <button className="button" type="submit">Add now</button>
    </div>
    </form>
    <Search filter={filterTodoHandlar}/>
    <TodoList ingredients={todoList} delete= {removeTodo}/>
    </section>)
  

}

export default TodoForm;