import {createStore} from 'redux';
import rootReducer from './../reducers/root_reducer.js';
import {applyMiddleware} from 'redux';
import thunk from './../middleware/thunk.js';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));
  return store;
}
export default configureStore;
