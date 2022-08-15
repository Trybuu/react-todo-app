import React from "react";
import "./AddToDo.css";

const AddToDo = (props) => {
  return (
    <form className="form">
      <label htmlFor="addToDo" className="form__label">
        <button className="control-to-do-button" onClick={props.addToDo}>
          <span className="control-to-do-button__plus"></span>
        </button>
        <input
          type="text"
          id="addToDo"
          className="form__input"
          placeholder="Create a new todo"
          onChange={props.change}
          value={props.name}
        />
      </label>
    </form>
  );
};

export default AddToDo;
