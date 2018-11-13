import React, { PureComponent } from 'react';
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

    // if we have a validate function, we don't need to use the default html validation
    const htmlRequired = !validate && required;

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
          className={inputClass}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          required={htmlRequired}
          onChange={this.handleChange}
        />
        {
          error && (
            <div>
              <p>{error.message}</p>
            </div>
          )
        }
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
  validate: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'tel']),
  label: PropTypes.string,
  required: PropTypes.bool
}

export default TextInput;
