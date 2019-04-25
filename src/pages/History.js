import React from 'react'
import SideMenu from '../component/SideMenu';
import Grids from '../component/Grid';
import SearchBar from '../component/SearchBar';
import FormSubmit from '../component/FormSubmit';
import Video from '../component/video';
import { Grid } from 'semantic-ui-react';
import VideoDetail from '../component/VideoDetails';
import VideoList from '../component/VideoList';
import { notificationError } from '../Utility /utility'
import { label } from '../Utility /label'
import { searchVideolength } from '../config/config';
import { connect } from 'react-redux';
import { addToHistory, fetchVideos, selectedVideos, signUpData } from '../actions/actionCreater'

class History extends React.Component {

  state = {
    videoSelect: null,
    itemWidth: '1000px',
    titleWidth: '800px'
  }

  onTermSubmit = (term) => {
    FormSubmit(term, searchVideolength).then(response => {
      this.props.fetchVideos(response);
    });
  };

  onHistoryVideoSelect = (video) => {
    this.setState({ videoSelect: video });
  }

  onVideoSelect = (video, videos) => {
    this.setState({ itemWidth: '345px', titleWidth: '200px' });
    this.props.fetchVideos(videos);
    this.props.selectedVideos(video);
    this.props.addToHistory(video.id.videoId);
  };

  removeItem = (ids) => {
    let dummyArray = this.props.userData;
    if (dummyArray) {
      dummyArray.history.splice(dummyArray.history.indexOf(ids), 1);
      this.props.signUpData(dummyArray)
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
          <div style={{ display: 'flex', padding: '10px' }}>
            <div> <SideMenu /> </div>
            <Video videoData={this.state.videoSelect} />
            <div className="home" style={{ float: "left !important" }} >
              <div className="responsive-video-grid-container">
                <Grids ids={this.props.userData.history} videoSelect={this.onHistoryVideoSelect}
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
          <Grid.Column style={{ padding: '0px !important' }} width={9} >
            <div>
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.props.videos}
                itemWidth={this.state.itemWidth}
                titleWidth={this.state.titleWidth} />
            </div>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
    videos: state.videos
  }
}

export default connect(mapStateToProps, { addToHistory, signUpData, fetchVideos, selectedVideos })(History);