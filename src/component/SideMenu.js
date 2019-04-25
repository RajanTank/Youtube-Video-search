import React from 'react';
import { fetchVideos } from '../actions/actionCreater';
import { connect } from 'react-redux';

class SideMenu extends React.Component {
   render() {
      return (
         <div className="ui vertical pointing menu">
            <a className="active item" href='/homepage'>
               Home
            </a>
            <a className="item" href="/watchlater" onClick={() => { this.props.fetchVideos([]) }} >
               WatchLater
            </a>
            <a className="item" href="/history" onClick={() => { this.props.fetchVideos([]) }} >
               History
            </a>
         </div>
      );
   }
}
export default connect(null, { fetchVideos })(SideMenu);