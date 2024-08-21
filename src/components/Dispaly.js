import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../redux/main.js";

export default function TodoList() {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  return (
    <ol>
      {tasks.map(task => (
        <li key={task.id}>
          <span
          
            style={{ textDecoration: task.completed ? "line-through" : "none"  , marginRight:"5px"}}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch(removeTask(task.id))} style={{background :"red"}}>Delete</button>
        </li>
      ))}
    </ol>
  );
}
