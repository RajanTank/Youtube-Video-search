import React from 'react';
import ValidationSchema from '../config/ValidationSchema';

class Input extends React.Component {

  state = {
    value: '',
    errorMesssage: ''
  };

  InputValidation = () => {
    const { inputType, handlechange, name } = this.props;
    const { value } = this.state;
    const { regex, errorMsg } = ValidationSchema[inputType];
    let msg = '';
    if (!value) {
      msg = 'Field can not be empty';
    } else {
      if (!regex.test(value)) {
        msg = errorMsg;
      } else {
        handlechange(value, name);
      }
    }
    this.setState({
      errorMesssage: msg
    })
  }

  render() {
    const { inputId, name, inputType, value, placeholder } = this.props;
    return (
      <div className="field">
        <input
          id={inputId}
          name={name}
          type={inputType}
          value={value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
          placeholder={placeholder}
          onBlur={this.InputValidation}
          onFocus={(event) => { this.setState({ errorMesssage: '' }) }}
        />
        <span style={{ color: 'red' }}>{this.state.errorMesssage}</span>
      </div>
    );
  }
}

export default Input;
