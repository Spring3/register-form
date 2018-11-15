export const SHOW_NEXT = 'NEXT';
export const SHOW_PREVIOUS = 'BACK';
export const FINISH = 'FINISH';
export const RESET = 'RESET';
export const FULL_NAME_CHANGE = 'FULL_NAME_CHANGE';
export const EMAIL_CHANGE = 'EMAIL_CHANGE';
export const PHONE_NUMBER_CHANGE = 'PHONE_NUMBER_CHANGE';
export const SALARY_CHANGE = 'SALARY_CHANGE';
export const VALIDATION_RESULT = 'VALIDATION_RESULT';

export const showNext = () => ({
  type: SHOW_NEXT
});

export const showPrevious = () => ({
  type: SHOW_PREVIOUS
});

export const finish = () => ({
  type: FINISH
});

export const reset = () => ({
  type: RESET
});

export const fullNameChange = (value) => ({
  type: FULL_NAME_CHANGE,
  value
});

export const emailChange = (value) => ({
  type: EMAIL_CHANGE,
  value
});

export const phoneNumberChange = (value) => ({
  type: PHONE_NUMBER_CHANGE,
  value
});

export const salaryChange = (value) => ({
  type: SALARY_CHANGE,
  value
});

export const validationResult = (error) => ({
  type: VALIDATION_RESULT,
  value: error
})
