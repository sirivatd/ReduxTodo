import React from 'react';
import uniqueId from '../../util/util.js';

const TodoListItem = props => {
  return <li key={uniqueId()}>{props.todo.title}</li>;
};

export default TodoListItem;
