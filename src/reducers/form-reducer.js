import * as actions from '../actions/actions.js';

export const initialState = {
  wasStepValidated: false,
  allValidationErrors: {},
  validationError: undefined,
  progress: 0,
  maxReachedProgress: 0,
  activeStep: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_NEXT:
      const nextStepIndex = state.activeStep + 1;
      // update progress only if we move one step further
      // this protects from incrementing progress if user went back and then went next again
      const progress = nextStepIndex > state.progress ? nextStepIndex : state.progress;
      const maxReachedProgress = progress > state.maxReachedProgress ? progress : state.maxReachedProgress;
      return {
        ...state,
        // if we went back and then clicked "Next", validation already passed
        wasStepValidated: nextStepIndex < state.maxReachedProgress,
        activeStep: nextStepIndex,
        progress,
        validationError: state.validationErrors[nextStepIndex],
        maxReachedProgress
      };
    case actions.SHOW_PREVIOUS:
      const previousStepIndex = state.activeStep > 0 ? state.activeStep - 1 : 0;
      return {
        ...state,
        activeStep: previousStepIndex,
        wasStepValidated: true,
        validationError: state.validationErrors[previousStepIndex]
      };
    case actions.FINISH:
      return { ...state, progress: state.progress + 1 };
    case actions.RESET:
      return { ...initialState };
    case actions.VALIDATION_RESULT:
      return {
        ...state,
        wasStepValidated: true,
        validationError: action.value,
        validationErrors: {...state.validationErrors, [state.activeStep]: action.value }
      };
    default:
      return state;
  }
}
