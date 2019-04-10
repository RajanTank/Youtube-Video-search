import React from 'react';
import '../style/VideoGrid.css';
import { Image,Icon } from 'semantic-ui-react';
import WatchlaterVideo from './WatchlaterVideo';

class VideoGrid extends React.Component {

  state = {
    videourl: '',
    videotitle:'',
    video : []
  };

  componentWillMount() {

    WatchlaterVideo(this.props.ids).then(response => {
      this.setState({ 
        videourl: response[0].snippet.thumbnails.medium.url , 
        video : response[0],
          videotitle:response[0].snippet.title
      });
     
    });
  }


  render() {

    return (
      <>
      <div className='video-preview' onClick={()=>this.props.onVideoSelect(this.state.video)}>
        <div className='image-container'>
          <Image src={this.state.videourl} />
        </div>
        <div className='video-info'>
          <div className='semi-bold show-max-two-lines'>{this.state.videotitle}</div>
        </div>
        
      </div>
      <Icon name="remove" onClick={()=>this.props.removeItem(this.props.ids)} style={{cursor:'pointer',bottom:'0',right:'0'}} > Remove</Icon>
      </>
    );
  }
}

export default VideoGrid;