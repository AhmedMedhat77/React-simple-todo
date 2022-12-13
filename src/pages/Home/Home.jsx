import React, { useState, useRef } from "react";
import Todo from "../../components/Todo";
import Todolist from "../../components/Todolist/Todolist";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const refrence = useRef(null);
  const handleInput = (e) => {
    const { value } = e.target;
    setNewTask(value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      taskName: newTask,
    };
    if (task.taskName.length !== 0) {
      setTodoList([...todoList, task]);
    } else {
      return;
    }
    refrence.current.focus();
    refrence.current.value = "";
    setNewTask("");
    console.log(todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
    console.log(todoList);
  };
  return (
    <div className="todo">
      <Todo refrence={refrence} handleInput={handleInput} addTask={addTask} />
      <Todolist delteTask={deleteTask} todoList={todoList} />
    </div>
  );
}

export default Home;
