import React from 'react'
import { connect } from 'react-redux'

class VideoDetail extends React.Component {

  validVideo = () => {
    if (!this.props.selectedVideo) {
      return <div></div>
    }
  };

  componentWillUpdate() {
    this.validVideo();
  }

  componentDidMount() {
    this.validVideo();
  }

  render() {
    if (!this.props.selectedVideo) {
      return <div></div>
    }
    const { snippet, id } = this.props.selectedVideo;
    const videoSrc = `https://www.youtube.com/embed/${id.videoId}?autoplay=1`

    return (
      <div style={{ width: '650px', height: '400px', margin: '5px' }} >
        <div className="ui embed">
          <iframe title='video player' src={videoSrc} />
        </div>
        <div className="ui segment" >
          <h4 className="ui header" > {snippet.title}</h4>
          <p>{snippet.description}</p>
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedVideo: state.selectedVideo
  };
}

export default connect(mapStateToProps)(VideoDetail);