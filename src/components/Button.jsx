import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { value, id, className, onClick, type } = this.props;

    return (
      <input
        id={id}
        className={className}
        type={type}
        value={value}
        onClick={onClick}
      />
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.oneOf(['submit', 'button']),
  value: PropTypes.string,
  onClick: PropTypes.func 
}

export default Button;
