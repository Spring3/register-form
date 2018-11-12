import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextInput extends PureComponent {
  render() {
    const { id, className, name, label, value, placeholder, onChange } = this.props;

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
          type="text"
          placeholder={placeholder}
          value={value}
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
  onChange: PropTypes.func,
  label: PropTypes.string
}

export default TextInput;
