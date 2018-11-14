import { combineReducers } from 'redux';

import * as form from './form-reducer.js';

export const rootReducer = combineReducers({
  form: form.reducer
});

export const initialState = {
  form: form.initialState
};

export default rootReducer;
