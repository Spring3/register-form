import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const { validate, onChange, required } = this.props;

    if (validate) {
      const validationResult = validate(value, required);
      this.setState({
        error: validationResult !== true ? validationResult.error : undefined
      });
    }
    onChange(e);
  }

  render() {
    const {
      id,
      className,
      name,
      label,
      type,
      placeholder,
      value,
      disabled,
      required,
      validate
    } = this.props;

    const { error } = this.state;

    const inputClass = classnames(className, {
      'input-error': error
    });

    const htmlRequired = !validate && required;

    return (
      <Fragment>
        <label
          htmlFor={id || name || className}
          className="input-label"
        >
          {label}
        </label>
        <div className="input-container">
          <input
            id={id}
            name={name}
            className={inputClass}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            required={htmlRequired}
            onChange={this.handleChange}
          />
        </div>
        {
          error && (
            <div className="error-message">
              <span>{error.message}</span>
            </div>
          )
        }
      </Fragment>
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
  validate: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  label: PropTypes.string,
  required: PropTypes.bool
}

export default TextInput;
