import React, { Component } from 'react';
import './App.css';

import Input from './components/Input.jsx';
import Step from './components/Step.jsx';
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
    console.log('Submitted', e.target.value);
    console.log('Submitted', e.target.values);
  }

  render() {
    return (
      <main>
        <section>
          <form>
            <div>
              <Input
                className="back"
                type="button"
                value={<ArrowLeftIcon />}
              />
            </div>
            <Step
              active={true}
            >
              <Input
                type="text"
                placeholder="John Doe"
                label="Full Name"
              />
            </Step>
            <Step
              active={true}>
              <Input
                type="email"
                placeholder="example@domain.com"
                label="Email"
              />
            </Step>
            <Step
              active={true}>
              <Input
                type="tel"
                label="Phone Number"
              />
            </Step>
            <div>
              <Input
                type="button"
                value="Next"
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
