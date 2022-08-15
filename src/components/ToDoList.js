import React from "react";
import "./ToDoList.css";
import Task from "./Task";

const ToDoList = (props) => {
  let counter = 0;
  let list;
  if (props.category === "All") {
    list = props.list.map((element) => (
      <Task
        counter={counter++}
        key={element.id}
        name={element.name}
        active={element.active}
        deleteTask={props.deleteTask}
        completeTask={props.completeTask}
      />
    ));
  } else if (props.category === "Active") {
    list = props.list
      .filter((element) => element.active)
      .map((element) => (
        <Task
          counter={counter++}
          key={element.id}
          name={element.name}
          active={element.active}
          deleteTask={props.deleteTask}
          completeTask={props.completeTask}
        />
      ));
  } else if (props.category === "Completed") {
    list = props.list
      .filter((element) => !element.active)
      .map((element) => (
        <Task
          counter={counter++}
          key={element.id}
          name={element.name}
          active={element.active}
          deleteTask={props.deleteTask}
          completeTask={props.completeTask}
        />
      ));
  }
  const controlPanel = (
    <li className="list__element list__element--info">
      <span className="list__element__item">
        {props.list.filter((element) => element.active).length} items left
      </span>
      <span
        className="list__element__item--clickable"
        onClick={props.clearCompleted}
      >
        Clear completed
      </span>
    </li>
  );
  return (
    <ul className="list">
      {list}
      {list.length === 0 ? null : controlPanel}
    </ul>
  );
};

export default ToDoList;
