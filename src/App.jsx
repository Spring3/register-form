import React, { Component } from 'react';
import './App.css';

import SequenceForm from './components/SequenceForm.jsx';
import Input from './components/Input.jsx';
import Sequence from './components/Sequence.jsx';
import Step from './components/Step.jsx';
import RadioGroup from './components/RadioGroup.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: undefined,
      email: undefined,
      phoneNumber: undefined,
      salary: undefined
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

  render() {
    const { salary } = this.state;

    return (
      <main>
        <section>
          <SequenceForm
            onSubmit={this.onSubmit}
          >
            <Input
              type="text"
              placeholder="John Doe"
              required={true}
              label="Full Name"
              onChange={this.changeFullName}
            />
            <Input
              type="email"
              placeholder="example@domain.com"
              required={true}
              label="Email"
              onChange={this.changeEmail}
            />
            <Input
              type="tel"
              required={true}
              label="Phone Number"
              onChange={this.changePhoneNumber}
            />
            <RadioGroup
              checkedValue={salary}
              title="Salary Indication"
              required={true}
              onClick={this.changeSalary}
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
