import React from 'react'
import {Button} from 'semantic-ui-react';

class SearchBar extends React.Component {

   state = {
      term: ''
   };

   onLogOutClick = event =>{

      localStorage.removeItem('user');
      this.props.history.push('/');
   }

   onFormSubmit = event => {
      event.preventDefault();
      this.props.onFormSubmit(this.state.term);
   }

   render() {
      return (
         <form onSubmit={this.onFormSubmit}>
            <div className="ui menu">
               <div className=" ui header item">YouTube Video Search</div>
               <div className="search-bar ui input item " style={{ width: '60%' }} >
                  <div className="ui action right icon input">
                     <i className="search icon" />
                     <input type="text"
                        onChange={(event) => this.setState({ term: event.target.value })}
                        placeholder="Search" />
                  </div>
               </div>
               <div className="right menu">
       
                 <a className="item" onClick={this.onLogOutClick} href="/"> Log Out</a>
               </div>
            </div>
         </form>

      );
   }
}
export default SearchBar;