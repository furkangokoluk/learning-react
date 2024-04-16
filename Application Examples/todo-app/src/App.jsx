import { useState } from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (updatedTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id == updatedTodo.id) {
        return updatedTodo
      } else {
        return todo
      }
    })
    setTodos([...updateTodos])
  }

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className='app-container'>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
    </div>
  )
}

export default App
