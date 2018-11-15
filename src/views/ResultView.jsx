import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/actions.js';
import { withRouter } from 'react-router-dom';

import './styles/ResultView.css';

import Button from '../components/Button.jsx';

class ResultView extends Component {
  tryAgain = () => {
    this.props.reset();
    this.props.history.push('/');
  }

  render() {
    const { fullName, email, phoneNumber, salary } = this.props;
    return (
      <section>
        <div className="result-view">
          <h3>What you've entered:</h3>
          <ul className="result-view-list">
            <li className="result-view-list-item">
              <span className="key">Full Name:</span>
              <span className="value">{fullName}</span>
            </li>
            <li className="result-view-list-item">
              <span className="key">Email:</span>
              <span className="value">{email}</span>
            </li>
            <li className="result-view-list-item">
              <span className="key">Phone Number:</span>
              <span className="value">{phoneNumber}</span>
            </li>
            <li className="result-view-list-item">
              <span className="key">Salary Range:</span>
              <span className="value">{salary}</span>
            </li>
          </ul>
          <div className="button-container">
            <Button
              type="button"
              value="Try again"
              onClick={this.tryAgain}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  fullName: state.data.fullName,
  email: state.data.email,
  phoneNumber: state.data.phoneNumber,
  salary: state.data.salary
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultView));
