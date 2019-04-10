import React from 'react'
import VideoGrid from '../component/VideoGrid';
import '../style/Grid.css';


class Grid extends React.Component {

   render() {
  
      return (
         <>
            <div className="video-grid">
      
               {this.props.ids.map((id) =>
                  (
                     <VideoGrid ids={id} onVideoSelect={this.props.videoSelect} 
                     removeItem={this.props.removeItem}/>
                  )
               )}
            </div>
         </>
      )
   }
}
export default Grid;

