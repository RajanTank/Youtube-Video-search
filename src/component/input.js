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
    if (!value) {
      this.setState({
        errorMesssage: 'Field can not be empty'
      });
    } else if (!regex.test(value)) {
      this.setState({
        errorMesssage: errorMsg
      });
    }
    else {
      handlechange(value, name);
    }
  }
  render() {
    return (
      <div className="field">
        <input  
          id={this.props.inputId}
          name={this.props.name}
          type={this.props.inputType}
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
          placeholder={this.props.placeholder}
          onBlur={this.InputValidation}
          onFocus={(event) => { this.setState({ errorMesssage: '' }) }}
        />
        <span style={{ color: 'red' }}>{this.state.errorMesssage}</span>
      </div>
    );
  }
}

export default Input;
