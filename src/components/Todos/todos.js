import React from 'react';
import Todo from './TodoComp';
import "./todos.css"
const TodoList = ({ todos, onComplete, onDelete }) => (
  <div className='todos' >
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        date={todo.date}
        isCompleted={todo.isCompleted}
        onComplete={() => onComplete(todo.id)}
        onDelete={() => onDelete(todo.id)}
      />
    ))}
  </div>
);

const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const handleAddTask = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: input,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: '2-digit' }),
        isCompleted: false,
      },
    ]);
    setInput('');
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div className='main-container'>
     <h1>Todo App</h1>
      <div className='add-todo'> 
      <input placeholder='Your Task' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button></div>
      <h4>Pending Tasks</h4>
      <div className='pending-todos'>
      <TodoList todos={pendingTodos} onComplete={handleComplete} onDelete={handleDelete} />
      </div>
      <h4>Completed Tasks</h4>
      <div className='completed-todos'>
      <TodoList todos={completedTodos} onComplete={handleComplete} onDelete={handleDelete}/>
      </div>
     
</div>
);
};
export default Todos;