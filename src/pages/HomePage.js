import React from 'react';
import SearchBar from '../component/SearchBar';
import VideoList from '../component/VideoList';
import VideoDetail from '../component/VideoDetails';
import SideMenu from '../component/SideMenu';
import { Grid } from 'semantic-ui-react';
import ContentData from '../component/ContentData'
import FormSubmit from '../component/FormSubmit';
import '../style/Grid.css';
import { getLocalStorage, setLocalStorage, notificationError } from '../Utility /utility';
import { label } from '../Utility /label'
import { searchVideolength } from '../config/config';

class HomePage extends React.Component {

  state = { videos: [], selectedVideo: null, itemWidth: '1000px', titleWidth: '800px' };

  onTermSubmit = (term) => {
    FormSubmit(term, searchVideolength).then(response => {
      this.setState({
        videos: response
      });
    });
  };

  onVideoSelect = (video, videos) => {
    this.setState({ selectedVideo: video, videos: videos, itemWidth: '345px', titleWidth: '200px' });
    let dummyArray = getLocalStorage();
    dummyArray.history.push(video.id.videoId);
    setLocalStorage(dummyArray);
  };

  componentWillMount() {
    let dummy = JSON.parse(localStorage.getItem('user'));
    if (dummy == null) {
      notificationError(label.firstLogin);
      this.props.history.push('/');
    }
  }

  render() {
    if (this.state.selectedVideo == null && this.state.videos[0] == undefined) {
      return (
        <>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div style={{ display: "flex", flexWrap: "wrap",padding:'10px' }}>
            <SideMenu />
            <div className="home ">
              <div className="responsive-video-grid-container">
                <ContentData category='cars' onVideoSelect={this.onVideoSelect} />
                <ContentData category='bikes' onVideoSelect={this.onVideoSelect} />
                <ContentData category='comady video' onVideoSelect={this.onVideoSelect} />
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
            <div><VideoDetail video={this.state.selectedVideo} /></div>
          </Grid>
          <Grid style={{ padding: '0px !important' }}  >
            <div style={{}} ><VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
              itemWidth={this.state.itemWidth}
              titleWidth={this.state.titleWidth} /></div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default HomePage;

