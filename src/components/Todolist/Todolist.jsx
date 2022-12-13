import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function Todolist(props) {
  return (
    <ul className="todo-container">
      {props.todoList.map((todo) => {
        return (
          <TodoItem delteTask={props.delteTask} key={todo.id} todo={todo} />
        );
      })}
    </ul>
  );
}

export default Todolist;
