import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from './Input.jsx';
import Sequence from './Sequence.jsx';
import Step from './Step.jsx';

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';

class SequenceForm extends PureComponent {
  nextStep = (e) => {
    e.preventDefault();
    const { children, activeStep } = this.props;

    if (activeStep < children.length - 1) {
      this.props.next();
    }
  }

  render() {
    const { children, onSubmit, canGoNext, activeStep } = this.props;
    const backBtnClass = classnames('button-back', {
      'button-invisible': activeStep === 0
    });

    return (
      <form onSubmit={onSubmit}>
        <div>
          <Input
            className={backBtnClass}
            type="button"
            value={<ArrowLeftIcon />}
            onClick={this.props.previous}
          />
        </div>
        <Sequence
          activeIndex={activeStep}
        >
          { React.Children.map(children, child => (<Step>{child}</Step>)) }
        </Sequence>
        <div>
          { activeStep < children.length - 1
            ? ( 
              <Input
                type="button"
                value="Next"
                disabled={!canGoNext}
                onClick={this.nextStep}
              />
            )
            : (
              <Input
                type="submit"
                value="Submit"
                disabled={!canGoNext || activeStep < children.length - 1}
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
  next: PropTypes.func,
  previous: PropTypes.func,
  activeStep: PropTypes.number,
  progress: PropTypes.number,
  canGoNext: PropTypes.bool,
}

export default SequenceForm;
