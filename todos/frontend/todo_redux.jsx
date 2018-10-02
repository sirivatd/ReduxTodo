import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js';

ReactDOM.render(<Root store={configureStore()} />, document.getElementById('content'));
window.store = configureStore();
window.allTodos = allTodos;
