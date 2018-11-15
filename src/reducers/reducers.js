import { combineReducers } from 'redux';

import * as form from './form-reducer.js';
import * as data from './data-reducer.js';

export const rootReducer = combineReducers({
  form: form.reducer,
  data: data.reducer
});

export const initialState = {
  form: form.initialState,
  data: data.initialState
};

export default rootReducer;
