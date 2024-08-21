import React from "react";
import TodoList from "./Dispaly.js";
import AddTask from "./Addtask.js";

export default function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTask />
      <TodoList />
    </div>
  );
}
