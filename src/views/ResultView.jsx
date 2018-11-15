import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/actions.js';
import { withRouter } from 'react-router-dom';

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
        <div>
          <ul>
            <li>Full Name: {fullName}</li>
            <li>Email: {email}</li>
            <li>Phone Number: {phoneNumber}</li>
            <li>Salary Range: {salary}</li>
          </ul>
          <Button
            type="button"
            value="Try again"
            onClick={this.tryAgain}
          />
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
