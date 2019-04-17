import React from 'react';
import Inputs from './input';
import '../style/style.css';
import { notificationSuccess, notificationError, getLocalStorage } from '../Utility /utility';
import { label } from '../Utility /label';


class LoginForm extends React.Component {

   state = {
      email: '',
      password: ''
   };

   componentDidMount() {
      let arr = [];
      arr = getLocalStorage();
      if (arr != null) {
         this.props.history.push('/homepage');
      }
   }

   authenticateUser = () => {
      const temp = getLocalStorage();
      if (temp['email'] == this.state.email && temp['password'] == this.state.password) {
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
                     <input type="submit" className="ui fluid large teal submit button" value="Login" onClick={this.authenticateUser} />
                  </div>
                  <div className="ui message">Are you new to website?<a href='/signup'> Signup</a></div>
               </form>
            </div>
         </div>
      );
   }
}

export default LoginForm;