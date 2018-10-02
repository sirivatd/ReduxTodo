import React from 'react';
import TodoListContainer from './todo_list_container.jsx';
import {connect} from 'react-redux';
import {receiveTodos, receiveTodo} from './../../actions/todo_actions.js';


class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todos, receiveTodo } = this.props;
    // return <h1>Todolist</h1>;
    const todoItems = todos.map(todo => (
        <h1>
          {todo.id}
        </h1>
      )
    );
    return todos.map(todo => (
        <h1>
          Todolist
        </h1>
      )
    );
  }
}


export default TodoList;
