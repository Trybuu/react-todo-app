import React from "react";
import "./ToDoList.css";

const Task = (props) => {
  return (
    <li className="list__element">
      <button
        id={props.counter}
        onClick={props.completeTask}
        className={
          props.active
            ? "control-to-do-button"
            : "control-to-do-button control-to-do-button--done"
        }
      ></button>
      <span
        className={props.active ? "list__text" : "list__text list__text--done"}
      >
        {props.name}
      </span>
      <button
        id={props.counter}
        onClick={props.deleteTask}
        className="delete-to-do-button"
      ></button>
    </li>
  );
};

export default Task;
