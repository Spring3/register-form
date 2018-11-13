import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  renderSubmit = () => {
    const {
      value,
      id,
      className,
      name,
      onClick,
      disabled
    } = this.props;

    return (
      <input
        id={id}
        className={className}
        name={name}
        type='submit'
        disabled={disabled}
        value={value}
        onClick={onClick}
      />
    );
  }

  renderButton = (props) => {
    const {
      value,
      id,
      className,
      name,
      onClick,
      disabled
    } = this.props;

    return (
      <button
        id={id}
        className={className}
        disabled={disabled}
        name={name}
        onClick={onClick}
      >
        { value }
      </button>
    );
  }

  render() {
    const { type } = this.props;

    switch(type.toLowerCase()) {
      case 'submit':
        return this.renderSubmit()
      default:
        return this.renderButton();
    }
  }
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  value: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func 
}

export default Button;
