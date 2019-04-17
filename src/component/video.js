import React from 'react';

class Video extends React.Component {

  render() {
    if (!this.props.videoData) {
      return null;
    }
    const { id, snippet } = this.props.videoData;
    const videoSrc = `https://www.youtube.com/embed/${id}?autoplay=1`

    return (
      <div style={{ width: '900px', height: '600px', margin: '5px' }} >
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

export default Video;