import React from "react";

function TodoItem(props) {
  return (
    <li className="todo-container__item">
      <p className="todo-container__item__text">{props.todo.taskName}</p>
      <button
        className="btn btn-delete"
        onClick={() => props.delteTask(props.todo.id)}
      >
        x
      </button>
    </li>
  );
}

export default TodoItem;
