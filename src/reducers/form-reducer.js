import * as actions from '../actions/actions.js';

export const initialState = {
  fullName: undefined,
  email: undefined,
  phoneNumber: undefined,
  salary: undefined,
  wasStepValidated: false,
  validationError: undefined,
  progress: 0,
  activeStep: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_NEXT:
      const nextStepIndex = state.activeStep + 1;
      // update progress only if we move one step further
      // this protects from incrementing progress if user went back and then went next again
      const progress = nextStepIndex > state.progress ? nextStepIndex : state.progress;
      return {
        ...state,
        // if we went back and then clicked "Next", validation already passed
        wasStepValidated: progress <= state.progress,
        activeStep: nextStepIndex,
        progress
      };
    case actions.SHOW_PREVIOUS:
      return {
        ...state,
        activeStep: state.activeStep > 0 ? state.activeStep - 1 : 0,
        wasStepValidated: true
      };
    case actions.FULL_NAME_CHANGE:
      return { ...state, fullName: action.value };
    case actions.EMAIL_CHANGE:
      return { ...state, email: action.value };
    case actions.PHONE_NUMBER_CHANGE:
      return { ...state, phoneNumber: action.value };
    case actions.SALARY_CHANGE:
      return { ...state, salary: action.value };
    case actions.VALIDATION_RESULT:
      return {
        ...state,
        wasStepValidated: true,
        validationError: action.value
      };
    default:
      return state;
  }
}
