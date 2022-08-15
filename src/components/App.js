import React, { Component, useEffect } from "react";
import AddToDo from "./AddToDo";
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import FilterList from "./FilterList";

class App extends Component {
  state = {
    id: null,
    name: "",
    active: null,
    key: 0,
    category: "All",
    list: [],
  };
  handleChange = (e) => {
    let index = this.state.list.length;
    let name = e.target.value;
    this.setState({
      id: index,
      name,
      active: true,
    });
  };

  addToDo = (e) => {
    e.preventDefault();
    if (this.state.name !== "") {
      const list = [...this.state.list];
      list.forEach((element, index) => {
        element.id = index;
      });
      list.push({
        id: this.state.id,
        name: this.state.name,
        active: true,
      });
      this.setState({
        name: "",
        list,
      });
    } else {
      alert("You need to fill input");
    }
  };

  deleteTask = (e) => {
    console.log(this.state.list);
    console.log(e.target.id);
    let list = [...this.state.list];
    list.forEach((element, index) => {
      element.id = index;
    });
    let index = list.findIndex((element) => element.id == e.target.id);
    console.log(index);
    list.splice(index, 1);

    this.setState({
      list,
    });
  };

  completeTask = (e) => {
    const list = [...this.state.list];
    list.forEach((element, index) => {
      element.id = index;
    });
    list.forEach((element) => {
      if (element.id == e.target.id) {
        if (element.active === true) {
          element.active = false;
        } else {
          element.active = true;
        }
      }
      this.setState({
        list,
      });
    });
  };
  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.innerText,
    });
  };

  clearCompleted = () => {
    let list = [...this.state.list];

    let newList = [];

    newList = list.filter((item) => item.active);
    console.log(newList);
    this.setState({
      list: newList,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <Header />
        <AddToDo
          name={this.state.name}
          list={this.state.list}
          change={this.handleChange}
          addToDo={this.addToDo}
        />
        <ToDoList
          category={this.state.category}
          list={this.state.list}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
          clearCompleted={this.clearCompleted}
        />
        <FilterList
          category={this.state.category}
          categoryChange={this.handleCategoryChange}
        />
      </div>
    );
  }
}

export default App;
