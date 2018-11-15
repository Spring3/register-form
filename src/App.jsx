import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './create-store.js';

import FormView from './views/FormView.jsx';
import ResultView from './views/ResultView.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Router>
            <Switch>
              <Route exact path='/' component={FormView} />
              <Route exact path='/results' component={ResultView} />
            </Switch>
          </Router>
        </main>
      </Provider>
    );
  }
}

export default App;
