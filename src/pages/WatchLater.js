import React from 'react';
import SearchBar from '../component/SearchBar';
import SideMenu from '../component/SideMenu';
import Grids from '../component/Grid';
import { Grid } from 'semantic-ui-react';
import '../style/Grid.css';
import Video from '../component/video';
import FormSubmit from '../component/FormSubmit';
import VideoDetail from '../component/VideoDetails';
import VideoList from '../component/VideoList';
import { notificationError } from '../Utility /utility';
import { label } from '../Utility /label'
import { searchVideolength } from '../config/config';
import { addToHistory, signUpData, fetchVideos, selectedVideos } from '../actions/actionCreater'
import { connect } from 'react-redux'

class WatchLater extends React.Component {

  state = {
    videoselected: null,
    itemWidth: '1000px',
    titleWidth: '800px'
  };

  onTermSubmit = (term) => {
    FormSubmit(term, searchVideolength).then(response => {
      this.props.fetchVideos(response)
    });
  };

  onWatchlaterVideoSelect = (video) => {
    this.setState({ videoselected: video });
    this.props.addToHistory(video.id);
  }

  onVideoSelect = (video, videos) => {
    this.setState({ itemWidth: '345px', titleWidth: '200px' });
    this.props.addToHistory(video.id.videoId);
    this.props.fetchVideos(videos);
    this.props.selectedVideos(video)
  };

  removeItem = (ids) => {
    let dummyArray = this.props.userData;
    if (dummyArray) {
      dummyArray.watchlater.splice(dummyArray.watchlater.indexOf(ids), 1);
      this.props.signUpData(dummyArray);
    }
  }

  componentWillMount() {
    if (this.props.userData == null) {
      notificationError(label.firstLogin);
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.videos[0] === undefined) {
      return (
        <>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div style={{ display: "flex", padding: '10px' }}>
            <div><SideMenu /></div>
            <Video videoData={this.state.videoselected} />
            <div className="home" style={{ float: "left !important" }} >
              <div className="responsive-video-grid-container" >
                <Grids
                  ids={this.props.userData.watchlater}
                  videoSelect={this.onWatchlaterVideoSelect}
                  removeItem={this.removeItem} />
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <Grid relaxed celled>
          <Grid width={3}>
            <div><SideMenu /></div>
          </Grid>
          <Grid width={10} style={{ padding: '5px' }} >
            <div><VideoDetail /></div>
          </Grid>
          <Grid style={{ padding: '0px !important' }} width={12} >
            <div>
              <VideoList onVideoSelect={this.onVideoSelect}
                videos={this.props.videos}
                itemWidth={this.state.itemWidth}
                titleWidth={this.state.titleWidth} />
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    selectedVideo: state.selectedVideo,
    userData: state.userData
  }
}

export default connect(mapStateToProps, { fetchVideos, selectedVideos, signUpData, addToHistory })(WatchLater);