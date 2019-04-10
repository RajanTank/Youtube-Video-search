import React from 'react';
import { Button, Icon, Card, Image } from 'semantic-ui-react';


class VideoItem extends React.Component {

   handleClick = (event) => {

      event.preventDefault();
      let dummyArray = [];
      dummyArray = JSON.parse(localStorage.getItem('user'));
      dummyArray.watchlater.push(this.props.video.id.videoId);
      localStorage.setItem('user', JSON.stringify(dummyArray));

   };

   render() {

      const { video, onVideoSelect, videos } = this.props;

      return (
         <>
            <Card onClick={() => onVideoSelect(video, videos)}>
               <Image
                  alt={video.snippet.title}
                  className="ui image "
                  src={video.snippet.thumbnails.medium.url}
               />
               <Card.Content>
                  <Card.Description>
                     {video.snippet.title}
                  </Card.Description>
               </Card.Content>
               <Card.Content extra>
                  <a onClick={this.handleClick}>
                     <Icon name='clock' />Watch Later
                 </a>
               </Card.Content>
            </Card>
            <hr />
         </>
      );
   }

}
export default VideoItem;


