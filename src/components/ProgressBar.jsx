import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles/ProgressBar.css';

class ProgressBar extends PureComponent {
  render() {
    const { label, current, max } = this.props;
    const style = { width: `${(current / max) * 100}%` };

    return (
      <div className="progress">
        <div className="progress-bar" style={style}>
          <span className="progress-bar-label">{label}</span>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  label: PropTypes.string,
  current: PropTypes.number,
  max: PropTypes.number
};

ProgressBar.defaultProps = {
  current: 0,
  label: ''
}

export default ProgressBar;
