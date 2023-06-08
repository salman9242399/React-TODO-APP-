import React from 'react';
import { useState } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
const App =()=>{
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () =>{
    if (todo !== ""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text)=>{
    const newTodos = todos.filter((todo)=>{
      return todo !== text;

    });
    setTodos(newTodos);
  };
    return (
      <div className='APP'>
        <h1>React Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <TodoList list={todos} remove={deleteTodo}/>
      </div>
    );
  };


export default App;
