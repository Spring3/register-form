import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/Input.jsx';
import Step from './components/Step.jsx';

class App extends Component {

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
                value="<-"
              />
            </div>
            <Step>
              <Input
                type="text"
                placeholder="Prop"
                label="Please enter"
              />
              <Input
                type="radio"
                label="Radio button"
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
