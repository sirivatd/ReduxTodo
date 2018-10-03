import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js';
import {fetchTodos} from './actions/todo_actions.js';

const store = configureStore();
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
  window.store = store;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
});
