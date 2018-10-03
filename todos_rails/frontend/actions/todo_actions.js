export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as APIUtil from './../util/todo_api_util.js';

export const receiveTodos = function(todos){
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const receiveTodo = function(todo){
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const fetchTodos = () => dispatch => {

  return APIUtil.fetchTodos().
  then((todos) => dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => dispatch => {
  return APIUtil.createTodo(todo)
  .then(todo => dispatch(receiveTodo(todo)));
};
