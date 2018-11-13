import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton.jsx';
import Input from './Input.jsx';

class RadioGroup extends PureComponent {
  render() {
    const {
      children,
      title,
      checkedValue,
      onClick,
      required
    } = this.props;

    return (
      <Fragment>
        <label>
          {title}
        </label>
        <div>
        {
          React.Children.map(children, (child) => {
            if (child.type === RadioButton || (child.type === Input && child.props.type === 'radio')) {
              return React.cloneElement(child, {
                checked: checkedValue === child.props.value,
                onClick,
                required
              });
            }
            return child;
          })
        }
        </div>
      </Fragment>
    );
  }
}

RadioGroup.propTypes = {
  title: PropTypes.string,
  checkedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  required: PropTypes.bool
}

export default RadioGroup;
