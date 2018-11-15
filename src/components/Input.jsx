import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles/Input.css';

import Button from './Button.jsx';
import TextInput from './TextInput.jsx';
import RadioButton from './RadioButton.jsx';

class Input extends PureComponent {
  render() {
    const {
      id,
      className,
      name,
      type,
      placeholder,
      value,
      onChange,
      onClick,
      label,
      checked,
      disabled,
      required,
      validate
    } = this.props;

    switch(type.toLowerCase()) {
      case 'submit':
      case 'button':
        return (
          <Button
            id={id}
            className={className}
            type={type}
            onClick={onClick}
            value={value}
            disabled={disabled}
          />
        );
      case 'radio':
        return(
          <RadioButton
            id={id}
            className={className}
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            checked={checked}
            disabled={disabled}
          />
        );
      default:
        return (
          <TextInput
            id={id}
            className={className}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            label={label}
            disabled={disabled}
            required={required}
            validate={validate}
          />
        );
    }
  }
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.oneOf(['text', 'submit', 'button', 'radio', 'email', 'number']),
  placeholder: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  validate: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool
}

Input.defaultProps = {
  type: 'text'
}

export default Input;
