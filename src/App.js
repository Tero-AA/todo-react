import React, { Component } from 'react';
import './App.css';

class TaskList extends Component {
  constructor() {
    super()
    this.state = {
      list: [{ name: "Tarea 1", description: "esto es una tarea", done: false },
      { name: "Tarea 2", description: "esto es una tarea 2", done: true }]
    }
  }
  addTask = (task) => {
    this.setState({
      list: [...this.state.list, task]
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(task => {
            return (<li key={task.name} className={task.done ? "done" : "undone"}>
              <strong>{task.name}: </strong>
              {task.description}
            </li>)
          })}
        </ul>
        <TaskForm formSubmitted={this.addTask} />
      </div>
    )
  }
}

class TaskForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      description: "",
      done: false
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.formSubmitted(this.state)
  }

  handleChange = e => {
    const type = e.currentTarget.type
    const value =
      type === "checkbox" ? e.currentTarget.checked : e.currentTarget.value
    const name = e.currentTarget.name
    console.log(value);


    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Descripción:
          <textarea row="3" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
        </label>
        <label>
          Realizada:
          <input type="checkbox" name="done" value={this.state.done} onChange={this.handleChange}></input>
          <input type="submit" value="Agregar" name="check"></input>
        </label>
      </form>
    )
  }
}

function App() {

  return (
    <div>
      <TaskList />
    </div>


  );
}

export default App;
