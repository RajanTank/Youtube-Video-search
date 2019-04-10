import React from 'react';

class SideMenu extends React.Component {
   render() {
      return (
         <div className="ui vertical pointing menu">
            <a className="active item" href='/homepage'>
               Home
                     </a>
            <a className="item" href="/watchlater" >
               WatchLater
                     </a>
            <a className="item" href="/history">
               History
                     </a>
         </div>
      );
   }
}
export default SideMenu;