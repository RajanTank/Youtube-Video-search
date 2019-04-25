import React from 'react';
import onFormSubmit from './FormSubmit';
import '../style/Grid.css';
import '../style/VideoGrid.css';
import { videoLength } from '../config/config';
import { Icon } from 'semantic-ui-react';
import { notificationSuccess } from '../Utility /utility';
import { fetchCategoryVideos, selectedVideos, addToWatchLater } from '../actions/actionCreater'
import { connect } from 'react-redux'

class ContentData extends React.Component {

  componentWillMount() {
    onFormSubmit(this.props.category, videoLength).then(response => {
      this.props.fetchCategoryVideos(response);
    });
  }

  handleClick = (video) => {
    this.props.addToWatchLater(video.id.videoId);
    notificationSuccess('Added to Watch later');
  }

  render() {
    return (
      <>
        <h2>{this.props.category}</h2>
        <h4>Recommended videos for you</h4>
        <div className="video-grid" style={{ width: '1050px' }} >
          {Object.values(this.props.catvideo).map((video) =>
            (
              <>
                <div className="video-preview" style={{ width: '200px' }} >
                  <img
                    onClick={() => this.props.onVideoSelect(video, this.props.videos)}
                    width="190px"
                    alt={video.snippet.title}
                    className="ui"
                    src={video.snippet.thumbnails.medium.url}
                  />
                  <div className="video-info" style={{ width: '160px' }} onClick={() => this.props.onVideoSelect(video, this.props.videos)}>
                    <div className="semi-bold">{video.snippet.title}</div>
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
        <hr style={{ height: '1px', backgroundColor: 'black', width: '1000px' }} />
      </>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    videos: state.categoryVideos,
    selectedVideo: state.selectedVideo,
    catvideo: state.categoryVideos
  }
}

export default connect(maptStateToProps, { fetchCategoryVideos, selectedVideos, addToWatchLater })(ContentData);