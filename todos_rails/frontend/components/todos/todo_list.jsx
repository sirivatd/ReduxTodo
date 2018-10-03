import React from 'react';
import TodoListContainer from './todo_list_container.jsx';
import {connect} from 'react-redux';
import {receiveTodos, receiveTodo} from './../../actions/todo_actions.js';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from "./todo_form.jsx";
import uniqueId from '../../util/util.js';



class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo } = this.props;
    // return <h1>Todolist</h1>;
    return (
      <div id="some">
      <ul>

      {todos.map(item => (
        <TodoListItem key={item.id} todo={item}/>

      ))}
      </ul>

      <TodoForm createTodo={this.props.createTodo} />
    </div>
    );
  }
}


export default TodoList;
