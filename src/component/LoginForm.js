import React from 'react';
import Inputs from './input';
import '../style/style.css';
import { notificationSuccess, notificationError } from '../Utility /utility';
import { label } from '../Utility /label';
import { connect } from 'react-redux';
import { signUpData } from '../actions/actionCreater'

const temp = {
   email: '',
   password: ''
}

class LoginForm extends React.Component {

   componentDidMount() {
      if (this.props.userData != null && this.props.userData.keepMeLoggedIn == true) {
         this.props.history.push('/homepage');
      }
   }

   authenticateUser = () => {
      const userInfo = this.props.userData;
      if (userInfo['email'] == temp['email'] && userInfo['password'] == temp['password']) {
         userInfo.keepMeLoggedIn = true;
         this.props.signUpData(userInfo);
         notificationSuccess(label.loginSuccess);
         this.props.history.push('/homepage');
      }
      else {
         notificationError(label.validLogin);
      }
   }

   render() {
      return (
         <div className="ui middle aligned center aligned grid log login" >
            <div className="column">
               <h2 className="ui header">
                  <div className="">
                     Login to your account
                  </div>
               </h2>

               <form className="ui large form">
                  <div className="ui stacked segment">
                     <Inputs
                        inputId={'email'}
                        inputType={'email'}
                        title={'Email Address'}
                        name={'email'}
                        placeholder={'Email Address'}
                        handlechange={(value, name) => { temp[name] = value }}
                     />
                     <Inputs
                        inputId={'password'}
                        inputType={'password'}
                        title={'Password'}
                        name={'password'}
                        placeholder={'Password'}
                        handlechange={(value, name) => { temp[name] = value }}
                     />
                     <input type="submit" className="ui fluid large teal submit button" value="Login" onClick={this.authenticateUser} />
                  </div>
                  <div className="ui message">Are you new to website?<a href='/signup'> Signup</a></div>
               </form>
            </div>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      userData: state.userData
   };
}

export default connect(mapStateToProps, { signUpData })(LoginForm);