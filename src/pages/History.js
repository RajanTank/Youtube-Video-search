import React from 'react'
import SideMenu from '../component/SideMenu';
import Grids from '../component/Grid';
import SearchBar from '../component/SearchBar';
import FormSubmit from '../component/FormSubmit';
import Video from '../component/video';
import { Grid } from 'semantic-ui-react';
import VideoDetail from '../component/VideoDetails';
import VideoList from '../component/VideoList';
import { getLocalStorage, setLocalStorage, notificationError } from '../Utility /utility'
import { label } from '../Utility /label'
import { searchVideolength } from '../config/config';

class History extends React.Component {

  state = {
    ids: [],
    videoSelect: null,
    selectedVideo: null,
    videos: [],
    itemWidth: '1000px',
    titleWidth: '800px'
  }

  onTermSubmit = (term) => {
    FormSubmit(term, searchVideolength).then(response => {
      this.setState({
        videos: response,
        flag: true
      });
    });
  };

  onHistoryVideoSelect = (video) => {
    this.setState({ videoSelect: video });
    let dummyArray = getLocalStorage();
    dummyArray.history.push(video.id.videoId);
    setLocalStorage(dummyArray);
  }

  onVideoSelect = (video, videos) => {
    this.setState({ selectedVideo: video, videos: videos, itemWidth: '345px', titleWidth: '200px' });
    let dummyArray = getLocalStorage();
    dummyArray.history.push(video.id.videoId);
    setLocalStorage(dummyArray);
  };

  removeItem = (ids) => {
    let dummyArray = getLocalStorage();
    if (dummyArray) {
      dummyArray.history.splice(dummyArray.history.indexOf(ids), 1);
      this.setState({ ids: dummyArray.history });
      setLocalStorage(dummyArray);
    }
  }

  componentDidMount() {
    let videoArray = getLocalStorage();
    if (videoArray) {
      this.setState({ ids: videoArray.history });
    }
  }

  componentWillMount() {
    let dummy = getLocalStorage();
    if (dummy == null) {
      notificationError(label.firstLogin);
      this.props.history.push('/');
    }
  }

  render() {

    if (this.state.videos == '') {
      return (
        <>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div style={{ display: 'flex',padding:'10px' }}>
            <SideMenu />
            <Video videoData={this.state.videoSelect} />

            <div className="home" style={{ float: "left !important" }} >
              <div className="responsive-video-grid-container">
                <Grids ids={this.state.ids} videoSelect={this.onHistoryVideoSelect}
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
          <Grid.Column style={{ padding: '0px !important' }} width={9} >
            <div><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}
              itemWidth={this.state.itemWidth}
              titleWidth={this.state.titleWidth} /></div>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default History;