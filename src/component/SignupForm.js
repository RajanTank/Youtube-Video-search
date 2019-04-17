import React from 'react';
import Inputs from './input';
import '../style/style.css';
import { notificationSuccess, notificationWarn, notificationError, getLocalStorage, setLocalStorage } from '../Utility /utility';
import { label } from '../Utility /label';

class SignupForm extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    watchlater: [],
    history: []
  };

  componentDidMount() {
    let arr = [];
    arr = getLocalStorage();
    if (arr != null) {
      notificationWarn(label.firstLogin);
      this.props.history.push('/homepage');
    }
  }

  onSignUp = () => {
    const { firstname, lastname, email, password } = this.state;
    if (firstname == '' || lastname == '' || email == '' || password == '') {
      notificationError(label.validMsg);
    } else {
      setLocalStorage(this.state);
      notificationSuccess(label.signUpSuccess);
      this.props.history.push('/homepage');
    }
  };

  render() {
    return (
      <>
        <div className="ui middle aligned center aligned grid log sign" >
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
      </>
    );
  }
}

export default SignupForm;