import React from 'react';
import VideoItem from './VideoItem';
import { getLocalStorage, setLocalStorage } from '../Utility /utility';

class VideoList extends React.Component {

  addToHistory = () => {
    let dummyArray = [];
    dummyArray = getLocalStorage();
    dummyArray.history.push(this.props.video.id.videoId);
    setLocalStorage(dummyArray);
  }

  render() {
    const { videos, onVideoSelect, itemWidth, titleWidth } = this.props;
    return (
      <div className="ui" style={{ backgroundColor: '#DADADA', float: "left" }}>
        {videos.map((video) => {
          return (
            <div  >
              <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
                videos={videos}
                itemWidth={itemWidth}
                titleWidth={titleWidth} />
            </div>
          );
        })
        }
      </div>
    );
  }
}

export default VideoList;


