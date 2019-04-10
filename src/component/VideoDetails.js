import React from 'react'

class VideoDetail extends React.Component {


   addToHistory = () =>{
      let dummyArray = [];
      dummyArray = JSON.parse(localStorage.getItem('user'));
      dummyArray.history.push(this.props.video.id.videoId);
      localStorage.setItem('user',JSON.stringify(dummyArray));
   }


   componentWillUpdate(){
      if(!this.props.video)
      {
         return <div></div>
      }
         this.addToHistory();
   }
   componentDidMount(){

      if(!this.props.video)
      {
         return <div></div>
      }
         this.addToHistory();
   }

   render() {
      if (!this.props.video) {
         return <div></div>
      }

      const {snippet,id} = this.props.video

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