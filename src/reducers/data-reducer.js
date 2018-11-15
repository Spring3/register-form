import * as actions from '../actions/actions.js';

export const initialState = {
  fullName: undefined,
  email: undefined,
  phoneNumber: undefined,
  salary: undefined
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RESET:
      return { ...initialState };
    case actions.FULL_NAME_CHANGE:
      return { ...state, fullName: action.value };
    case actions.EMAIL_CHANGE:
      return { ...state, email: action.value };
    case actions.PHONE_NUMBER_CHANGE:
      return { ...state, phoneNumber: action.value };
    case actions.SALARY_CHANGE:
      return { ...state, salary: action.value };
    default:
      return state;
  }
}
