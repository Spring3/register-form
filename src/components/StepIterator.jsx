import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Step from './Step';

class StepIterator extends PureComponent {
  render() {
    const { children, activeIndex } = this.props;

    return React.Children.map(children, (child, i) => {
      if (child.type === Step) {
        return React.cloneElement(child, { active: activeIndex === i });
      }
      return child;
    })
  }
}

StepIterator.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node
}

export default StepIterator;
