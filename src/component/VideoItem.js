import React from 'react';
import { Icon, Item, ItemGroup } from 'semantic-ui-react';
import { notificationSuccess, getLocalStorage, setLocalStorage } from '../Utility /utility';

class VideoItem extends React.Component {

  handleClick = () => {
    let dummyArray = [];
    dummyArray = getLocalStorage();
    dummyArray.watchlater.push(this.props.video.id.videoId);
    setLocalStorage(dummyArray);
    notificationSuccess('Added to Watch later');
  };

  render() {

    const { video, onVideoSelect, videos, itemWidth, titleWidth } = this.props;
    return (
      <>
        <ItemGroup style={{ marginBottom: '0px' }}>
          <Item style={{ width: itemWidth, }} onClick={() => onVideoSelect(video, videos)} >
            <Item.Image
              style={{ width: '150px' }}
              alt={video.snippet.title}
              className="ui image "
              src={video.snippet.thumbnails.medium.url}
            />
            <div>
              <div style={{ width: titleWidth, paddingLeft: '5px', }}> {video.snippet.title}</div>
            </div>
          </Item>
          <a onClick={this.handleClick}>
            <Icon name='clock' />Watch Later
                 </a>
        </ItemGroup>
        <hr />
      </>
    );
  }
}

export default VideoItem;


