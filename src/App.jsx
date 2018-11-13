import React, { Component } from 'react';
import './App.css';

import Input from './components/Input.jsx';
import StepIterator from './components/StepIterator.jsx';
import Step from './components/Step.jsx';
import RadioGroup from './components/RadioGroup.jsx';

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: undefined,
      email: undefined,
      phoneNumber: undefined,
      salary: undefined,
      progress: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  onSalarySelect = (e) => {
    console.log(e.target.value);
    this.setState({
      salary: e.target.value
    });
  }

  nextStep = () => {
    const nextStep = 
    this.setState({
      progress: this.state.progress + 1
    });
  }

  prevStep = () => {
    this.setState({
      progress: this.state.progress - 1
    });
  }

  render() {
    const { salary, progress } = this.state;

    return (
      <main>
        <section>
          <form onSubmit={this.onSubmit}>
            <div>
              <Input
                className="back"
                type="button"
                value={<ArrowLeftIcon />}
                onClick={this.prevStep}
              />
            </div>
            <StepIterator
              activeIndex={progress}
            >
              <Step>
                <Input
                  type="text"
                  placeholder="John Doe"
                  required={true}
                  label="Full Name"
                />
              </Step>
              <Step>
                <Input
                  type="email"
                  placeholder="example@domain.com"
                  required={true}
                  label="Email"
                />
              </Step>
              <Step>
                <Input
                  type="tel"
                  required={true}
                  label="Phone Number"
                />
              </Step>
              <Step>
                <RadioGroup
                  value={salary}
                  title="Salary Indication"
                  required={true}
                  onClick={this.onSalarySelect}
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
              </Step>
            </StepIterator>
            <div>
              <Input
                type="button"
                value="Next"
                onClick={this.nextStep}
              />
            </div>
            <div>ProgressBar</div>
          </form>
        </section>
      </main>
    );
  }
}

export default App;
