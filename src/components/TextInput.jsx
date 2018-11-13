import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextInput extends PureComponent {
  render() {
    const {
      id,
      className,
      name,
      label,
      type,
      value,
      placeholder,
      onChange,
      disabled,
      required
    } = this.props;

    return (
      <div>
        <div>
          <label
            htmlFor={id || name || className}
          >
            {label}
          </label>
        </div>
        <input
          id={id}
          name={name}
          className={className}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          required={required}
          onChange={onChange}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email']),
  label: PropTypes.string,
  required: PropTypes.bool
}

export default TextInput;
