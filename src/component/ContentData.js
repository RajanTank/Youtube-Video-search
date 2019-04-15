import React from 'react';
import VideoList from './VideoList';

import onFormSubmit from './FormSubmit';
import '../style/Grid.css';
import '../style/VideoGrid.css';
import { videoLength } from '../config/config';

class ContentData extends React.Component {

   state = { videos: [] };

   componentDidMount() {

      onFormSubmit(this.props.category, videoLength).then(response => {
         this.setState({ videos: response });
      });
   }
   render() {

      return (
         <>
            <h2>{this.props.category}</h2>
            <div className="video-grid" >
               {this.state.videos.map((video) =>
                  (
                     <>
                        <div onClick={() => this.props.onVideoSelect(video, this.state.videos)} className="video-preview" >
                           <img
                              height="120px !important"
                              alt={video.snippet.title}
                              className="ui"
                              src={video.snippet.thumbnails.medium.url}

                           />
                           <div className="video-info">
                              <div className="semi-bold ">{video.snippet.title}</div>
                           </div>
                        </div>
                     </>
                  )
               )}
            </div>
         </>
      );
   }
}

export default ContentData;