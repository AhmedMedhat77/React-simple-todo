import React from "react";

function Todo(props) {
  return (
    <form className="form" action="#" onSubmit={props.addTask}>
      <input
        className="form__input"
        ref={props.refrence}
        type="text"
        placeholder="write your todo"
        onChange={props.handleInput}
      />
      <input className="btn btn-submit" type="submit" value="+" />
    </form>
  );
}

export default Todo;
