import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './create-store.js';

import FormView from './views/FormView.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <FormView/>
        </main>
      </Provider>
    );
  }
}

export default App;
