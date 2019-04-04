import React from 'react';
import Inputs from './input';

class SignupForm extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  onSignUp = () => {
    localStorage.setItem('user', JSON.stringify(this.state));
    alert('Sign up successful');
    console.log(localStorage.getItem('user'));
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid log">
        <div className="column">
          <h2 className="ui header">
            <div className="">
              Sign Up
          </div>
          </h2>

          <form className="ui large form">
            <div className="ui stacked segment">
            
              <Inputs
                inputId={'firstname'}
                inputType={'text'}
                title={'Full Name'}
                name={'firstName'}
                placeholder={'First Name'}
                handlechange={(value, name) => { this.setState({ [name]: value }); }}
              />

              <Inputs
                inputId={'lastname'}
                inputType={'text'}
                title={'last Name'}
                name={'lastName'}
                placeholder={'Last Name'}
                handlechange={(value, name) => { this.setState({ [name]: value }); }}
              />

              <Inputs
                inputId={'email'}
                inputType={'email'}
                title={'Email Address'}
                name={'email'}
                placeholder={'Email Address'}
                handlechange={(value, name) => { this.setState({ [name]: value }); }}
              />

              <Inputs
                inputId={'password'}
                inputType={'password'}
                title={'Password'}
                name={'password'}
                placeholder={'Password'}
                handlechange={(value, name) => { this.setState({ [name]: value }); }}
              />

              <input
                type="submit"
                className="ui fluid large teal submit button"
                value="SignUp"
                onClick={this.onSignUp} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;