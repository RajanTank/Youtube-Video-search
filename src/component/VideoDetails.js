import React from 'react'
import { GetLocalstorage, SetLocalstorage, NotificationError } from '../Utility /utility';

class VideoDetail extends React.Component {

   addToHistory = () => {
      let dummyArray = [];
      dummyArray = GetLocalstorage();
      dummyArray.history.push(this.props.video.id.videoId);
      SetLocalstorage(dummyArray);
   }

   validVideo = () => {

      if (!this.props.video) {
         return <div></div>
      }
   };

   componentWillUpdate() {

      this.validVideo();

      this.addToHistory();
   }
   componentDidMount() {

      this.validVideo();

      this.addToHistory();
   }

   render() {
      this.validVideo();

      const { snippet, id } = this.props.video
      if (id == null) {
         NotificationError(`can't featch video`);
         return null;
      }

      const videoSrc = `https://www.youtube.com/embed/${id.videoId}?autoplay=1`

      return (
         <div style={{ width: '575px', height: '400px', margin: '5px' }} >
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

export default VideoDetail;