import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles/RadioButton.css';

class RadioButton extends PureComponent {
  render() {
    const {
      id,
      className,
      checked,
      onChange,
      value,
      name,
      label,
      disabled
    } = this.props;

    return (
      <div className="radio-button">
        <label>
          <input
            id={id}
            className={className}
            name={name}
            checked={checked}
            disabled={disabled}
            type="radio"
            onChange={onChange}
            value={value}
          />
          {label}
        </label>
      </div>
    );
  }
}

RadioButton.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

RadioButton.defaultProps = {
  checked: false
};

export default RadioButton;
