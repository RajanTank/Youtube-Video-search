import React from 'react';
import VideoItem from './VideoItem';
import {GetLocalstorage,SetLocalstorage} from '../Utility /utility';

class VideoList extends React.Component {

   addToHistory = () => {
      let dummyArray = [];
      dummyArray = GetLocalstorage();
      dummyArray.history.push(this.props.video.id.videoId);
      SetLocalstorage(dummyArray);
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


