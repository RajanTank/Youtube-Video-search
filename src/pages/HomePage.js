import React from 'react';
import SearchBar from '../component/SearchBar';
import VideoList from '../component/VideoList';
import VideoDetail from '../component/VideoDetails';
import SideMenu from '../component/SideMenu';
import { Grid } from 'semantic-ui-react';
import ContentData from '../component/ContentData'
import FormSubmit from '../component/FormSubmit';
import '../style/Grid.css';
import { notificationError } from '../Utility /utility';
import { label } from '../Utility /label'
import { searchVideolength } from '../config/config';
import { connect } from 'react-redux';
import { fetchVideos, selectedVideos, addToHistory } from '../actions/actionCreater'

class HomePage extends React.Component {

  state = { itemWidth: '1000px', titleWidth: '800px' };

  onTermSubmit = (term) => {
    this.props.selectedVideos(null);
    this.setState({ itemWidth: '1000px', titleWidth: '800px' });
    FormSubmit(term, searchVideolength).then(response => {
      this.props.fetchVideos(response);
    });
  };

  onVideoSelect = (video, videos) => {
    this.setState({ itemWidth: '345px', titleWidth: '200px' });
    this.props.fetchVideos(videos);
    this.props.selectedVideos(video);
    this.props.addToHistory(video.id.videoId);
  };

  componentWillMount() {
    if (this.props.userData == null && this.props.userData.keepMeLoggedIn == false) {
      notificationError(label.firstLogin);
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.selectedVideo == null && this.props.videos[0] == undefined) {
      return (
        <>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div style={{ display: "flex", flexWrap: "wrap", padding: '10px' }}>
            <div><SideMenu /></div>
            <div className="home ">
              <div className="responsive-video-grid-container">
                <ContentData category='Cars' onVideoSelect={this.onVideoSelect} />
                <ContentData category='Bikes' onVideoSelect={this.onVideoSelect} />
                <ContentData category='Comady video' onVideoSelect={this.onVideoSelect} />
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
          <Grid style={{ padding: '0px' }} >
            <div><VideoDetail /></div>
          </Grid>
          <Grid style={{ padding: '0px !important' }}  >
            <div>
              <VideoList
                onVideoSelect={this.onVideoSelect}
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
    userData: state.userData,
    selectedVideo: state.selectedVideo
  }
}
const mapDispatchToProps = { fetchVideos, selectedVideos, addToHistory }

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

