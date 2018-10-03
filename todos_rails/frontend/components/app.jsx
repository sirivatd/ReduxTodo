import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';

const App = (props) => {
  // return <h1>{props.store}</h1>;
  return <TodoListContainer />;
};

export default App;
