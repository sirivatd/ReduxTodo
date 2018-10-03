import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';
import { fetchTodos, createTodo } from "../../actions/todo_actions.js";

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
