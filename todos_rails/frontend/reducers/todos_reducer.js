import {RECEIVE_TODOS, RECEIVE_TODO} from './../actions/todo_actions.js';
import {receiveTodos, receiveTodo} from './../actions/todo_actions.js';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
let todoObject = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => todoObject[todo.id] = todo);
      return todoObject;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id] : action.todo };
      return merge({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
