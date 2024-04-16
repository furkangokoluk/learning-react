import React, { useState } from "react";
import { FaCheck, FaRegCircle, FaRegEdit } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

  const [editTable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);
  const [checkTodo, setCheckTodo] = useState(false);


  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  const updateTodo = () => {
    const request = {
      id: todo.id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditTable(false);
  }

  return <div className="todo">

    <div>
      {
        checkTodo ? <IoIosCheckmarkCircleOutline className="todo-icon" onClick={() => setCheckTodo(false)} /> 
        : <FaRegCircle className="todo-icon" onClick={() => setCheckTodo(true)} />
      }

      {
        editTable ? <input type="text" className="todoUpdate-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        /> : todo.content
      }
    </div>

    <div>
      <IoIosRemoveCircleOutline className="todo-icon" onClick={removeTodo} />
      {
        editTable ? <FaCheck className="todo-icon" onClick={updateTodo} /> : <FaRegEdit className="todo-icon" onClick={() => setEditTable(true)} />
      }

    </div>
 
  </div>;
}

export default Todo;
