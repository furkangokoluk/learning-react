import React, { useState } from "react";


function TodoCreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if(!newTodo) return;

    const request = {
      id : Math.floor(Math.random() * 99999999),
      content : newTodo
    }
    onCreateTodo(request)
    clearInput();
  }

  const clearInput = () => {
    setNewTodo('')
  }

  return <div className="todo-create">
    <input
      type="text" className="todo-input" placeholder="Todo Giriniz"
      value={newTodo}
      onChange={(e) => {setNewTodo(e.target.value)} }
    />
    <button onClick={createTodo} className="todo-btn">Todo Oluştur</button>
  </div>;
}
export default TodoCreate;