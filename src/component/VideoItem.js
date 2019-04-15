import React from 'react';
import { Button, Icon, Card, Image } from 'semantic-ui-react';
import { NotificationSuccess,GetLocalstorage,SetLocalstorage } from '../Utility /utility';


class VideoItem extends React.Component {

   handleClick = () => {
      let dummyArray = [];
      dummyArray = GetLocalstorage();
      dummyArray.watchlater.push(this.props.video.id.videoId);
      SetLocalstorage(dummyArray);
      NotificationSuccess('Added to Watch later')
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


