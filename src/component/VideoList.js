import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

   addToHistory = () => {
      let dummyArray = [];
      dummyArray = JSON.parse(localStorage.getItem('user'));
      dummyArray.history.push(this.props.video.id.videoId);
      localStorage.setItem('user', JSON.stringify(dummyArray));
   }

   render() {
      const { videos, onVideoSelect } = this.props;
      return (
         <div className="ui" style={{ backgroundColor: '#DADADA', float: "left" }}>
            {videos.map((video) => {
               return (
                  <div  >
                     <VideoItem
                        key={video.id.videoId}
                        onVideoSelect={onVideoSelect}
                        video={video}
                        videos={videos} />
                  </div>
               );
            })
            }
         </div>
      );
   }
}
export default VideoList;


