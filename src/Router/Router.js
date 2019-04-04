import React from 'react';
import {BrowserRouter,Route,Switch} from  'react-router-dom';
import LoginForm  from '../component/LoginForm';
import SignupForm from '../component/SignupForm';

class Router extends React.Component{
   render(){
      return(
         <BrowserRouter>
               <Switch>
                     <Route path='/' component={LoginForm} exact />
                     <Route path='/signup' component={SignupForm} />
               </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;