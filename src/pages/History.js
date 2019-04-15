import React from 'react'
import SideMenu from '../component/SideMenu';
import Grids from '../component/Grid';
import SearchBar from '../component/SearchBar';
import FormSubmit from '../component/FormSubmit';
import Video from '../component/video';
import { Grid } from 'semantic-ui-react';
import VideoDetail from '../component/VideoDetails';
import VideoList from '../component/VideoList';
import { NotificationWarn}  from '../Utility /utility'
import {firstLogin} from '../Utility /label'

class History extends React.Component {

   state = {
      ids: [],
      videoSelect: null,
      selectedVideo: null,
      videos: []
   }

   onTermSubmit = (term) => {

      FormSubmit(term, 10).then(response => {
         this.setState({
            videos: response,
            flag: true
         });

      });
   };

   onHistoryVideoSelect = (video) => {
      this.setState({ videoSelect: video });

   }

   onVideoSelect = (video, videos) => {
      this.setState({ selectedVideo: video, videos: videos });
   };

   removeItem = (ids) => {

      let dummyArray = [];
      dummyArray = JSON.parse(localStorage.getItem('user'));
      if (dummyArray) {
         dummyArray.history.splice(dummyArray.watchlater.indexOf(ids), 1);
         this.setState({ ids: dummyArray.history });
         localStorage.setItem('user', JSON.stringify(dummyArray));
      }

   }
   componentDidMount() {

      let videoArray = [];
      videoArray = JSON.parse(localStorage.getItem('user'));
      if (videoArray) {
         this.setState({ ids: videoArray.history });
      }

   }


   componentWillMount() {

      let dummy = JSON.parse(localStorage.getItem('user'));
      if (dummy == null) {
         NotificationWarn(firstLogin);

         this.props.history.push('/');
      }
   }

   render() {

      if (this.state.videos == '') {
         return (
            <>
               <SearchBar onFormSubmit={this.onTermSubmit} />
               <div style={{ display: 'flex' }}>
                  <SideMenu />
                  <Video videoData={this.state.videoSelect} />

                  <div className="home" style={{ float: "left !important" }} >
                     <div className="responsive-video-grid-container">
                        <Grids ids={this.state.ids} videoSelect={this.onHistoryVideoSelect}
                           removeItem={this.removeItem} />
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
               <Grid width={10} style={{ padding: '5px' }} >
                  <div><VideoDetail video={this.state.selectedVideo} /></div>
               </Grid>
               <Grid.Column style={{ padding: '0px !important' }} width={9} >
                  <div><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>
               </Grid.Column>
            </Grid>
         </>

      );
   }
}

export default History;