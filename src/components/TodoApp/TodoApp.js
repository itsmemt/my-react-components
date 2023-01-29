import React, { useState } from 'react';
import './TodoApp.css';


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { text: input, isCompleted: false, date: new Date() }]);
    setInput('');
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const pendingTodos = todos.filter(todo => !todo.isCompleted);
  const completedTodos = todos.filter(todo => todo.isCompleted);


  return (
    <div className='todo-app'>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <h2>Pending Tasks</h2>
      <div>
        {pendingTodos.map((todo, index) => (
          <div key={index}>
            <span>{todo.text}</span>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <p>{todo.date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: '2-digit' })}</p>
          </div>
        ))}
      </div>
      <h2>Completed Tasks</h2>
      <div>
        {completedTodos.map((todo, index) => (
          <div key={index}>
            <span>{todo.text}</span>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <p>{todo.date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: '2-digit' })}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
