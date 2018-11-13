import React, { Component } from 'react';
import Joi from 'joi';

import './App.css';

import SequenceForm from './components/SequenceForm.jsx';
import Input from './components/Input.jsx';
import RadioGroup from './components/RadioGroup.jsx';

const E164Regex = '^\\+?[1-9]\\d{1,14}$';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: undefined,
      email: undefined,
      phoneNumber: undefined,
      salary: undefined,
      hasError: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  changeFullName = (e) => {
    this.setState({
      fullName: e.target.value
    });
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  changePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  changeSalary = (e) => {
    this.setState({
      salary: e.target.value
    });
  }

  commitValidationResult = (result) => {
    const { error } = result;
    if (error || this.state.hasError) {
      this.setState({
        hasError: error instanceof Error
      });
    }
  }

  validateStringValue = (val, required) => {
    const validationResult = required
      ? Joi.validate(val, Joi.string().required())
      : Joi.validate(val, Joi.string());
    this.commitValidationResult(validationResult);
    return validationResult;
  }

  validateEmail = (val, required) => {
    const validationResult = required
      ? Joi.validate(val, Joi.string().email().required())
      : Joi.validate(val, Joi.string().email());
    this.commitValidationResult(validationResult);
    return validationResult
  }

  validatePhoneNumber = (val, required) => {
    const result = required
      ? Joi.validate(val, Joi.string().regex(new RegExp(E164Regex)).required())
      : Joi.validate(val, Joi.string().regex(new RegExp(E164Regex)))
    this.commitValidationResult(result);
    if (result && result.error instanceof Error) {
      return { error: new Error('The "value" must match the E164 format') };
    }
    return true;
  }

  render() {
    const { salary, hasError } = this.state;

    return (
      <main>
        <section>
          <SequenceForm
            onSubmit={this.onSubmit}
            hasError={hasError}
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
              type="tel"
              required={true}
              label="Phone Number"
              onChange={this.changePhoneNumber}
              validate={this.validatePhoneNumber}
            />
            <RadioGroup
              checkedValue={salary}
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
      </main>
    );
  }
}

export default App;
