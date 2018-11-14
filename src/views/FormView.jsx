import React, { Component } from 'react';
import Joi from 'joi';
import { connect } from 'react-redux';
import {
  fullNameChange,
  emailChange,
  phoneNumberChange,
  salaryChange,
  validationResult,
  showNext,
  showPrevious
} from '../actions/actions.js';

import SequenceForm from '../components/SequenceForm.jsx';
import Input from '../components/Input.jsx';
import RadioGroup from '../components/RadioGroup.jsx';

const E164Regex = '^\\+?[1-9]\\d{1,14}$';

class FormView extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  }

  changeFullName = (e) => {
    this.props.fullNameChanged(e.target.value);
  }

  changeEmail = (e) => {
    this.props.emailChanged(e.target.value);
  }

  changePhoneNumber = (e) => {
    this.props.phoneNumberChanged(e.target.value);
  }

  changeSalary = (e) => {
    this.props.salaryChanged(e.target.value);
  }

  validateStringValue = (val, required) => {
    const validationResult = required
      ? Joi.validate(val, Joi.string().required())
      : Joi.validate(val, Joi.string());
    this.props.commitValidationResult(validationResult.error);
    return validationResult;
  }

  validateEmail = (val, required) => {
    const validationResult = required
      ? Joi.validate(val, Joi.string().email().required())
      : Joi.validate(val, Joi.string().email());
    this.props.commitValidationResult(validationResult.error);
    return validationResult
  }

  validatePhoneNumber = (val, required) => {
    const result = required
      ? Joi.validate(val, Joi.string().regex(new RegExp(E164Regex)).required())
      : Joi.validate(val, Joi.string().regex(new RegExp(E164Regex)));
    if (result && result.error instanceof Error) {
      result.error.message = 'The "value" must match the E164 format';
    }
    this.props.commitValidationResult(result.error);
    return result;
  }

  render() {
    const {
      validationError,
      wasCurrentStepValidated,
      progress,
      activeStep,
      showNextStep,
      showPreviousStep
    } = this.props;

    const canGoNext = !(validationError instanceof Error) && wasCurrentStepValidated;

    return (
      <section>
        <SequenceForm
          onSubmit={this.onSubmit}
          activeStep={activeStep}
          progress={progress}
          next={showNextStep}
          previous={showPreviousStep}
          canGoNext={canGoNext}
        >
          <Input
            type="text"
            placeholder="John Doe"
            required={true}
            label="Full Name"
            validate={this.validateStringValue}
            onChange={this.changeFullName}
          />
          <Input
            type="email"
            placeholder="example@domain.com"
            required={true}
            label="Email"
            onChange={this.changeEmail}
            validate={this.validateEmail}
          />
          <Input
            type="number"
            required={true}
            label="Phone Number"
            onChange={this.changePhoneNumber}
            validate={this.validatePhoneNumber}
          />
          <RadioGroup
            title="Salary Indication"
            required={true}
            onChange={this.changeSalary}
            validate={this.validateStringValue}
          >
            <Input
              value="0 - 1.000"
              label="0 - 1.000"
              type="radio"
            />
            <Input
              value="1.000 - 2.000"
              label="1.000 - 2.000"
              type="radio"
            />
            <Input
              value="2.000 - 3.000"
              label="2.000 - 3.000"
              type="radio"
            />
            <Input
              value="3.000 - 4.000"
              label="3.000 - 4.000"
              type="radio"
            />
            <Input
              value="Mehr als 4.000"
              label="Mehr als 4.000"
              type="radio"
            />
          </RadioGroup>
        </SequenceForm>
      </section>
      );
  }
}

const mapStateToProps = (state) => ({
  validationError: state.form.validationError,
  wasCurrentStepValidated: state.form.wasStepValidated,
  progress: state.form.progress,
  activeStep: state.form.activeStep
});

const mapDispatchToProps = dispatch => ({
  fullNameChanged: (val) => dispatch(fullNameChange(val)),
  emailChanged: (val) => dispatch(emailChange(val)),
  phoneNumberChanged: (val) => dispatch(phoneNumberChange(val)),
  salaryChanged: (val) => dispatch(salaryChange(val)),
  commitValidationResult: (val) => dispatch(validationResult(val)),
  showNextStep: () => dispatch(showNext()),
  showPreviousStep: () => dispatch(showPrevious())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormView);
