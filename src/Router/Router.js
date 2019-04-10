import React from 'react';
import {BrowserRouter,Route,Switch} from  'react-router-dom';
import LoginForm  from '../component/LoginForm';
import SignupForm from '../component/SignupForm';
import Homepage from '../pages/HomePage'
import History  from '../pages/History'
import '../style/style.css';
import WatchLater from '../pages/WatchLater';

class Router extends React.Component{
   render(){
      return(
         <BrowserRouter>
               <Switch>
                     <Route path='/' component={LoginForm} exact />
                     <Route path='/signup' component={SignupForm} />
                     <Route path='/homepage' component={Homepage} />
                     <Route path='/watchlater' component={WatchLater}/>
                     <Route path='/history' component={History}/>
               </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;