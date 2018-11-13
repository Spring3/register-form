import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from './Input.jsx';
import Sequence from './Sequence.jsx';
import Step from './Step.jsx';

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';

class SequenceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  nextStep = (e) => {
    e.preventDefault();
    const { progress } = this.state;
    const { children } = this.props;

    if (progress < children.length - 1) {
      this.setState({
        progress: progress + 1
      });
    }
  }

  prevStep = () => {
    const { progress } = this.state;
    
    if (progress > 0) {
      this.setState({
        progress: progress - 1
      });
    }
  }

  render() {
    const { children, onSubmit, hasError } = this.props;
    const { progress } = this.state;
    const backBtnClass = classnames('button-back', {
      'button-invisible': progress === 0
    });

    return (
      <form onSubmit={onSubmit}>
        <div>
          <Input
            className={backBtnClass}
            type="button"
            value={<ArrowLeftIcon />}
            onClick={this.prevStep}
          />
        </div>
        <Sequence
          activeIndex={progress}
        >
          { React.Children.map(children, child => (<Step>{child}</Step>)) }
        </Sequence>
        <div>
          { progress < children.length - 1
            ? ( 
              <Input
                type="button"
                value="Next"
                disabled={hasError}
                onClick={this.nextStep}
              />
            )
            : (
              <Input
                type="submit"
                value="Submit"
                disabled={hasError}
              />
            )
          }
        </div>
        <div>ProgressBar</div>
      </form>
    );
  }
}

SequenceForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onSubmit: PropTypes.func,
  hasError: PropTypes.bool
}

export default SequenceForm;
