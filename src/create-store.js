import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers/reducers.js';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware((store) => (next) => (action) => {
    console.log(action);
    next(action);
  })
);

export default store;
