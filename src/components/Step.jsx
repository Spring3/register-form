import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles/Step.css';

class Step extends PureComponent {
  render() {
    const { active, children } = this.props;
    const stepClass = classnames('step', {
      'step-active': active === true
    });

    return (
      <div className={stepClass}>
        { children }
      </div>
    );
  }
}

Step.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

Step.defaultProps = {
  active: false
}

export default Step;
