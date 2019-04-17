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
import { notificationWarn, getLocalStorage, setLocalStorage } from '../Utility /utility';
import { label } from '../Utility /label'
import { searchVideolength } from '../config/config';

class WatchLater extends React.Component {

  state = {
    videoselected: null,
    videos: [],
    selectedVideo: null,
    flag: false,
    ids: [],
    itemWidth: '1000px',
    titleWidth: '800px'
  };

  onTermSubmit = (term) => {
    FormSubmit(term, searchVideolength).then(response => {
      this.setState({
        videos: response,
        flag: true
      });
    });
  };

  onWatchlaterVideoSelect = (video) => {
    this.setState({ videoselected: video });
  }

  onVideoSelect = (video, videos) => {
    this.setState({ selectedVideo: video, videos: videos, itemWidth: '345px', titleWidth: '200px' });
    let dummyArray = getLocalStorage();
    dummyArray.history.push(video.id.videoId);
    setLocalStorage(dummyArray);
  };

  removeItem = (ids) => {
    let dummyArray = getLocalStorage()
    if (dummyArray) {
      dummyArray.watchlater.splice(dummyArray.watchlater.indexOf(ids), 1);
      this.setState({ ids: dummyArray.watchlater });
      setLocalStorage(dummyArray);
    }
  }

  componentDidMount() {
    let videoArray = getLocalStorage();
    if (videoArray) {
      this.setState({ ids: videoArray.watchlater });
    }
  }

  componentWillMount() {
    let dummy = getLocalStorage();
    if (dummy == null) {
      notificationWarn(label.firstLogin);
      this.props.history.push('/');
    }
  }

  render() {
    if (this.state.videos == '') {
      return (
        <>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div style={{ display: "flex" }}>
            <SideMenu />
            <Video videoData={this.state.videoselected} />
            <div className="home" style={{ float: "left !important" }} >
              <div className="responsive-video-grid-container" >
                <Grids ids={this.state.ids} videoSelect={this.onWatchlaterVideoSelect}
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
            <div><VideoDetail video={this.state.selectedVideo} /></div>
          </Grid>
          <Grid style={{ padding: '0px !important' }} width={12} >
            <div><VideoList onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
              itemWidth={this.state.itemWidth}
              titleWidth={this.state.titleWidth} /></div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default WatchLater;