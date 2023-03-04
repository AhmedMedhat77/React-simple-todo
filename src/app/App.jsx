import React, { useState, useRef, useEffect, useCallback } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import TodoList from "../components/todoList/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(undefined);
  const [edit, setEdit] = useState(false);
  const ref = useRef(null);

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const addTodos = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000).toString(),
      text: inputValue,
      isEitable: edit,
    };

    if (inputValue.trim().length !== 0) {
      setTodos((prev) => [...prev, newTodo]);
      window.localStorage.setItem("todo", JSON.stringify(todos));
      console.log(todos);
    } else {
      return;
    }
    ref.current.focus();
    ref.current.value = "";
    setInputValue("");
  };

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const todo = localStorage.getItem("todo");
    if (!todo) {
      localStorage.setItem("todo", JSON.stringify([]));
      setTodos([]);
    }
    try {
      setTodos(JSON.parse(todo));
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const handleDelete = (item) => {
    item = item.target.parentElement.parentElement.id;
    setTodos(todos.filter((todo) => todo.id !== item));
  };

  const handleEdit = (item) => {
    const parent = item.target.parentElement.parentElement.querySelector("p");
    setTodos((old) => {
      return old.map((todo) => {
        if (todo.id === parent.parentElement.id) {
          parent.setAttribute("contenteditable", !todo.isEitable);
          parent.focus();
          return { ...todo, isEitable: !todo.isEitable };
        }
        return todo;
      });
    });
  };

  return (
    <div className="App">
      <div className="todo">
        <h1>Todo App</h1>
      </div>
      <div className="todo-input">
        <Input
          refrence={ref}
          handleInput={handleInput}
          type="text"
          placeHolder="Enter Your Todo"
        />
        <Button onClick={addTodos} text="Add" />
      </div>
      <TodoList edit={handleEdit} actions={handleDelete} todos={todos ?? []} />
    </div>
  );
}

export default App;
