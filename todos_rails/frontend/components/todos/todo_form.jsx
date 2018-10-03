import React from 'react';
import uniqueId from "./../../util/util.js";
import { createTodo } from "./../../util/todo_api_util.js";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  createNewTodo(e){
    e.preventDefault();
    let title = e.currentTarget.elements[0].value;
    let body = e.currentTarget.elements[1].value;
    this.props.createTodo({title: title, body: body}).then(
      () => this.setState({title: '', body: ''})
    ); }



  render() {
    return (
      <form onSubmit={this.createNewTodo}>
        <label>Name:
          <input type="text" name="title" onChange={this.titleChange} value={this.state.title}></input>
        </label>
        <label>Body:
          <textarea name="body" value={this.state.body} onChange={this.bodyChange}></textarea>
        </label>
        <input type="submit"></input>
      </form>
    );
  }
}

export default TodoForm;
