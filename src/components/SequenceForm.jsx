import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from './Input.jsx';
import Sequence from './Sequence.jsx';
import Step from './Step.jsx';
import ProgressBar from './ProgressBar.jsx';

import './styles/SequenceForm.css';

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';

class SequenceForm extends PureComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  nextStep = (e) => {
    e.preventDefault();
    const { children, activeStep } = this.props;

    if (activeStep < children.length - 1) {
      this.props.next();
    }
  }

  onKeyUp = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      e.preventDefault();
      const { canGoNext, activeStep, children, next } = this.props;
      if (canGoNext && activeStep < children.length - 1) {
        next();
      }
    }
  }

  render() {
    const { children, onSubmit, canGoNext, activeStep, progress } = this.props;
    const backBtnClass = classnames('button-back', {
      'button-invisible': activeStep === 0
    });
    const difference = children.length - progress;
    const progressLabel = difference > 0
      ? `${difference} more to go`
      : 'Finished!';

    return (
      <form
        onSubmit={onSubmit}
        className="sequence-form"
        onKeyUp={this.onKeyUp}
        ref={this.formRef}
      >
        <div className="button-container">
          <Input
            className={backBtnClass}
            type="button"
            value={<ArrowLeftIcon color="teal" size={35}/>}
            onClick={this.props.previous}
          />
        </div>
        <Sequence
          activeIndex={activeStep}
        >
          { React.Children.map(children, child => (<Step>{child}</Step>)) }
        </Sequence>
        <div className="button-container">
          { activeStep < children.length - 1
            ? ( 
              <Input
                type="button"
                className="button-next"
                value={<div>Next</div>}
                disabled={!canGoNext}
                onClick={this.nextStep}
              />
            )
            : (
              <Input
                className="button-next-submit"
                type="submit"
                value="Submit"
                disabled={!canGoNext || activeStep < children.length - 1}
              />
            )
          }
        </div>
        <ProgressBar
          label={progressLabel}
          current={progress}
          max={children.length}
        />
      </form>
    );
  }
}

SequenceForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onSubmit: PropTypes.func,
  next: PropTypes.func,
  previous: PropTypes.func,
  activeStep: PropTypes.number,
  progress: PropTypes.number,
  canGoNext: PropTypes.bool,
}

export default SequenceForm;
