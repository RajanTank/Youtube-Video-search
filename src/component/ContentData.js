import React from 'react';
import VideoList from './VideoList';

import onFormSubmit from './FormSubmit';
import '../style/Grid.css';
import '../style/VideoGrid.css';
import { videoLength } from '../config/config';
import { Icon } from 'semantic-ui-react';
import { getLocalStorage, setLocalStorage, notificationSuccess } from '../Utility /utility';

class ContentData extends React.Component {

  state = { videos: [] };

  componentDidMount() {

    onFormSubmit(this.props.category, videoLength).then(response => {
      this.setState({ videos: response });
    });
  }
  handleClick = (video) => {
    let dummyArray = [];
    dummyArray = getLocalStorage();
    dummyArray.watchlater.push(video.id.videoId);
    setLocalStorage(dummyArray);
    notificationSuccess('Added to Watch later');
  }
  render() {

    return (
      <>
        <h2>{this.props.category}</h2>
        <div className="video-grid" >
          {this.state.videos.map((video) =>
            (
              <>
                <div className="video-preview" style={{width:'200px'}} >
                  <img
                    onClick={() => this.props.onVideoSelect(video, this.state.videos)}
                    // height="120px !important"
                    width="190px"
                    alt={video.snippet.title}
                    className="ui"
                    src={video.snippet.thumbnails.medium.url}

                  />
                  <div className="video-info" style={{width:'160px'}} onClick={() => this.props.onVideoSelect(video, this.state.videos)}>
                    <div className="semi-bold ">{video.snippet.title}</div>
                  </div>
                  <div style={{ position: 'relative', bottom: '0px' }}>
                    <a onClick={() => this.handleClick(video)} style={{ position: 'relative', bottom: '0px' }}>
                      <Icon name="clock" />Watch Later
                    </a>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </>
    );
  }
}

export default ContentData;