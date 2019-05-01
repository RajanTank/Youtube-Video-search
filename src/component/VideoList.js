import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

  render() {
    const { videos, onVideoSelect, itemWidth, titleWidth } = this.props;
    return (
      <div className="ui" style={{ backgroundColor: '#DADADA', float: "left" }}>
        {Object.values(videos).map((video) => {
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


