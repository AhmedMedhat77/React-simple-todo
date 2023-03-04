import React from "react";
import ListItem from "../listItem/ListItem";

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => {
        return (
          <ListItem
            id={todo.id}
            actions={props.actions}
            edit={props.edit}
            text={todo.text}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
