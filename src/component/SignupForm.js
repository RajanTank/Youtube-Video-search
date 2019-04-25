import React from 'react';
import Inputs from './input';
import '../style/style.css';
import { notificationSuccess, notificationWarn, notificationError } from '../Utility /utility';
import { label } from '../Utility /label';
import { connect } from 'react-redux';
import { signUpData } from '../actions/actionCreater'

const userData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  keepMeLoggedIn: true,
  watchlater: [],
  history: []
}
class SignupForm extends React.Component {

  componentDidMount() {
    if (this.props.userData != null) {
      notificationWarn(label.addNewAcc);
      this.props.history.push('/homepage');
    }
  }

  onSignUp = () => {
    const { firstname, lastname, email, password } = userData;
    if (firstname == '' || lastname == '' || email == '' || password == '') {
      notificationError(label.validMsg);
    } else {
      this.props.signUpData(userData);
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
                  handlechange={(value, name) => { userData[name] = value }}
                />
                <Inputs
                  inputId={'lastname'}
                  inputType={'text'}
                  title={'last Name'}
                  name={'lastName'}
                  placeholder={'Last Name'}
                  handlechange={(value, name) => { userData[name] = value }}
                />
                <Inputs
                  inputId={'email'}
                  inputType={'email'}
                  title={'Email Address'}
                  name={'email'}
                  placeholder={'Email Address'}
                  handlechange={(value, name) => { userData[name] = value }}
                />
                <Inputs
                  inputId={'password'}
                  inputType={'password'}
                  title={'Password'}
                  name={'password'}
                  placeholder={'Password'}
                  handlechange={(value, name) => { userData[name] = value }}
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

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps, { signUpData })(SignupForm);