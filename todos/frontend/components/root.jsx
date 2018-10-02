import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
  <div>
    <App />
    <h1>Root is working</h1>
  </div>
  </Provider>
);

export default Root;
