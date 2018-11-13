import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton.jsx';
import Input from './Input.jsx';

class RadioGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: { message: 'Value selection is mandatory' }
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
      children,
      title,
      checkedValue
    } = this.props;

    const { error } = this.state;

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
                onChange: this.handleChange
              });
            }
            return child;
          })
        }
        </div>
        {
          error && (
            <div>
              <p>{error.message}</p>
            </div>
          )
        }
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
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  required: PropTypes.bool,
  validate: PropTypes.func
}

export default RadioGroup;
